// // components/Header.js
// import React from 'react';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="nav-brand">
//           <h2>Shubham Sharma</h2>
//           <span>Backend Developer</span>
//         </div>
//         <nav className="nav">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#skills">Skills</a>
//           <a href="#experience">Experience</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



// components/Header.js (with placeholder)
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <div className="profile-header">
            <div className="profile-photo-container">
              <div className="profile-placeholder">
                <span>SS</span>
              </div>
            </div>
            <div className="profile-info">
              <h2>Shubham Sharma</h2>
              <span>Backend Developer</span>
            </div>
          </div>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />

        </nav>
      </div>
    </header>
  );
};

export default Header;