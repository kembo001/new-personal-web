import React, { useRef, useEffect, useState } from 'react';
import Walking from '../Images/walking-reverse.gif';
import './Project.scss'; // We'll define our SCSS or CSS here

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
      {/* Heading at the top */}
      <div className="heading-primary">Projects</div>
      
      {/* Container for the GIF and the line. We'll animate from right to left. */}
      <div className="walking-line-container">
        <img className="walking-gif" src={Walking} alt="Walking" />
        <div className="divider"></div>
      </div>

      {/* Some example text about your projects */}
      <div className="projects-text">
        <div>Project 1</div>
        <div>Project 2</div>
        <div>Project 3</div>
      </div>
    </div>
  );
}

export default Projects;
