import React from "react";
import ProjectContent from "../components/ProjectContent";
import LazyImage from '../components/LazyImage';
import metaLanding from '/meta-landing.svg?raw';
import metaHeader from '/meta-header.svg?raw';
import InlineSVG from '../components/InlineSVG';

interface ProjectDetail {
  title: string;
  header?: string;
  className?: string;
  content?: string[];
  customBackground?: boolean;
}

interface Project {
  subtitle: string;
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
          {/* <LazyImage src={metaHeader} alt="meta-header" className="showcase-image-meta-header" /> */}
          <InlineSVG src={metaHeader} alt="meta-header" className="showcase-image-meta-header" />

          <h1 className="layout-content__headline mb-8">{project.subtitle}</h1>
        </div>
        <div className="showcase-image-wrapper">
          {/* <LazyImage src={metaLanding} alt="meta-landing" className="showcase-image-meta" /> */}
          <InlineSVG src={metaLanding} alt="meta-landing" className="showcase-image-meta" />

        </div>
        <div>
          {project.details.map((detail, index) => (
            <div className={`d-flex ${detail.customBackground ? 'custom-background-wrapper' : ''}`} key={index}>
              {detail.customBackground && <div className="custom-background"></div>}
              <ProjectContent
                title={detail.subtitle}
                header={detail.header}
                content={detail.content}
                className={detail.className}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailFlurry;
