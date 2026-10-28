/** Keep a local, first-party image as a fallback when a photography CDN is unavailable. */
export function fallbackImage(event: Event, fallbackPath: string): void {
  const image = event.currentTarget as HTMLImageElement | null;
  if (!image || image.src.endsWith(fallbackPath)) return;
  image.onerror = null;
  image.src = fallbackPath;
}
