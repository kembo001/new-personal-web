import React, { useRef, useEffect, useState } from 'react';
import Walking from '../Images/walking.gif';
import './Skills.scss';
import SkillSubtitle from './SkillSubtitle';

function Skills() {
  const skillsRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(skillsRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className={`skills ${inView ? 'animate' : ''}`} ref={skillsRef}>
        <div className="heading-primary">Skills</div>
      {/* This container will hold both the walking GIF and the line underneath. */}
      <div className="walking-line-container">
        <img className="walking-gif" src={Walking} alt="Walking" />

        {/* The line that we’ll expand from left to right at the same pace */}
        <div className="divider"></div>
      </div>

      <div className="skills-text">
          <p>Learning is a way of life for me—I’m constantly seeking new challenges and opportunities to grow. While I am proficient in a range of technologies, I’m always driven to broaden my skill set and stay ahead in an ever-evolving field.</p>

<SkillSubtitle />


      </div>
    </div>
  );
}

export default Skills;
