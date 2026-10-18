import React from 'react';

export default function Hero() {
  const handleCtaClick = (e) => {
    e.preventDefault();
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero">
      <div className="hero-photo-frame">
        <img
          src="/image/Gemini_Generated_Image_qxvkrnqxvkrnqxvk.png"
          alt="Erantus Paripurna Samaloisa"
          className="hero-photo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/image/Foto_edward.jpg';
          }}
        />
      </div>

      <h1 className="hero-gothic-name">Erantus</h1>
      <p className="hero-roman-name">Paripurna Samaloisa</p>

      <div className="hero-rule">
        <div className="hero-rule-line"></div>
        <div className="hero-rule-diamond"></div>
        <div className="hero-rule-line r"></div>
      </div>

      <p className="hero-title">Full Stack Developer &nbsp;·&nbsp; AI Enthusiast</p>

      <p className="hero-subtitle">
        Membangun solusi digital yang elegan dengan sentuhan kecerdasan buatan — di persilangan
        antara seni, arsitektur, dan teknologi.
      </p>

      <a
        href="#contact"
        onClick={handleCtaClick}
        className="hero-cta"
      >
        <i className="bi bi-envelope-fill"></i>
        <span>Hubungi Saya</span>
      </a>

      <div className="scroll-cue">
        <span>scroll</span>
        <div className="scroll-cue-arrow"></div>
      </div>
    </section>
  );
}
