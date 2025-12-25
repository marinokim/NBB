import os

DIR = 'src/assets/images/partners/manual_logos'

mapping = {
    'Network_DKdongshin.png': 'dk_dongshin.png',
    'Network-Ansteel.png': 'ansteel.png',
    'Network-cn1.png': 'lianyuan_steel.png', # Assignment based on elimination, Lianyuan is Chinese
    'Network-Dongkuk CM.png': 'dongkuk_cm.png',
    'Network-Fouhi.png': 'fouhi.png',
    'Network-HBIS.png': 'hbis.png',
    'Network-Hongji group.png': 'hongji_group.png',
    'Network-Hyundai Steel.png': 'hyundai_steel.png',
    'Network-Posco Steelon.png': 'posco_steeleon.png',
    'Network-Posco.png': 'posco.png',
    'Network-SeAH.png': 'seah_cm.png',
    'Network-Shinmade.png': 'shinmade.png',
}

# KG Steel seems missing. I will copy it from the extracted folder if possible, or leave it.
# Extracted folder: src/assets/images/partners/trading/trading_01.png (this was KG, the first one)

for old, new in mapping.items():
    old_path = os.path.join(DIR, old)
    new_path = os.path.join(DIR, new)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed {old} to {new}")
    else:
        print(f"File not found: {old}")

# Copy KG Steel from extracted if exists
import shutil
extracted_kg = 'src/assets/images/partners/trading/trading_01.png'
dest_kg = os.path.join(DIR, 'kg_steel.png')
if os.path.exists(extracted_kg) and not os.path.exists(dest_kg):
    shutil.copy(extracted_kg, dest_kg)
    print("Copied extracted KG Steel logo")
