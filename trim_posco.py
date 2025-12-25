from PIL import Image
import os

IMG_PATH = 'src/assets/images/partners/manual_logos/posco.png'

def trim_transparent():
    try:
        img = Image.open(IMG_PATH).convert("RGBA")
        bbox = img.getbbox()
        if bbox:
            trimmed = img.crop(bbox)
            trimmed.save(IMG_PATH)
            print(f"Trimmed {IMG_PATH} to {bbox}")
        else:
            print("Image is empty?")
    except Exception as e:
        print(f"Error: {e}")

trim_transparent()
