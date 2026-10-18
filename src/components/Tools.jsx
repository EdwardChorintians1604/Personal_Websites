import React, { useRef, useState } from 'react';
import { toolsAndLibraries } from '../data/portfolioData';

export default function Tools({ onOpenModal }) {
  const trackRef = useRef(null);
  const [trackPos, setTrackPos] = useState(0);

  const CARD_W = 260 + 32;

  const handleScrollLeft = () => {
    setTrackPos((prev) => Math.min(0, prev + CARD_W));
  };

  const handleScrollRight = () => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const parentWidth = track.parentElement ? track.parentElement.clientWidth : 800;
    const maxScroll = -(track.scrollWidth - parentWidth - 80);

    setTrackPos((prev) => Math.max(maxScroll, prev - CARD_W));
  };

  return (
    <section id="tools">
      <div className="section-header" data-aos="fade-up">
        <p className="section-label">// 03 — Tools APK dan Library</p>
        <h2 className="section-title">Beberapa Tools APK dan Library yang digunakan</h2>
        <div className="ornament">
          <div className="ornament-line"></div>
          <span className="ornament-symbol">⸻</span>
          <div className="ornament-line right"></div>
        </div>
      </div>

      <div className="skills-scroll-wrap" data-aos="fade-up">
        <div
          className="skills-track"
          id="toolsTrack"
          ref={trackRef}
          style={{ transform: `translateX(${trackPos}px)` }}
        >
          {toolsAndLibraries.map((tool, idx) => (
            <div className="skill-card" key={idx}>
              <div
                className="skill-img-wrap"
                style={{
                  background: tool.bg || undefined
                }}
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  style={{
                    objectFit: tool.fit || 'contain',
                    padding: tool.padding || undefined,
                    filter: tool.filter || undefined
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = tool.fallbackImg || '/image/coding_pictures.jpg';
                  }}
                />
              </div>
              <div className="skill-body">
                <h3 className="skill-name">{tool.name}</h3>
                <p className="skill-desc">{tool.desc}</p>
                <button
                  type="button"
                  className="skill-detail-btn"
                  onClick={() => onOpenModal(tool.modalKey)}
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
          id="toolsLeft"
          aria-label="Sebelumnya"
          onClick={handleScrollLeft}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          type="button"
          className="skills-nav-btn"
          id="toolsRight"
          aria-label="Selanjutnya"
          onClick={handleScrollRight}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
