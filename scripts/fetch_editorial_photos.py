#!/usr/bin/env python3
"""One-time repository asset acquisition for the editorial photography.

Downloads freely licensed, independently sourced Pexels photos on GitHub's runner,
validates image dimensions and visual uniqueness, and encodes optimized WebP images.
Never run this in client browsers or request Pexels from page components.
"""
from __future__ import annotations
import hashlib
import io
import pathlib
import time
import urllib.request
from PIL import Image, ImageOps

SOURCES = {
    "care-companionship": 29372534,
    "care-visit": 29372727,
    "care-support": 29372730,
    "care-senior": 29372724,
    "home-interior": 10258622,
    "healthcare-digital": 5327864,
    "learning-class": 5212655,
    "medical-tablet": 4266934,
    "care-grooming": 29354077,
}
OUT = pathlib.Path("static/assets/photography")
OUT.mkdir(parents=True, exist_ok=True)
digests = set()
visuals = []
for name, photo_id in SOURCES.items():
    url = (f"https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg"
           "?w=1800&cs=tinysrgb")
    print(f"Downloading {name}: {photo_id}", flush=True)
    data = None
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={
                "User-Agent": "Mozilla/5.0 (compatible; EAI-website-assets/1.0)",
                "Accept": "image/jpeg,image/*;q=0.9",
            })
            with urllib.request.urlopen(request, timeout=35) as response:
                data = response.read()
            break
        except Exception as ex:
            if attempt == 2:
                raise RuntimeError(f"Photo {name} ({photo_id}) failed: {ex}") from ex
            time.sleep(3 * (attempt + 1))
    if not data or len(data) < 3000:
        raise RuntimeError(f"Empty or implausibly small photo: {name}")
    with Image.open(io.BytesIO(data)) as raw:
        image = ImageOps.exif_transpose(raw).convert("RGB")
    if image.width < 1000 or image.height < 650:
        raise RuntimeError(f"Low-resolution photo {name}: {image.size}")
    image.thumbnail((1800, 1350), Image.Resampling.LANCZOS)
    visual = image.resize((64, 64)).convert("L")
    digest = hashlib.sha256(visual.tobytes()).hexdigest()
    if digest in digests:
        raise RuntimeError(f"Duplicate photo for {name}")
    digests.add(digest)
    image.save(OUT / f"{name}.webp", "WEBP", quality=88, method=6)
    print(f"Saved {name}: {image.width}x{image.height}, {(OUT / (name+'.webp')).stat().st_size} bytes", flush=True)
    visuals.append(name)
print(f"Validated {len(visuals)} individually sourced photos", flush=True)
