#!/usr/bin/env python3
"""CI gate: all website photo assets must be first-party, valid WebP, and distinct."""
from pathlib import Path
import hashlib

NAMES = ["care-companionship","care-visit","care-support","care-senior","home-interior","healthcare-digital","learning-class","medical-tablet","care-grooming"]
base = Path("static/assets/photography")
seen = {}
for name in NAMES:
    path = base / (name + ".webp")
    if not path.is_file():
        raise SystemExit(f"Missing local editorial photo: {path}")
    data = path.read_bytes()
    if not (data.startswith(b"RIFF") and data[8:12] == b"WEBP"):
        raise SystemExit(f"Not valid WebP: {path}")
    if len(data) < 30000:
        raise SystemExit(f"Suspiciously tiny photo: {path}")
    signature = hashlib.sha256(data).hexdigest()
    if signature in seen:
        raise SystemExit(f"Duplicate photo: {path} and {seen[signature]}")
    seen[signature] = str(path)
print(f"PASS: {len(NAMES)} distinct, first-party WebP photos exist.")
