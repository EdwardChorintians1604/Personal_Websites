import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav>
        <a href="#hero" className="nav-brand" onClick={(e) => handleNavClick(e, '#hero')}>
          <img src="/image/Foto_edward.jpg" alt="EPS" />
          <span className="nav-brand-text">EPS</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>Tentang</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skill</a></li>
          <li><a href="#tools" onClick={(e) => handleNavClick(e, '#tools')}>Tools</a></li>
          <li><a href="#experiences" onClick={(e) => handleNavClick(e, '#experiences')}>Pengalaman</a></li>
          <li><a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Kontak</a></li>
        </ul>

        <button
          className="hamburger"
          id="hamburgerBtn"
          aria-label="Menu"
          onClick={() => setIsOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Sidenav Overlay & Drawer */}
      <div
        className={`overlay ${isOpen ? 'active' : ''}`}
        id="navOverlay"
        onClick={() => setIsOpen(false)}
      />
      <div className={`sidenav ${isOpen ? 'open' : ''}`} id="sidenav">
        <button
          className="sidenav-close"
          id="sidenavClose"
          onClick={() => setIsOpen(false)}
          aria-label="Tutup Menu"
        >
          &times;
        </button>
        <a href="#about" className="sidenav-link" onClick={(e) => handleNavClick(e, '#about')}>
          Tentang
        </a>
        <a href="#skills" className="sidenav-link" onClick={(e) => handleNavClick(e, '#skills')}>
          Skill
        </a>
        <a href="#tools" className="sidenav-link" onClick={(e) => handleNavClick(e, '#tools')}>
          Tools
        </a>
        <a href="#experiences" className="sidenav-link" onClick={(e) => handleNavClick(e, '#experiences')}>
          Pengalaman
        </a>
        <a href="#portfolio" className="sidenav-link" onClick={(e) => handleNavClick(e, '#portfolio')}>
          Portfolio
        </a>
        <a href="#contact" className="sidenav-link" onClick={(e) => handleNavClick(e, '#contact')}>
          Kontak
        </a>
      </div>
    </>
  );
}
