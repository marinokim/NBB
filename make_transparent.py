from PIL import Image
import os

DIR = 'src/assets/images/partners/manual_logos'

# Files to process
targets = [
    'seah_cm.png',
    'fouhi.png',
    'shinmade.png',
    'posco.png',         # Removing white bg if present
    'posco_steeleon.png' # Removing white/gray bg
]

def remove_background(filename):
    path = os.path.join(DIR, filename)
    if not os.path.exists(path):
        print(f"File not found: {filename}")
        return

    try:
        img = Image.open(path).convert("RGBA")
        datas = img.getdata()
        
        # Sample background color from top-left pixel
        bg_color = img.getpixel((0, 0))
        
        # Tolerance setup
        tol = 30 
        
        newData = []
        for item in datas:
            # Check if pixel is close to bg_color
            if (abs(item[0] - bg_color[0]) < tol and
                abs(item[1] - bg_color[1]) < tol and
                abs(item[2] - bg_color[2]) < tol):
                newData.append((255, 255, 255, 0)) # Fully transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(path, "PNG")
        print(f"Processed {filename} - Background ({bg_color}) removed.")
        
    except Exception as e:
        print(f"Error processing {filename}: {e}")

for t in targets:
    remove_background(t)
