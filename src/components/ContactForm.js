// components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    // Create the exact structure backend expects
    const contactData = {
      name: formData.name,
      email: formData.email,
      message: formData.message
      // Don't include created_at - backend will add it
    };

    const response = await fetch('http://localhost:8080/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      // Get error details from backend
      const errorData = await response.json();
      console.error('Backend error:', errorData);
      setSubmitStatus('error');
    }
  } catch (error) {
    console.error('Network error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="form-group">
        <textarea 
          name="message"
          placeholder="Your Message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}  
          required
        ></textarea>
      </div>
      
      {submitStatus === 'success' && (
        <div className="form-message success">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="form-message error">
          Sorry, there was an error sending your message. Please try again or email me directly.
        </div>
      )}

      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;