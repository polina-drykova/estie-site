import React from 'react';

interface InlineSVGProps {
  src: string; // raw SVG string (e.g. imported with ?raw)
  alt?: string;
  className?: string;
  role?: string;
}

const InlineSVG: React.FC<InlineSVGProps> = ({
  src,
  alt = '',
  className = '',
  role = 'img',
}) => {
  return (
    <span
      className={className}
      role={role}
      aria-label={alt}
      dangerouslySetInnerHTML={{ __html: src }}
    />
  );
};

export default InlineSVG;
