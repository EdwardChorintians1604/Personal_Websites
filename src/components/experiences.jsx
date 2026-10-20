import React, { useState, useEffect } from 'react';
import { experiencesData } from '../data/portfolioData';

const categories = [
  { key: 'all', label: 'Semua Pengalaman', icon: 'bi-grid-fill' },
  { key: 'magang', label: 'Magang DISKOMINFO', icon: 'bi-building-gear' },
  { key: 'kuliah', label: 'Perjalanan Kuliah', icon: 'bi-mortarboard' },
  { key: 'project', label: 'Project Pribadi', icon: 'bi-code-slash' },
  { key: 'platform', label: 'Platform GMKI', icon: 'bi-globe2' },
  { key: 'ai', label: 'AI & Data Science', icon: 'bi-cpu-fill' },
];

export default function Experiences() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedExp, setSelectedExp] = useState(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedExp(null);
      }
    };
    if (selectedExp) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedExp]);

  const filteredExperiences = activeCategory === 'all'
    ? experiencesData
    : experiencesData.filter((item) => item.category === activeCategory);

  return (
    <section id="experiences" className="experiences-section">
      <div className="section-header" data-aos="fade-up">
        <p className="section-label">// 04 — Experience &amp; Journey</p>
        <h2 className="section-title">Pengalaman &amp; Jejak Karya</h2>
        <div className="ornament">
          <div className="ornament-line"></div>
          <span className="ornament-symbol">⸻</span>
          <div className="ornament-line right"></div>
        </div>
        <p className="experiences-intro-text">
          Rekam jejak dedikasi dari bangku perkuliahan, pengabdian magang profesional di instansi pemerintahan
          <strong> DISKOMINFO</strong>, platform resmi organisasi <strong>GMKI</strong>, hingga pengembangan proyek rekayasa
          perangkat lunak mandiri &amp; kecerdasan buatan.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="experiences-filter-container" data-aos="fade-up" data-aos-delay="100">
        <div className="experiences-filter-tabs">
          {categories.map((cat) => {
            const count = cat.key === 'all'
              ? experiencesData.length
              : experiencesData.filter((item) => item.category === cat.key).length;

            return (
              <button
                key={cat.key}
                className={`exp-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
                type="button"
              >
                <i className={`bi ${cat.icon}`}></i>
                <span>{cat.label}</span>
                <span className="exp-filter-badge">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="experiences-grid">
        {filteredExperiences.map((exp, idx) => (
          <article
            className="experience-card"
            key={exp.id}
            data-aos="fade-up"
            data-aos-delay={idx * 80}
          >
            {/* Card Header Media */}
            <div className="exp-card-media">
              <img
                src={exp.img}
                alt={exp.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = exp.fallbackImg || '/image/coding_pictures.jpg';
                }}
              />
              <div className="exp-media-overlay"></div>
              <div className="exp-badges-bar">
                <span className={`exp-category-pill pill-${exp.badgeColor || 'gold'}`}>
                  <i className={`bi ${exp.icon}`}></i> {exp.categoryLabel}
                </span>
                <span className="exp-period-pill">
                  <i className="bi bi-calendar3"></i> {exp.period}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="exp-card-body">
              <div className="exp-meta-header">
                <span className="exp-role">{exp.role}</span>
                <span className="exp-location">
                  <i className="bi bi-geo-alt"></i> {exp.location}
                </span>
              </div>

              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-subtitle">{exp.subtitle}</p>

              <p className="exp-desc">{exp.desc}</p>

              {/* Key Highlights */}
              <div className="exp-highlights-box">
                <span className="exp-highlights-label">Sorotan Utama:</span>
                <ul className="exp-highlights-list">
                  {exp.highlights.slice(0, 2).map((item, hIdx) => (
                    <li key={hIdx}>
                      <span className="exp-bullet">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="exp-tags-wrapper">
                {exp.tags.slice(0, 4).map((tag, tIdx) => (
                  <span className="exp-tag" key={tIdx}>
                    {tag}
                  </span>
                ))}
                {exp.tags.length > 4 && (
                  <span className="exp-tag exp-tag-more">+{exp.tags.length - 4}</span>
                )}
              </div>

              {/* Card Actions */}
              <div className="exp-card-actions">
                <button
                  type="button"
                  className="exp-btn-detail"
                  onClick={() => setSelectedExp(exp)}
                >
                  <i className="bi bi-eye"></i> Detail Lengkap
                </button>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-btn-link"
                  >
                    <i className={`bi ${exp.btnIcon || 'bi-box-arrow-up-right'}`}></i>
                    <span>{exp.btnText || 'Kunjungi'}</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* In-depth Experience Detail Modal */}
      {selectedExp && (
        <div className="exp-modal-backdrop" onClick={() => setSelectedExp(null)}>
          <div
            className="exp-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-exp-title"
          >
            <button
              className="exp-modal-close"
              onClick={() => setSelectedExp(null)}
              aria-label="Tutup Detail"
              type="button"
            >
              &times;
            </button>

            <div className="exp-modal-hero">
              <img
                src={selectedExp.img}
                alt={selectedExp.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = selectedExp.fallbackImg || '/image/coding_pictures.jpg';
                }}
              />
              <div className="exp-modal-hero-overlay"></div>
              <div className="exp-modal-hero-content">
                <span className={`exp-category-pill pill-${selectedExp.badgeColor || 'gold'}`}>
                  <i className={`bi ${selectedExp.icon}`}></i> {selectedExp.categoryLabel}
                </span>
                <span className="exp-period-pill">
                  <i className="bi bi-calendar3"></i> {selectedExp.period}
                </span>
              </div>
            </div>

            <div className="exp-modal-body">
              <div className="exp-modal-header-info">
                <p className="exp-modal-role">{selectedExp.role}</p>
                <h3 id="modal-exp-title" className="exp-modal-title">
                  {selectedExp.title}
                </h3>
                <p className="exp-modal-instansi">
                  <i className="bi bi-building"></i> {selectedExp.subtitle}
                </p>
                <p className="exp-modal-loc">
                  <i className="bi bi-geo-alt"></i> {selectedExp.location}
                </p>
              </div>

              <div className="exp-modal-section">
                <h4 className="exp-modal-section-title">
                  <i className="bi bi-file-earmark-text"></i> Gambaran &amp; Dampak
                </h4>
                <p className="exp-modal-text">{selectedExp.desc}</p>
              </div>

              <div className="exp-modal-section">
                <h4 className="exp-modal-section-title">
                  <i className="bi bi-stars"></i> Tanggung Jawab &amp; Pencapaian Utama
                </h4>
                <ul className="exp-modal-highlights">
                  {selectedExp.highlights.map((item, idx) => (
                    <li key={idx}>
                      <i className="bi bi-check2-circle"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exp-modal-section">
                <h4 className="exp-modal-section-title">
                  <i className="bi bi-stack"></i> Teknologi &amp; Keterampilan
                </h4>
                <div className="exp-modal-tags">
                  {selectedExp.tags.map((tag, idx) => (
                    <span key={idx} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="exp-modal-footer">
                {selectedExp.link ? (
                  <a
                    href={selectedExp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-btn"
                  >
                    <i className={`bi ${selectedExp.btnIcon || 'bi-box-arrow-up-right'}`}></i>
                    <span>{selectedExp.btnText || 'Kunjungi Tautan'}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    className="portfolio-btn"
                    onClick={() => setSelectedExp(null)}
                  >
                    <i className="bi bi-check-lg"></i> Selesai Membaca
                  </button>
                )}
                <button
                  type="button"
                  className="exp-btn-close-text"
                  onClick={() => setSelectedExp(null)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
