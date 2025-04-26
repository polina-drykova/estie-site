import { useEffect, useState } from 'react';
import LazyImage from '../LazyImage';
import '../../styles/SimpleImageGrid.scss';
import InlineSVG from '../InlineSVG';

type ImageItem = {
  src: string | { desktop: string; tablet: string; mobile: string };
  description: string;
};

const SimpleImageGrid = ({ images }: { images: ImageItem[] }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const columns = 4;

  const fullRowsCount = Math.floor(images.length / columns) * columns;
  const fullRows = images.slice(0, fullRowsCount);
  const lastRow = images.slice(fullRowsCount);

  const emptySlots = isDesktop && lastRow.length > 0 ? columns - lastRow.length : 0;
  const emptyBefore = Math.floor(emptySlots / 2);
  const emptyAfter = emptySlots - emptyBefore;

  return (
    <div className="simple-image-grid">
      {/* Full rows without empty slots */}
      {fullRows.map((item, index) => (
        <div className="simple-image-grid-item" key={`full-${index}`}>
          <InlineSVG src={item.src} alt="Grid Image" />
          <div className="simple-image-grid-description">{item.description}</div>
        </div>
      ))}

      {/* Only last row with empty divs around */}
      {emptySlots > 0 &&
        Array.from({ length: emptyBefore }).map((_, idx) => (
          <div className="simple-image-grid-item empty" key={`empty-before-${idx}`} />
        ))}

      {lastRow.map((item, index) => (
        <div className="simple-image-grid-item" key={`last-${index}`}>
          <InlineSVG src={item.src} alt="Grid Image" />
          <div className="simple-image-grid-description">{item.description}</div>
        </div>
      ))}

      {emptySlots > 0 &&
        Array.from({ length: emptyAfter }).map((_, idx) => (
          <div className="simple-image-grid-item empty" key={`empty-after-${idx}`} />
        ))}
    </div>
  );
};

export default SimpleImageGrid;