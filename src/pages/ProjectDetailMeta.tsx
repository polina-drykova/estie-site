import React from "react";
import ProjectContent from "../components/ProjectContent";
import LazyImage from '../components/LazyImage';
import metaLanding from '/meta-landing.svg';
import metaHeader from '/meta-header.svg';

interface ProjectDetail {
  title: string;
  header?: string;
  className?: string;
  content?: string[];
  customBackground?: boolean;
}

interface Project {
  title: string;
  slug: string;
  details: ProjectDetail[];
}

interface ProjectDetailFlurryProps {
  project: Project;
}

const ProjectDetailFlurry: React.FC<ProjectDetailFlurryProps> = ({ project }) => {
  return (
    <div className="layout-content">
      <div className="layout-content__container">
        <div className="layout-content__content content-meta">
          <LazyImage src={metaHeader} alt="meta-header" className="showcase-image-meta-header" />
          <h1 className="layout-content__headline mb-8">{project.title}</h1>
        </div>
        <div className="showcase-image-wrapper">
          <LazyImage src={metaLanding} alt="flurry-landing" className="showcase-image-meta" />
        </div>
        <div>
          {project.details.map((detail, index) => (
            <React.Fragment key={index}>
              <div className={`d-flex ${detail.customBackground ? 'custom-background-wrapper' : ''}`}>
                {detail.customBackground && <div className="custom-background"></div>}
                <ProjectContent
                  title={detail.title}
                  header={detail.header}
                  content={detail.content}
                  className={detail.className}
                  index={index}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailFlurry;
