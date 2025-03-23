import React, { useState } from 'react';
import LazyImage from '../components/LazyImage';
import Shadow from '@/assets/images/shadow.svg';

interface projectsContentProps {
  header?: string;
  content: Array<
    string | {
      image: string;
      shadow?: boolean;
      class: string;
    }
  >;
}
const HtmlContent = ({ html }: { html: string }) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const projectsContent: React.FC<projectsContentProps> = ({ header, content }) => {

  return (
    <div className='project-content'>
      {header && <h3>{header}</h3>}
      {content && <div className='project-content-list-wrapper'>
        {content.map((item, index) => (
          <div key={index} className="item-wrapper">
            {typeof item === "string" ? (
                <HtmlContent html={item} />
              ) : (
                <>
                  <LazyImage src={item.image} alt="Project Image" className={item.class || ""} />
                  {item.shadow && (
                    <LazyImage src={Shadow} alt="Shadow" className="image-shadow" />
                  )}
                </>
              )}
          </div>
        ))}
      </div>}
    </div>
  );
};

export default projectsContent;
