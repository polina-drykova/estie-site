import React from 'react';
import HtmlContentBlock from './project-content-utils/HtmlContentBlock';
import ImageBlock from './project-content-utils/ImageBlock';
import VideoBlock from './project-content-utils/VideoBlock';
import Collage from './project-content-utils/Collage';
import { useIsMobile } from '@/hooks/use-mobile';

interface BaseContentItem {
  image?: string | string[];
  video?: string | string[];
  poster?: string;
  shadow?: boolean | boolean[];
  subtitle?: string | string[];
  description?: string | string[];
  subtitleClass?: string;
  class: string;
  collage?: {
    type: 'image' | 'video';
    src: string;
    poster?: string;
  }[][];
}

type ContentItem = 
  | string
  | BaseContentItem
  | {
      mobile: BaseContentItem;
      desktop: BaseContentItem;
    };

interface ProjectsContentProps {
  header?: string;
  className?: string;
  content: ContentItem[];
  index?: number;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({ header, content, className, index }) => {
  const isMobile = useIsMobile(); // ✅ detect device

  return (
    <div className="project-content">
      {header && <h3>{header}</h3>}

      {content && (
        <div className={`project-content-list-wrapper ${index % 2 === 0 ? 'even' : 'odd'}`}>
          {content.map((item, itemIndex) => {
            let finalItem = item;

            // ✅ Choose mobile or desktop version if available
            if (typeof item !== 'string' && 'mobile' in item && 'desktop' in item) {
              finalItem = isMobile ? item.mobile : item.desktop;
            }
            const safeItem = finalItem as BaseContentItem;


            return (
              <div key={itemIndex} className="item-wrapper">
                {typeof finalItem === 'string' ? (
                  <HtmlContentBlock html={finalItem} />
                ) : finalItem.collage ? (
                  <Collage columns={finalItem.collage} />
                ) : finalItem.video ? (
                  <VideoBlock
                    videos={finalItem.video}
                    poster={finalItem.poster}
                    shadow={finalItem.shadow}
                    subtitle={finalItem.subtitle}
                    description={finalItem.description}
                    subtitleClass={finalItem.subtitleClass}
                    className={finalItem.class}
                    wrapperClassName={className}
                  />
                ) : finalItem.image ? (
                  <ImageBlock
                    images={finalItem.image}
                    shadow={finalItem.shadow}
                    subtitle={finalItem.subtitle}
                    description={finalItem.description}
                    subtitleClass={finalItem.subtitleClass}
                    className={finalItem.class}
                    wrapperClassName={className}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectsContent;
