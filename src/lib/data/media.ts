/** Real, individually published Pexels photographs, served at high resolution.
 * No people, interiors or equipment pictured are claimed to be company staff, property or clients.
 * When an image CDN is unavailable, use the previous self-hosted assets as an emergency fallback.
 * Source credits and licensing: MEDIA-SOURCES.md
 */
const photo = (id: number, width = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&q=86`;

export const media = {
  heroPoster: photo(29372534, 1920),
  care: photo(29372727),
  companionship: photo(29372534),
  support: photo(29372730),
  senior: photo(29372724),
  home: photo(7836571),
  digital: photo(5327864),
  training: photo(5212655),
  medical: photo(4266934),
  medication: photo(29354077),
  videoHd: 'https://videos.pexels.com/video-files/7517384/7517384-hd_1920_1080_25fps.mp4',
  videoStandard: 'https://videos.pexels.com/video-files/7517384/7517384-hd_1280_720_25fps.mp4'
} as const;
