import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  threshold?: number; // optional config
}

const VisibilityBlock: React.FC<Props> = ({ children, className = '', threshold = 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`visibility-block ${className} ${isVisible ? 'visible' : 'hidden'}`}
    >
      {children}
    </div>
  );
};

export default VisibilityBlock;
