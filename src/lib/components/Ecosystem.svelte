<script lang="ts">
  import { companies } from '$lib/data/companies';
  let selected = $state(0);
</script>

<section class="group-section" id="companies" aria-labelledby="companies-heading">
  <div class="wrap">
    <div class="group-introduction">
      <div class="group-introduction-title">
        <span class="eyebrow">THE GROUP</span>
        <h2 id="companies-heading">هر نام، <em>هویتی مستقل.</em></h2>
      </div>
      <div class="group-introduction-copy prose">
        <p>اعتماد و آسایش ایرانیان، شرکت مادر و راهبر مجموعه‌ای از کسب‌وکارهاست که در حوزه‌های مراقبت، سلامت، خدمات خانواده، فناوری و آموزش فعالیت می‌کنند.</p>
        <p>هر یک از شرکت‌های گروه، با هویت تجاری، تخصص و مسیر ارتباطی مستقل خود شناخته می‌شوند. این استقلال به آن‌ها امکان می‌دهد بر نیازهای مشخص مخاطبانشان تمرکز کنند، خدمات خود را توسعه دهند و ارتباطی مستقیم با مشتریان و بازار تخصصی‌شان داشته باشند.</p>
        <p>در سطح گروه، اعتماد و آسایش ایرانیان نقش راهبری و ایجاد انسجام میان این فعالیت‌ها را بر عهده دارد؛ ساختاری که در آن تجربه حاصل از ارائه خدمات، آموزش نیروی انسانی و ظرفیت‌های فناوری می‌توانند در مسیر توسعه یکدیگر قرار بگیرند.</p>
      </div>
    </div>
    <div class="brandgrid" aria-label="وب‌سایت‌های مجموعه‌های گروه">
      {#each companies as company, i (company.logo)}
        <a href={company.website} target="_blank" rel="noopener noreferrer" class="brandcard" class:selected={selected === i} aria-label={company.websiteLabel + ' در زبانه جدید'} onmouseenter={() => selected = i} onfocus={() => selected = i}>
          <span class="brandstage brandstage-{i+1}">
            <span class="brandstage-glow"></span>
            <span class="brandlogo"><img src={'/assets/logo-' + company.logo + '.png'} alt={'لوگوی ' + company.name} width="132" height="94" loading="lazy" /></span>
            <span class="brand-number">0{i + 1}</span>
          </span>
          <span class="brandbody"><strong>{company.name}</strong><span>{company.subtitle}</span><span class="brandmore">وب‌سایت مجموعه</span></span>
        </a>
      {/each}
    </div>
    <div class="group-profiles-heading">
      <span class="eyebrow">OUR COMPANIES</span>
      <h3>آشنایی نزدیک‌تر با مجموعه‌ها</h3>
      <p>هر مجموعه، تخصص و مسیر خود را دارد. با فعالیت و نگاه هر کدام بیشتر آشنا شوید.</p>
    </div>
    <div class="company-profiles">
      {#each companies as company, i (company.logo)}
        <article class="company-profile" id={'brand-' + company.logo} aria-labelledby={'company-title-' + company.logo}>
          <div class="profile-identity profile-identity-{i+1}">
            <span class="profile-number" aria-hidden="true">0{i+1} / 05</span>
            <div class="profile-logo-wrap"><img src={'/assets/logo-' + company.logo + '.png'} alt={'نشان ' + company.name} width="180" height="140" loading="lazy" /></div>
            <span class="profile-category">{company.subtitle}</span>
          </div>
          <div class="profile-content">
            <div class="profile-meta"><span>مجموعه‌های گروه</span><span>0{i+1}</span></div>
            <h4 id={'company-title-' + company.logo}>{company.name}</h4>
            <p class="profile-tagline">{company.tagline}</p>
            <div class="profile-prose prose">
              {#each company.paragraphs as paragraph, pIndex}
                <p>{paragraph}</p>
              {/each}
            </div>
            <a class="profile-visit" href={company.website} target="_blank" rel="noopener noreferrer">{company.websiteLabel}</a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
