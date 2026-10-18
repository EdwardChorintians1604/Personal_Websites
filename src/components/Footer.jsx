import React from 'react';

export default function Footer() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer data-aos="fade-up">
      <div className="footer-gothic">E · P · S</div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Erantus Paripurna Samaloisa. All rights reserved.</p>
      <div className="footer-links">
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>Tentang</a>
        <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skill</a>
        <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Kontak</a>
      </div>
    </footer>
  );
}
