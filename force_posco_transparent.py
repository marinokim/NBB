from PIL import Image
import os

DIR = 'src/assets/images/partners/manual_logos'

def force_transparent(filename):
    path = os.path.join(DIR, filename)
    if not os.path.exists(path):
        print(f"File not found: {filename}")
        return

    try:
        img = Image.open(path).convert("RGBA")
        datas = img.getdata()
        
        # Target: White
        target = (255, 255, 255)
        tol = 10 # Strict tolerance for pure white
        
        newData = []
        for item in datas:
            # Check if pixel is white
            if (item[0] > 255-tol and item[1] > 255-tol and item[2] > 255-tol):
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(path, "PNG")
        print(f"Processed {filename} - Forced white to transparent.")
        
    except Exception as e:
        print(f"Error processing {filename}: {e}")

force_transparent('posco.png')
