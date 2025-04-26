import React from "react";
import ProjectContent from "../components/ProjectContent";
import InlineSVG from '../components/InlineSVG';
import FlurryLanding from '/flurry-landing.svg?raw';
import VisibilityBlock from '../components/VisibilityBlock';

interface ProjectDetail {
  title: string;
  className: string;
  content: string[];
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
        <VisibilityBlock className="layout-content__content">
          <h1 className="layout-content__headline mb-8">{project.title}</h1>
        </VisibilityBlock>
        <VisibilityBlock className="showcase-image-wrapper media-visibility-block">
          <InlineSVG src={FlurryLanding} alt="flurry-landing" className="showcase-image-flurry" />
        </VisibilityBlock>
        <div>
          {project.details.map((detail, index) => (
            <ProjectContent title={detail.title} content={detail.content} className={detail.className} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailFlurry;
