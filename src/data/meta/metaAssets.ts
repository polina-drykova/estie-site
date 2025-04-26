import meta1 from '@/assets/images/meta/image-1.svg';
import meta2 from '@/assets/images/meta/image-2.svg';
import meta2Mobile from '@/assets/images/meta/image-2-mobile.svg';
import meta3 from '/meta/image-3.svg';
import meta4 from '@/assets/images/meta/image-4.svg?raw';
import meta5 from '@/assets/images/meta/image-5.svg?raw';
import meta6 from '@/assets/images/meta/image-6.svg?raw';
import meta7 from '@/assets/images/meta/image-7.svg?raw';
import meta8 from '@/assets/images/meta/image-8.svg?raw';
import meta9 from '@/assets/images/meta/image-9.svg?raw';
import meta10 from '@/assets/images/meta/image-10.svg?raw';
import meta11 from '@/assets/images/meta/image-11.svg?raw';
import meta12 from '@/assets/images/meta/image-12.svg?raw';
import meta13 from '@/assets/images/meta/image-13.svg?raw';
import meta14 from '@/assets/images/meta/image-14.svg?raw';
import meta15 from '@/assets/images/meta/image-15.svg?raw';
import meta16 from '@/assets/images/meta/image-16.svg?raw';
import meta17 from '@/assets/images/meta/image-17.svg?raw';
import meta18 from '@/assets/images/meta/image-18.png';
import meta19 from '@/assets/images/meta/image-19.png';
import meta20 from '@/assets/images/meta/image-20.png';
import meta21 from '@/assets/images/meta/image-21.png';
import meta22 from '@/assets/images/meta/image-22.png';
import meta23 from '@/assets/images/meta/image-23.png';
import meta24 from '@/assets/images/meta/image-24.png';
import meta25 from '@/assets/images/meta/image-25.png';
import meta26 from '@/assets/images/meta/image-26.png';
import meta27 from '@/assets/images/meta/image-27.png';
import meta28 from '@/assets/images/meta/image-28.png';
import meta29 from '@/assets/images/meta/image-29.png';
import metaVid1 from '/meta/video-1.mp4';
import metaVid2 from '/meta/video-2.mp4';
import metaVid3 from '/meta/video-3.mp4';
import metaVid4 from '@/assets/videos/meta/video-4.mp4';
import metaVid5 from '@/assets/videos/meta/video-5.mp4';
import metaVid6 from '@/assets/videos/meta/video-6.mp4';
import metaVid7 from '@/assets/videos/meta/video-7.mp4';
import meta30 from '@/assets/images/meta/image-30.svg';

export const metaGridContent = {
  grid: [
    {
      src: meta4,
      description: 'Card that supports app-ads',
    },
    {
      src: meta5,
      description: 'Collapsed card',
    },
    {
      src: meta6,
      description: 'app-card 2 lines',
    },
    {
      src: meta7,
      description: 'app-card auto open',
    },
    {
      src: meta8,
      description: 'App-card 4 lines',
    },
    {
      src: meta9,
      description: 'App-card no subtitle',
    },
    {
      src: meta10,
      description: 'App-card chained ads',
    },
    {
      src: meta11,
      description: 'App-card chained ads collapsed',
    },
    {
      src: meta12,
      description: 'Offsite conversion one line',
    },
    {
      src: meta13,
      description: 'Offsite conversion collapsed',
    },
    {
      src: meta14,
      description: 'Offsite conversion 2 lines',
    },
    {
      src: meta15,
      description: '16:9 floating unit app-ads',
    },
    {
      src: meta16,
      description: 'Offsite conversion end card',
    },
    {
      src: meta17,
      description: 'app-ads end card',
    },
  ],
};

export const metaMediaContent = [
  { index: 0, image: meta1, class: 'audience-network', desktopOnly: true, priority: true },
  {
    index: 1,
    image: {
      desktop: meta2,
      tablet: meta2Mobile,
      mobile: meta2Mobile,
    },
    class: "z-index-4",
    priority: true,
  },
  {
    index: 2,
    video: [metaVid1],
    description: ["Meta Ad displays  in Candy Crush with new design"],
    priority: true,
    class: 'candy-crush-video',
    descriptionClass: 'candy-crush-desc',
  },
  {
    index: 3,
    video: [metaVid2, metaVid3],
    subtitle: ["Watch & Browse", "App ad Video"],
    description: ["Brand", "App"],
    class: "media-min-width-260",
    priority: true,
  },
  { index: 4, image: meta30, class: "mb-138"},
  { index: 5, image: meta3, class: "vector-image" },
  metaGridContent, // index: 6,
  {
    index: 7,
    video: [metaVid4, metaVid5],
  },
  {
    index: 8,
    image: [meta18, meta19, meta20],
    subtitle: ["9:16 Ad on Facebook Feed - iOS", "9:16 before - Android", "9:16 after - Android"],
    description: [
      "",
      "Before: we had a problem with digestibility & cognitive load - 14 UI elements to process",
      "After: a focused experience, giving users time to recognise the brand then focus in digesting the ad media",
    ],
    shadow: true,
    class: "png-group",
  },
  {
    index: 9,
    image: [meta21, meta22, meta23, meta24],
    description: ["16:9 video ad", "1:1 video ad", "4:5 video ad", "9:16 video ad"],
    shadow: true,
    class: "png-group-2",
  },
  {
    index: 10,
    image: [meta25],
    description: ["Optimised for 4:5 and 9:16 ratios, with horizontal App Store screenshots."],
    descriptionClass: "offset-top__34",
    class: "standalone-image",
  },
  { index: 11, video: metaVid6, class: "meta-video-nudge-80" },
  {
    index: 12,
    image: [meta26, meta27, meta28, meta29],
    description: ["9:16 ad", "Collapsed card + auto open", "75% browser", "OC end card"],
    shadow: true,
  },
  { index: 13, video: metaVid7, class: "meta-video-nudge-80" },
];

export const metaAssetsToPreloadPriority = [
  {
    href: '/meta-header.svg',
    as: 'image',
  },
  {
    href: metaVid1,
    as: 'video',
    type: 'video/mp4',
  },
  {
    href: metaVid2,
    as: 'video',
    type: 'video/mp4',
  },
];

export const metaAssetsToPreload = [
  {
    href: metaVid3,
    as: 'video',
    type: 'video/mp4',
  },
  {
    href: meta3,
    as: 'image',
  },
];