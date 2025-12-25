import sys
from PIL import Image, ImageOps
import os
import shutil

# Configuration
TRADING_IMG = '/Users/lab/.gemini/antigravity/brain/6d7c65fc-e015-4c78-bc74-e76381884715/uploaded_image_0_1766632727173.png'
LOGISTICS_IMG = '/Users/lab/.gemini/antigravity/brain/6d7c65fc-e015-4c78-bc74-e76381884715/uploaded_image_1_1766632727173.png'

# Clear old outputs
def clean_dir(path):
    if os.path.exists(path):
        shutil.rmtree(path)
    os.makedirs(path)

OUTPUT_DIR_TRADING = 'src/assets/images/partners/trading'
OUTPUT_DIR_LOGISTICS = 'src/assets/images/partners/logistics'

clean_dir(OUTPUT_DIR_TRADING)
clean_dir(OUTPUT_DIR_LOGISTICS)

def extract_logos_smart(image_path, output_dir):
    try:
        img = Image.open(image_path).convert('RGB')
        gray = ImageOps.grayscale(img)
        # Threshold
        # Logos are dark on white
        width, height = gray.size
        pixels = gray.load()
        
        # 1. Identify rows
        row_density = [0] * height
        for y in range(height):
            count = 0
            for x in range(width):
                if pixels[x, y] < 240: # Dark
                    count += 1
            row_density[y] = count
            
        rows = []
        in_row = False
        start_y = 0
        min_pixels = 5
        
        for y in range(height):
            if row_density[y] > min_pixels:
                if not in_row:
                    in_row = True
                    start_y = y
            else:
                if in_row:
                    in_row = False
                    # Merge rows if close?
                    # For now just keep distinct rows. Logos usually strictly separated vertically.
                    if (y - start_y) > 20: # Min height of a logo row
                        rows.append((start_y, y))
                        
        # 2. For each row, identify cols and merge
        valid_logo_count = 0
        
        for r_idx, (y1, y2) in enumerate(rows):
            # Vertical projection
            col_density = [0] * width
            for x in range(width):
                c = 0
                for y in range(y1, y2):
                    if pixels[x, y] < 240:
                        c += 1
                col_density[x] = c
                
            # Find raw segments
            segments = []
            in_seg = False
            s_x = 0
            for x in range(width):
                if col_density[x] > 0:
                    if not in_seg:
                        in_seg = True
                        s_x = x
                else:
                    if in_seg:
                        in_seg = False
                        segments.append((s_x, x))
            
            # Merge segments that are close (e.g. icon + text, or two words)
            merged_segments = []
            if segments:
                curr_start, curr_end = segments[0]
                
                for i in range(1, len(segments)):
                    next_start, next_end = segments[i]
                    gap = next_start - curr_end
                    
                    if gap < 40: # Merge if gap is less than 40px
                        curr_end = next_end
                    else:
                        merged_segments.append((curr_start, curr_end))
                        curr_start, curr_end = next_start, next_end
                merged_segments.append((curr_start, curr_end))
            
            # Save crops
            # Filter by size to ignore small noise (text descriptions)
            # Logos usually have width > 50 and height > 20
            
            for c_idx, (x1, x2) in enumerate(merged_segments):
                w = x2 - x1
                h = y2 - y1
                
                # Heuristic: Logos are "chunky". Text lines are usually full width but short height? 
                # Or just check aspect ratio?
                
                # If width is extremely small (< 30), skip
                if w < 30: continue
                # If height is very small (< 15), skip
                if h < 15: continue
                
                # Expand crop slightly
                pad = 5
                crop_box = (max(0, x1-pad), max(0, y1-pad), min(width, x2+pad), min(height, y2+pad))
                logo_crop = img.crop(crop_box)
                
                # Save
                filename = f"logo_r{r_idx}_c{c_idx}.png"
                logo_crop.save(os.path.join(output_dir, filename))
                valid_logo_count += 1
                
        print(f"File {os.path.basename(image_path)}: Extracted {valid_logo_count} candidates.")
        
    except Exception as e:
        print(f"Error: {e}")

extract_logos_smart(TRADING_IMG, OUTPUT_DIR_TRADING)
extract_logos_smart(LOGISTICS_IMG, OUTPUT_DIR_LOGISTICS)
