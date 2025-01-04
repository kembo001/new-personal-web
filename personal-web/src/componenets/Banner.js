import React, { useEffect, useState } from 'react';
import './Banner.css'
import Button from '../Button';

function Banner() {
  const [typedText, setTypedText] = useState(''); // Initialize with an empty string
  const [showPeriod, setShowPeriod] = useState(true);
  const targetText = 'Online Excellence';

  useEffect(() => {
    let currentCharIndex = 0;
    const typingInterval = 100; // Adjust the typing speed as needed

    const typingTimer = setInterval(() => {
      if (currentCharIndex < targetText.length) {
        setTypedText(targetText.slice(0, currentCharIndex + 1));
        currentCharIndex += 1;
      } else {
        clearInterval(typingTimer); // Stop the typing animation
        // Start the period flashing
        const periodInterval = 900; // Adjust the flashing speed as needed
        setInterval(() => {
          setShowPeriod((prevShowPeriod) => !prevShowPeriod);
        }, periodInterval);
      }
    }, typingInterval);

    return () => {
      clearInterval(typingTimer); // Cleanup when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      <div className="banner">
        <div className="text">
          <h1>
            Designing,<br></br> Developing,<br></br> and Delivering {typedText}
            {showPeriod && '.'} {/* Display the period based on showPeriod state */}
          </h1>
          <div className="my-name">
            <h1>Full-Stack<br></br>Web Developer</h1>
          </div>
        </div>
        <div>
          <p>
            You’ve finally landed. Ready for a beautiful and performant new website? We’re your award-winning web design crew awaiting countdown.
          </p>
          <Button href="#contact-me" title="Consultation">
        <span>-&gt;</span> Start Your Project
      </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
