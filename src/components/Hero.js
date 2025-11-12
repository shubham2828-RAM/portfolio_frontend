// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Shubham Sharma</h1>
          <h2>Backend Developer</h2>
          <p className="hero-description">
            Results-driven Backend Developer specializing in Rust, microservices architecture, 
            and scalable systems. Experienced in building high-performance APIs and event-driven 
            solutions for logistics and communication platforms.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="code-content">
              <pre>{`Just like an async function, pause when needed, process 
  what life sends your way, and respond with something that 
  uplifts others. Growth isn’t blocking—it’s waiting with purpose.
`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;