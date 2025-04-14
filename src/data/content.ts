import {
  flurryContent,
} from './flurry/flurryContent';
import {
  metaContent,
} from './meta/metaContent';

export const siteConfig = {
  name: "Estie",
  description: "A portfolio showcasing design and technology work",
  ogImage: "/og-image.png",
  author: "Estie",
  email: "hello@estie.design",
  metaTitle: "Estie | Design & Technology",
  metaDescription: "Crafting technology products for people for over 13 years.",
  password: "1234" // This would be replaced with an environment variable in production
};

export const homeContent = {
  headline: "Between technology, the arts, & human intuition.",
  introduction: "Hi, I'm Estie. For 13 years, I've been crafting technology products for people.",
  ctaText: "Latest work"
};

export const projectsContent = {
  intro: {
    title: "Recent work",
    description: "Explore recent case studies."
  },
  projects: [
    flurryContent,
    metaContent,
  ]
};
