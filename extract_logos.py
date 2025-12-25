import sys
from PIL import Image, ImageOps
import os

# Configuration
TRADING_IMG = '/Users/lab/.gemini/antigravity/brain/6d7c65fc-e015-4c78-bc74-e76381884715/uploaded_image_0_1766632727173.png'
LOGISTICS_IMG = '/Users/lab/.gemini/antigravity/brain/6d7c65fc-e015-4c78-bc74-e76381884715/uploaded_image_1_1766632727173.png'
OUTPUT_DIR_TRADING = 'src/assets/images/partners/trading'
OUTPUT_DIR_LOGISTICS = 'src/assets/images/partners/logistics'

def normalize_name(name):
    return name.lower().replace(' ', '_').replace('.', '') + '.png'

# List of trading partners in approximate order of appearance in the image (row by row)
# Based on the image analysis earlier:
# Row 1: KG Steel, DK Dongshin, Dongkuk CM, SeAH CM
# Row 2: Hyundai Steel, POSCO, POSCO Steeleon
# Row 3: HBIS, Lianyuan Steel, Ansteel
# Row 4: Hongji Group, FOUHI, Shinmade
TRADING_PARTNERS = [
    "kg_steel", "dk_dongshin", "dongkuk_cm", "seah_cm",
    "hyundai_steel", "posco", "posco_steeleon",
    "hbis", "lianyuan_steel", "ansteel",
    "hongji_group", "fouhi", "shinmade"
]

# Since I cannot use computer vision to perfectly crop without OpenCV contours,
# I will use a simple grid slicing or just crop based on hardcoded relative coordinates derived from visual guess?
# No, that's dangerous.
# Better approach without OpenCV: Convert to grayscale, invert, find bounding box of non-white areas?
# Yes, simple thresholding and finding disconnected components manually? Too hard.

# Let's try to just find rows by horizontal projection, then columns by vertical projection.
# 1. Binarize
# 2. Compute horizontal sum of black pixels -> find rows
# 3. For each row, compute vertical sum -> find columns (logos)

def extract_logos_from_image(image_path, output_dir, file_prefix="logo"):
    try:
        img = Image.open(image_path).convert('RGB')
        # Convert to grayscale
        gray = ImageOps.grayscale(img)
        # Threshold: assume background is white (255)
        # Invert so background is black (0), logos are light
        # Actually logos are darker than white background
        # So we want regions where pixel < 240 (random threshold)
        
        width, height = gray.size
        # Create a binary map: 1 if pixel is dark (Logo), 0 if white (Background)
        # Threshold: 240
        pixels = gray.load()
        
        # Horizontal Projection Profile
        row_density = [0] * height
        for y in range(height):
            count = 0
            for x in range(width):
                if pixels[x, y] < 230: # Dark pixel
                    count += 1
            row_density[y] = count
            
        # Find rows
        rows = []
        in_row = False
        start_y = 0
        min_pixels_in_row = 5 # Noise filter
        
        for y in range(height):
            if row_density[y] > min_pixels_in_row:
                if not in_row:
                    in_row = True
                    start_y = y
            else:
                if in_row:
                    in_row = False
                    rows.append((start_y, y))
                    
        print(f"Found {len(rows)} rows in {image_path}")
        
        # For each row, find columns
        logos = []
        for r_idx, (y1, y2) in enumerate(rows):
            # Check row height, filter noise
            if (y2 - y1) < 10: continue
            
            # Vertical projection for this row
            col_density = [0] * width
            for x in range(width):
                count = 0
                for y in range(y1, y2):
                    if pixels[x, y] < 230:
                        count += 1
                col_density[x] = count
            
            in_col = False
            start_x = 0
            
            cols = []
            for x in range(width):
                if col_density[x] > 0: # Any dark pixel
                    if not in_col:
                        in_col = True
                        start_x = x
                else:
                    if in_col:
                        in_col = False
                        # Filter narrow noise
                        if (x - start_x) > 10:
                            cols.append((start_x, x))
            
            for c_idx, (x1, x2) in enumerate(cols):
                # Crop with some padding
                pad = 10
                crop_box = (max(0, x1-pad), max(0, y1-pad), min(width, x2+pad), min(height, y2+pad))
                logo = img.crop(crop_box)
                
                # Save
                filename = f"{r_idx}_{c_idx}.png"
                logo.save(os.path.join(output_dir, filename))
                logos.append(filename)
                
        print(f"Extracted {len(logos)} logos from {image_path}")
        return logos

    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return []

# Run extraction
print("Processing Trading Image...")
extract_logos_from_image(TRADING_IMG, OUTPUT_DIR_TRADING)

print("Processing Logistics Image...")
extract_logos_from_image(LOGISTICS_IMG, OUTPUT_DIR_LOGISTICS)
