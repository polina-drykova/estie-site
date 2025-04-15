import React from 'react';

type LazyImageProps = {
  src: string | { desktop: string; tablet: string; mobile: string };
  alt: string;
  className?: string;
  priority?: boolean;
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', priority = false }) => {
  if (typeof src === 'string') {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    );
  }

  return (
    <picture className={className}>
      <source media="(min-width: 1024px)" srcSet={src.desktop} />
      <source media="(min-width: 768px)" srcSet={src.tablet} />
      <img
        src={src.mobile}
        alt={alt}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    </picture>
  );
};


export default LazyImage;
