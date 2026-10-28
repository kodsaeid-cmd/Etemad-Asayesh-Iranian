<script lang="ts">import PageIntro from '$lib/components/PageIntro.svelte'; import { media } from '$lib/data/media'; import { contact } from '$lib/data/contact';</script>
<svelte:head><title>ارتباط با ما | اعتماد و آسایش ایرانیان</title><meta name="description" content="نشانی دفتر، تلفن و ایمیل اعتماد و آسایش ایرانیان، به همراه مسیر ارتباط سازمانی با گروه." /></svelte:head>
<PageIntro visual={media.support} eyebrow="CONTACT THE GROUP" title="گفت‌وگو، آغاز امکان‌های تازه است." lead="ارتباطی روشن و مستقیم، از اولین گفت‌وگو." />
<section class="inner-content light-section"><div class="wrap">
  <div class="contact-layout">
    <div class="contact-card-main"><span class="eyebrow">CONTACT DETAILS</span><h2>راه‌های ارتباطی</h2><p>برای مکاتبات سازمانی، همکاری‌های تجاری و موضوعات مربوط به گروه اعتماد و آسایش ایرانیان از مسیرهای زیر استفاده کنید.</p>
      <div class="contact-detail"><span>تلفن</span><a dir="ltr" href={'tel:' + contact.tel}>{contact.phone}</a></div>
      <div class="contact-detail"><span>پست الکترونیکی</span><a href={'mailto:' + contact.email} dir="ltr">{contact.email}</a></div>
      <div class="contact-detail"><span>نشانی دفتر</span><strong>{contact.address}</strong></div>
      <div class="contact-quick-actions"><a class="dark-btn" href={contact.mapUrl} target="_blank" rel="noopener noreferrer">مسیریابی تا دفتر</a><a class="contact-secondary-action" href={'tel:' + contact.tel}>تماس تلفنی</a></div>
    </div>
    <aside class="corporate-id"><div class="corporate-id-head"><img src="/assets/logo-holding.png" alt="لوگوی اعتماد و آسایش ایرانیان" width="88" height="88" /><div><small>CORPORATE IDENTITY</small><h3>شناسنامه شرکت</h3></div></div>
      <dl><dt>نام شرکت</dt><dd>{contact.legalName}</dd><dt>نام برند</dt><dd>{contact.displayName}</dd><dt>حوزه فعالیت</dt><dd>خدمات نگهداری و مراقبت از سالمند، بیمار و کودک در منزل</dd><dt>نشانی</dt><dd>{contact.address}</dd><dt>ایمیل سازمانی</dt><dd dir="ltr">{contact.email}</dd></dl>
      
    </aside>
  </div>
  <section class="contact-map-section" aria-labelledby="contact-map-heading">
    <div class="contact-map-heading"><div><span class="eyebrow">FIND OUR OFFICE</span><h2 id="contact-map-heading">دفتر اعتماد و آسایش ایرانیان</h2><p>تهران، میدان آزادی، ابتدای خیابان آزادی</p></div><a class="contact-map-route" href={contact.mapUrl} target="_blank" rel="noopener noreferrer">مسیریابی در Google Maps</a></div>
    <div class="contact-map-wrap">
      <iframe
        title="نقشه موقعیت دفتر اعتماد و آسایش ایرانیان در تهران"
        src={'https://maps.google.com/maps?q=' + contact.latitude + ',' + contact.longitude + '&z=17&output=embed'}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
      <div class="contact-map-caption"><span class="contact-map-pin" aria-hidden="true">●</span><div><strong>اعتماد و آسایش ایرانیان</strong><small>{contact.address}</small></div></div>
    </div>
  </section>
  <div class="contact-service-note"><h3>دریافت خدمات تخصصی</h3><p>خدمات پرستاری، مراقبت در منزل، خدمات دیجیتال خانواده و آموزش تخصصی، هر یک در مسیر مستقل مجموعه‌های گروه جریان دارند.</p><a href="/companies">آشنایی با مجموعه‌های گروه</a></div>
</div></section>
