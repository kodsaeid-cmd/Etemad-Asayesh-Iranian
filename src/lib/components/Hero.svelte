<script lang="ts">
  import { companies } from '$lib/data/companies';

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
  <div class="wrap hero-layout">
    <div class="hero-text">
      <span class="eyebrow">ETEMAD &amp; ASAYESH IRANIAN</span>
      <h1 id="hero-heading">یک گروه،<br /><em>پنج هویت مستقل</em><br />در یک مسیر مشترک.</h1>
      <p class="hero-description">اعتماد و آسایش ایرانیان، شرکت مادر و راهبر مجموعه‌ای از برندهای تخصصی در حوزه‌های سلامت، مراقبت، رفاه، فناوری و آموزش است.</p>
      <div class="hero-actions">
        <a class="primary" href="#companies">آشنایی با شرکت‌های گروه</a>
        <a class="secondary" href="#about">درباره شرکت مادر</a>
      </div>
      <div class="hero-selected" aria-live="polite" aria-atomic="true">
        <div class="hero-selected-identity">
          <img src={'/assets/logo-' + companies[selected].logo + '.png'} alt="" width="58" height="58" />
          <div><small>برند انتخاب‌شده</small><h2>{companies[selected].name}</h2></div>
        </div>
        <p>{companies[selected].description}</p>
        <a href={'#brand-' + companies[selected].logo}>مشاهده معرفی برند</a>
      </div>
      <div class="hero-index" aria-label="ساختار گروه">
        <span><b>۰۱</b> شرکت مادر</span>
        <span><b>۰۵</b> شرکت زیرمجموعه</span>
        <span>هویت‌های مستقل، راهبری هماهنگ</span>
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
        <small>شرکت مادر و راهبر گروه</small>
      </div>
      {#each companies as company, i (company.logo)}
        <button
          type="button"
          class="hero-node"
          class:chosen={selected === i}
          style={'--node-x:' + points[i].x + '%;--node-y:' + points[i].y + '%;--node-accent:' + points[i].color}
          aria-pressed={selected === i}
          aria-label={'انتخاب ' + company.name}
          onclick={() => selected = i}
          onmouseenter={() => selected = i}
          onfocus={() => selected = i}
        >
          <span class="hero-node-logo"><img src={'/assets/logo-' + company.logo + '.png'} alt="" width="76" height="66" /></span>
          <span class="hero-node-name">{company.name}</span>
        </button>
      {/each}
      <span class="hero-diagram-caption">برای معرفی هر برند، لوگوی آن را انتخاب کنید.</span>
    </div>
  </div>
</section>
