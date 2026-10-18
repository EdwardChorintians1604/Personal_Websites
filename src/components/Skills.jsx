import React, { useRef, useState } from 'react';
import { skillsCategories, programmingSkills } from '../data/portfolioData';

export default function Skills({ onOpenModal }) {
  const trackRef = useRef(null);
  const [trackPos, setTrackPos] = useState(0);

  const CARD_W = 260 + 32; // card width (260px) + gap (2rem = 32px)

  const handleScrollLeft = () => {
    setTrackPos((prev) => {
      const nextPos = Math.min(0, prev + CARD_W);
      return nextPos;
    });
  };

  const handleScrollRight = () => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const parentWidth = track.parentElement ? track.parentElement.clientWidth : 800;
    const maxScroll = -(track.scrollWidth - parentWidth - 80);

    setTrackPos((prev) => {
      const nextPos = Math.max(maxScroll, prev - CARD_W);
      return nextPos;
    });
  };

  return (
    <section id="skills">
      <div className="section-header" data-aos="fade-up">
        <p className="section-label">// 02 — Skills</p>
        <h2 className="section-title">Keahlian Saya</h2>
        <div className="ornament">
          <div className="ornament-line"></div>
          <span className="ornament-symbol">⸻</span>
          <div className="ornament-line right"></div>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="skill-categories" data-aos="fade-up">
        {skillsCategories.map((cat, idx) => (
          <div className="skill-cat" key={idx}>
            <span className="skill-cat-icon">
              <i className={`bi ${cat.icon}`}></i>
            </span>
            <div className="skill-cat-info">
              <span className="skill-cat-title">{cat.title}</span>
              <span className="skill-cat-desc">{cat.desc}</span>
              <span className="skill-cat-sub">{cat.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Languages & Frameworks Carousel */}
      <div className="section-header" data-aos="fade-up" style={{ marginTop: '3.5rem' }}>
        <p className="section-label">// Bahasa Pemrograman &amp; Framework</p>
        <h2 className="section-title">Bahasa Pemrograman dan Framework</h2>
        <div className="ornament">
          <div className="ornament-line"></div>
          <span className="ornament-symbol">⸻</span>
          <div className="ornament-line right"></div>
        </div>
      </div>

      <div className="skills-scroll-wrap" data-aos="fade-up">
        <div
          className="skills-track"
          id="skillsTrack"
          ref={trackRef}
          style={{ transform: `translateX(${trackPos}px)` }}
        >
          {programmingSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-img-wrap">
                <img
                  src={skill.img}
                  alt={skill.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/image/coding_pictures.jpg';
                  }}
                />
              </div>
              <div className="skill-body">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.desc}</p>
                <button
                  type="button"
                  className="skill-detail-btn"
                  onClick={() => onOpenModal(skill.modalKey)}
                >
                  <i className="bi bi-code-slash"></i> Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-nav">
        <button
          type="button"
          className="skills-nav-btn"
          id="skillsLeft"
          aria-label="Sebelumnya"
          onClick={handleScrollLeft}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          type="button"
          className="skills-nav-btn"
          id="skillsRight"
          aria-label="Selanjutnya"
          onClick={handleScrollRight}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
