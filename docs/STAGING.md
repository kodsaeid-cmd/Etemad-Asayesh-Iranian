# Staging deployment — اعتماد و آسایش ایرانیان

## Target
- **Proposed staging URL:** `https://stage.dandoonii.ir`
- **Do not modify the apex** `dandoonii.ir` or its existing DNS records. The apex stays available for the Dandooni project.
- **Do not modify** `asayeshiranian.com` or its live WordPress installation.
- Production website remains on the current domain until a documented migration.

## Current blockers
1. Complete SvelteKit V6 application source and optimized assets must first be committed and validated in GitHub. (README alone is not deployable.)
2. A Git-connected hosting project must be configured. The authenticated Vercel integration currently reports no eligible teams; deployment must wait for an available account/team or an alternative host.
3. The owner of `dandoonii.ir` must edit its DNS at the registrar/authoritative DNS host. **Do not guess DNS values**; copy the record from the selected hosting service's domain-verification instructions.
4. Confirm target subdomain is currently unused and does not overwrite another service.

## Configuration
- SvelteKit with static assets and minimal JS.
- `robots.txt` disallows crawling; each page has `noindex,nofollow`. Prefer password protection too, because `robots.txt` alone is not a security mechanism.
- Enable HTTPS, automatic deployments on reviewed main commits, preview deployments for feature branches, caching of versioned static images, and Git rollbacks.
- Check `npm run check`, `npm run build`, real browser responsiveness, interactions, and actual image loading.
- Images: responsive WebP/AVIF and unique images per subsidiary / article. Current V6 editorial crops are placeholders.
- Do not ship secrets, WordPress backups, personal data, or unlicensed fonts.

## Deployment procedure
1. Commit reviewed source and assets.
2. Create hosting project connected to `kodsaeid-cmd/Etemad-Asayesh-Iranian`.
3. Deploy and verify default preview host first.
4. Add `stage.dandoonii.ir` as a custom domain at the hosting platform.
5. Copy the exact DNS record shown by the provider to the domain's DNS manager. Do not switch nameservers without a reason.
6. Verify TLS and protected staging access. Record the deployment URL and Git commit SHA.

**Status as of 2026-10-28:** staging plan only; DNS, Git source import and deployment are not completed.
