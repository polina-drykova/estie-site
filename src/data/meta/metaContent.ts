import {
  metaMediaContent,
} from './metaAssets';


export const metaContent = {
  id: "meta",
  title: "Meta Audience Network",
  subtitle: "Audience Network",
  slug: "meta",
  thumbnail: "/flurry-thumbnail.png",
  details: [
    {
      title: "What is Audience Network?",
      content: [
        "Audience Network (AN) is a network of Facebook-approved mobile apps and websites where Meta runs ads.",
        "Meta bids to serve ads in mobile apps like Candy Crush, displaying native ad formats from Facebook, Instagram, WhatsApp, and more. These ads vary in aspect ratios, advertisers, and objectives.",
        "Recently, <u>competitor CTRs have significantly outperformed Meta's</u>, making it clear that AN needed an upgrade to stay competitive and drive engagement. However, AN hadn’t seen a redesign in six years due to the scale and complexity of the project. It was time for a change.",
        "<h3 class='text-center mar-t-19'>What is Audience Network? (Visually)</h3>",
        metaMediaContent[0],
        "<h3 class='text-center mar-t-19'>Meta wins bid to <br> display ad in Candy Crush</h3>",
        metaMediaContent[1],
        metaMediaContent[2],
      ],
      desktopOnly: true,
    },
    {
      title: "What is Audience Network?",
      content: [
        "Audience Network (AN) is a network of Facebook-approved mobile apps and websites where Meta runs ads.",
        "Meta bids to serve ads in mobile apps like Candy Crush, displaying native ad formats from Facebook, Instagram, WhatsApp, and more. These ads vary in aspect ratios, advertisers, and objectives.",
        "Recently, <u>competitor CTRs have significantly outperformed Meta's</u>, making it clear that AN needed an upgrade to stay competitive and drive engagement. However, AN hadn’t seen a redesign in six years due to the scale and complexity of the project. It was time for a change.",
        "<h3 class='text-center mar-t-104 mar-b-n-20'>How ads display on Audience network after our redesign.</h3>",
        metaMediaContent[1],
        metaMediaContent[2],
      ],
      desktopHidden: true,
    },
    {
      content: [
        "<h3 class='content-item-custom-header-2 text-center'>Old Experience</h3>",
        metaMediaContent[3],
        "<span class='text-center d-block'>Cluttered end card experience with low engagement</span>",
      ],
      className: "meta-video-mobile-crop",
    },
    {
      content: [
        "<span class='mt-228 mb-n-16 text-center d-block'>Problem to solve</span>",
        "<h3 class='text-center streamline-content'>Streamlining ads information through the ad journey from the first step in the ad to the end step before X-Out.</h3>",
        metaMediaContent[4],
      ],
    },
    {
      content: [
        metaMediaContent[5],
        "<h3 class='content-item-custom-header'>Building a Design System for AN</h3>",
        "Audience Network isn’t technically inside Meta (Facebook, Instagram, WhatsApp), so it hasn’t followed a unified Facebook design system over the years. This led to a variety of ad formats that looked and behaved differently.",
        "Our first task was to create a design system based on FDS (Facebook Design System) and tailor it to the unique needs of Audience Network.",
        "",
        "<h3 class='content-item-custom-header'>A Versatile Card Design System</h3>",
        "We developed a flexible card system that adapts seamlessly across advertisers, goals, platforms, devices, and aspect ratios. Built with reusable components, it has become a core framework the entire team now relies on.",
        metaMediaContent[6],
      ],
      customBackground: true,
    },
    {
      header: "Modular design across multiple scenarios.",
    },
    {
      title: "Card motion design.",
      content: [
        "With intentional motion design, the media card and its contents appear for a few seconds before collapsing, creating a smoother experience that enhances user engagement with the ad content.",
        metaMediaContent[7],
      ],
      className: "meta-video-custom-video-sizes",
    },
    {
      title: "Ad Translation from Facebook to AN",
      content: [
        "See how ad translation has evolved from Facebook to Audience Network—comparing yesterday’s experience to today’s redesigned approach.",
        metaMediaContent[8],
      ],
      className: "group-gap-56", // TODO mobile?
    },
    {
      title: "Seamless Adaptation Across Ratios",
      content: [
        "With millions of videos from various advertisers daily, AN handles a wide range of ratios and sizes. Our design ensures ads adapt smoothly to all screen dimensions for a consistent experience.",
        metaMediaContent[9], // TODO mobile
      ],
    },
    {
      content: [
        metaMediaContent[10],
      ],
    },
    {
      title: "Enhanced Endcard UX",
      content: [
        "For app ads, we designed a more interactive end card that leverages Play Store capabilities, incorporating media and app metadata for a richer experience.",
        metaMediaContent[11],
      ],
      className: "hidden-media-overflow",
    },
    {
      title: "Design System in Watch & Browse",
      content: [
        "We adapted our design system for other formats like Watch & Browse, ensuring it scales seamlessly across existing and future formats.",
        metaMediaContent[12],
      ],
    },
    {
      title: "Impact",
      content: [
        "By redesigning Audience Network’s ad formats and introducing a scalable design system, we aim to improve engagement, streamline ad experiences, and set a foundation for future innovation—not just at Meta, but across the ad industry. The anticipated impact of the redesign is a 5.1%–7.6% lift in AN Ads Score. Early tests show a +20.4% increase on the first cards, a +43.7% lift on Endcards, and a -51% reduction in reported ads.",
        metaMediaContent[13],
      ],
      className: "hidden-media-overflow",
    },
    {
      title: "Closing thoughts",
      content: [
        "Redesigning Audience Network after six years of stagnation was no small feat. Balancing advertiser needs, platform constraints, and a seamless user experience required thoughtful iteration—some screens went through nearly 84 versions. This project reinforced the power of modular scalable systems and motion design in driving engagement and usability.",
      ],
    },
    {
      title: "Thanks for reading.",
    },
  ],
};