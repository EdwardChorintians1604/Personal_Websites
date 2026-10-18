import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { socialLinks } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', message: string }
  const [clockString, setClockString] = useState('');

  // EmailJS initialization
  useEffect(() => {
    emailjs.init({ publicKey: 'oUV9p1Q2XhvlqlSiy' });
  }, []);

  // Real-time Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
        'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
      ];
      const str = `${days[now.getDay()]}, ${pad(now.getDate())} ${months[now.getMonth()]} ${now.getFullYear()} — ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} WIB`;
      setClockString(str);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          'service_87iudes',
          'template_j4aphhq',
          formRef.current,
          'oUV9p1Q2XhvlqlSiy'
        );
      }
      setFeedback({
        type: 'success',
        message: '✦ Pesan berhasil dikirim! Terima kasih.'
      });
      setFormData({ from_name: '', from_email: '', message: '' });
      setTimeout(() => {
        setFeedback(null);
      }, 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setFeedback({
        type: 'error',
        message: '✦ Gagal mengirim pesan. Silakan coba lagi.'
      });
      setTimeout(() => {
        setFeedback(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-header" data-aos="fade-up">
        <p className="section-label">// 04 — Contact</p>
        <h2 className="section-title">Kontak</h2>
        <div className="ornament">
          <div className="ornament-line"></div>
          <span className="ornament-symbol">⸻</span>
          <div className="ornament-line right"></div>
        </div>
      </div>

      <div className="contact-inner" data-aos="fade-up">
        {/* Social Links */}
        <div className="social-row">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title={item.title}
              aria-label={item.title}
            >
              <i className={`bi ${item.icon}`}></i>
            </a>
          ))}
        </div>

        <div className="contact-divider">
          <div className="contact-divider-line"></div>
          <span className="contact-divider-text">Atau kirim pesan langsung</span>
          <div className="contact-divider-line"></div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" id="contactForm" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="from_name">Nama</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              className="form-input"
              placeholder="Nama Anda"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="from_email">Alamat Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              className="form-input"
              placeholder="email@domain.com"
              value={formData.from_email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Pesan</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              rows={6}
              placeholder="Tuliskan pesan Anda di sini..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {feedback && (
            <div
              className={`form-feedback ${feedback.type}`}
              style={{ display: 'block' }}
            >
              {feedback.message}
            </div>
          )}

          <button type="submit" className="form-submit" disabled={loading}>
            <i className="bi bi-send"></i>
            <span>{loading ? 'Mengirim...' : 'Kirim Pesan'}</span>
          </button>
        </form>

        <div className="time-display" id="clockDisplay">
          {clockString}
        </div>
      </div>
    </section>
  );
}
