<script lang="ts">
  import { onMount } from 'svelte';
  let menuOpen = $state(false);
  let scrolled = $state(false);
  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 30; };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>
<header id="nav" class:scrolled class="nav">
  <div class="wrap navin">
    <a href="#home" class="identity" onclick={() => menuOpen = false}>
      <img src="/assets/logo-holding.png" alt="لوگوی اصلی اعتماد و آسایش ایرانیان" width="53" height="53" />
      <span><strong>اعتماد و آسایش ایرانیان</strong><small>گروه شرکت‌های تخصصی</small></span>
    </a>
    <nav id="links" class:open={menuOpen} class="links" aria-label="ناوبری اصلی">
      <a class="active" href="#home" onclick={() => menuOpen = false}>صفحه اصلی</a>
      <a href="#about" onclick={() => menuOpen = false}>درباره گروه</a>
      <a href="#companies" onclick={() => menuOpen = false}>شرکت‌های گروه</a>
      <a href="#scope" onclick={() => menuOpen = false}>حوزه‌های فعالیت</a>
      <a href="#magazine" onclick={() => menuOpen = false}>مجله</a>
      <a href="#contact" onclick={() => menuOpen = false}>ارتباط با ما</a>
    </nav>
    <div class="navact">
      <a class="outline" href="#contact">همکاری با گروه ←</a>
      <button type="button" aria-controls="links" aria-expanded={menuOpen} aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'} class="navmenu" onclick={() => menuOpen = !menuOpen}>☰</button>
    </div>
  </div>
</header>
