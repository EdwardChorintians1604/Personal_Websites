import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Experiences from './components/experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkillModal from './components/SkillModal';

function App() {
  const [modalKey, setModalKey] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills onOpenModal={(key) => setModalKey(key)} />
        <Tools onOpenModal={(key) => setModalKey(key)} />
        <Experiences />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <SkillModal modalKey={modalKey} onClose={() => setModalKey(null)} />
    </>
  );
}

export default App;
