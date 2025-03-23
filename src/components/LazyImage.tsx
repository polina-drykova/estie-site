import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt = 'Image', className }) => {
  // const [error, setError] = useState(false);

  return (
    // <div className="image-reveal">
      <img
        src={src}
        alt={alt}
        className={className}
        // loading='lazy'
        onLoad={(e) => {
          const target = e.target as HTMLImageElement;
          if (target.complete) {
            target.parentElement?.classList.add('revealed');
          }
        }}
        // onError={() => setError(true)}
      />
    // </div>
  );
};

export default LazyImage;
