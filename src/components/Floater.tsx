import React, { useEffect, useRef } from 'react';
import '../styles/Floater.scss';

const Floater: React.FC = () => {
  const floaterRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(window.scrollY);
  const scrollTimeoutRef = useRef<number | undefined>();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollY.current;
      lastScrollY.current = currentY;

      const el = floaterRef.current;
      if (!el) return;

      if (isScrollingDown) {
        el.classList.remove('release');   // clear release if present
        el.classList.add('stretch');      // stretch

        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = window.setTimeout(() => {
          el.classList.remove('stretch'); // remove stretch first
          el.classList.add('release');    // then trigger release
          
          // optional cleanup: remove release after animation
          setTimeout(() => el.classList.remove('release'), 200);
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return <div className="floater" ref={floaterRef} />;
};

export default Floater;
