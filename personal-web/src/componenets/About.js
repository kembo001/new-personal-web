import React, { useRef, useEffect, useState } from 'react';
import './About.scss';
import PersonalShot from '../Images/Personalshot1.jpg';

function About() {
  const aboutRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // unobserve to prevent re-triggering
          observer.unobserve(aboutRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className={`about-me ${inView ? 'animate' : ''}`} ref={aboutRef}>
      <div className="image-container">
        {/* The background circle that will bounce */}
        <div className="bg-circle"></div>
        {/* The actual image placed above the circle */}
        <img
          alt="Personal Headshot"
          title="Brandon Kemboi"
          src={PersonalShot}
        />
      </div>

      <div className="about-me-text">
        <div className="heading-primary">Brandon Kemboi</div>
        <div className="divider"></div>
        <div class="heading-subtitle"><p>Full-stack Web Developer with a passion for problem-solving, innovation, and creativity. Self-motivated by a deep love for web development and its limitless potential.</p><p>Always eager to learn and grow, I thrive on building solutions that make a meaningful impact. Currently open to new opportunities and ready to contribute to exciting projects.</p> </div>

      </div>
    </div>
  );
}

export default About;








