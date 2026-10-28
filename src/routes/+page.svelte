<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import CompanyCards from '$lib/components/CompanyCards.svelte';
  import { articles } from '$lib/data/editorial';
  import { media } from '$lib/data/media';
</script>
<svelte:head>
  <title>اعتماد و آسایش ایرانیان | فراتر از امروز</title>
  <meta name="description" content="آشنایی با اعتماد و آسایش ایرانیان و شرکت‌های گروه در حوزه خدمات مراقبتی، فناوری خانواده و آموزش مهارت‌های حرفه‌ای." />
</svelte:head>
<Hero />
<section class="home-section home-companies" aria-labelledby="home-companies-title">
  <div class="wrap">
    <div class="home-section-heading">
      <div><span class="eyebrow">THE GROUP</span><h2 id="home-companies-title">هر نام، <em>هویتی مستقل.</em></h2></div>
      <p>پنج مجموعه تخصصی در حوزه مراقبت، خدمات دیجیتال خانواده و آموزش؛ هر کدام با هویت و مسیر ارتباطی خود.</p>
    </div>
    <CompanyCards compact />
    <div class="section-bottom-link"><a class="secondary" href="/companies">معرفی کامل شرکت‌های گروه</a></div>
  </div>
</section>
<section class="home-section home-about" aria-labelledby="home-about-title">
  <div class="wrap home-story">
    <div class="home-story-visual" aria-hidden="true"><span class="home-story-ring"></span><img src="/assets/logo-holding.png" alt="" width="175" height="175" loading="lazy" /></div>
    <div class="home-story-copy"><span class="eyebrow">ABOUT THE GROUP</span><h2 id="home-about-title">آنچه ما را<br /><em>به هم پیوند می‌دهد.</em></h2><p>اعتماد و آسایش ایرانیان، شرکت مادر و راهبر مجموعه‌ای از کسب‌وکارهای تخصصی است. هر مجموعه مسیر و شخصیت مستقل خود را دارد و در سطح گروه، نگاهی بلندمدت به توسعه و ظرفیت‌های مشترک دنبال می‌شود.</p><a class="home-inline-link" href="/about">درباره گروه و نگاه ما به آینده</a></div>
  </div>
</section>
<section class="home-section home-activities" aria-labelledby="home-activities-title">
  <div class="wrap">
    <div class="home-section-heading"><div><span class="eyebrow">FIELDS OF ACTIVITY</span><h2 id="home-activities-title">از مراقبت تا <em>فناوری و آموزش.</em></h2></div><p>سه حوزه مکمل که زمینه فعالیت مجموعه‌های گروه را شکل می‌دهند.</p></div>
    <div class="home-activity-grid">
      <a class="home-activity" href="/activities"><img src={media.care} alt="همراهی سالمند در خانه" width="620" height="620" loading="lazy" onerror={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = '/assets/photo-care-assistance.webp'; }} /><span><small>01 / CARE</small><strong>سلامت و مراقبت در منزل</strong><em>شناخت بیشتر این حوزه</em></span></a>
      <a class="home-activity" href="/activities"><img src={media.digital} alt="گفت‌وگو با پزشک و استفاده از تبلت" width="620" height="620" loading="lazy" onerror={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = '/assets/photo-digital-care.webp'; }} /><span><small>02 / DIGITAL</small><strong>فناوری و خدمات دیجیتال</strong><em>شناخت بیشتر این حوزه</em></span></a>
      <a class="home-activity" href="/activities"><img src={media.training} alt="مدرس در کلاس آموزش مجازی" width="620" height="620" loading="lazy" onerror={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = '/assets/photo-care-conversation.webp'; }} /><span><small>03 / EDUCATION</small><strong>آموزش و توسعه مهارت</strong><em>شناخت بیشتر این حوزه</em></span></a>
    </div>
  </div>
</section>
<section class="home-section home-magazine" aria-labelledby="home-magazine-title">
  <div class="wrap">
    <div class="home-section-heading"><div><span class="eyebrow">EDITORIAL &amp; INSIGHTS</span><h2 id="home-magazine-title">برای فهم بهتر <em>زندگی.</em></h2></div><p>نگاه‌هایی به مراقبت، خانواده و نقش فناوری؛ موضوعاتی برای آگاهی بیشتر و تصمیم‌گیری سنجیده‌تر.</p></div>
    <div class="home-editorial-grid">
      {#each articles as article}
        <article class="home-editorial"><img src={article.image} onerror={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = '/assets/photo-care-conversation.webp'; }} alt={article.alt} width="625" height="625" loading="lazy" /><div><small>{article.category}</small><h3>{article.title}</h3><p>{article.description}</p><span>از موضوعات مجله</span></div></article>
      {/each}
    </div>
    <div class="section-bottom-link"><a class="dark-btn" href="/magazine">آشنایی با مجله گروه</a></div>
  </div>
</section>
<section class="home-contact-band"><div class="wrap"><div><span class="eyebrow">LET'S CONNECT</span><h2>گفت‌وگو، آغاز امکان‌های تازه است.</h2><p>برای ارتباط سازمانی، همکاری یا آشنایی بیشتر با شرکت مادر، مسیرهای ارتباطی گروه در دسترس شما هستند.</p></div><div class="home-contact-actions"><a class="primary" href="/contact">ارتباط با ما</a><a class="secondary" href="/cooperation">فرصت‌های همکاری</a></div></div></section>
