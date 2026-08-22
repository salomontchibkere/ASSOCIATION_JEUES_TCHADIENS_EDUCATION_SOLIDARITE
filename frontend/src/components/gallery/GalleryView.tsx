import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useData } from '../../context/DataContext';
import type { MediaItem } from '../../types';

export const GalleryView: React.FC = () => {
  const { t, language } = useLanguage();
  const { media } = useData();

  const [activeType, setActiveType] = useState<'photo' | 'video'>('photo');
  const [lightboxMedia, setLightboxMedia] = useState<MediaItem | null>(null);

  const filteredMedia = media.filter(item => item.type === activeType);

  const photoCount = media.filter(m => m.type === 'photo').length;
  const videoCount = media.filter(m => m.type === 'video').length;

  return (
    <div className="gallery-page">
      {/* Banner */}
      <div className="page-banner">
        <div className="banner-container">
          <span className="section-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFF' }}>
            {t('navGallery')} AJTES
          </span>
          <h1>Médiathèque Officielle — Galerie Photos & Vidéos</h1>
          <p>
            Retrouvez en images et vidéos le fil des réalisations, des chantiers d'infrastructures au CEG de Nangassou, des distributions scolaires et des événements de l'AJTES.
          </p>
        </div>
      </div>

      {/* Main Gallery Section */}
      <section className="section container">
        {/* Controls: Uniquement les 2 boutons Photos et Vidéos */}
        <div className="gallery-filter-container">
          <div className="type-tabs">
            <button
              className={`filter-btn ${activeType === 'photo' ? 'active' : ''}`}
              onClick={() => setActiveType('photo')}
            >
              📷 Photos ({photoCount})
            </button>
            <button
              className={`filter-btn ${activeType === 'video' ? 'active' : ''}`}
              onClick={() => setActiveType('video')}
            >
              🎬 Vidéos ({videoCount})
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredMedia.length === 0 ? (
          <div className="empty-gallery">
            <p>Aucun média ne correspond aux filtres sélectionnés.</p>
          </div>
        ) : (
          <div className="grid-3">
            {filteredMedia.map(item => (
              <div
                key={item.id}
                className="gallery-card card"
                onClick={() => setLightboxMedia(item)}
              >
                <div className="media-thumb-box">
                  <img
                    src={item.type === 'video' ? (item.thumbnailUrl || '/images/IMG-20260813-WA0106.jpg') : item.url}
                    alt={item.title['fr']}
                    loading="lazy"
                  />
                  {item.type === 'video' && (
                    <div className="video-play-overlay">
                      <span className="play-icon">▶</span>
                      <span className="video-badge">Vidéo MP4</span>
                    </div>
                  )}
                  <span className="year-pill">{item.year}</span>
                </div>

                <div className="gallery-card-body">
                  <span className="media-category">🏷️ {item.category} • 📍 {item.location || 'Tchad'}</span>
                  <h4>{item.title[language] || item.title['fr']}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox / Video Modal */}
      {lightboxMedia && (
        <div className="modal-overlay" onClick={() => setLightboxMedia(null)}>
          <div className="modal-content media-lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setLightboxMedia(null)}>✕</button>

            {lightboxMedia.type === 'photo' ? (
              <div className="lightbox-photo-box">
                <img src={lightboxMedia.url} alt={lightboxMedia.title['fr']} className="lightbox-img" />
                <div className="lightbox-info">
                  <h3>{lightboxMedia.title[language] || lightboxMedia.title['fr']}</h3>
                  <p className="lightbox-meta">
                    Année: <strong>{lightboxMedia.year}</strong> • Catégorie: <strong>{lightboxMedia.category}</strong> • Lieu: <strong>{lightboxMedia.location || 'Tchad'}</strong>
                  </p>
                  <a href={lightboxMedia.url} download className="btn-download" target="_blank" rel="noopener noreferrer">
                    Télécharger l'image HD
                  </a>
                </div>
              </div>
            ) : (
              <div className="lightbox-video-box">
                {lightboxMedia.url.endsWith('.mp4') || lightboxMedia.url.startsWith('/videos/') || lightboxMedia.url.startsWith('/media/') ? (
                  <video
                    src={lightboxMedia.url}
                    controls
                    autoPlay
                    controlsList="nodownload"
                    className="lightbox-video-player"
                  >
                    Votre navigateur ne supporte pas la lecture de vidéos HTML5.
                  </video>
                ) : (
                  <iframe
                    src={lightboxMedia.url}
                    title={lightboxMedia.title['fr']}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-iframe"
                  ></iframe>
                )}
                <div className="lightbox-info">
                  <h3>{lightboxMedia.title[language] || lightboxMedia.title['fr']}</h3>
                  <p className="lightbox-meta">
                    Année: <strong>{lightboxMedia.year}</strong> • Catégorie: <strong>{lightboxMedia.category}</strong> • Lieu: <strong>{lightboxMedia.location || 'Tchad'}</strong>
                  </p>
                  <a href={lightboxMedia.url} download className="btn-download" target="_blank" rel="noopener noreferrer">
                    Télécharger la vidéo MP4
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .page-banner {
          background: linear-gradient(135deg, var(--neutral-heading), var(--primary-emerald));
          color: #FFF;
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .banner-container h1 {
          color: #FFF;
          font-size: 2.25rem;
          margin: 1rem 0;
        }

        .gallery-filter-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          background: var(--neutral-card-bg);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--neutral-border);
          box-shadow: 0 4px 15px rgba(0,0,0,0.04);
        }

        .type-tabs, .category-tabs, .year-tabs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--neutral-muted);
          margin-right: 0.5rem;
        }

        .filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--neutral-border);
          background: var(--neutral-light-bg);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn.active, .filter-btn:hover {
          background: var(--primary-emerald);
          color: #FFF;
          border-color: var(--primary-emerald);
        }

        .category-btn, .year-btn {
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--neutral-border);
          background: var(--neutral-light-bg);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .category-btn.active {
          background: var(--primary-emerald);
          color: #FFF;
          border-color: var(--primary-emerald);
        }

        .year-btn.active {
          background: var(--accent-gold);
          color: #121A24;
          border-color: var(--accent-gold);
          font-weight: 800;
        }

        .empty-gallery {
          text-align: center;
          padding: 3rem;
          background: var(--neutral-card-bg);
          border-radius: var(--radius-md);
          color: var(--neutral-muted);
        }

        .gallery-card {
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .media-thumb-box {
          position: relative;
          height: 230px;
          overflow: hidden;
          background: #000;
        }

        .media-thumb-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-card:hover .media-thumb-box img {
          transform: scale(1.08);
        }

        .video-play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background 0.3s;
        }

        .gallery-card:hover .video-play-overlay {
          background: rgba(0, 122, 61, 0.5);
        }

        .play-icon {
          width: 58px;
          height: 58px;
          background: var(--primary-emerald);
          color: #FFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          padding-left: 4px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          transition: transform 0.2s;
        }

        .gallery-card:hover .play-icon {
          transform: scale(1.15);
          background: var(--accent-gold);
          color: #121A24;
        }

        .video-badge {
          background: rgba(0,0,0,0.75);
          color: #FFF;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
        }

        .year-pill {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          background: rgba(18, 26, 36, 0.88);
          color: var(--accent-gold);
          font-weight: 800;
          font-size: 0.8rem;
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          backdrop-filter: blur(4px);
        }

        [dir="rtl"] .year-pill {
          right: auto;
          left: 0.75rem;
        }

        .gallery-card-body {
          padding: 1.25rem;
        }

        .media-category {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-emerald);
          display: block;
          margin-bottom: 0.4rem;
        }

        .gallery-card-body h4 {
          font-size: 1.05rem;
          color: var(--neutral-heading);
          line-height: 1.4;
        }

        .media-lightbox-content {
          max-width: 900px;
          width: 92%;
          background: #FFF;
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          position: relative;
        }

        .lightbox-img {
          width: 100%;
          max-height: 520px;
          object-fit: contain;
          border-radius: var(--radius-md);
          background: #000;
          margin-bottom: 1rem;
        }

        .lightbox-video-player {
          width: 100%;
          max-height: 520px;
          border-radius: var(--radius-md);
          background: #000;
          margin-bottom: 1rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }

        .video-iframe {
          width: 100%;
          height: 480px;
          border: none;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }

        .lightbox-info h3 {
          font-size: 1.25rem;
          color: var(--neutral-heading);
          margin-bottom: 0.5rem;
        }

        .lightbox-meta {
          font-size: 0.9rem;
          color: var(--neutral-muted);
          margin-bottom: 1rem;
        }

        .btn-download {
          display: inline-block;
          background: var(--primary-emerald);
          color: #FFF;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: background 0.2s;
        }

        .btn-download:hover {
          background: var(--primary-emerald-dark);
          color: #FFF;
        }
      `}</style>
    </div>
  );
};
