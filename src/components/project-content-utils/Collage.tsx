import React from 'react';
import LazyImage from '../LazyImage';
import AutoplayVideo from '../AutoplayVideo';
import '../../styles/Collage.scss';

type CollageItem = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
};

type CollageProps = {
  columns: CollageItem[][];
};

const Collage: React.FC<CollageProps> = ({ columns }) => {
  return (
    <div className="collage-grid">
      {/* Column 0: two rows */}
      <div className="collage-column collage-column-0">
        <div className="collage-row collage-row-0">
          {columns[0].slice(0, 2).map((item, i) => (
            <div className="collage-item" key={i}>
              {item.type === 'image' ? (
                <LazyImage src={item.src} alt={`Collage item ${i + 1}`} />
              ) : (
                <AutoplayVideo src={item.src} poster={item.poster} />
              )}
            </div>
          ))}
        </div>
        <div className="collage-row collage-row-1">
          {columns[0].slice(2, 4).map((item, i) => (
            <div className="collage-item" key={i + 2}>
              {item.type === 'image' ? (
                <LazyImage src={item.src} alt={`Collage item ${i + 3}`} />
              ) : (
                <AutoplayVideo src={item.src} poster={item.poster} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Column 1: three rows */}
      <div className="collage-column collage-column-1">
        {/* Row 1: Single item (centered) */}
        <div className="collage-row collage-row-0">
          {columns[1].slice(0, 1).map((item, i) => (
            <div className="collage-item" key={i}>
              {item.type === 'image' ? (
                <LazyImage src={item.src} alt={`Collage item ${i + 5}`} />
              ) : (
                <AutoplayVideo src={item.src} poster={item.poster} />
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Two items (bottom aligned) */}
        <div className="collage-row collage-row-1">
          {columns[1].slice(1, 3).map((item, i) => (
            <div className="collage-item" key={i + 1}>
              {item.type === 'image' ? (
                <LazyImage src={item.src} alt={`Collage item ${i + 6}`} />
              ) : (
                <AutoplayVideo src={item.src} poster={item.poster} />
              )}
            </div>
          ))}
        </div>

        {/* Row 3: Single item (centered) */}
        <div className="collage-row collage-row-2">
          {columns[1].slice(3, 4).map((item, i) => (
            <div className="collage-item" key={i + 3}>
              {item.type === 'image' ? (
                <LazyImage src={item.src} alt={`Collage item ${i + 8}`} />
              ) : (
                <AutoplayVideo src={item.src} poster={item.poster} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collage;
