import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import type { NewsArticle, Event } from '../../types';

export const NewsEventsView: React.FC = () => {
  const { news, events, addNewsArticle } = useData();
  const { language } = useLanguage();
  const { currentUser, isAdmin } = useAuth();

  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [newsFilter, setNewsFilter] = useState<'all' | 'article' | 'communique' | 'photo'>('all');

  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [registerEvent, setRegisterEvent] = useState<Event | null>(null);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  // Publish Modal State for Admins
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [pubType, setPubType] = useState<'article' | 'communique' | 'photo'>('article');
  const [pubTitle, setPubTitle] = useState('');
  const [pubCategory, setPubCategory] = useState<string>('education');
  const [pubSummary, setPubSummary] = useState('');
  const [pubContent, setPubContent] = useState('');
  const [pubImageUrl, setPubImageUrl] = useState('');
  const [pubPdfUrl, setPubPdfUrl] = useState('');
  const [pubAuthor, setPubAuthor] = useState('');
  const [pubSuccess, setPubSuccess] = useState(false);

  const resetForm = () => {
    setPubTitle('');
    setPubSummary('');
    setPubContent('');
    setPubImageUrl('');
    setPubPdfUrl('');
    setPubAuthor('');
    setPubType('article');
  };

  const handleOpenModal = () => {
    resetForm();
    setIsPublishModalOpen(true);
  };

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisteredSuccess(true);
    setTimeout(() => {
      setRegisteredSuccess(false);
      setRegisterEvent(null);
    }, 2500);
  };

  const handlePublishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pubTitle.trim() || !pubContent.trim()) {
      alert('Veuillez renseigner au moins le titre et le contenu principal.');
      return;
    }

    const defaultImg = pubImageUrl.trim() || './images/IMG-20260813-WA0083.jpg';

    const newArticle: NewsArticle = {
      id: `news-${Date.now()}`,
      title: { fr: pubTitle.trim(), en: pubTitle.trim(), ar: pubTitle.trim() },
      summary: { 
        fr: pubSummary.trim() || pubContent.substring(0, 140) + '...', 
        en: pubSummary.trim() || pubContent.substring(0, 140) + '...', 
        ar: pubSummary.trim() || pubContent.substring(0, 140) + '...' 
      },
      content: { fr: pubContent.trim(), en: pubContent.trim(), ar: pubContent.trim() },
      category: pubType === 'communique' ? 'communique' : pubCategory,
      author: pubAuthor.trim() || (currentUser?.name ? `${currentUser.name} (Bureau AJTES)` : 'Bureau Exécutif AJTES'),
      publishDate: new Date().toISOString().split('T')[0],
      imageUrl: defaultImg,
      featured: true,
      type: pubType,
      pdfUrl: pubPdfUrl.trim() ? pubPdfUrl.trim() : undefined,
      pdfSize: pubPdfUrl.trim() ? 'Document PDF Officiel' : undefined
    };

    addNewsArticle(newArticle);
    setPubSuccess(true);

    setTimeout(() => {
      setPubSuccess(false);
      setIsPublishModalOpen(false);
      resetForm();
    }, 1500);
  };

  const filteredNews = news.filter(item => {
    if (newsFilter === 'all') return true;
    if (newsFilter === 'communique') return item.type === 'communique' || item.category === 'communique' || !!item.pdfUrl;
    if (newsFilter === 'photo') return item.type === 'photo';
    if (newsFilter === 'article') return item.type === 'article' || (!item.type && item.category !== 'communique');
    return true;
  });

  return (
    <div className="news-events-page">
      {/* Public Header Banner */}
      <section className="page-banner">
        <div className="banner-container">
          <span className="section-badge">Vie Associative & Communication Officielle</span>
          <h1>Nouvelles & Communiqués AJTES</h1>
          <p>
            Consultez les publications officielles, les communiqués et les activités de l'association.
          </p>

          {/* Admin quick publish action button (Only visible to logged-in Admins) */}
          {isAdmin && (
            <div className="banner-actions margin-top">
              <button
                className="btn btn-gold btn-lg btn-publish-main"
                onClick={handleOpenModal}
              >
                + Nouvelle (Admin)
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        {/* Top Tab Switcher */}
        <div className="main-tab-bar">
          <button
            className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            Nouvelles ({news.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Événements à Venir ({events.length})
          </button>
        </div>

        {/* ARTICLES TAB */}
        {activeTab === 'news' && (
          <div>
            {/* Filter Pills */}
            <div className="filter-pills-bar">
              <span className="filter-label">Filtrer par type :</span>
              <button
                className={`pill-btn ${newsFilter === 'all' ? 'active' : ''}`}
                onClick={() => setNewsFilter('all')}
              >
                Tous ({news.length})
              </button>
              <button
                className={`pill-btn ${newsFilter === 'communique' ? 'active' : ''}`}
                onClick={() => setNewsFilter('communique')}
              >
                Communiqués & PDF
              </button>
              <button
                className={`pill-btn ${newsFilter === 'article' ? 'active' : ''}`}
                onClick={() => setNewsFilter('article')}
              >
                Articles
              </button>
              <button
                className={`pill-btn ${newsFilter === 'photo' ? 'active' : ''}`}
                onClick={() => setNewsFilter('photo')}
              >
                Photos
              </button>

              {/* Action reserved strictly for Admins */}
              {isAdmin && (
                <button
                  className="btn btn-primary btn-sm btn-quick-new"
                  onClick={handleOpenModal}
                >
                  + Nouvelle
                </button>
              )}
            </div>

            {filteredNews.length === 0 ? (
              <div className="card text-center margin-top-md" style={{ padding: '3.5rem 2rem', background: '#FFFFFF', border: '1px solid var(--neutral-border)' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--neutral-heading)', marginBottom: '0.5rem' }}>Aucune nouvelle n'a été publiée pour le moment</h3>
                <p style={{ color: 'var(--neutral-muted)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto' }}>
                  Consultez cette page ultérieurement pour découvrir les futurs communiqués et articles rédigés par l'AJTES.
                </p>
              </div>
            ) : (
              <div className="grid-2 margin-top-md">
              {filteredNews.map(item => {
                const isCommunique = item.type === 'communique' || item.category === 'communique' || !!item.pdfUrl;
                const isPhoto = item.type === 'photo';

                return (
                  <div key={item.id} className={`news-card card ${isCommunique ? 'communique-card-border' : ''}`}>
                    <div className="news-img-wrapper">
                      <img src={item.imageUrl} alt={item.title['fr']} className="news-img" />
                      {isCommunique && (
                        <span className="type-badge badge-communique">COMMUNIQUÉ OFFICIEL PDF</span>
                      )}
                      {isPhoto && (
                        <span className="type-badge badge-photo">ALBUM PHOTO</span>
                      )}
                      {!isCommunique && !isPhoto && (
                        <span className="type-badge badge-article">ARTICLE</span>
                      )}
                    </div>

                    <div className="news-body">
                      <div className="news-meta">
                        <span className="news-cat">Catégorie : {item.category}</span>
                        <span className="news-date">Date : {item.publishDate}</span>
                      </div>

                      <h3>{item.title[language] || item.title['fr']}</h3>
                      <p>{item.summary[language] || item.summary['fr']}</p>

                      {item.pdfUrl && (
                        <div className="pdf-attachment-box">
                          <div className="pdf-info">
                            <span className="pdf-title">Document Officiel PDF Joint</span>
                            <span className="pdf-size">{item.pdfSize || 'Fichier PDF'}</span>
                          </div>
                          <a
                            href={item.pdfUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-gold btn-sm pdf-dl-btn"
                            download
                          >
                            Télécharger PDF
                          </a>
                        </div>
                      )}

                      <div className="news-footer">
                        <span className="author">Auteur : {item.author}</span>
                        <button className="btn btn-outline-emerald btn-sm" onClick={() => setSelectedNews(item)}>
                          Lire l'article →
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            )}
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
                  <p className="event-info">Lieu : {evt.location} • Heure : {evt.time}</p>
                  <p className="event-desc">{evt.description[language] || evt.description['fr']}</p>

                  <div className="event-footer">
                    <span className="attendees-count">{evt.registeredCount} Inscrits</span>
                    <button className="btn btn-primary btn-sm" onClick={() => setRegisterEvent(evt)}>
                      S'inscrire à l'événement
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PUBLISH NEW ITEM MODAL (ACCÈS RESTREINT ADMIN) */}
      {isPublishModalOpen && (
        <div className="modal-overlay" onClick={() => setIsPublishModalOpen(false)}>
          <div className="modal-content publish-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsPublishModalOpen(false)}>✕</button>

            {pubSuccess ? (
              <div className="success-box text-center">
                <h2>Publication Réussie !</h2>
                <p>Votre nouvelle (<strong>{pubTitle}</strong>) a été publiée avec succès sur le site officiel de l'AJTES.</p>
              </div>
            ) : (
              <form onSubmit={handlePublishSubmit} className="publish-form">
                <div className="modal-header-box">
                  <h2>Formulaire de Publication Officielle</h2>
                  <p>Ajoutez un nouvel article de presse, un communiqué PDF officiel ou un album photo.</p>
                </div>

                {/* Type Selector */}
                <div className="pub-type-selector">
                  <button
                    type="button"
                    className={`pub-type-btn ${pubType === 'article' ? 'active' : ''}`}
                    onClick={() => setPubType('article')}
                  >
                    Article de presse
                  </button>
                  <button
                    type="button"
                    className={`pub-type-btn ${pubType === 'communique' ? 'active' : ''}`}
                    onClick={() => setPubType('communique')}
                  >
                    Communiqué PDF
                  </button>
                  <button
                    type="button"
                    className={`pub-type-btn ${pubType === 'photo' ? 'active' : ''}`}
                    onClick={() => setPubType('photo')}
                  >
                    Album Photo
                  </button>
                </div>

                <div className="form-group">
                  <label>Titre de la Publication *</label>
                  <input
                    type="text"
                    required
                    placeholder="Saisissez le titre de l'article ou du communiqué..."
                    value={pubTitle}
                    onChange={e => setPubTitle(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label>Catégorie *</label>
                    <select
                      value={pubCategory}
                      onChange={e => setPubCategory(e.target.value)}
                      className="form-control"
                    >
                      <option value="education">Éducation</option>
                      <option value="solidarite">Solidarité</option>
                      <option value="environnement">Environnement</option>
                      <option value="communique">Communiqué Officiel</option>
                      <option value="humanitaire">Humanitaire</option>
                      <option value="culture">Culture & Sport</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Auteur / Organe émetteur</label>
                    <input
                      type="text"
                      placeholder="Ex: Bureau Exécutif AJTES / Salomon"
                      value={pubAuthor}
                      onChange={e => setPubAuthor(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Court Résumé (Introductif)</label>
                  <input
                    type="text"
                    placeholder="Brève accroche synthétique (optionnelle)"
                    value={pubSummary}
                    onChange={e => setPubSummary(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Contenu Rédactionnel Complet *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Saisissez ici le texte intégral..."
                    value={pubContent}
                    onChange={e => setPubContent(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>URL de l'Illustration (Optionnelle)</label>
                  <input
                    type="text"
                    placeholder="Ex: ./images/IMG-20260813-WA0123.jpg"
                    value={pubImageUrl}
                    onChange={e => setPubImageUrl(e.target.value)}
                    className="form-control"
                  />
                </div>

                {pubType === 'communique' && (
                  <div className="form-group highlight-pdf-input">
                    <label>Lien du Document PDF Joint (Communiqué officiel)</label>
                    <input
                      type="text"
                      placeholder="Ex: https://exemple.org/communique.pdf"
                      value={pubPdfUrl}
                      onChange={e => setPubPdfUrl(e.target.value)}
                      className="form-control"
                    />
                    <small style={{ color: 'var(--neutral-muted)', marginTop: '0.25rem', display: 'block' }}>
                      Renseignez l'emplacement ou l'URL du fichier PDF téléchargeable.
                    </small>
                  </div>
                )}

                <div className="modal-actions-row margin-top">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsPublishModalOpen(false)}
                  >
                    Annuler
                  </button>
                  <button type="submit" className="btn btn-primary btn-lg flex-1">
                    Valider & Publier
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* News Details Modal */}
      {selectedNews && (
        <div className="modal-overlay" onClick={() => setSelectedNews(null)}>
          <div className="modal-content news-detail-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedNews(null)}>✕</button>
            <img src={selectedNews.imageUrl} alt="" className="modal-img" />
            
            <div className="modal-header-meta">
              <span className="news-cat">Catégorie : {selectedNews.category}</span>
              <h2>{selectedNews.title[language] || selectedNews.title['fr']}</h2>
              <p className="meta-line">Auteur : <strong>{selectedNews.author}</strong> • Date : {selectedNews.publishDate}</p>
            </div>

            {selectedNews.pdfUrl && (
              <div className="pdf-attachment-box margin-bottom-md">
                <div className="pdf-info">
                  <span className="pdf-title">Document Officiel PDF Rattaché</span>
                  <span className="pdf-size">{selectedNews.pdfSize || 'Document PDF'}</span>
                </div>
                <a
                  href={selectedNews.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gold btn-sm pdf-dl-btn"
                  download
                >
                  Télécharger le PDF Officiel
                </a>
              </div>
            )}

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
                <h2>Inscription Confirmée !</h2>
                <p>Votre place a été réservée pour : <strong>{registerEvent.title['fr']}</strong>.</p>
                <p>Un email de confirmation vous sera envoyé.</p>
              </div>
            ) : (
              <form onSubmit={handleRSVP} className="rsvp-form">
                <h2>Formulaire d'Inscription</h2>
                <p>Événement : <strong>{registerEvent.title['fr']}</strong></p>
                <p className="sub">Lieu : {registerEvent.location} | Date : {registerEvent.date}</p>

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
          padding: 3.5rem 1.5rem;
          text-align: center;
        }

        .banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .banner-container h1 {
          color: #FFF;
          font-size: 2.25rem;
          margin: 0.75rem 0;
        }

        .banner-actions {
          margin-top: 1.5rem;
        }

        .btn-publish-main {
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.35);
          font-size: 1rem;
          padding: 0.85rem 1.75rem;
        }

        .main-tab-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
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

        .filter-pills-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
          background: var(--neutral-light-bg);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--neutral-border);
        }

        .filter-label {
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--neutral-heading);
          margin-right: 0.5rem;
        }

        .pill-btn {
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-pill);
          padding: 0.4rem 0.85rem;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pill-btn.active, .pill-btn:hover {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
          border-color: var(--primary-emerald);
        }

        .btn-quick-new {
          margin-left: auto;
          font-weight: 700;
        }

        .news-card {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .communique-card-border {
          border: 2px solid var(--accent-gold);
        }

        .news-img-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
        }

        .news-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .type-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .badge-communique {
          background: #121A24;
          color: var(--accent-gold);
          border: 1px solid var(--accent-gold);
        }

        .badge-photo {
          background: #9C27B0;
          color: #FFF;
        }

        .badge-article {
          background: var(--primary-emerald);
          color: #FFF;
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
          color: var(--primary-emerald-text);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .news-body h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }

        .news-body p {
          font-size: 0.92rem;
          color: var(--neutral-body);
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .pdf-attachment-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #FFFDF0;
          border: 1px dashed var(--accent-gold);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }

        .pdf-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .pdf-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: #121A24;
        }

        .pdf-size {
          font-size: 0.75rem;
          color: var(--neutral-muted);
        }

        .pdf-dl-btn {
          text-decoration: none;
          white-space: nowrap;
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

        /* Modal specific styling */
        .publish-modal-content {
          max-width: 680px;
          padding: 2.25rem;
        }

        .modal-header-box {
          margin-bottom: 1.25rem;
        }

        .modal-header-box h2 {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }

        .pub-type-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .pub-type-btn {
          flex: 1;
          padding: 0.6rem 0.5rem;
          border: 1px solid var(--neutral-border);
          background: var(--neutral-light-bg);
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pub-type-btn.active {
          background: var(--primary-emerald);
          color: #FFF;
          border-color: var(--primary-emerald);
        }

        .publish-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .highlight-pdf-input {
          background: #FFFDF0;
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px dashed var(--accent-gold);
        }

        .modal-actions-row {
          display: flex;
          gap: 0.75rem;
        }

        .flex-1 { flex: 1; }

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

        .margin-bottom-md {
          margin-bottom: 1.25rem;
        }
      `}</style>
    </div>
  );
};
