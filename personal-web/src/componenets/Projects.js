import React, { useRef, useEffect, useState } from 'react';
import Walking from '../Images/walking-reverse.gif';
import './Project.scss'; 
import myProjects from './MyProjects';


function Projects() {
  const projectsRef = useRef(null);
  const [inView, setInView] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(projectsRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div className={`projects ${inView ? 'animate' : ''}`} ref={projectsRef}>
      <div className="heading-primary">Projects</div>

      <div className="walking-line-container">
        <img className="walking-gif" src={Walking} alt="Walking" />
        <div className="divider"></div>
      </div>

      <div className="projects-grid">
        {myProjects.map((proj, i) => (
          <div className="project-card" key={i}>
            <img src={proj.image} alt={proj.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{proj.title}</h3>
              <ul className="project-tech-list">
                {proj.tech.map((tech, j) => (
                  <li key={j}>{tech}</li>
                ))}
              </ul>
              <p className="project-description">{proj.description}</p>
              <div className="project-links">
          <a  className='btn-primary' href={proj.repo} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
          {proj.liveDemo && (
            <a  className='btn-secondary' href={proj.liveDemo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
