# V13 — Mobile and tablet responsive repair

## Root cause

A later unconditional V9 `.hero-layout` CSS rule overrode the earlier mobile media query, leaving the hero as two columns on 390px phones: about **134px + 197px**. The logos and headings were compressed.

## Fix

- Single-column hero up to 1100px; accessible 2-column, touch-friendly five-brand logo grid up to 600px.
- Tablet and mobile breakpoints for brand directory, article cards, magazine and activities, internal company pages and contact/map.
- 44px menu button touch target, scroll-confined mobile navigation, minimum content widths and readable Persian typography.
- Retains mobile video fallback / reduced-motion handling, official logos, external company websites, and the existing desktop design.

## Browser QA

Tested the V13 CSS in an actual browser against the staged site before publication, at 320, 360, 390, 430, 600, 760, 768, 1024 and 1200px on the homepage.

On a 390px viewport the computed hero layout changed from `134px 197px` to a single `339px` column; mobile logo card grid became `164px 164px`.

Also tested 320, 390 and 768px on each of: `/`, `/companies`, `/about`, `/activities`, `/magazine`, `/contact`, `/cooperation` and `/companies/myca`. No horizontal overflow or out-of-viewport heading, button, image or link was detected. At 390px, tapping the hamburger opens seven menu links, navigation to /contact works, and the menu closes. Visual viewport screenshot reviewed.

## Remaining checks

After Cloudflare deployment confirm the same widths again on the live version. Physical-device iOS Safari and Android Chrome tests are still recommended; they have not been conducted on physical hardware.
