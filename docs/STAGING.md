# محیط آزمایشی — اعتماد و آسایش ایرانیان

## میزبان و دامنه منتخب
- **DNS دامنه:** Cloudflare (طبق اعلام مالک)
- **پلتفرم پیشنهادی:** Cloudflare Workers + GitHub integration
- **آدرس آزمایشی هدف:** `https://stage.dandoonii.ir`
- مخزن کد: `kodsaeid-cmd/Etemad-Asayesh-Iranian`، شاخه اصلی `main`
- دامنه اصلی `dandoonii.ir` و سایت زنده `asayeshiranian.com` بدون تغییر باقی بمانند.

## راه‌اندازی پیشنهادی
1. ابتدا سورس کامل SvelteKit V6، دارایی‌های `static/assets/` و پیکربندی Workers به مخزن GitHub منتقل شوند. **فعلاً فقط مستندات مخزن ثبت شده‌اند.**
2. در Cloudflare > **Workers & Pages** > **Create application**، اتصال **GitHub** و مخزن `kodsaeid-cmd/Etemad-Asayesh-Iranian` انجام شود.
3. نسخه SvelteKit با `@sveltejs/adapter-cloudflare` سازگار شود؛ Cloudflare Wrangler برای پروژه موجود قادر به تشخیص و انجام بخشی از پیکربندی است.
4. اجرای Build واقعی و تست دامنه پیش‌فرض `*.workers.dev`، تصاویر، تعاملات و تلفن همراه.
5. در Worker > **Settings > Domains & Routes > Add > Custom Domain**، نشانی `stage.dandoonii.ir` اضافه شود.
6. Cloudflare برای Custom Domain رکورد لازم DNS و گواهی HTTPS را خودکار ایجاد می‌کند. قبل از افزودن، وجود هر DNS/سرویس قبلی برای `stage` بررسی شود؛ نام موجود نباید جایگزین شود.
7. محیط آزمایشی با Cloudflare Access محافظت شود و پاسخ HTML دارای `noindex,nofollow` باشد. `robots.txt` جای حفاظت دسترسی را نمی‌گیرد.
8. پس از تأیید، هر تغییر از GitHub با Build و Preview قابل بررسی خواهد بود.

## شرایط امنیت و کیفیت
- هیچ رمز، بک‌آپ وردپرس، داده شخصی، لاگ حساس، توکن API یا فونت غیرمجاز به مخزن Public اضافه نشود.
- تصاویر کارت‌ها هنوز placeholders مفهومی‌اند؛ قبل از رونمایی باید با تصاویر اختصاصی و واضح جایگزین شوند.
- سایت وردپرسی فعلی تا اجرای برنامه مهاجرت URL/SEO تغییر نکند.
- Build، HTTPS، عملکرد روی موبایل و تصاویرِ بارگذاری‌شده واقعاً تست شوند.

**وضعیت در تاریخ 2026-10-28:** تصمیم استقرار مستند شده است؛ هنوز سورس V6 به GitHub منتقل نشده، Worker ساخته نشده و DNS تغییری نکرده است.

## مراجع
- https://developers.cloudflare.com/workers/framework-guides/web-apps/sveltekit/
- https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/
- https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
