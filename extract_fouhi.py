from PIL import Image
import os

IMG_PATH = '/Users/lab/.gemini/antigravity/brain/6d7c65fc-e015-4c78-bc74-e76381884715/uploaded_image_0_1766632727173.png'
OUTPUT = 'src/assets/images/partners/manual_logos/fouhi.png'

def extract_fouhi_geometric():
    try:
        img = Image.open(IMG_PATH).convert('RGB')
        w, h = img.size
        
        # Grid assumption: 4 rows, 4 columns
        # Fouhi is Row 3 (index 2), Column 4 (index 3)
        
        row_h = h / 4
        col_w = w / 4
        
        # Coordinates for Row 3, Col 4
        left = 3 * col_w
        top = 2 * row_h
        right = 4 * col_w
        bottom = 3 * row_h
        
        # Adjust crop to remove whitespace margin if needed
        # We'll take the center 80% of the cell to avoid border overlaps
        margin_x = col_w * 0.05
        margin_y = row_h * 0.05
        
        crop_box = (left + margin_x, top + margin_y, right - margin_x, bottom - margin_y)
        
        logo = img.crop(crop_box)
        logo.save(OUTPUT)
        print(f"Saved Fouhi candidate to {OUTPUT}")
        
    except Exception as e:
        print(f"Error: {e}")

extract_fouhi_geometric()
