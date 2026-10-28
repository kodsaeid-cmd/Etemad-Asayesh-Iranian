<script lang="ts">
  import { media } from '$lib/data/media';
  const articles = [
    {
      category: 'مراقبت و سالمندی',
      image: media.medication,
      alt: 'مراقب و بانوی سالمند در گفت‌وگوی صمیمانه',
      title: 'مراقبت سالمند در خانه؛ از شناخت نیازها تا انتخاب مراقب',
      description: 'مراقبت مناسب از سالمند با شناخت شرایط جسمی، روحی و سبک زندگی او آغاز می‌شود. این مقاله به موضوعاتی مانند تشخیص سطح نیاز مراقبتی، حفظ استقلال فرد و نکات مهم انتخاب نیروی مراقب می‌پردازد.'
    },
    {
      category: 'خانواده و مراقبت',
      image: media.home,
      alt: 'فضای آرام خانه با نور طبیعی',
      title: 'چطور برای مراقبت از یکی از اعضای خانواده برنامه‌ریزی کنیم؟',
      description: 'هنگامی که یکی از اعضای خانواده به مراقبت نیاز پیدا می‌کند، تصمیم‌گیری درباره وظایف، زمان‌بندی، انتخاب کمک حرفه‌ای و هماهنگی میان اعضای خانواده اهمیت بیشتری پیدا می‌کند. این مطلب، چارچوبی برای بررسی این تصمیم‌ها ارائه می‌دهد.'
    },
    {
      category: 'فناوری و آینده خدمات',
      image: media.medical,
      alt: 'نمای مفهومی خدمات دیجیتال بر صفحه تلفن همراه',
      title: 'فناوری چه تغییری در آینده خدمات خانواده ایجاد می‌کند؟',
      description: 'از یافتن ارائه‌دهنده مناسب تا پیگیری درخواست‌ها و مدیریت تجربه دریافت خدمات، ابزارهای دیجیتال فرصت‌هایی برای ساده‌تر شدن فرایندها ایجاد کرده‌اند. این مقاله به ظرفیت‌ها و محدودیت‌های این تحول می‌پردازد.'
    }
  ];
</script>

<section class="section magazine" id="magazine" aria-labelledby="magazine-heading">
  <div class="wrap">
    <div class="magazine-introduction">
      <div>
        <span class="eyebrow">EDITORIAL &amp; INSIGHTS</span>
        <h2 id="magazine-heading">مجله<br /><em>اعتماد و آسایش ایرانیان</em></h2>
        <p class="magazine-standfirst">برای فهم بهتر آنچه بر زندگی ما اثر می‌گذارد.</p>
      </div>
      <div class="prose">
        <p>زندگی روزمره با تصمیم‌های بسیاری همراه است؛ از انتخاب روش مناسب مراقبت از اعضای خانواده تا شناخت خدمات سلامت، مدیریت شرایط خانه، یادگیری مهارت‌های تازه و استفاده از فناوری.</p>
        <p>مجله اعتماد و آسایش ایرانیان، بخش محتوایی و رسانه‌ای گروه است؛ فضایی برای پرداختن به موضوعاتی که در حوزه فعالیت شرکت‌های گروه قرار دارند و می‌توانند برای خانواده‌ها، مراقبان، علاقه‌مندان به آموزش و فعالان این حوزه‌ها مفید باشند.</p>
        <p>هدف مجله، ارائه محتوایی است که به شناخت بهتر مسائل، آگاهی از گزینه‌های موجود و تصمیم‌گیری سنجیده‌تر کمک کند.</p>
        <p>در این بخش، موضوعاتی مانند مراقبت از سالمندان و کودکان، سلامت و مراقبت در خانه، مهارت‌های حرفه‌ای، مسائل خانواده و نقش فناوری در خدمات مورد توجه قرار می‌گیرند.</p>
      </div>
    </div>
    <div class="magazine-feature-heading">
      <span class="eyebrow">FEATURED TOPICS</span>
      <h3>موضوعات پیشنهادی مجله</h3>
      <span>سه نگاه به مراقبت، خانواده و فناوری</span>
    </div>
    <div class="maggrid">
      {#each articles as article, i}
        <article class="article">
          <div class="article-media"><img src={article.image} onerror={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = '/assets/photo-care-conversation.webp'; }} alt={article.alt} width="625" height="625" loading="lazy" decoding="async" /><small>{article.category}</small></div>
          <div class="articlebody">
            <span class="article-number">0{i + 1} / EDITORIAL</span>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <span class="article-status">از موضوعات مجله</span>
          </div>
        </article>
      {/each}
    </div>

  </div>
</section>
