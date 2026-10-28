<script lang="ts">
  import PageIntro from '$lib/components/PageIntro.svelte'; import { media } from '$lib/data/media';
  import CompanyCards from '$lib/components/CompanyCards.svelte';
</script>
<svelte:head><title>شرکت‌های گروه | اعتماد و آسایش ایرانیان</title><meta name="description" content="معرفی پنج مجموعه تخصصی اعتماد و آسایش ایرانیان و دسترسی به وب‌سایت رسمی و صفحه اختصاصی هر شرکت." /></svelte:head>
<PageIntro visual={media.senior} eyebrow="OUR COMPANIES" title="هر نام، هویتی مستقل." lead="پنج مجموعه تخصصی، با فعالیت و مخاطبانی متفاوت؛ از خدمات مراقبتی در منزل تا فناوری و آموزش." />
<section class="inner-content dark-section"><div class="wrap">
  <div class="editorial-lead"><span class="eyebrow">THE GROUP</span><h2>مسیرهایی متمایز، در یک گروه.</h2><p>اعتماد و آسایش ایرانیان، شرکت مادر و راهبر مجموعه‌ای از کسب‌وکارهای فعال در حوزه‌های مراقبت، سلامت، خدمات خانواده، فناوری و آموزش است. هر شرکت، نام و وب‌سایت مستقل خود را دارد و مخاطبان می‌توانند مستقیماً با همان مجموعه در ارتباط باشند.</p></div>
  <CompanyCards />
  <div class="inner-endnote"><strong>آشنایی عمیق‌تر</strong><p>پشت هر نام، تجربه‌ای مستقل و داستانی در حال شکل‌گیری است.</p></div>
</div></section>
