import flurry1 from '/flurry/flurry-1.svg';
import flurry1Mobile from '/flurry/flurry-1-mobile.svg';
import flurry1Tablet from '/flurry/flurry-1-tablet.svg';
import flurry2 from '/flurry/flurry-2.svg';
import flurry2Mobile from '/flurry/flurry-2-mobile.svg';
import flurry3 from '/flurry/flurry-3.svg';
import flurry3Mobile from '/flurry/flurry-3-mobile.svg';
import flurry4 from '/flurry/flurry-4.svg';
import flurry5 from '@/assets/images/flurry/flurry-5.svg';
import flurry6 from '@/assets/images/flurry/flurry-6.png';
import flurry6Mobile from '@/assets/images/flurry/flurry-6-mobile.png';
import flurryPromo from '/flurry/flurry_promo.mp4';
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
  {
    image: {
      desktop: flurry1,
      tablet: flurry1Tablet,
      mobile: flurry1Mobile,
    },
    class: "image-large__ofset",
  },
  {
    image: {
      desktop: flurry2,
      tablet: flurry2Mobile,
      mobile: flurry2Mobile,
    },
    class: "image-large",
    priority: true,
  },
  { image: {
      desktop: flurry3,
      tablet: flurry3Mobile,
      mobile: flurry3Mobile,
    },
    class: "image-large",
    priority: true,
  },
  { image: flurry4, shadow: true },
  { video: flurryPromo, class: "video-large" },
  {
    video: [flurryVid1, flurryVid2, flurryVid3, flurryVid4, flurryVid5],
    shadow: true,
    subtitle: ["Profile", "Feedback guide", "Feed", "Composer", "Comments"],
    subtitleClass: "medium",
    class: "video-list",
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

export const flurryCollageContent = {
  collage: [
    [
      { type: 'image', src: flurryCollage1 },
      { type: 'image', src: flurryCollage2 },
      { type: 'video', src: flurryCollage3 },
      { type: 'image', src: flurryCollage4 },
    ],
    [
      { type: 'image', src: flurryCollage5 },
      { type: 'video', src: flurryCollage6 },
      { type: 'image', src: flurryCollage8 },
      { type: 'image', src: flurryCollage7 },
    ],
  ],
};

export const flurryCollageContentMobile = {
  collage: [
    [
      { type: 'image', src: flurryCollage7 },
      { type: 'image', src: flurryCollage2 },
      { type: 'video', src: flurryCollage6 },
      { type: 'image', src: flurryCollage5 },
    ],
    [],
    [],
  ],
};

export const flurryAssetsToPreloadPriority = [
  {
    href: '/flurry/flurry-1.svg',
    as: 'image',
    media: '(min-width: 1024px)',
  },
  {
    href: '/flurry/flurry-1-tablet.svg',
    as: 'image',
    media: '(min-width: 768px)',
  },
  {
    href: '/flurry/flurry-1-mobile.svg',
    as: 'image',
  },
  {
    href: flurry2,
    as: 'image',
    media: '(min-width: 1024px)',
  },
  {
    href: flurry2Mobile,
    as: 'image',
    media: '(min-width: 768px)',
  },
  {
    href: flurry2Mobile,
    as: 'image',
  },
  {
    href: flurry3,
    as: 'image',
    media: '(min-width: 1024px)',
  },
  {
    href: flurry3Mobile,
    as: 'image',
    media: '(min-width: 768px)',
  },
  {
    href: flurry3Mobile,
    as: 'image',
  },
];

export const flurryAssetsToPreload = [
  {
    href: flurry4,
    as: 'image',
  },
  {
    href: flurryPromo,
    as: 'video',
    type: 'video/mp4',
  },
];
