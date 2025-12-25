import os
import shutil

SRC_DIR = 'src/assets/Logicstic' # Correct typo in user folder name if needed
DEST_DIR = 'src/assets/images/partners/logistics'

if not os.path.exists(DEST_DIR):
    os.makedirs(DEST_DIR)

# Map filenames to consistent keys
# List from folder:
# CKLINE.png, CMACGM.png, COSCO Shipping.png, EVERgreen.jpg, HMM.png, Heung-A.png, KMTC.webp
# MSC.svg, ONE.svg, Panstar ferry.png, SKR.png, SMLINE.png, Sealead.png, WEIDONG FERRY.gif (GIF?)
# YangMing.png, ZIM.svg, maersk.png, panocean.png

# Target mapping for Network.jsx names
mapping = {
    'SMLINE.png': 'sm_line.png',
    'HMM.png': 'hmm.png',
    'YangMing.png': 'yml.png', # YML = Yang Ming Line
    'ONE.svg': 'one.svg',
    'maersk.png': 'maersk.png',
    'Sealead.png': 'sea_lead.png',
    'ZIM.svg': 'zim.svg',
    'MSC.svg': 'msc.svg',
    'CMACGM.png': 'cma_cgm.png',
    'WEIDONG FERRY.gif': 'weidong.gif', # Should convert to PNG? React handles gif.
    'CKLINE.png': 'ck_line.png',
    'Panstar ferry.png': 'panstar.png',
    'SKR.png': 'sinokor.png', # SKR = Sinokor
    'panocean.png': 'pan_ocean.png',
    'KMTC.webp': 'kmtc.webp',
    'COSCO Shipping.png': 'cosco.png',
    'EVERgreen.jpg': 'evergreen.jpg',
    'Heung-A.png': 'heung_a.png'
}

print("Moving and renaming files...")
for old_name, new_name in mapping.items():
    src_path = os.path.join(SRC_DIR, old_name)
    dst_path = os.path.join(DEST_DIR, new_name)
    
    if os.path.exists(src_path):
        shutil.copy(src_path, dst_path)
        print(f"Copied {old_name} -> {new_name}")
    else:
        print(f"MISSING: {old_name}")

print("Done.")
