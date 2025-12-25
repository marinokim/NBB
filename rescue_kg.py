import sys
from PIL import Image, ImageOps
import os

# Configuration
TRADING_IMG = '/Users/lab/.gemini/antigravity/brain/6d7c65fc-e015-4c78-bc74-e76381884715/uploaded_image_0_1766632727173.png'
OUTPUT_FILE = 'src/assets/images/partners/manual_logos/kg_steel.png'

def rescue_kg_steel(image_path, output_path):
    try:
        img = Image.open(image_path).convert('RGB')
        gray = ImageOps.grayscale(img)
        width, height = gray.size
        pixels = gray.load()
        
        # We know from previous analysis that:
        # Row 0 was text (y approx 0-50?)
        # Row 1 was logos (y approx 100-200?)
        # And KG Steel is the first logo in Row 1.
        
        # Let's perform row detection again
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
                        
        if len(rows) < 2:
            print("Not enough rows found to locate KG Steel (expected it in 2nd row).")
            return
            
        # Target loop: Row 1
        y1, y2 = rows[1] # Index 1 is the second row (first logo row)
        
        print(f"Row 1 found at {y1}-{y2}")
        
        # Analyze columns in Row 1
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
                    if (x - s_x) > 10:
                        segments.append((s_x, x))
                        
        if len(segments) < 1:
            print("No segments found in Row 1.")
            return

        # The first segment in Row 1 should be KG Steel
        x1, x2 = segments[0]
        
        # Merge if fragmented (KG Steel might be K G Steel text + logo)
        # Checking gap to next
        if len(segments) > 1:
            nx1, nx2 = segments[1]
            if (nx1 - x2) < 40:
                print("Merging fragmented KG Steel logo parts...")
                x2 = nx2
        
        pad = 5
        crop_box = (max(0, x1-pad), max(0, y1-pad), min(width, x2+pad), min(height, y2+pad))
        logo = img.crop(crop_box)
        
        logo.save(output_path)
        print(f"Saved KG Steel logo to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

rescue_kg_steel(TRADING_IMG, OUTPUT_FILE)
