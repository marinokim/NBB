import sys
from PIL import Image, ImageOps
import os
import shutil

# Configuration
LOGISTICS_IMG = '/Users/lab/.gemini/antigravity/brain/6d7c65fc-e015-4c78-bc74-e76381884715/uploaded_image_1_1766632727173.png'
OUTPUT_DIR_LOGISTICS = 'src/assets/images/partners/logistics'

if os.path.exists(OUTPUT_DIR_LOGISTICS):
    shutil.rmtree(OUTPUT_DIR_LOGISTICS)
os.makedirs(OUTPUT_DIR_LOGISTICS)

def extract_logistics_logos(image_path, output_dir):
    try:
        img = Image.open(image_path).convert('RGB')
        # The logistics image might have a white background or transparent.
        # Let's assume white background.
        gray = ImageOps.grayscale(img)
        width, height = gray.size
        pixels = gray.load()
        
        # 1. Identify rows
        # Relax threshold for row detection
        row_density = [0] * height
        for y in range(height):
            count = 0
            for x in range(width):
                # Check for non-white pixels
                if pixels[x, y] < 245: # Very light gray allowed
                    count += 1
            row_density[y] = count
            
        rows = []
        in_row = False
        start_y = 0
        
        # Heuristic: Logistics logos are arranged in clear rows.
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
        
        print(f"Found {len(rows)} rows.")
        
        logo_count = 0
        
        for r_idx, (y1, y2) in enumerate(rows):
            # 2. Identify columns in each row
            col_density = [0] * width
            for x in range(width):
                c = 0
                for y in range(y1, y2):
                    if pixels[x, y] < 245:
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
            
            # Merge close segments (text + icon)
            merged = []
            if segments:
                curr_start, curr_end = segments[0]
                for i in range(1, len(segments)):
                    next_start, next_end = segments[i]
                    if (next_start - curr_end) < 50: # Increased gap tolerance for Logistics
                        curr_end = next_end
                    else:
                        merged.append((curr_start, curr_end))
                        curr_start, curr_end = next_start, next_end
                merged.append((curr_start, curr_end))
            
            for c_idx, (x1, x2) in enumerate(merged):
                w = x2 - x1
                h = y2 - y1
                if w < 20 or h < 15: continue
                
                pad = 5
                crop_box = (max(0, x1-pad), max(0, y1-pad), min(width, x2+pad), min(height, y2+pad))
                logo = img.crop(crop_box)
                
                # Naming: sequential
                # We expect about 18 logos. 
                # Let's save them as l_01, l_02...
                
                filename = f"logistics_{len(os.listdir(output_dir))+1:02d}.png"
                logo.save(os.path.join(output_dir, filename))
                logo_count += 1
                
        print(f"Extracted {logo_count} logistics logos.")

    except Exception as e:
        print(f"Error: {e}")

extract_logistics_logos(LOGISTICS_IMG, OUTPUT_DIR_LOGISTICS)
