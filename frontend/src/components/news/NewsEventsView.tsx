import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import type { NewsArticle, Event } from '../../types';

export const NewsEventsView: React.FC = () => {
  const { news, events } = useData();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');

  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [registerEvent, setRegisterEvent] = useState<Event | null>(null);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisteredSuccess(true);
    setTimeout(() => {
      setRegisteredSuccess(false);
      setRegisterEvent(null);
    }, 2500);
  };

  return (
    <div className="news-events-page">
      <section className="page-banner">
        <div className="banner-container">
          <span className="section-badge">Vie Associative & Publications</span>
          <h1>Actualités & Événements Officiels</h1>
          <p>
            Suivez régulièrement la vie de l'AJTES, nos communiqués de presse et participez aux prochains rassemblements de la jeunesse.
          </p>
        </div>
      </section>

      <section className="section">
        {/* Top Tab Switcher */}
        <div className="main-tab-bar">
          <button
            className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            📰 Actualités ({news.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            📅 Événements à Venir ({events.length})
          </button>
        </div>

        {/* ARTICLES TAB */}
        {activeTab === 'news' && (
          <div className="grid-2">
            {news.map(item => (
              <div key={item.id} className="news-card card">
                <img src={item.imageUrl} alt={item.title['fr']} className="news-img" />
                <div className="news-body">
                  <div className="news-meta">
                    <span className="news-cat">🏷️ {item.category}</span>
                    <span className="news-date">🗓️ {item.publishDate}</span>
                  </div>
                  <h3>{item.title[language] || item.title['fr']}</h3>
                  <p>{item.summary[language] || item.summary['fr']}</p>
                  <div className="news-footer">
                    <span className="author">✍️ {item.author}</span>
                    <button className="btn btn-outline-emerald btn-sm" onClick={() => setSelectedNews(item)}>
                      Lire la suite →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EVENTS TAB */}
        {activeTab === 'events' && (
          <div className="grid-2">
            {events.map(evt => (
              <div key={evt.id} className="event-card card">
                <img src={evt.imageUrl} alt={evt.title['fr']} className="event-img" />
                <div className="event-body">
                  <div className="event-date-badge">
                    <span>{evt.date}</span>
                  </div>
                  <h3>{evt.title[language] || evt.title['fr']}</h3>
                  <p className="event-info">📍 {evt.location} • ⏰ {evt.time}</p>
                  <p className="event-desc">{evt.description[language] || evt.description['fr']}</p>

                  <div className="event-footer">
                    <span className="attendees-count">👥 {evt.registeredCount} Inscrits</span>
                    <button className="btn btn-primary btn-sm" onClick={() => setRegisterEvent(evt)}>
                      ✍️ S'inscrire à l'événement
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* News Modal */}
      {selectedNews && (
        <div className="modal-overlay" onClick={() => setSelectedNews(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedNews(null)}>✕</button>
            <img src={selectedNews.imageUrl} alt="" className="modal-img" />
            <h2>{selectedNews.title[language] || selectedNews.title['fr']}</h2>
            <p className="meta-line">Auteur: {selectedNews.author} • Date: {selectedNews.publishDate}</p>
            <div className="full-content-text">
              <p>{selectedNews.content[language] || selectedNews.content['fr']}</p>
            </div>
          </div>
        </div>
      )}

      {/* Event Registration RSVP Modal */}
      {registerEvent && (
        <div className="modal-overlay" onClick={() => setRegisterEvent(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setRegisterEvent(null)}>✕</button>

            {registeredSuccess ? (
              <div className="success-box text-center">
                <h2>🎉 Inscription Confirmée !</h2>
                <p>Votre place a été réservée pour : <strong>{registerEvent.title['fr']}</strong>.</p>
                <p>Un email de confirmation vous sera envoyé.</p>
              </div>
            ) : (
              <form onSubmit={handleRSVP} className="rsvp-form">
                <h2>Formulaire d'Inscription</h2>
                <p>Événement : <strong>{registerEvent.title['fr']}</strong></p>
                <p className="sub">📍 {registerEvent.location} | 📅 {registerEvent.date}</p>

                <div className="form-group">
                  <label>Nom et Prénom *</label>
                  <input type="text" required placeholder="Votre nom complet" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Adresse E-mail *</label>
                  <input type="email" required placeholder="votre.email@example.td" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Téléphone / WhatsApp *</label>
                  <input type="tel" required placeholder="+235 60 00 00 00" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  Valider mon inscription
                </button>
              </form>
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

        .main-tab-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .tab-btn {
          padding: 0.85rem 1.75rem;
          font-size: 1.05rem;
          font-weight: 700;
          background: var(--neutral-card-bg);
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          color: var(--neutral-heading);
          transition: all 0.2s;
        }

        .tab-btn.active {
          background: var(--primary-emerald);
          color: #FFF;
          border-color: var(--primary-emerald);
          box-shadow: var(--shadow-md);
        }

        .news-card {
          display: flex;
          flex-direction: column;
        }

        .news-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .news-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .news-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--primary-emerald);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .news-body h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .news-body p {
          font-size: 0.92rem;
          color: var(--neutral-body);
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .news-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--neutral-border);
        }

        .author {
          font-size: 0.82rem;
          color: var(--neutral-muted);
        }

        .event-card {
          display: flex;
          flex-direction: column;
        }

        .event-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .event-body {
          padding: 1.5rem;
        }

        .event-date-badge {
          display: inline-block;
          background: var(--accent-gold-light);
          color: var(--accent-gold-hover);
          font-weight: 800;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }

        .event-info {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary-emerald);
          margin-bottom: 0.5rem;
        }

        .event-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--neutral-border);
        }

        .attendees-count {
          font-size: 0.85rem;
          color: var(--neutral-muted);
          font-weight: 600;
        }

        .meta-line {
          font-size: 0.85rem;
          color: var(--neutral-muted);
          margin-bottom: 1rem;
        }

        .full-content-text {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--neutral-dark);
        }

        .rsvp-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--neutral-heading);
        }

        .form-control {
          padding: 0.75rem 1rem;
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-family: var(--font-main);
        }

        .success-box {
          padding: 2rem 1rem;
        }
      `}</style>
    </div>
  );
};
