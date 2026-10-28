/** 
 * First-party editorial imagery. Each visual is downloaded from a documented Pexels
 * source and served through the site's own Cloudflare Worker static assets.
 * No shared visual fallback: unrelated articles must never show the same picture.
 * People pictured are editorial models, not verified company employees or customers.
 */
const asset = (name: string) => `/assets/photography/${name}.webp`;

export const media = {
  heroPoster: asset('care-companionship'),
  care: asset('care-visit'),
  companionship: asset('care-companionship'),
  support: asset('care-support'),
  senior: asset('care-senior'),
  home: asset('home-interior'),
  digital: asset('healthcare-digital'),
  training: asset('learning-class'),
  medical: asset('medical-tablet'),
  medication: asset('care-grooming'),
  videoHd: 'https://videos.pexels.com/video-files/7517384/7517384-hd_1920_1080_25fps.mp4',
  videoStandard: 'https://videos.pexels.com/video-files/7517384/7517384-hd_1280_720_25fps.mp4'
} as const;
