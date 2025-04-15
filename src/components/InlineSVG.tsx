import React, { useEffect, useState } from 'react';

type RawSVG = string;

type ResponsiveSVG = {
  desktop: RawSVG;
  tablet: RawSVG;
  mobile: RawSVG;
};

type InlineSVGProps = {
  src: RawSVG | ResponsiveSVG;
  alt?: string;
  className?: string;
  role?: string;
};

const InlineSVG: React.FC<InlineSVGProps> = ({
  src,
  alt = '',
  className = '',
  role = 'img',
}) => {
  const getInitialSVG = (): RawSVG => {
    if (typeof src === 'string') return src;

    if (typeof window !== 'undefined') {
      if (window.matchMedia('(min-width: 1024px)').matches) return src.desktop;
      if (window.matchMedia('(min-width: 768px)').matches) return src.tablet;
    }

    return src.mobile;
  };

  const [selectedSVG, setSelectedSVG] = useState<RawSVG>(() =>
    typeof src === 'string' ? src : getInitialSVG()
  );

  useEffect(() => {
    if (typeof src === 'string') return;

    const updateSVG = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setSelectedSVG(src.desktop);
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setSelectedSVG(src.tablet);
      } else {
        setSelectedSVG(src.mobile);
      }
    };

    updateSVG();
    window.addEventListener('resize', updateSVG);
    return () => window.removeEventListener('resize', updateSVG);
  }, [src]);

  return (
    <span
      className={className}
      role={role}
      aria-label={alt}
      style={{ display: 'block', width: '100%', height: 'auto' }}
      dangerouslySetInnerHTML={{ __html: selectedSVG }}
    />
  );
};

export default InlineSVG;
