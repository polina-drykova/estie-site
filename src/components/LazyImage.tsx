import React from 'react';

type LazyImageProps = {
  src: string | { desktop: string; tablet: string; mobile: string };
  alt: string;
  className?: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '' }) => {
  if (typeof src === 'string') {
    // normal image
    return (
      // <img src={src} alt={alt} className={className} loading="lazy" />
      <img src={src} alt={alt} className={className} />
    );
  }

  // responsive image
  return (
    <picture className={className}>
      <source media="(min-width: 1024px)" srcSet={src.desktop} />
      <source media="(min-width: 768px)" srcSet={src.tablet} />
      {/* <img src={src.mobile} alt={alt} loading="lazy" /> */}
      <img src={src.mobile} alt={alt} />
    </picture>
  );
};

export default LazyImage;
