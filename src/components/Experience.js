// components/Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "RapidShyp · Gurugram",
      period: "Apr 2025 – Present",
      achievements: [
        "Designed and developed scalable backend microservices using Rust and Actix-Web",
        "Built end-to-end buyer communication features including seller-branded chat and manual call functionality",
        "Re-engineered B2C Shipment Tracking Webhook, processing 10,000+ daily requests with reduced latency",
        "Optimized MongoDB queries achieving 40% performance improvement in report generation",
        "Integrated centralized logging and observability tools for better incident tracking"
      ],
      tech: ["Rust", "Actix-Web", "Tokio", "MongoDB", "MySQL", "Docker", "GitLab CI/CD"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="timeline-period">{exp.period}</span>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {exp.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;