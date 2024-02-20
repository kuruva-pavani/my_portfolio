import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import MyVerticalTimeline from './components/timeline/Timeline';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import Services from './components/services/Service';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <Home />
    <About/>
    <Skills />
    <MyVerticalTimeline />
    <Services />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

