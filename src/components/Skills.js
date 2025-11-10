// components/Skills.js
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Rust"]
    },
    {
      title: "APIs & Messaging",
      skills: ["REST", "Kafka", "Webhook Systems", "Async/Await"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "Redis", "SQL", "Query Optimization"]
    },
    {
      title: "Infrastructure",
      skills: ["Docker", "GitLab CI/CD", "Microservices", "Event-Driven Systems"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="core-competencies">
          <h3>Core Competencies</h3>
          <div className="competencies-grid">
            <div className="competency">Back-end Architecture & Microservices Design</div>
            <div className="competency">API Development</div>
            <div className="competency">Event-Driven Systems</div>
            <div className="competency">Performance Optimization & Query Tuning</div>
            <div className="competency">Resilience & Reliability Engineering</div>
            <div className="competency">Observability & Monitoring</div>
            <div className="competency">Scalability & High-Availability Systems</div>
            <div className="competency">Agile Methodologies & Scrum Delivery</div>
            <div className="competency">Legacy System Modernization & Migration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;