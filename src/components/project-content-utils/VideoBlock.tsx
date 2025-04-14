import React from 'react';
import AutoplayVideo from '../AutoplayVideo';
import LazyImage from '../LazyImage';
import Shadow from '@/assets/images/shadow.svg';

type Props = {
  videos: string | string[];
  poster?: string;
  shadow?: boolean | boolean[];
  subtitle?: string | string[];
  description?: string | string[];
  subtitleClass?: string;
  descriptionClass?: string;
  className?: string;
  wrapperClassName?: string,
};

const VideoBlock: React.FC<Props> = ({
  videos,
  poster,
  shadow,
  className,
  subtitle,
  description,
  subtitleClass,
  wrapperClassName,
  descriptionClass,
}) => {
  const videoArray = Array.isArray(videos) ? videos : [videos];
  const shadowArray = Array.isArray(shadow) ? shadow : videoArray.map(() => shadow);
  const subtitleArray = Array.isArray(subtitle) ? subtitle : videoArray.map(() => subtitle);
  const descriptionArray = Array.isArray(description) ? description : videoArray.map(() => description);

  return (
    <div className={`video-block-group ${wrapperClassName}`}>
      {videoArray.map((src, i) => (
        <div className="video-block-item" key={i}>
          {subtitleArray[i] && (
            <div className={`media-subtitle ${subtitleClass}`}>
              {subtitleArray[i]}
            </div>
          )}

          <div className="media-wrapper">
            <AutoplayVideo src={src} poster={poster} className={className} />
            {shadowArray[i] && (
              <LazyImage src={Shadow} alt="Shadow" className={Array.isArray(videos) ? "image-shadows" : "image-shadow"} />
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

export default VideoBlock;
