import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, ctaText, sideImage, playButton }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="cta-button">{ctaText}</button>
      </div>
      <div className="hero-image-container">
        <img src={sideImage} alt="Side Visual" className="hero-image" />
        {playButton && (
          <div className="play-button" onClick={handlePlayButtonClick}>
            {!isVideoPlaying ? (
              <span>▶</span>
            ) : (
              <span>■</span> /* Placeholder for video stop icon */
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
