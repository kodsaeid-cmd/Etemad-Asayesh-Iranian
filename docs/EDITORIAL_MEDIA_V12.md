# V12 — Editorial media fixed at the source

The V11 magazine cards could show **one repeated photograph in three places** whenever the visitor couldn't load external photography CDN assets. The fallback handler routed all magazine images to `/assets/photo-care-conversation.webp`.

V12 changes the architecture rather than swapping the placeholder:
- All images are hosted in `static/assets/photography` as optimized 1800px / 1350px WebP static assets, served from the website's Cloudflare Worker under `/assets/photography/`.
- All nine photographs come from separate Pexels photo IDs; `scripts/fetch_editorial_photos.py` records their sources and downloads.
- Magazine topics use **different** local files: `care-grooming.webp`, `home-interior.webp`, and `medical-tablet.webp`.
- The repeated global fallback handler was removed. Missing media cannot silently turn every card into the same photo again.
- CI runs `scripts/verify_media_assets.py` and verifies nine non-duplicate WebP files exist before SvelteKit checks and build.
- The temporary downloader GitHub workflow was deleted after it committed the assets; only the reproducible source script remains.

These images represent the article's subject, not real staff/clients or facilities of EAI. Source images are licensed Pexels photographs; see the photo IDs in the source script.

**Unrelated remaining task:** Hero video still references an external Pexels CDN and should be migrated separately with bandwidth controls and an accessible fallback.
