import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  setCurrentTab?: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentTab: _setCurrentTab }) => {
  const { t } = useLanguage();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoTab, setVideoTab] = useState<'tutorial' | 'ceg'>('tutorial');

  return (
    <section className="hero-container bg-white-hero">
      <div className="hero-content-wrapper">
        {/* Animated Badge citing Statutes & Official Logo */}
        <div className="hero-badge animated-pulse-badge">
          <img src="./logo_ajtes.jpeg" alt="Logo AJTES" className="hero-badge-logo" />
          <span>ASSOCIATION CRÉÉE EN 2022 • STATUTS & RÈGLEMENT INTÉRIEUR OFFICIELS</span>
        </div>

        {/* Animated Gradient Title */}
        <h1 className="hero-title">
          Éduquer, Solidariser & <span className="animated-gradient-text">Construire le Tchad</span>
        </h1>
        <p className="hero-subtitle">
          {t('heroSubtitle')} — Une organisation citoyenne au service de la scolarisation, de la jeunesse et du développement local (N'Djamena, Tchad).
        </p>

        {/* Video Preview Action */}
        <div className="hero-actions-clean">
          <button
            className="btn btn-blue btn-lg"
            onClick={() => { setVideoTab('tutorial'); setShowVideoModal(true); }}
            title="Visionner le tutoriel vidéo et les reportages de l'association"
          >
            Découvrir nos Vidéos Officielles
          </button>
        </div>

        {/* Real Achievements Quick Stats — Épuré (2 Cartes) */}
        <div className="hero-stats-clean">
          <div className="hero-stat-card">
            <span className="stat-num">2022</span>
            <span className="stat-lbl">{t('statCreationYear')} (Statuts Officiels)</span>
          </div>
          <div className="hero-stat-card">
            <span className="stat-num">0</span>
            <span className="stat-lbl">{t('statProjects')} & Réalisations</span>
          </div>
        </div>
      </div>

      {/* Unified All-in-One Video Modal */}
      {showVideoModal && (
        <div className="modal-overlay" onClick={() => setShowVideoModal(false)}>
          <div className="modal-content hero-video-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowVideoModal(false)}>✕</button>
            
            {/* Modal Video Tabs */}
            <div className="video-tabs-header">
              <button
                className={`video-tab-btn ${videoTab === 'tutorial' ? 'active' : ''}`}
                onClick={() => setVideoTab('tutorial')}
              >
                Tutoriel Démo Plateforme (Salomon)
              </button>
              <button
                className={`video-tab-btn ${videoTab === 'ceg' ? 'active' : ''}`}
                onClick={() => setVideoTab('ceg')}
              >
                Inauguration Bureau CEG (Reportage)
              </button>
            </div>

            {videoTab === 'tutorial' ? (
              <div className="video-modal-body">
                <div className="video-header-info">
                  <h3>Guide Officiel de Navigation & Démonstration du Site AJTES</h3>
                  <p>Guide officiel de démonstration et d'utilisation de la plateforme AJTES Tchad</p>
                </div>
                <img
                  src="./images/tutoriel_demo_salomon_ajtes.gif"
                  alt="Aperçu vidéo AJTES Tchad"
                  className="hero-video-player"
                  style={{ objectFit: 'contain', background: '#0F172A' }}
                />
              </div>
            ) : (
              <div className="video-modal-body">
                <div className="video-header-info">
                  <h3>Reportage Vidéo Officiel : Bureau Administratif du CEG</h3>
                  <p>Réalisation majeure de l'Association des Jeunes Tchadiens pour l'Éducation et la Solidarité (Projet 2026)</p>
                </div>
                <video
                  src="/videos/VID-20260813-WA0153.mp4"
                  controls
                  autoPlay
                  className="hero-video-player"
                >
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .bg-white-hero {
          position: relative;
          background-color: #FFFFFF;
          color: var(--neutral-heading);
          padding: 4.5rem 1.5rem 4rem 1.5rem;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-bottom: 1px solid var(--neutral-border);
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 950px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: var(--primary-emerald-light);
          border: 1px solid rgba(0, 122, 61, 0.25);
          color: var(--primary-emerald-text);
          padding: 0.4rem 1.25rem 0.4rem 0.65rem;
          border-radius: var(--radius-pill);
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          margin-bottom: 1.5rem;
        }

        .hero-badge-logo {
          width: 28px;
          height: 28px;
          object-fit: cover;
          border-radius: 50%;
          border: 1.5px solid var(--primary-emerald);
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.18;
          color: var(--neutral-heading);
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--neutral-body);
          max-width: 820px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.65;
        }

        .hero-actions-clean {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }

        .hero-stats-clean {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 540px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
          padding: 1.5rem 2rem;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .hero-stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-num {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--primary-emerald-text);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-lbl {
          font-size: 0.85rem;
          color: var(--neutral-muted);
          font-weight: 600;
        }

        .hero-video-modal {
          max-width: 820px;
          width: 94%;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 1.75rem;
        }

        .video-tabs-header {
          display: flex;
          gap: 0.5rem;
          background: var(--neutral-light-bg);
          padding: 0.35rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--neutral-border);
          margin-bottom: 1.25rem;
          margin-right: 2rem;
        }

        .video-tab-btn {
          flex: 1;
          padding: 0.6rem 1rem;
          border: none;
          background: transparent;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--neutral-body);
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all 0.2s;
        }

        .video-tab-btn.active {
          background: var(--primary-emerald);
          color: #FFFFFF;
          box-shadow: var(--shadow-sm);
        }

        .video-header-info h3 {
          color: var(--neutral-heading);
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .video-header-info p {
          color: var(--neutral-muted);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .hero-video-player {
          width: 100%;
          max-height: 450px;
          border-radius: var(--radius-md);
          background: #000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 900px) {
          .hero-title { font-size: 2.2rem; }
          .hero-stats-clean { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 500px) {
          .hero-title { font-size: 1.75rem; }
          .hero-subtitle { font-size: 0.95rem; }
          .hero-stats-clean { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};
