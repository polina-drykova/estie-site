import React, { useEffect, useRef, useState } from 'react';
import '../styles/AutoplayVideo.scss';

type Props = {
  src: string;
  poster?: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  priority?: boolean;
};

const AutoplayVideo: React.FC<Props> = ({
  src,
  poster,
  className = '',
  muted = true,
  loop = true,
  priority,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasRendered, setHasRendered] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRendered) {
          setHasRendered(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [hasRendered]);

  useEffect(() => {
    if (!hasRendered || hasPlayed) return;

    const video = videoRef.current;
    if (video) {
      video.play()
        .then(() => setHasPlayed(true))
        .catch(() => {}); // mute autoplay policy might block
    }
  }, [hasRendered, hasPlayed]);

  return (
    <div ref={wrapperRef}>
      {/* {hasRendered && ( */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={muted}
          loop={loop}
          playsInline
          preload={priority ? 'auto' : 'metadata'}
          className={`autoplay-video ${className} playing`}
        />
      {/* )} */}
    </div>
  );
};

export default AutoplayVideo;
