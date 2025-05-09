import React from "react";
import ProjectContent from "../components/ProjectContent";
import metaLanding from "/meta-landing.svg?raw";
import metaHeader from "/meta-header.svg?raw";
import InlineSVG from "../components/InlineSVG";
import VisibilityBlock from '../components/VisibilityBlock';

interface ProjectDetail {
  title: string;
  header?: string;
  className?: string;
  content?: string[];
  customBackground?: boolean;
  desktopOnly?: boolean;
  desktopHidden?: boolean;
}

interface Project {
  subtitle: string;
  slug: string;
  details: ProjectDetail[];
}

interface ProjectDetailFlurryProps {
  project: Project;
}

const ProjectDetailFlurry: React.FC<ProjectDetailFlurryProps> = ({
  project,
}) => {
  return (
    <div className="layout-content">
      <div className="layout-content__container">
        <VisibilityBlock className="layout-content__content content-meta">
          <InlineSVG
            src={metaHeader}
            alt="meta-header"
            className="showcase-image-meta-header"
          />

          <h1 className="layout-content__headline mb-8">{project.subtitle}</h1>
        </VisibilityBlock>
        <VisibilityBlock className="showcase-image-wrapper media-visibility-block">
          <InlineSVG
            src={metaLanding}
            alt="meta-landing"
            className="showcase-image-meta"
          />
        </VisibilityBlock>
        <div>
          {project.details.map((detail, index) => (
            <div
              className={`d-flex
                ${detail.customBackground ? "custom-background-wrapper" : ""}
                ${detail.desktopOnly ? "desktop-only" : ""}
                ${detail.desktopHidden ? "desktop-hidden" : ""}`}
              key={index}
            >
              {detail.customBackground && (
                <div className="custom-background"></div>
              )}
              <ProjectContent
                title={detail.title}
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
