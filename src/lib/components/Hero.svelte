<script lang="ts">
  import { companies } from '$lib/data/companies';
  import { onMount } from 'svelte';
  import { media } from '$lib/data/media';
  let allowVideo = $state(false);
  let videoSrc = $state(media.videoStandard);
  onMount(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 760px)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    allowVideo = !reduced && !small && !saveData;
    videoSrc = window.matchMedia('(min-width: 1200px)').matches ? media.videoHd : media.videoStandard;
  });

  let selected = $state(0);
  const points = [
    { x: 50, y: 11.7, color: '#40e3ed' },
    { x: 83, y: 30.5, color: '#a78dff' },
    { x: 73, y: 80.5, color: '#55d7b5' },
    { x: 27, y: 80.5, color: '#66c4ff' },
    { x: 17, y: 30.5, color: '#d3a7ff' }
  ];
  const paths = [
    'M360 318 Q360 210 360 75',
    'M360 318 Q490 295 598 195',
    'M360 318 Q450 390 525 515',
    'M360 318 Q267 390 195 515',
    'M360 318 Q230 295 122 195'
  ];
</script>

<section class="hero" id="home" aria-labelledby="hero-heading">
  <div class="hero-aurora" aria-hidden="true"></div>
  <div class="hero-footage" aria-hidden="true">
    {#if allowVideo}
      <video autoplay muted loop playsinline preload="none" poster={media.heroPoster} aria-hidden="true">
        <source src={videoSrc} type="video/mp4" />
      </video>
    {/if}
  </div>
  <div class="wrap hero-layout">
    <div class="hero-text">
      <span class="eyebrow">ETEMAD &amp; ASAYESH IRANIAN</span>
      <p class="hero-kicker">اعتماد و آسایش ایرانیان</p>
      <h1 id="hero-heading">فراتر از <em>امروز.</em></h1>
      <p class="hero-description">افق‌های تازه، از نگاه‌های متفاوت آغاز می‌شوند.</p>
      <div class="hero-actions">
        <a class="primary" href="/companies">آشنایی با گروه</a>
        <a class="secondary" href="/about">درباره شرکت مادر</a>
      </div>
      <div class="hero-selected" aria-live="polite" aria-atomic="true">
        <div class="hero-selected-identity">
          <img src={'/assets/logo-' + companies[selected].logo + '.png'} alt="" width="58" height="58" />
          <div><small>از مجموعه‌های گروه</small><h2>{companies[selected].name}</h2></div>
        </div>
        <p>{companies[selected].description}</p>
        <a href={companies[selected].website} target="_blank" rel="noopener noreferrer">{companies[selected].websiteLabel}</a>
      </div>
    </div>
    <div class="hero-network" aria-label="ساختار تعاملی شرکت مادر و پنج برند زیرمجموعه">
      <div class="hero-orbit orbit-one" aria-hidden="true"></div>
      <div class="hero-orbit orbit-two" aria-hidden="true"></div>
      <svg class="hero-connections" viewBox="0 0 720 640" preserveAspectRatio="none" aria-hidden="true">
        {#each paths as path, i}
          <path class="hero-connection" class:active={selected === i} d={path} />
        {/each}
      </svg>
      <div class="hero-core">
        <span class="hero-core-halo" aria-hidden="true"></span>
        <img src="/assets/logo-holding.png" alt="لوگوی اعتماد و آسایش ایرانیان" width="91" height="91" fetchpriority="high" />
        <strong>اعتماد و آسایش ایرانیان</strong>
        <small>شرکت مادر</small>
      </div>
      {#each companies as company, i (company.logo)}
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          class="hero-node"
          class:chosen={selected === i}
          style={'--node-x:' + points[i].x + '%;--node-y:' + points[i].y + '%;--node-accent:' + points[i].color}
          aria-label={company.websiteLabel + ' در زبانه جدید'}
          onmouseenter={() => selected = i}
          onfocus={() => selected = i}
        >
          <span class="hero-node-logo"><img src={'/assets/logo-' + company.logo + '.png'} alt="" width="76" height="66" /></span>
          <span class="hero-node-name">{company.name}</span>
        </a>
      {/each}
      <span class="hero-diagram-caption" aria-hidden="true">پنج هویت · یک افق</span>
    </div>
  </div>
</section>
