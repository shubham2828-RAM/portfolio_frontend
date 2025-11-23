// components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Backend Developer with expertise in designing and developing 
              scalable systems using Rust, Actix-Web, and MongoDB. Currently working at RapidShyp, 
              where I've built and maintained the Buyer Communication Platform.
            </p>
            <p>
              My focus is on creating high-performance, reliable backend systems that handle 
              real-time communication and logistics workflows. I specialize in microservices 
              architecture, database optimization, and event-driven systems.
            </p>
            <div className="achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li>Built end-to-end buyer communication features processing 10,000+ daily requests</li>
                <li>Achieved 40% performance improvement through MongoDB query optimization</li>
                <li>Revamped webhook systems for better async handling and reduced latency</li>
              </ul>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Daily Requests Processed</p>
            </div>
            <div className="stat">
              <h3>40%</h3>
              <p>Performance Improvement</p>
            </div>
            {/* <div className="stat">
              <h3>6</h3>
              <p>Month Experience</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;