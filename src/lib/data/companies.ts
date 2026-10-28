export type Company = {
  name: string;
  logo: string;
  subtitle: string;
  description: string;
  website: string;
  websiteLabel: string;
};

// External destinations are published by the brands themselves (or their related sites).
// For MYCA the published destination is its application; accessibility must be monitored.
// Keep all external destinations in this file, rather than duplicating URLs in components.
export const companies: Company[] = [
  {
    name: 'سلامت اول',
    logo: 'salamat',
    subtitle: 'خدمات پرستاری و مراقبت بالینی در منزل',
    description: 'مرکز ارائه خدمات پرستاری و مراقبت در منزل، از مراقبت سالمند، کودک و بیمار تا برخی خدمات بالینی و پزشکی در خانه؛ با تمرکز بر دسترسی خانواده‌ها به مراقبت تخصصی.',
    website: 'https://salamateaval.com/',
    websiteLabel: 'ورود به سایت سلامت اول'
  },
  {
    name: 'زندگی برتر',
    logo: 'zendegi',
    subtitle: 'مراقبت سالمند، کودک و بیمار در منزل',
    description: 'مرکز خدمات پرستاری زندگی برتر اکسین، فعال در معرفی و اعزام نیروی مراقب برای سالمندان، کودکان و بیماران در منزل؛ با هدف همراهی خانواده‌ها در تأمین مراقبت روزمره.',
    website: 'https://zendegiebartar.com/',
    websiteLabel: 'ورود به سایت زندگی برتر'
  },
  {
    name: 'سفیر آرامش',
    logo: 'safir',
    subtitle: 'خدمات مراقبت و پرستاری در منزل',
    description: 'مرکز خدمات پرستاری سفیر آرامش، ارائه‌دهنده خدمات مراقبت از سالمندان، کودکان، نوزادان و بیماران در منزل و همراهی بیمار؛ با تأکید بر مراقبت انسانی و پاسخ‌گویی به نیاز خانواده.',
    website: 'https://safirearamesh.com/',
    websiteLabel: 'ورود به سایت سفیر آرامش'
  },
  {
    name: 'مایکا | MYCA',
    logo: 'myca',
    subtitle: 'سامانه دیجیتال خدمات خانواده',
    description: 'مایکا لایه دیجیتال گروه برای دسترسی و مدیریت خدمات خانواده است؛ بستری با هدف ساده‌تر کردن ارتباط خانواده‌ها با ارائه‌دهندگان خدمات و پیگیری تجربه دریافت خدمت.',
    website: 'https://mobile.mycacare.com/',
    websiteLabel: 'ورود به سامانه مایکا'
  },
  {
    name: 'آکادمی سلامت',
    logo: 'academy',
    subtitle: 'آموزش مهارت‌های حرفه‌ای و مراقبتی',
    description: 'آکادمی سلامت اول، برگزارکننده دوره‌های آموزشی حضوری و آنلاین در حوزه‌هایی مانند سالمندیاری، مربیگری کودک، مدیریت امور خانواده و مهارت‌های فنی‌وحرفه‌ای.',
    website: 'https://www.salamat.academy/',
    websiteLabel: 'ورود به سایت آکادمی سلامت'
  }
];
