<script lang="ts">
  import { companies } from '$lib/data/companies';
  let selected = $state(0);
</script>

<section class="group-section" id="companies" aria-labelledby="companies-heading">
  <div class="wrap">
    <div class="heading group-heading">
      <div><span class="eyebrow">OUR BRANDS</span><h2 id="companies-heading">پنج مجموعه، یک گروه هماهنگ</h2></div>
      <p>سه مرکز ارائه خدمات مراقبتی، یک سامانه دیجیتال و یک آکادمی آموزشی؛ هر مجموعه با نام و وب‌سایت خود در کنار شرکت مادر معرفی می‌شود.</p>
    </div>
    <div class="brandgrid">
      {#each companies as company, i (company.logo)}
        <a href={company.website} target="_blank" rel="noopener noreferrer" class="brandcard" class:selected={selected === i} id={'brand-' + company.logo} aria-label={company.websiteLabel + ' در زبانه جدید'} onmouseenter={() => selected = i} onfocus={() => selected = i}>
          <span class="brandstage brandstage-{i+1}">
            <span class="brandstage-glow"></span>
            <span class="brandlogo"><img src={'/assets/logo-' + company.logo + '.png'} alt={'لوگوی ' + company.name} width="132" height="94" loading="lazy" /></span>
            <span class="brand-number">0{i + 1}</span>
          </span>
          <span class="brandbody"><strong>{company.name}</strong><span>{company.subtitle}</span><span class="brandmore">ورود به وب‌سایت مجموعه</span></span>
        </a>
      {/each}
    </div>
    <div class="detail" aria-live="polite" aria-atomic="true">
      <div class="detail-logo"><img src={'/assets/logo-' + companies[selected].logo + '.png'} alt={'لوگوی ' + companies[selected].name} width="100" height="80" /></div>
      <div class="detail-description"><span class="eyebrow">برند انتخاب‌شده</span><h3>{companies[selected].name}</h3><p>{companies[selected].description}</p></div>
      <a href={companies[selected].website} class="detail-link" target="_blank" rel="noopener noreferrer">{companies[selected].websiteLabel}</a>
    </div>
    <p class="notice">با کلیک روی نشان یا کارت هر مجموعه، وب‌سایت یا سامانه رسمی آن در زبانه‌ای جدید باز می‌شود.</p>
  </div>
</section>
