
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/ProjectCard.scss';

interface ProjectCardProps {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  slug,
  title,
  thumbnail,
  shortDescription
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <Link 
      to={`/project/${slug}`} 
      className={`project-card ${isVisible ? 'project-card--visible' : ''}`}
      ref={cardRef}
    >
      <div className="project-card__inner">
        <div className="image-reveal">
          <img 
            src={thumbnail} 
            alt={title}
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.complete) {
                target.parentElement?.classList.add('revealed');
              }
            }}
            loading="lazy"
          />
        </div>
        <div className="project-card__content">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__description">{shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
