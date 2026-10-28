export type Company = {
  name: string;
  logo: string;
  subtitle: string;
  description: string;
};

// Descriptions are intentionally cautious until the owner approves formal legal and operating claims.
export const companies: Company[] = [
  {
    name: 'سلامت اول', logo: 'salamat', subtitle: 'سلامت و خدمات مراقبتی',
    description: 'فعالیت تخصصی در حوزه سلامت و مراقبت؛ یکی از برندهای گروه اعتماد و آسایش ایرانیان.'
  },
  {
    name: 'زندگی برتر', logo: 'zendegi', subtitle: 'رفاه خانه و کیفیت زندگی',
    description: 'تمرکز بر رفاه، خانه و کیفیت زندگی؛ مأموریت رسمی این شرکت در نسخه نهایی تأیید می‌شود.'
  },
  {
    name: 'سفیر آرامش', logo: 'safir', subtitle: 'همراهی و خدمات حمایتی',
    description: 'فعالیت در حوزه همراهی و خدمات حمایتی و مراقبتی؛ توصیف نهایی در انتظار تأیید رسمی است.'
  },
  {
    name: 'مایکا | MYCA', logo: 'myca', subtitle: 'پلتفرم دیجیتال خدمات خانواده',
    description: 'پلتفرم دیجیتال مدیریت خدمات خانواده، با هویت برند مستقل در اکوسیستم گروه.'
  },
  {
    name: 'آکادمی سلامت', logo: 'academy', subtitle: 'آموزش و توسعه مهارت انسانی',
    description: 'تمرکز بر آموزش، مهارت و توانمندسازی نیروی انسانی؛ جزئیات مأموریت نیازمند نهایی‌سازی است.'
  }
];
