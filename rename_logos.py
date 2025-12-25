import os

DIR = 'src/assets/images/partners/trading'
files = sorted([f for f in os.listdir(DIR) if f.startswith('logo_') and f.endswith('.png')])

for i, f in enumerate(files):
    new_name = f'trading_{i+1:02d}.png'
    os.rename(os.path.join(DIR, f), os.path.join(DIR, new_name))
    print(f"Renamed {f} to {new_name}")
