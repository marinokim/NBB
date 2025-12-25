from PIL import Image, ImageChops
import os

LOGISTICS_DIR = 'src/assets/images/partners/logistics'

def trim_image(file_name, target_format=None, fuzz=0):
    path = os.path.join(LOGISTICS_DIR, file_name)
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return

    img = Image.open(path).convert("RGBA")
    
    # Custom bbox logic: find non-white pixels
    # White is considered > 240, 240, 240
    data = img.getdata()
    non_white_indices = []
    
    # Optimised search for bounds
    width, height = img.size
    left, upper, right, lower = width, height, 0, 0
    found = False
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = data[y * width + x]
            # Check if pixel is NOT white/transparent
            # Transparent: a < 10
            # White: r > 240 and g > 240 and b > 240
            is_white = r > 240 and g > 240 and b > 240
            is_transparent = a < 10
            
            if not is_white and not is_transparent:
                if x < left: left = x
                if x > right: right = x
                if y < upper: upper = y
                if y > lower: lower = y
                found = True

    if found:
        # Add slight padding
        left = max(0, left - 2)
        upper = max(0, upper - 2)
        right = min(width, right + 2)
        lower = min(height, lower + 2)
        
        bbox = (left, upper, right + 1, lower + 1) # +1 for exclusive bound
        cropped = img.crop(bbox)
        
        save_name = file_name
        if target_format == 'PNG' and not file_name.lower().endswith('.png'):
            save_name = os.path.splitext(file_name)[0] + '.png'
            
        save_path = os.path.join(LOGISTICS_DIR, save_name)
        cropped.save(save_path, format="PNG")
        print(f"Trimmed {file_name} -> {save_name} (Box: {bbox})")
    else:
        print(f"No non-white content found for {file_name}")

# Files to process
trim_image('maersk.png')
trim_image('evergreen.jpg', target_format='PNG') 
trim_image('weidong.gif', target_format='PNG')
