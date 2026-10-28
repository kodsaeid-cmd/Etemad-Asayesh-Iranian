<script lang="ts">
  import { companies } from '$lib/data/companies';
  let { compact = false }: { compact?: boolean } = $props();
</script>
<div class:compact class="company-directory">
  {#each companies as company, i (company.slug)}
    <article class="company-directory-card">
      <span class="directory-count">0{i + 1} / 05</span>
      <a class="directory-logo" href={company.website} target="_blank" rel="noopener noreferrer" aria-label={'ورود به وب‌سایت ' + company.name}>
        <img src={'/assets/logo-' + company.logo + '.png'} alt={'نشان ' + company.name} width="128" height="110" loading="lazy" />
      </a>
      <h3>{company.name}</h3>
      <p>{compact ? company.subtitle : company.description}</p>
      <div class="directory-actions"><a href={'/companies/' + company.slug}>آشنایی با مجموعه</a><a href={company.website} target="_blank" rel="noopener noreferrer">وب‌سایت رسمی</a></div>
    </article>
  {/each}
</div>
