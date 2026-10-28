<script lang="ts">import PageIntro from '$lib/components/PageIntro.svelte'; import { media } from '$lib/data/media'; import { contact } from '$lib/data/contact';</script>
<svelte:head><title>همکاری با گروه | اعتماد و آسایش ایرانیان</title><meta name="description" content="مسیرهای همکاری سازمانی، تجاری و تخصصی با شرکت مادر اعتماد و آسایش ایرانیان." /></svelte:head>
<PageIntro visual={media.training} eyebrow="PARTNERSHIPS" title="فرصت‌ها از گفت‌وگو آغاز می‌شوند." lead="برای همکاری‌های سازمانی، پیشنهادهای تجاری و ارتباط با مجموعه‌های تخصصی گروه." />
<section class="inner-content light-section"><div class="wrap">
  <div class="editorial-lead light"><span class="eyebrow">WORKING TOGETHER</span><h2>همکاری، با شناخت یکدیگر معنا پیدا می‌کند.</h2><p>اعتماد و آسایش ایرانیان از گفت‌وگو با مجموعه‌ها و متخصصانی که زمینه‌ای برای همکاری و توسعه فعالیت‌های مرتبط با حوزه‌های گروه می‌بینند، استقبال می‌کند. همکاری‌های مؤثر از شناخت نیازها، قابلیت‌ها و افق مشترک آغاز می‌شوند.</p></div>
  <div class="collaboration-grid">
    <article><span>01 / BUSINESS</span><h3>همکاری سازمانی</h3><p>گفت‌وگو درباره فرصت‌های همکاری میان سازمان‌ها، مجموعه‌های خدماتی و شرکت‌های فعال در حوزه‌های مرتبط.</p></article>
    <article><span>02 / EXPERTISE</span><h3>همکاری تخصصی</h3><p>معرفی ظرفیت‌ها و تجربیات حرفه‌ای در حوزه مراقبت، آموزش، فناوری و خدمات مرتبط با خانواده.</p></article>
    <article><span>03 / DEVELOPMENT</span><h3>پیشنهادهای توسعه</h3><p>طرح ایده‌ها و فرصت‌هایی که می‌توانند به شناخت بهتر نیازهای بازار و مسیرهای جدید فعالیت کمک کنند.</p></article>
  </div>
  <div class="contact-service-note"><h3>شروع یک گفت‌وگوی حرفه‌ای</h3><p>پیشنهاد خود را همراه با معرفی مختصر سازمان یا حوزه تخصصی‌تان از طریق ایمیل رسمی گروه مطرح کنید.</p><a href={'mailto:' + contact.email + '?subject=' + encodeURIComponent('پیشنهاد همکاری با اعتماد و آسایش ایرانیان')}>{contact.email}</a><a class="subtle-contact-link" href="/contact">مشاهده سایر راه‌های ارتباطی</a></div>
</div></section>
