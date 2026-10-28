<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  let menuOpen = $state(false);
  let scrolled = $state(false);
  const links = [
    { href: '/', label: 'صفحه اصلی' },
    { href: '/companies', label: 'شرکت‌های گروه' },
    { href: '/about', label: 'درباره گروه' },
    { href: '/activities', label: 'حوزه‌های فعالیت' },
    { href: '/magazine', label: 'مجله' },
    { href: '/contact', label: 'ارتباط با ما' }
  ];
  const isActive = (href: string) => href === '/' ? page.url.pathname === '/' : page.url.pathname === href || page.url.pathname.startsWith(href + '/');
  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 30; };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>
<header id="nav" class:scrolled class="nav">
  <div class="wrap navin">
    <a href="/" class="identity" onclick={() => menuOpen = false}>
      <img src="/assets/logo-holding.png" alt="لوگوی اعتماد و آسایش ایرانیان" width="53" height="53" />
      <span><strong>اعتماد و آسایش ایرانیان</strong><small>گروه شرکت‌های تخصصی</small></span>
    </a>
    <nav id="links" class:open={menuOpen} class="links" aria-label="ناوبری اصلی">
      {#each links as item}
        <a class:active={isActive(item.href)} aria-current={isActive(item.href) ? 'page' : undefined} href={item.href} onclick={() => menuOpen = false}>{item.label}</a>
      {/each}
    </nav>
    <div class="navact">
      <a class="outline" class:active={isActive('/cooperation')} href="/cooperation">همکاری با گروه</a>
      <button type="button" aria-controls="links" aria-expanded={menuOpen} aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'} class="navmenu" onclick={() => menuOpen = !menuOpen}>☰</button>
    </div>
  </div>
</header>
