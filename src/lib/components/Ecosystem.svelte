<script lang="ts">
  import { companies } from '$lib/data/companies';
  let selected = $state(0);
  const linePaths = [
    'M500 0 V24 H100 V58',
    'M500 0 V24 H300 V58',
    'M500 0 V58',
    'M500 0 V24 H700 V58',
    'M500 0 V24 H900 V58'
  ];
</script>

<div class="wrap map-shell" id="companies">
  <div class="mapbox">
    <div class="maphead"><div><span class="eyebrow">OUR ECOSYSTEM</span><h2>پنج برند مستقل، یک راهبری هماهنگ</h2></div><p>شرکتی را انتخاب کنید تا معرفی آن و مسیر ارتباطی فعال شود.</p></div>
    <div class="mother"><img src="/assets/logo-holding.png" alt="" width="49" height="49" /><span><strong>اعتماد و آسایش ایرانیان</strong><small>شرکت مادر و راهبر گروه</small></span></div>
    <div class="network" aria-hidden="true">
      <svg viewBox="0 0 1000 58" preserveAspectRatio="none" role="presentation">
        {#each linePaths as path, i}
          <path class="netpath" class:active={selected === i} d={path} />
        {/each}
        {#each [100, 300, 500, 700, 900] as x, i}
          <circle cx={x} cy="56" r={selected === i ? 6 : 4} fill={selected === i ? '#36f3fb' : '#9473ec'} />
        {/each}
      </svg>
    </div>
    <div class="brandgrid" id="brandgrid">
      {#each companies as company, i (company.logo)}
        <button type="button" class="brandcard" class:selected={selected === i} aria-pressed={selected === i} onclick={() => selected = i}>
          <div class="brandimage"><img src={'/assets/' + company.image} loading="lazy" alt={company.imageAlt} width="272" height="160" /></div>
          <div class="brandbody">
            <div class="brandlabel"><span class="brandlogo"><img src={'/assets/logo-' + company.logo + '.png'} alt={'لوگوی ' + company.name} loading="lazy" /></span><strong>{company.name}</strong></div>
            <p>{company.subtitle}</p><span class="brandmore">مشاهده معرفی <span>↗</span></span>
          </div>
        </button>
      {/each}
    </div>
    <div class="detail" aria-live="polite" aria-atomic="true">
      <div class="detail-logo"><img src={'/assets/logo-' + companies[selected].logo + '.png'} alt={'لوگوی ' + companies[selected].name} /></div>
      <div><h3>{companies[selected].name}</h3><p>{companies[selected].description}</p></div>
      <a href="#contact">ارتباط با گروه ←</a>
    </div>
    <p class="notice">تصاویر معماری و کارت‌ها، تصویرسازی مفهومی‌اند؛ معرفی مأموریت برخی برندها موقت است و پس از تأیید رسمی نهایی می‌شود.</p>
  </div>
</div>
