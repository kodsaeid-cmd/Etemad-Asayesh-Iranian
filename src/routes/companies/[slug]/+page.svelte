<script lang="ts">
  import type { PageData } from './$types';
  import { media } from '$lib/data/media';
  let { data }: { data: PageData } = $props();
  const company = $derived(data.company);
  const backdrop = $derived(({ salamat: media.care, zendegi: media.companionship, safir: media.support, myca: media.digital, academy: media.training } as Record<string, string>)[company.logo] || media.senior);
</script>
<svelte:head><title>{company.name} | گروه اعتماد و آسایش ایرانیان</title><meta name="description" content={company.description} /></svelte:head>
<section class="brand-page-head" style={'--brand-photo:url("' + backdrop + '")'}><div class="wrap brand-page-layout"><div class="brand-page-copy"><a class="breadcrumb" href="/companies">شرکت‌های گروه</a><span class="eyebrow">GROUP COMPANY</span><h1>{company.name}</h1><p class="brand-page-tagline">{company.tagline}</p><p>{company.description}</p><div class="hero-actions"><a class="primary" href={company.website} target="_blank" rel="noopener noreferrer">{company.websiteLabel}</a><a class="secondary" href="/companies">همه شرکت‌های گروه</a></div></div><a class="brand-page-mark" href={company.website} target="_blank" rel="noopener noreferrer" aria-label={company.websiteLabel}><img src={'/assets/logo-' + company.logo + '.png'} alt={'لوگوی ' + company.name} width="260" height="220" /></a></div></section>
<section class="inner-content light-section"><div class="wrap brand-reading-layout"><div class="brand-reading-side"><span class="eyebrow">ABOUT THE COMPANY</span><h2>آشنایی با {company.name}</h2><p>{company.subtitle}</p><a href={company.website} target="_blank" rel="noopener noreferrer">وب‌سایت رسمی مجموعه</a></div><div class="brand-reading-body prose">{#each company.paragraphs as paragraph}<p>{paragraph}</p>{/each}</div></div></section>
<section class="brand-final-cta"><div class="wrap split-callout"><div><span class="eyebrow">DIRECT ACCESS</span><h2>ارتباط مستقیم با {company.name}</h2><p>هر مجموعه، زبان و تجربه‌ای ویژه از خدمت را با مخاطبان خود در میان می‌گذارد.</p></div><a class="primary" href={company.website} target="_blank" rel="noopener noreferrer">{company.websiteLabel}</a></div></section>
