<script lang="ts">import PageIntro from '$lib/components/PageIntro.svelte'; import { contact } from '$lib/data/contact';</script>
<svelte:head><title>ارتباط با ما | اعتماد و آسایش ایرانیان</title><meta name="description" content="نشانی دفتر، تلفن و ایمیل اعتماد و آسایش ایرانیان، به همراه مسیر ارتباط سازمانی با گروه." /></svelte:head>
<PageIntro eyebrow="CONTACT THE GROUP" title="گفت‌وگو، آغاز امکان‌های تازه است." lead="برای ارتباط با شرکت مادر، اطلاعات تماس و نشانی دفتر را در این صفحه می‌یابید." />
<section class="inner-content light-section"><div class="wrap">
  <div class="contact-layout">
    <div class="contact-card-main"><span class="eyebrow">CONTACT DETAILS</span><h2>راه‌های ارتباطی</h2><p>برای مکاتبات سازمانی، همکاری‌های تجاری و موضوعات مربوط به گروه اعتماد و آسایش ایرانیان از مسیرهای زیر استفاده کنید.</p>
      <div class="contact-detail"><span>تلفن</span><a dir="ltr" href={'tel:' + contact.tel}>{contact.phone}</a></div>
      <div class="contact-detail"><span>پست الکترونیکی</span><a href={'mailto:' + contact.email} dir="ltr">{contact.email}</a></div>
      <div class="contact-detail"><span>نشانی دفتر</span><strong>{contact.address}</strong></div>
      <a class="dark-btn" href={contact.originalContact} target="_blank" rel="noopener noreferrer">صفحه تماس وب‌سایت فعلی</a>
    </div>
    <aside class="corporate-id"><div class="corporate-id-head"><img src="/assets/logo-holding.png" alt="لوگوی اعتماد و آسایش ایرانیان" width="88" height="88" /><div><small>CORPORATE IDENTITY</small><h3>شناسنامه شرکت</h3></div></div>
      <dl><dt>نام معرفی‌شده در وب‌سایت فعلی</dt><dd>{contact.legalName}</dd><dt>نام برند</dt><dd>{contact.displayName}</dd><dt>حوزه فعالیت معرفی‌شده</dt><dd>خدمات نگهداری و مراقبت از سالمند، بیمار و کودک در منزل</dd><dt>نشانی</dt><dd>{contact.address}</dd><dt>ایمیل سازمانی</dt><dd dir="ltr">{contact.email}</dd></dl>
      <p class="identity-note">اطلاعات این بخش از صفحات عمومی وب‌سایت فعلی استخراج شده‌اند. شماره ثبت، شناسه ملی یا مشخصات ثبتی دیگری که قابل‌تأیید نبودند، درج نشده‌اند.</p>
    </aside>
  </div>
  <div class="contact-service-note"><h3>دریافت خدمات تخصصی</h3><p>برای درخواست پرستار، خدمات مراقبت در منزل، استفاده از سامانه مایکا یا شرکت در دوره‌های آموزشی، مراجعه مستقیم به وب‌سایت شرکت مربوط سریع‌ترین مسیر دسترسی به اطلاعات اختصاصی همان خدمت است.</p><a href="/companies">آشنایی با مجموعه‌های گروه</a></div>
</div></section>
