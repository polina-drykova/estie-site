import flurry1 from '@/assets/images/flurry/flurry-1.svg';
import flurry2 from '@/assets/images/flurry/flurry-2.svg';
import flurry2Mobile from '@/assets/images/flurry/flurry-2-mobile.svg';
import flurry3 from '@/assets/images/flurry/flurry-3.svg';
import flurry3Mobile from '@/assets/images/flurry/flurry-3-mobile.svg';
import flurry4 from '@/assets/images/flurry/flurry-4.svg';
import flurry5 from '@/assets/images/flurry/flurry-5.svg';
import flurry6 from '@/assets/images/flurry/flurry-6.svg';
import flurry6Mobile from '@/assets/images/flurry/flurry-6-mobile.svg';
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
import flurryCollage1 from '@/assets/images/flurry-collage/flurry-collage-1.svg';
import flurryCollage2 from '@/assets/images/flurry-collage/flurry-collage-2.svg';
import flurryCollage3 from '@/assets/videos/flurry-collage/flurry-collage-3.mp4';
import flurryCollage4 from '@/assets/images/flurry-collage/flurry-collage-4.svg';
import flurryCollage5 from '@/assets/images/flurry-collage/flurry-collage-5.svg';
import flurryCollage6 from '@/assets/videos/flurry-collage/flurry-collage-6.mp4';
import flurryCollage7 from '@/assets/images/flurry-collage/flurry-collage-7.svg';
import flurryCollage8 from '@/assets/images/flurry-collage/flurry-collage-8.svg';

export const flurryMediaContent = [
  { image: flurry1, class: "image-large" },
  { image: {
      desktop: flurry2,
      tablet: flurry2Mobile,
      mobile: flurry2Mobile,
    },
  class: "image-large" },
  { image: {
      desktop: flurry3,
      tablet: flurry3Mobile,
      mobile: flurry3Mobile,
    },
    class: "image-large" },
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
  { image: {
      desktop: flurry6,
      tablet: flurry6Mobile,
      mobile: flurry6Mobile,
    },
    class: "image-huge" },
  { video: flurryV3, class: "video-medium" },
  { image: [flurry7, flurry8, flurry9, flurry10], shadow: true },
];

export const flurryCollageContent = [
  [
    { type: 'image', src: flurryCollage1 },
    { type: 'image', src: flurryCollage2 },
    // { type: 'video', src: flurryCollage3, poster: '/posters/left-3.jpg' },
    { type: 'video', src: flurryCollage3 },
    { type: 'image', src: flurryCollage4 },
  ],
  [
    { type: 'image', src: flurryCollage5 },
    { type: 'video', src: flurryCollage6 },
    { type: 'image', src: flurryCollage8 },
    { type: 'image', src: flurryCollage7 },
  ],
];