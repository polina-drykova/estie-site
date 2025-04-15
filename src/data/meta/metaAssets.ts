// import meta1 from '@/assets/images/meta/meta-1.svg';
// import meta1Mobile from '@/assets/images/meta/meta-1-mobile.svg';
// import meta1Tablet from '@/assets/images/meta/meta-1-tablet.svg';
// import meta2 from '@/assets/images/meta/meta-2.svg';
// import meta2Mobile from '@/assets/images/meta/meta-2-mobile.svg';
import meta3 from '@/assets/images/meta/image-3.svg';
import meta4 from '@/assets/images/meta/image-4.svg';
import meta5 from '@/assets/images/meta/image-5.svg';
import meta6 from '@/assets/images/meta/image-6.svg';
import meta7 from '@/assets/images/meta/image-7.svg';
import meta8 from '@/assets/images/meta/image-8.svg';
import meta9 from '@/assets/images/meta/image-9.svg';
import meta10 from '@/assets/images/meta/image-10.svg';
import meta11 from '@/assets/images/meta/image-11.svg';
import meta12 from '@/assets/images/meta/image-12.svg';
import meta13 from '@/assets/images/meta/image-13.svg';
import meta14 from '@/assets/images/meta/image-14.svg';
import meta15 from '@/assets/images/meta/image-15.svg';
import meta16 from '@/assets/images/meta/image-16.svg';
import meta17 from '@/assets/images/meta/image-17.svg';
import meta18 from '@/assets/images/meta/image-18.svg';
import meta19 from '@/assets/images/meta/image-19.svg';
import meta20 from '@/assets/images/meta/image-20.svg';
import meta21 from '@/assets/images/meta/image-21.svg';
import meta22 from '@/assets/images/meta/image-22.svg';
import meta23 from '@/assets/images/meta/image-23.svg';
import meta24 from '@/assets/images/meta/image-24.svg';
import meta25 from '@/assets/images/meta/image-25.svg';
import metaVid1 from '@/assets/videos/meta/video-1.mp4';
import metaVid2 from '@/assets/videos/meta/video-2.mp4';
import metaVid3 from '@/assets/videos/meta/video-3.mp4';
import metaVid4 from '@/assets/videos/meta/video-4.mp4';
import metaVid5 from '@/assets/videos/meta/video-5.mp4';
import metaVid6 from '@/assets/videos/meta/video-6.mp4';
import metaVid7 from '@/assets/videos/meta/video-7.mp4';

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
  {}, // 0
  {}, // 1
  { // 2
    video: [metaVid1],
    description: ["Meta Ad displays  in Candy Crush with new design"],
    // descriptionClass: "offset-top__34",
    priority: true,
  },
  { // 3
    video: [metaVid2, metaVid3],
    subtitle: ["Watch & Browse", "App ad Video"],
    description: ["Brand", "App"],
    class: "media-min-width-260",
    priority: true,
  },
  { image: meta3, class: "vector-image" }, // 4
  metaGridContent, // 5
  { // 6
    video: [metaVid4, metaVid5], // to do. waiting for assests correcttion
    // class: "meta-video-nudge-80",
  },
  { // 7
    image: [meta18, meta19, meta20],
    subtitle: ["9:16 Ad on Facebook Feed - iOS", "9:16 before - Android", "9:16 after - Android"],
    description: [
      "",
      "Before: we had a problem with digestibility & cognitive load - 14 UI elements to process",
      "After: a focused experience, giving users time to recognise the brand then focus in digesting the ad media",
    ],
    shadow: true,
  },
  { // 8
    image: [meta21, meta22, meta23, meta24],
    description: ["16:9 video ad", "1:1 video ad", "4:5 video ad", "9:16 video ad"],
    shadow: true,
  },
  { // 9
    image: [meta25],
    description: ["Optimised for 4:5 and 9:16 ratios, with horizontal App Store screenshots."],
    descriptionClass: "offset-top__34",
    class: "standalone-image",
  },
  { video: metaVid6, class: "meta-video-nudge-80" }, // 10
  {}, // 11
  { video: metaVid7, class: "meta-video-nudge-80" }, // 12
];
