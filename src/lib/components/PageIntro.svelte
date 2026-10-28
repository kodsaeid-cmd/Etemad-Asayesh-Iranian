<script lang="ts">
  let { eyebrow, title, lead, variant = 'dark' }: { eyebrow: string; title: string; lead?: string; variant?: 'dark' | 'light' } = $props();
</script>
<section class:light={variant === 'light'} class="inner-hero">
  <div class="wrap inner-hero-content">
    <span class="eyebrow">{eyebrow}</span>
    <h1>{title}</h1>
    {#if lead}<p>{lead}</p>{/if}
  </div>
  <div class="inner-hero-decoration" aria-hidden="true"><span></span><span></span><span></span></div>
</section>
