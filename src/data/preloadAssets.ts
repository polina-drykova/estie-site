import {
  flurryAssetsToPreloadPriority,
  flurryAssetsToPreload,
} from './flurry/flurryAssets';
import {
  metaAssetsToPreloadPriority,
  metaAssetsToPreload,
} from './meta/metaAssets';

const projectsAssetsToPreloadPriority = [
  ...flurryAssetsToPreloadPriority,
  ...metaAssetsToPreloadPriority,
  {
    href: '/flurry-landing.svg',
    as: 'image',
  },
  {
    href: '/meta-landing.svg',
    as: 'image',
  },
];

type PreloadAsset = {
  href: string;
  as: 'image' | 'video' | 'font' | 'script' | 'style';
  type?: string;
  media?: string;
};

const injected = new Set<string>();

export function preloadAssets(assets: PreloadAsset[] | string) {
  const resolvedAssets = typeof assets === 'string' ? preloadMap[assets] : assets;

  if (!resolvedAssets || !Array.isArray(resolvedAssets)) {
    console.warn(`No preload assets found for: ${assets}`);
    return;
  }

  resolvedAssets.forEach(({ href, as, type, media }) => {
    if (injected.has(href)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = href;
    if (type) link.type = type;
    if (media) link.media = media;

    document.head.appendChild(link);
    injected.add(href);
  });
}

const preloadMap: Record<string, PreloadAsset[]> = {
  'flurry-ai': flurryAssetsToPreload as PreloadAsset[],
  meta: metaAssetsToPreload as PreloadAsset[],
  projects: projectsAssetsToPreloadPriority as PreloadAsset[],
};
