// import React from 'react';
// import './App.css';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default App;


// SIMPLE TEST - Replace everything in App.js with this
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div style={{ padding: '50px', textAlign: 'center' }}>
//       <h1 style={{ color: 'green', fontSize: '48px' }}>✅</h1>
//       <h2>React is Working!</h2>
//       <p>If you see this, React is running correctly.</p>
//       <div style={{ background: '#f0f0f0', padding: '20px', marginTop: '20px' }}>
//         <p>Now we need to fix the components.</p>
//       </div>
//     </div>
//   );
// }

// export default App;

// Test Header only
// import React from 'react';
// import './App.css';
// import Header from './components/Header';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <div style={{ marginTop: '100px', textAlign: 'center' }}>
//         <h2>If you see the header above, Header component works!</h2>
//       </div>
//     </div>
//   );
// }

// export default App;


// Test Header + Hero
// import React from 'react';
// import './App.css';
// import Header from './components/Header';
// import Hero from './components/Hero';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <div style={{ marginTop: '50px', textAlign: 'center', padding: '20px', background: '#f0f0f0' }}>
//         <h3>If you see content above this, Hero component works!</h3>
//       </div>
//     </div>
//   );
// }

// export default App;



// Test Header + Hero + About
// import React from 'react';
// import './App.css';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <About />
//       <div style={{ marginTop: '50px', textAlign: 'center', padding: '20px', background: '#f0f0f0' }}>
//         <h3>If you see About section above this, About component works!</h3>
//       </div>
//     </div>
//   );
// }

// export default App;



// Test Header + Hero + About + Skills
// import React from 'react';
// import './App.css';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <About />
//       <Skills />
//       <div style={{ marginTop: '50px', textAlign: 'center', padding: '20px', background: '#f0f0f0' }}>
//         <h3>If you see Skills section above this, Skills component works!</h3>
//       </div>
//     </div>
//   );
// }

// export default App;



// Test Header + Hero + About + Skills + Experience
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact'; 
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      </div>
  );
}

export default App;