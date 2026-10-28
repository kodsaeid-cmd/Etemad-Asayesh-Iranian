<script lang="ts">
  import { companies } from '$lib/data/companies';
  let selected = $state(0);
</script>

<section class="group-section" id="companies" aria-labelledby="companies-heading">
  <div class="wrap">
    <div class="heading group-heading">
      <div><span class="eyebrow">OUR BRANDS</span><h2 id="companies-heading">پنج برند، پنج مسیر تخصصی</h2></div>
      <p>هر کدام با هویتی مستقل؛ در کنار یکدیگر، زیر چتر راهبری اعتماد و آسایش ایرانیان.</p>
    </div>
    <div class="brandgrid">
      {#each companies as company, i (company.logo)}
        <button type="button" class="brandcard" class:selected={selected === i} id={'brand-' + company.logo} aria-pressed={selected === i} onclick={() => selected = i}>
          <span class="brandstage brandstage-{i+1}">
            <span class="brandstage-glow"></span>
            <span class="brandlogo"><img src={'/assets/logo-' + company.logo + '.png'} alt={'لوگوی ' + company.name} width="132" height="94" loading="lazy" /></span>
            <span class="brand-number">0{i + 1}</span>
          </span>
          <span class="brandbody"><strong>{company.name}</strong><span>{company.subtitle}</span><span class="brandmore">معرفی و حوزه فعالیت</span></span>
        </button>
      {/each}
    </div>
    <div class="detail" aria-live="polite" aria-atomic="true">
      <div class="detail-logo"><img src={'/assets/logo-' + companies[selected].logo + '.png'} alt={'لوگوی ' + companies[selected].name} width="100" height="80" /></div>
      <div class="detail-description"><span class="eyebrow">برند انتخاب‌شده</span><h3>{companies[selected].name}</h3><p>{companies[selected].description}</p></div>
      <a href="#contact" class="detail-link">ارتباط با گروه</a>
    </div>
    <p class="notice">شرح دقیق مأموریت برخی شرکت‌ها پس از تأیید رسمی تکمیل می‌شود.</p>
  </div>
</section>
