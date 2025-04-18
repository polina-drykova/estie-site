
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { projectsContent } from "../data/content";
import Showcase from '/showcase.svg?raw';
import ShowcaseMobile from '/showcase-mobile-tablet.svg?raw';
import InlineSVG from '../components/InlineSVG';
import { Link } from "react-router-dom";
import '../styles/Projects.scss';
import { preloadAssets } from "@/data/preloadAssets";

const ShowcaseSrc = {
  desktop: Showcase,
  tablet: ShowcaseMobile,
  mobile: ShowcaseMobile,
};

const Projects = () => {
  const navigate = useNavigate();
  
  // Check if user has access (has entered password)
  useEffect(() => {
    const hasAccess = sessionStorage.getItem("hasAccess");
    if (!hasAccess) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="layout-content">
        <div className="layout-content__container">
          <div className="layout-content__content">
            <h1 className="layout-content__headline mb-8">{projectsContent.intro.title}</h1>
            <p className="layout-content__intro">{projectsContent.intro.description}</p>
          </div>
          <div className="projects-links-wrapper">
            {projectsContent.projects.map((project) => (
              <Link 
                to={`/projects/${project.slug}`}
                key={project.id}
                id={project.id}
                onPointerDown={() => {
                  preloadAssets(project.slug);
                }}
              >
                <h3
                  className="project__headline"
                >
                  {project.title}
                  {project.id === 'flurry-ai' && <div className="flurry-dot" />}
                </h3>
              </Link>
            ))}
          </div>
          <div className="showcase-image-wrapper">
            <InlineSVG src={ShowcaseSrc} alt="Logo" className="showcase-svg" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
