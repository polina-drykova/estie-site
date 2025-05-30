import React from 'react';
import HtmlContentBlock from './project-content-utils/HtmlContentBlock';
import ImageBlock from './project-content-utils/ImageBlock';
import VideoBlock from './project-content-utils/VideoBlock';
import Collage from './project-content-utils/Collage';
import SimpleImageGrid from './project-content-utils/SimpleImageGrid';
import { useIsMobile } from '@/hooks/use-mobile';
import VisibilityBlock from './VisibilityBlock';

type ImageItem = {
  src: string;
  description: string;
};

interface BaseContentItem {
  image?: string | string[];
  video?: string | string[];
  poster?: string;
  shadow?: boolean | boolean[];
  subtitle?: string | string[];
  description?: string | string[];
  subtitleClass?: string;
  descriptionClass?: string;
  class: string;
  collage?: {
    type: 'image' | 'video';
    src: string;
    poster?: string;
  }[][];
  grid?: ImageItem[];
  priority?: boolean;
}

type ContentItem = 
  | string
  | BaseContentItem
  | {
      mobile: BaseContentItem;
      desktop: BaseContentItem;
    };

interface ProjectsContentProps {
  title?: string;
  header?: string;
  className?: string;
  content: ContentItem[];
  index?: number;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({ title, header, content, className, index }) => {
  const isMobile = useIsMobile();

  return (
    <div className="project-content">
      <VisibilityBlock>
        {header && <div className='heading'>{header}</div>}
        {title && <h3>{title}</h3>}
      </VisibilityBlock>
      {content && (
        <div className={`project-content-list-wrapper ${index % 2 === 0 ? 'even' : 'odd'}`}>
          {content.map((item, itemIndex) => {
            let finalItem = item;

            // Choose mobile or desktop version if available
            if (typeof item !== 'string' && 'mobile' in item && 'desktop' in item) {
              finalItem = isMobile ? item.mobile : item.desktop;
            }
            const safeItem = finalItem as BaseContentItem;
            const isMedia = !!(safeItem.collage || safeItem.grid || safeItem.video || safeItem.image);

            return (
              <VisibilityBlock key={itemIndex} className={`item-wrapper ${isMedia ? 'media-visibility-block' : ''}`}>
                {typeof safeItem === 'string' ? (
                  <HtmlContentBlock html={safeItem} />
                ) : safeItem.collage ? (
                  <Collage columns={safeItem.collage} />
                ) : safeItem.grid ? (
                  <SimpleImageGrid images={safeItem.grid} />
                ) : safeItem.video ? (
                  <VideoBlock
                    videos={safeItem.video}
                    poster={safeItem.poster}
                    shadow={safeItem.shadow}
                    subtitle={safeItem.subtitle}
                    description={safeItem.description}
                    subtitleClass={safeItem.subtitleClass}
                    descriptionClass={safeItem.descriptionClass}
                    className={safeItem.class}
                    wrapperClassName={className}
                    priority={safeItem.priority}
                  />
                ) : safeItem.image ? (
                  <ImageBlock
                    images={safeItem.image}
                    shadow={safeItem.shadow}
                    subtitle={safeItem.subtitle}
                    description={safeItem.description}
                    subtitleClass={safeItem.subtitleClass}
                    descriptionClass={safeItem.descriptionClass}
                    className={safeItem.class}
                    wrapperClassName={className}
                    priority={safeItem.priority}
                  />
                ) : null}
              </VisibilityBlock>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectsContent;
