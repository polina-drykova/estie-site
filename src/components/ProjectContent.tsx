import React from 'react';
import HtmlContentBlock from './project-content-utils/HtmlContentBlock';
import ImageBlock from './project-content-utils/ImageBlock';
import VideoBlock from './project-content-utils/VideoBlock';

interface projectsContentProps {
  header?: string;
  className?: string;
  content: Array<
    | string
    | {
        image?: string | string[];
        video?: string | string[];
        poster?: string;
        shadow?: boolean | boolean[];
        subtitle?: string | string[];
        description?: string | string[];
        subtitleClass?: string;
        class: string;
      }
  >;
}

const ProjectsContent: React.FC<projectsContentProps> = ({ header, content, className }) => {
  return (
    <div className="project-content">
      {header && <h3>{header}</h3>}
      {content && <div className="project-content-list-wrapper">
        {content.map((item, index) => (
          <div key={index} className="item-wrapper">
            {typeof item === 'string' ? (
              <HtmlContentBlock html={item} />
            ) : item.video ? (
              <VideoBlock
                videos={item.video}
                poster={item.poster}
                shadow={item.shadow}
                subtitle={item.subtitle}
                description={item.description}
                subtitleClass={item.subtitleClass}
                className={item.class}
                wrapperClassName={className}
              />
            ) : item.image ? (
              <ImageBlock
                images={item.image}
                shadow={item.shadow}
                subtitle={item.subtitle}
                description={item.description}
                subtitleClass={item.subtitleClass}
                className={item.class}
                wrapperClassName={className}
              />
            ) : null}
          </div>
        ))}
      </div>}
    </div>
  );
};

export default ProjectsContent;
