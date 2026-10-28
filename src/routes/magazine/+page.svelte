<script lang="ts">import PageIntro from '$lib/components/PageIntro.svelte'; import { media } from '$lib/data/media'; import Magazine from '$lib/components/Magazine.svelte';</script>
<svelte:head><title>مجله | اعتماد و آسایش ایرانیان</title><meta name="description" content="مجله اعتماد و آسایش ایرانیان؛ موضوعاتی درباره مراقبت سالمند، خانواده، سلامت، آموزش و فناوری." /></svelte:head>
<PageIntro visual={media.home} eyebrow="EDITORIAL & INSIGHTS" title="برای فهم بهتر آنچه بر زندگی اثر می‌گذارد." lead="مراقبت، خانواده و فناوری؛ از زاویه آگاهی و تجربه." />
<Magazine />
<section class="inner-content dark-section"><div class="wrap"><div class="editorial-lead"><span class="eyebrow">FROM THE ARCHIVE</span><h2>دانش، پیوسته در جریان است.</h2><p>از تجربه‌های روزمره مراقبت تا آگاهی درباره سلامت و زندگی خانواده؛ نوشته‌ها و روایت‌هایی برای نگاهی دقیق‌تر.</p><a class="secondary" href="https://asayeshiranian.com/" target="_blank" rel="noopener noreferrer">آرشیو نوشته‌ها</a></div></div></section>
