<script lang="ts">
  let { eyebrow, title, lead, variant = 'dark', visual }: { eyebrow: string; title: string; lead?: string; variant?: 'dark' | 'light'; visual?: string } = $props();
</script>
<section class:light={variant === 'light'} class="inner-hero" style={visual ? '--page-photo: url("' + visual + '")' : undefined}>
  <div class="wrap inner-hero-content">
    <span class="eyebrow">{eyebrow}</span>
    <h1>{title}</h1>
    {#if lead}<p>{lead}</p>{/if}
  </div>
  <div class="inner-hero-decoration" aria-hidden="true"><span></span><span></span><span></span></div>
</section>
