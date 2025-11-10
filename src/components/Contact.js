// components/Contact.js
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <strong>Email:</strong>
              <span>shubhamj4646@gmail.com</span>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <span>+91-7302720038</span>
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong>
              <a href="#" className="contact-link">Connect with me</a>
            </div>
            <div className="contact-note">
              <p>Feel free to reach out for collaboration, opportunities, or just to say hello!</p>
            </div>
          </div>
          <div className="contact-form-section">
            <h3>Send me a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;