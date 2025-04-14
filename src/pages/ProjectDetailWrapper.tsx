
import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { projectsContent } from "../data/content";
import ProjectDetailFlurry from './ProjectDetailFlurry';
import ProjectDetailMeta from './ProjectDetailMeta';
import CTAButton from "../components/CTAButton";
import { homeContent } from "../data/content";
import '../styles/ProjectDetail.scss';

const ProjectDetailWrapper = () => {
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
  
  // Redirect to work page if project not found
  useEffect(() => {
    if (!project) {
      navigate("/work");
    }
  }, [project, navigate]);
  
  const onCTAClick = () => {
    navigate("/work");
  };

  if (!project) {
    return null;
  }
  const projectComponents = {
    "flurry-ai": ProjectDetailFlurry,
    "meta": ProjectDetailMeta,
  };
  const Component = projectComponents[slug];

  return (
    <Layout>
      <Component project={project} />
      <div className="project-cta">
        <CTAButton variant="active" onClick={onCTAClick}>
          {homeContent.ctaText}
        </CTAButton>
      </div>
    </Layout>
  );
};

export default ProjectDetailWrapper;
