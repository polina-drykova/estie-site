// import meta1 from '@/assets/images/meta/meta-1.svg';
// import meta1Mobile from '@/assets/images/meta/meta-1-mobile.svg';
// import meta1Tablet from '@/assets/images/meta/meta-1-tablet.svg';
// import meta2 from '@/assets/images/meta/meta-2.svg';
// import meta2Mobile from '@/assets/images/meta/meta-2-mobile.svg';
import meta3 from '@/assets/images/meta/image-3.svg';
// import meta3Mobile from '@/assets/images/meta/meta-3-mobile.svg';
// import meta4 from '@/assets/images/meta/meta-4.svg';
// import meta5 from '@/assets/images/meta/meta-5.svg';
// import meta6 from '@/assets/images/meta/meta-6.svg';
// import meta6Mobile from '@/assets/images/meta/meta-6-mobile.svg';
// import metaPromo from '@/assets/videos/meta/meta_promo.mp4';
// import metaV3 from '@/assets/videos/meta/fluffy_3.0.mp4';
// import meta7 from '@/assets/images/meta/meta-7.svg';
// import meta8 from '@/assets/images/meta/meta-8.svg';
// import meta9 from '@/assets/images/meta/meta-9.svg';
// import meta10 from '@/assets/images/meta/meta-10.svg';
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

export const metaMediaContent = [
  {}, // 0
  {}, // 1
  { // 2
    video: [metaVid1],
    description: ["Meta Ad displays  in Candy Crush with new design"],
    // descriptionClass: "offset-top__34",
  },
  { // 3
    video: [metaVid2, metaVid3],
    subtitle: ["Watch & Browse", "App ad Video"],
    description: ["Brand", "App"],
  },
  { image: meta3, class: "vector-image" }, // 4
  {}, // 5
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
