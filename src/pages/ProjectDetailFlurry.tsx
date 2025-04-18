import React from "react";
import ProjectContent from "../components/ProjectContent";
import InlineSVG from '../components/InlineSVG';
import FlurryLanding from '/flurry-landing.svg?raw';

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
        <div className="layout-content__content">
          <h1 className="layout-content__headline mb-8">{project.title}</h1>
        </div>
        <div className="showcase-image-wrapper">
          <InlineSVG src={FlurryLanding} alt="flurry-landing" className="showcase-image-flurry" />
        </div>
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
