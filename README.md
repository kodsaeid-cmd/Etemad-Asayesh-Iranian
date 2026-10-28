# اعتماد و آسایش ایرانیان — وب‌سایت هلدینگ

پروژه اصلی SvelteKit برای وب‌سایت هلدینگ «اعتماد و آسایش ایرانیان». نسخه فعلی بر مبنای پیش‌نمایش V6 ساخته شده و برای اجرای آزمایشی روی Cloudflare Workers با Static Assets پیکربندی شده است.

## شرکت‌های گروه

اعتماد و آسایش ایرانیان شرکت مادر است؛ پنج برند زیرمجموعه: سلامت اول، زندگی برتر، سفیر آرامش، مایکا (MYCA) و آکادمی سلامت. «مجله اعتماد و آسایش ایرانیان» رسانه گروه است، نه برند ششم.

## اجرا

نیازمند Node.js 22 یا جدیدتر:

```bash
npm install
npm run dev
npm run check
npm run build
```

توسعه فقط در شاخه‌های GitHub و محیط staging انجام شود. مسیر `asayeshiranian.com` فعلاً سایت وردپرسی اصلی است و نباید تغییر کند.

## انتشار آزمایشی Cloudflare Workers

- Cloudflare → Workers & Pages → Create application → GitHub → `kodsaeid-cmd/Etemad-Asayesh-Iranian`.
- نام Worker را **`etemaad-asayesh-stage`** بگذارید تا با `wrangler.jsonc` تطبیق داشته باشد.
- Branch: `main`. Install command: `npm install`. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
- پیش از اتصال دامنه، نتیجه را روی آدرس `*.workers.dev` بررسی کنید.
- سپس پس از تأیید اینکه `stage.dandoonii.ir` به سرویس دیگری متصل نیست، آن را در Worker → Settings → Domains & Routes → Add Custom Domain اضافه کنید.
- Cloudflare DNS همین دامنه را مدیریت می‌کند؛ فقط ساب‌دامین staging را متصل کنید، نه ریشه `dandoonii.ir`.
- برای جلوگیری از دسترسی عمومی، Cloudflare Access را روی staging فعال کنید. `noindex` و `robots.txt` به‌تنهایی محافظت امنیتی نیستند.

## ملاحظات کیفیت و داده

- شش لوگوی رسمی در `static/assets/` قرار دارند و تصاویر با WebP و اندازه واکنش‌گرا ارائه می‌شوند؛ تصاویر editorial فعلی نمونه‌های فشرده هستند و باید با تصاویر اختصاصی شارپ جایگزین شوند.
- بعضی مأموریت‌های برندها هنوز باید تأیید شوند. از نمایش آمار، دفتر یا کارکنان خیالی به‌عنوان واقعیت خودداری شود.
- فونت وزیر باید با مجوز معتبر در پروژه اضافه شود؛ نسخه فعلی به فونت سیستم fallback می‌کند.
- تمام URLهای محتوای وردپرس و ارزش سئویی آن‌ها هنگام مهاجرت به دامنه اصلی حفظ یا به‌صورت یک‌به‌یک ریدایرکت شوند.
- مخزن Public است: هرگز فایل‌های حساس، رمزها، لاگ‌ها، dump دیتابیس، توکن‌ها یا بک‌آپ وردپرس Commit نشوند.
- پیش از انتشار نهایی، `npm run check`، `npm run build`، آزمون واقعی مرورگر، لود تصاویر و Core Web Vitals باید بررسی شوند.

**وضعیت:** سورس V6 موجود است؛ انتشار آزمایشی Cloudflare و اتصال دامنه هنوز نیازمند حساب مجاز Cloudflare است.
