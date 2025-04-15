import React from 'react';
import LazyImage from '../LazyImage';
import Shadow from '@/assets/images/shadow.svg';

type Props = {
  images: string | string[];
  shadow?: boolean | boolean[];
  subtitle?: string | string[];
  description?: string | string[];
  subtitleClass?: string;
  descriptionClass?: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
};

const ImageBlock: React.FC<Props> = ({
  images,
  shadow,
  className,
  subtitle,
  description,
  subtitleClass,
  wrapperClassName,
  descriptionClass,
  priority,
}) => {
  const imageArray = Array.isArray(images) ? images : [images];
  const shadowArray = Array.isArray(shadow) ? shadow : imageArray.map(() => shadow);
  const subtitleArray = Array.isArray(subtitle) ? subtitle : imageArray.map(() => subtitle);
  const descriptionArray = Array.isArray(description) ? description : imageArray.map(() => description);

  return (
    <div className={`image-block-group ${wrapperClassName}`}>
      {imageArray.map((src, i) => (
        <div className="image-block-item" key={i}>
          {subtitleArray[i] && (
            <div className={`media-subtitle ${subtitleClass}`}>
              {subtitleArray[i]}
            </div>
          )}

          <div className="media-wrapper">
            <LazyImage src={src} alt="Project Image" className={className} priority={priority} />
            {shadowArray[i] && (
              <LazyImage src={Shadow} alt="Shadow" className={Array.isArray(images) ? "image-shadows" : "image-shadow"} />
            )}
          </div>

          {descriptionArray[i] && (
            <div className={`media-description ${descriptionClass}`}>{descriptionArray[i]}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageBlock;
