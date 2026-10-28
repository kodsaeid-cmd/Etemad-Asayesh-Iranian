export type Company = { name: string; logo: string; image: string; imageAlt: string; subtitle: string; description: string };

// Initial editorial descriptions; legal and operating claims require owner confirmation before launch.
export const companies: Company[] = [
  { name: 'سلامت اول', logo: 'salamat', image: 'editorial-1.webp', imageAlt: 'تصویر مفهومی خدمات سلامت و مراقبت', subtitle: 'سلامت و خدمات مراقبتی', description: 'فعالیت تخصصی در حوزه سلامت و مراقبت؛ یکی از برندهای گروه اعتماد و آسایش ایرانیان.' },
  { name: 'زندگی برتر', logo: 'zendegi', image: 'editorial-2.webp', imageAlt: 'تصویر مفهومی فضای داخلی خانه مدرن', subtitle: 'رفاه خانه و کیفیت زندگی', description: 'تمرکز بر رفاه، خانه و کیفیت زندگی؛ مأموریت رسمی این شرکت در نسخه نهایی تأیید می‌شود.' },
  { name: 'سفیر آرامش', logo: 'safir', image: 'editorial-3.webp', imageAlt: 'تصویر مفهومی همراهی و مراقبت', subtitle: 'همراهی و خدمات حمایتی', description: 'فعالیت در حوزه همراهی و خدمات حمایتی و مراقبتی؛ توصیف نهایی در انتظار تأیید رسمی است.' },
  { name: 'مایکا | MYCA', logo: 'myca', image: 'editorial-4.webp', imageAlt: 'تصویر مفهومی فناوری دیجیتال در خدمات خانواده', subtitle: 'پلتفرم دیجیتال خدمات خانواده', description: 'پلتفرم دیجیتال مدیریت خدمات خانواده، با هویت برند مستقل در اکوسیستم گروه.' },
  { name: 'آکادمی سلامت', logo: 'academy', image: 'editorial-5.webp', imageAlt: 'تصویر مفهومی دوره آموزشی تخصصی', subtitle: 'آموزش و توسعه مهارت انسانی', description: 'تمرکز بر آموزش، مهارت و توانمندسازی نیروی انسانی؛ جزئیات مأموریت نیازمند نهایی‌سازی است.' }
];
