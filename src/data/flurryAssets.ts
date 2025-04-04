import flurry1 from '@/assets/images/flurry/flurry-1.svg';
import flurry2 from '@/assets/images/flurry/flurry-2.svg';
import flurry3 from '@/assets/images/flurry/flurry-3.svg';
import flurry4 from '@/assets/images/flurry/flurry-4.svg';
import flurry5 from '@/assets/images/flurry/flurry-5.svg';
import flurry6 from '@/assets/images/flurry/flurry-6.svg';
import flurryPromo from '@/assets/videos/flurry/flurry_promo.mp4';
import flurryV3 from '@/assets/videos/flurry/fluffy_3.0.mp4';
import flurry7 from '@/assets/images/flurry/flurry-7.svg';
import flurry8 from '@/assets/images/flurry/flurry-8.svg';
import flurry9 from '@/assets/images/flurry/flurry-9.svg';
import flurry10 from '@/assets/images/flurry/flurry-10.svg';
import flurryVid1 from '@/assets/videos/flurry/flurry-vid-1.mp4';
import flurryVid2 from '@/assets/videos/flurry/flurry-vid-2.mp4';
import flurryVid3 from '@/assets/videos/flurry/flurry-vid-3.mp4';
import flurryVid4 from '@/assets/videos/flurry/flurry-vid-4.mp4';
import flurryVid5 from '@/assets/videos/flurry/flurry-vid-5.mp4';

export const flurryMediaContent = [
  { image: flurry1, class: "image-large" },
  { image: flurry2, class: "image-large" },
  { image: flurry3, class: "image-large" },
  { image: flurry4, shadow: true },
  { video: flurryPromo, class: "video-large" },
  {
    video: [flurryVid1, flurryVid2, flurryVid3, flurryVid4, flurryVid5],
    shadow: true,
    subtitle: ["Profile", "Feedback guide", "Feed", "Composer", "Comments"],
    subtitleClass: "medium",
    class: "gap-20",
  },
  { image: flurry5, class: "flurry-msg" },
  { image: flurry6, class: "image-large" },
  { video: flurryV3, class: "video-medium" },
  { image: [flurry7, flurry8, flurry9, flurry10], shadow: true },
];