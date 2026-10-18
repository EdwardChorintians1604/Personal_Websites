import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="section-header" data-aos="fade-up">
        <p className="section-label">// 01 — About</p>
        <h2 className="section-title">Tentang Saya</h2>
        <div className="ornament">
          <div className="ornament-line"></div>
          <span className="ornament-symbol">⸻</span>
          <div className="ornament-line right"></div>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-photo-col" data-aos="fade-right">
          <div className="about-photo-wrap">
            <div className="about-photo-bracket bracket-tl"></div>
            <div className="about-photo-bracket bracket-tr"></div>
            <div className="about-photo-bracket bracket-bl"></div>
            <div className="about-photo-bracket bracket-br"></div>
            <img
              src="/image/Potret dramatis pria muda Indonesia.png"
              alt="Edward Christiano James"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/image/Foto_edward.jpg';
              }}
            />
          </div>
        </div>

        <div className="about-text-col" data-aos="fade-left">
          <div className="about-gothic-quote">"Ars longa, vita brevis."</div>
          <p className="about-body">
            Seorang pengembang yang berdedikasi dengan fokus pada pembuatan antarmuka yang bersih dan
            fungsional. Menguasai ekosistem <strong>Modern Web</strong> dan <strong>Python AI</strong>, dengan
            pendekatan yang memadukan presisi teknis dan sensibilitas estetika.
          </p>
          <p className="about-body">
            Saya percaya bahwa setiap baris kode adalah <strong>pernyataan arsitektural</strong> — ia harus
            memberikan nilai, keindahan, dan kegunaan sekaligus. Seperti lengkungan Romawi yang telah bertahan
            ribuan tahun: kuat dalam struktur, indah dalam proporsi.
          </p>
          <div className="about-stats">
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="100">
              <span className="stat-number">4+</span>
              <span className="stat-label">Tahun Belajar</span>
            </div>
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="200">
              <span className="stat-number">5+</span>
              <span className="stat-label">Bahasa Pemrograman</span>
            </div>
            <div className="stat-box" data-aos="zoom-in" data-aos-delay="300">
              <span className="stat-number">4+</span>
              <span className="stat-label">Proyek Selesai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
