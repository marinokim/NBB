import sys
from PIL import Image, ImageOps
import os

# Configuration
TRADING_IMG = '/Users/lab/.gemini/antigravity/brain/6d7c65fc-e015-4c78-bc74-e76381884715/uploaded_image_0_1766632727173.png'
OUTPUT_DIR = 'src/assets/images/partners/manual_logos'

def rescue_last_logos(image_path):
    try:
        img = Image.open(image_path).convert('RGB')
        gray = ImageOps.grayscale(img)
        width, height = gray.size
        pixels = gray.load()
        
        # We need the last few logos.
        # Let's verify rows again.
        
        row_density = [0] * height
        for y in range(height):
            c = 0
            for x in range(width):
                if pixels[x, y] < 240:
                    c += 1
            row_density[y] = c
            
        rows = []
        in_row = False
        start_y = 0
        
        for y in range(height):
            if row_density[y] > 5:
                if not in_row:
                    in_row = True
                    start_y = y
            else:
                if in_row:
                    in_row = False
                    if (y - start_y) > 20: 
                        rows.append((start_y, y))
        
        print(f"Rows found: {len(rows)}")
        
        # We expect 5 rows if grid is 3 per row? 13 total -> 5 rows (3,3,3,3,1) or (4,4,4,1)?
        # Let's dump all segments from the last 2 rows.
        
        candidate_count = 0
        
        # Only process last 2 rows
        target_rows = rows[-2:]
        
        for r_idx, (y1, y2) in enumerate(target_rows):
            col_density = [0] * width
            for x in range(width):
                c = 0
                for y in range(y1, y2):
                    if pixels[x, y] < 240:
                        c += 1
                col_density[x] = c
                
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
            
            # Merge
            merged = []
            if segments:
                curr_start, curr_end = segments[0]
                for i in range(1, len(segments)):
                    next_start, next_end = segments[i]
                    if (next_start - curr_end) < 40:
                        curr_end = next_end
                    else:
                        merged.append((curr_start, curr_end))
                        curr_start, curr_end = next_start, next_end
                merged.append((curr_start, curr_end))
            
            for c_idx, (x1, x2) in enumerate(merged):
                if (x2 - x1) < 20: continue
                
                pad = 5
                crop_box = (max(0, x1-pad), max(0, y1-pad), min(width, x2+pad), min(height, y2+pad))
                logo = img.crop(crop_box)
                
                # Save as candidate
                filename = f"rescue_r{r_idx}_c{c_idx}.png"
                logo.save(os.path.join(OUTPUT_DIR, filename))
                print(f"Saved {filename}")
                candidate_count += 1
                
    except Exception as e:
        print(f"Error: {e}")

rescue_last_logos(TRADING_IMG)
