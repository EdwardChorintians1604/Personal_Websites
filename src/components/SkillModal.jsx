import React, { useEffect } from 'react';
import { skillsModalData } from '../data/portfolioData';

export default function SkillModal({ modalKey, onClose }) {
  useEffect(() => {
    if (modalKey) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalKey, onClose]);

  if (!modalKey) return null;

  const data = skillsModalData[modalKey] || {
    title: 'Detail Keahlian',
    content: <p>Informasi tambahan mengenai keahlian ini.</p>
  };

  return (
    <div
      className="modal-overlay active"
      id="skillModal"
      onClick={(e) => {
        if (e.target.id === 'skillModal') onClose();
      }}
    >
      <div className="modal-box">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Tutup Modal"
        >
          &times;
        </button>
        <div className="modal-header">
          <h3 id="modalTitle">{data.title}</h3>
        </div>
        <div className="modal-body" id="modalBody">
          {data.content}
        </div>
      </div>
    </div>
  );
}
