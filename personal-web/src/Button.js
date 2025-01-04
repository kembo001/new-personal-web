import hoverSoundFile from "./Images/hover.mp3"; // Adjust path as needed
import React, { useEffect, useRef, useState } from "react";
import './Button.css'

const Button = ({ href, title, children, className }) => {
  const audioRef = useRef(null);
  const [canPlayAudio, setCanPlayAudio] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(hoverSoundFile);
    // Add an event listener for user interaction
    const enableAudio = () => setCanPlayAudio(true);
    window.addEventListener("click", enableAudio);

    return () => {
      window.removeEventListener("click", enableAudio);
    };
  }, []);

  const handleMouseEnter = () => {
    if (canPlayAudio && audioRef.current) {
      audioRef.current.currentTime = 0; // Reset sound to start
      audioRef.current.play();
    }
  };

  return (
    <a
      href={href}
      title={title}
      className={`btn-primary ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </a>
  );
};

export default Button;
