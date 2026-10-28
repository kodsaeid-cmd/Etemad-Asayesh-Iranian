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
  <meta name="description" content="پیش‌نمایش رسمی هویت وب‌سایت اعتماد و آسایش ایرانیان؛ شرکت مادر و راهبر پنج برند تخصصی." />
  <meta name="robots" content="noindex,nofollow,noarchive" />
  <link rel="preload" as="image" href="/assets/hero-1024.webp" imagesrcset="/assets/hero-640.webp 640w, /assets/hero-1024.webp 1024w, /assets/hero-1920.webp 1920w" imagesizes="100vw" />
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
