import React from 'react';
import { portfolioProjects } from '../data/portfolioData';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-header" data-aos="fade-up">
        <p className="section-label">// 05 — Portfolio</p>
        <h2 className="section-title">Portfolio &amp; Proyek</h2>
        <div className="ornament">
          <div className="ornament-line"></div>
          <span className="ornament-symbol">⸻</span>
          <div className="ornament-line right"></div>
        </div>
      </div>

      <div className="portfolio-grid">
        {portfolioProjects.map((proj, idx) => (
          <div
            className="portfolio-card"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="portfolio-card-img">
              <img
                src={proj.img}
                alt={proj.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/image/coding_pictures.jpg';
                }}
              />
            </div>
            <div className="portfolio-card-body">
              <h3 className="portfolio-card-title">{proj.title}</h3>
              <p className="portfolio-card-desc">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn"
              >
                <i className={`bi ${proj.btnIcon}`}></i> {proj.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
