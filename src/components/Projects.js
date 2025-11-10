// components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Buyer Communication Platform",
      description: "Scalable communication system at RapidShyp featuring seller-branded chat, manual call functionality, and automated WhatsApp/SMS/Email notifications for order events.",
      features: [
        "Real-time chat system",
        "Automated message triggers",
        "Webhook integration",
        "Multi-channel notifications"
      ],
      tech: ["Rust", "Actix-Web", "MongoDB", "Redis", "Docker"],
      highlight: true
    },
    {
      title: "Institute Management System",
      description: "Desktop-based management system for Bright Career Institute to handle student records, fee tracking, and staff details with modular design.",
      features: [
        "Student record management",
        "Fee tracking system",
        "Staff management",
        "Modular architecture"
      ],
      tech: ["Java", "AWT", "SQL"],
      highlight: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.highlight ? 'highlight' : ''}`}>
              {project.highlight && <div className="featured-badge">Featured</div>}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-tech">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;