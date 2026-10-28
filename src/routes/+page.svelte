<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Ecosystem from '$lib/components/Ecosystem.svelte';
  import About from '$lib/components/About.svelte';
  import Scope from '$lib/components/Scope.svelte';
  import Magazine from '$lib/components/Magazine.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>اعتماد و آسایش ایرانیان | گروه شرکت‌ها</title>
  <meta name="description" content="اعتماد و آسایش ایرانیان؛ گروه شرکت‌های فعال در خدمات مراقبت و پرستاری در منزل، آموزش مهارت‌های حرفه‌ای و سامانه دیجیتال خدمات خانواده مایکا." />
  <meta name="robots" content="noindex,nofollow,noarchive" />
</svelte:head>

<a class="skip" href="#main">رفتن به محتوای اصلی</a>
<Header />
<main id="main">
  <Hero />
  <Ecosystem />
  <About />
  <Scope />
  <Magazine />
  <Contact />
</main>
<Footer />
