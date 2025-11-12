// // components/Contact.js
// import React from 'react';
// import ContactForm from './ContactForm';

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <div className="container">
//         <h2 className="section-title">Get In Touch</h2>
//         <div className="contact-content">
//           <div className="contact-info">
//             <h3>Contact Information</h3>
//             <div className="contact-item">
//               <strong>Email:</strong>
//               <span>shubhamj4646@gmail.com</span>
//             </div>
//             <div className="contact-item">
//               <strong>Phone:</strong>
//               <span>+91-7302720038</span>
//             </div>
//             <div className="contact-item">
//               <strong>LinkedIn:</strong>
//               <a 
//                 href="https://www.linkedin.com/in/shubham-sharma-43bb4b242/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 Connect with me
//               </a>
//             </div>
//             <div className="contact-note">
//               <p>Feel free to reach out for collaboration, opportunities, or just to say hello!</p>
//             </div>
//           </div>
//           {/* <div className="contact-form-section">
//             <h3>Send me a message</h3>
//             <ContactForm />
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info-compact">
            <h3>Contact Information</h3>
            
            <div className="contact-grid">
              <div className="contact-row">
                <div className="contact-item-compact">
                  <span className="contact-label-compact">Email:</span>
                  <span className="contact-value-compact">shubhamj4646@gmail.com</span>
                </div>
                
                <div className="contact-item-compact">
                  <span className="contact-label-compact">Phone:</span>
                  <span className="contact-value-compact">+91-7302720038</span>
                </div>
              </div>
              
              <div className="contact-row">
                <div className="contact-item-compact">
                  <span className="contact-label-compact">LinkedIn:</span>
                  <span className="contact-value-compact">
                    <a 
                      href="https://www.linkedin.com/in/shubham-sharma-43bb4b242/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link-compact"
                    >
                      Connect with me
                    </a>
                  </span>
                </div>
              </div>
            </div>
            
            {/* <div className="contact-note-compact">
              <p>Feel free to reach out for collaboration, opportunities, or just to say hello!</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;