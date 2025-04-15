
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { projectsContent } from "../data/content";
import '../styles/ProjectDetail.scss';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const project = projectsContent.projects.find(
    (p) => p.slug === slug
  );
  
  // Check if user has access (has entered password)
  useEffect(() => {
    const hasAccess = sessionStorage.getItem("hasAccess");
    if (!hasAccess) {
      navigate("/");
    }
  }, [navigate]);
  
  // Redirect to projects page if project not found
  useEffect(() => {
    if (!project) {
      navigate("/projects");
    }
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }
  
  return (
    <Layout>
      <div className="project-detail">
        <div className="project-detail__container">
          <div className="project-detail__header">
            <h1 className="project-detail__header-title">
              {project.title}
            </h1>
            <p className="project-detail__header-description">
              {project.description}
            </p>
          </div>
          
          <div className="project-detail__hero image-reveal">
            <img
              src={project.heroImage}
              alt={project.title}
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.complete) {
                  target.parentElement?.classList.add('revealed');
                }
              }}
            />
          </div>
          
          <div className="project-detail__details">
            {project.details.map((detail, index) => (
              <div 
                key={index} 
                className="project-detail__details-item animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="project-detail__details-item-title">{detail.title}</h3>
                <p className="project-detail__details-item-content">{detail.content}</p>
              </div>
            ))}
          </div>
          
          <div className="project-detail__meta">
            <div>
              <h3 className="project-detail__meta-title">Technologies</h3>
              <ul className="project-detail__meta-technologies">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="project-detail__meta-technologies-item">{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="project-detail__meta-title">Year</h3>
              <p>{project.year}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
