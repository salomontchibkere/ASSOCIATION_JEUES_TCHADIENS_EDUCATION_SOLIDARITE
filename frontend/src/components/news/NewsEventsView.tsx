import React, { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import type { NewsArticle, Event } from '../../types';
import { FileUploadPicker } from '../common/FileUploadPicker';

export const NewsEventsView: React.FC = () => {
  const { news, events, addNewsArticle } = useData();
  const { language } = useLanguage();
  const { currentUser, isAdmin } = useAuth();

  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [newsFilter, setNewsFilter] = useState<'all' | 'article' | 'communique' | 'photo'>('all');

  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);
  const [registerEvent, setRegisterEvent] = useState<Event | null>(null);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  // Visitor Reactions State with localStorage persistence
  const [reactions, setReactions] = useState<Record<string, { likes: number; hearts: number; claps: number }>>(() => {
    try {
      const saved = localStorage.getItem('ajtes_v4_reactions');
      return saved ? JSON.parse(saved) : {
        'news-1': { likes: 14, hearts: 8, claps: 12 },
        'news-2': { likes: 9, hearts: 6, claps: 11 },
        'news-3': { likes: 7, hearts: 5, claps: 4 }
      };
    } catch (e) {
      return {};
    }
  });

  // Visitor Comments State with localStorage persistence
  const initialDefaultComments: Record<string, Array<{ id: string; author: string; text: string; date: string }>> = {
    'news-1': [
      { id: 'c-1', author: 'Mahamat Abakar', text: 'Félicitations au Bureau AJTES pour cette belle réalisation concrète au service des élèves !', date: '16/08/2026 10:15' },
      { id: 'c-2', author: 'Clarisse N.', text: 'Une excellente initiative qui va encourager le personnel enseignant et moderniser l\'école.', date: '17/08/2026 14:30' }
    ],
    'news-2': [
      { id: 'c-3', author: 'Yves T.', text: 'Bravo pour la campagne de reboisement, la jeunesse tchadienne en action !', date: '21/08/2026 09:00' }
    ],
    'news-3': [
      { id: 'c-4', author: 'Salimata B.', text: 'Merci pour le soutien scolaire et la distribution de fournitures aux enfants.', date: '29/08/2026 16:45' }
    ]
  };

  const [comments, setComments] = useState<Record<string, Array<{ id: string; author: string; text: string; date: string }>>>(() => {
    try {
      const saved = localStorage.getItem('ajtes_v4_comments');
      return saved ? JSON.parse(saved) : initialDefaultComments;
    } catch (e) {
      return initialDefaultComments;
    }
  });

  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [openInlineCommentId, setOpenInlineCommentId] = useState<string | null>(null);

  // Sync reactions & comments to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ajtes_v4_reactions', JSON.stringify(reactions));
    } catch (e) {}
  }, [reactions]);

  useEffect(() => {
    try {
      localStorage.setItem('ajtes_v4_comments', JSON.stringify(comments));
    } catch (e) {}
  }, [comments]);

  const handleReact = (articleId: string, type: 'likes' | 'hearts' | 'claps') => {
    setReactions(prev => {
      const current = prev[articleId] || { likes: 0, hearts: 0, claps: 0 };
      return {
        ...prev,
        [articleId]: {
          ...current,
          [type]: current[type] + 1
        }
      };
    });
  };

  const handleAddComment = (e: React.FormEvent, articleId: string) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: `c-${Date.now()}`,
      author: commentAuthor.trim() || (currentUser?.name ? currentUser.name : 'Visiteur du site'),
      text: commentText.trim(),
      date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    setComments(prev => ({
      ...prev,
      [articleId]: [newComment, ...(prev[articleId] || [])]
    }));

    setCommentText('');
  };

  // Publish Modal State for Admins
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [pubType, setPubType] = useState<'article' | 'communique' | 'photo'>('article');
  const [pubTitle, setPubTitle] = useState('');
  const [pubCategory, setPubCategory] = useState<string>('education');
  const [pubSummary, setPubSummary] = useState('');
  const [pubContent, setPubContent] = useState('');
  const [pubImageUrl, setPubImageUrl] = useState('');
  const [pubPdfUrl, setPubPdfUrl] = useState('');
  const [pubPdfSize, setPubPdfSize] = useState('Document PDF');
  const [pubVideoUrl, setPubVideoUrl] = useState('');
  const [pubLinkUrl, setPubLinkUrl] = useState('');
  const [pubAuthor, setPubAuthor] = useState('');
  const [pubSuccess, setPubSuccess] = useState(false);

  const resetForm = () => {
    setPubTitle('');
    setPubSummary('');
    setPubContent('');
    setPubImageUrl('');
    setPubPdfUrl('');
    setPubVideoUrl('');
    setPubLinkUrl('');
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
      pdfSize: pubPdfUrl.trim() ? pubPdfSize : undefined,
      videoUrl: pubVideoUrl.trim() ? pubVideoUrl.trim() : undefined,
      linkUrl: pubLinkUrl.trim() ? pubLinkUrl.trim() : undefined,
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

                      {item.videoUrl && (
                        <div style={{ margin: '0.5rem 0', background: '#F8FAFC', padding: '0.5rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#007A3D', display: 'block', marginBottom: '0.3rem' }}>🎥 Vidéo rattachée</span>
                          {item.videoUrl.startsWith('data:video') || item.videoUrl.endsWith('.mp4') ? (
                            <video src={item.videoUrl} controls style={{ width: '100%', maxHeight: '180px', borderRadius: '6px' }} />
                          ) : (
                            <iframe src={item.videoUrl} title="Vidéo" style={{ width: '100%', height: '180px', border: 'none', borderRadius: '6px' }} allowFullScreen />
                          )}
                        </div>
                      )}

                      {item.linkUrl && (
                        <div style={{ marginTop: '0.4rem' }}>
                          <a
                            href={item.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '0.82rem', fontWeight: 700, color: '#007A3D', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}
                          >
                            🔗 Consulter le lien / Source Web ↗
                          </a>
                        </div>
                      )}

                      {/* Visitor Reactions Bar & Comment Toggle */}
                      <div className="reactions-bar" style={{ display: 'flex', gap: '0.4rem', margin: '0.75rem 0', alignItems: 'center', flexWrap: 'wrap' }}>
                        <button
                          type="button"
                          className="btn-reaction"
                          onClick={() => handleReact(item.id, 'likes')}
                          style={{ border: '1px solid #E5E7EB', background: '#F9FAFB', borderRadius: '20px', padding: '0.25rem 0.65rem', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600 }}
                        >
                          👍 J'aime ({reactions[item.id]?.likes || 0})
                        </button>
                        <button
                          type="button"
                          className="btn-reaction"
                          onClick={() => handleReact(item.id, 'hearts')}
                          style={{ border: '1px solid #E5E7EB', background: '#F9FAFB', borderRadius: '20px', padding: '0.25rem 0.65rem', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600 }}
                        >
                          ❤️ Soutien ({reactions[item.id]?.hearts || 0})
                        </button>
                        <button
                          type="button"
                          className="btn-reaction"
                          onClick={() => handleReact(item.id, 'claps')}
                          style={{ border: '1px solid #E5E7EB', background: '#F9FAFB', borderRadius: '20px', padding: '0.25rem 0.65rem', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600 }}
                        >
                          👏 Bravo ({reactions[item.id]?.claps || 0})
                        </button>
                        <button
                          type="button"
                          onClick={() => setOpenInlineCommentId(openInlineCommentId === item.id ? null : item.id)}
                          style={{ border: '1px solid var(--primary-emerald)', background: openInlineCommentId === item.id ? 'var(--primary-emerald-light)' : '#FFF', color: 'var(--primary-emerald-text)', borderRadius: '20px', padding: '0.25rem 0.65rem', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 700, marginLeft: 'auto' }}
                        >
                          💬 Commenter ({(comments[item.id] || []).length})
                        </button>
                      </div>

                      {/* Inline Visitor Comment Drawer */}
                      {openInlineCommentId === item.id && (
                        <div className="inline-comment-drawer" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                          <h4 style={{ fontSize: '0.92rem', color: 'var(--neutral-heading)', marginBottom: '0.6rem', fontWeight: 700 }}>
                            💬 Commentaires des visiteurs ({(comments[item.id] || []).length})
                          </h4>

                          {/* Quick Add Form */}
                          <form onSubmit={(e) => handleAddComment(e, item.id)} style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                              <input
                                type="text"
                                placeholder="Votre Nom / Prénom (Optionnel)"
                                value={commentAuthor}
                                onChange={e => setCommentAuthor(e.target.value)}
                                className="form-control"
                                style={{ fontSize: '0.82rem', padding: '0.4rem 0.65rem' }}
                              />
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <input
                                type="text"
                                required
                                placeholder="Écrivez votre commentaire ici..."
                                value={commentText}
                                onChange={e => setCommentText(e.target.value)}
                                className="form-control"
                                style={{ flex: 1, fontSize: '0.85rem', padding: '0.45rem 0.65rem' }}
                              />
                              <button type="submit" className="btn btn-gold btn-sm" style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem', fontWeight: 700 }}>
                                Envoyer
                              </button>
                            </div>
                          </form>

                          {/* Comments list */}
                          <div style={{ maxHeight: '200px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {(comments[item.id] || []).length === 0 ? (
                              <p style={{ fontSize: '0.8rem', color: '#94A3B8', fontStyle: 'italic', margin: 0 }}>
                                Aucun commentaire pour le moment. Soyez le premier à réagir !
                              </p>
                            ) : (
                              (comments[item.id] || []).map(c => (
                                <div key={c.id} style={{ background: '#FFFFFF', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                                    <strong style={{ fontSize: '0.82rem', color: '#1E293B' }}>{c.author}</strong>
                                    <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{c.date}</span>
                                  </div>
                                  <p style={{ margin: 0, fontSize: '0.83rem', color: '#334155', lineHeight: 1.4 }}>{c.text}</p>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      )}

                      <div className="news-footer">
                        <span className="author">Auteur : {item.author}</span>
                        <button className="btn btn-outline-emerald btn-sm" onClick={() => setSelectedNews(item)}>
                          Lire l'article & réagir →
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

                <FileUploadPicker
                  label="Photo / Image d'illustration"
                  fileTypeHint="image"
                  accept="image/*"
                  value={pubImageUrl}
                  onChange={(val) => setPubImageUrl(val)}
                  helpText="Importer une photo depuis l'appareil ou coller une URL d'illustration."
                />

                <FileUploadPicker
                  label="Document PDF Joint (Communiqué / Rapport)"
                  fileTypeHint="pdf"
                  accept="application/pdf"
                  value={pubPdfUrl}
                  onChange={(val, meta) => {
                    setPubPdfUrl(val);
                    if (meta?.fileSize) {
                      setPubPdfSize(`PDF (${meta.fileSize})`);
                    }
                  }}
                  helpText="Importer un document PDF officiel ou renseigner son URL."
                />

                <FileUploadPicker
                  label="Fichier Vidéo ou Lien Youtube Rattaché"
                  fileTypeHint="video"
                  accept="video/*"
                  value={pubVideoUrl}
                  onChange={(val) => setPubVideoUrl(val)}
                  helpText="Importer un fichier vidéo (.mp4) ou coller un lien Youtube."
                />

                <div className="form-group">
                  <label>Lien Web / Source Externe (URL)</label>
                  <input
                    type="url"
                    placeholder="Ex: https://ajtes.org/source-article"
                    value={pubLinkUrl}
                    onChange={e => setPubLinkUrl(e.target.value)}
                    className="form-control"
                  />
                </div>

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

            {selectedNews.videoUrl && (
              <div style={{ marginBottom: '1.25rem', background: '#F8FAFC', padding: '1rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#007A3D', marginBottom: '0.5rem' }}>🎥 Vidéo rattachée à cette publication</h4>
                {selectedNews.videoUrl.startsWith('data:video') || selectedNews.videoUrl.endsWith('.mp4') ? (
                  <video src={selectedNews.videoUrl} controls style={{ width: '100%', maxHeight: '380px', borderRadius: '8px', background: '#000' }} />
                ) : (
                  <iframe src={selectedNews.videoUrl} title="Vidéo" style={{ width: '100%', height: '320px', border: 'none', borderRadius: '8px' }} allowFullScreen />
                )}
              </div>
            )}

            {selectedNews.linkUrl && (
              <div style={{ marginBottom: '1rem' }}>
                <a
                  href={selectedNews.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ background: '#ECFDF5', color: '#047857', border: '1px solid #A7F3D0', fontWeight: 700 }}
                >
                  🔗 Consulter le lien / Source Web externe ↗
                </a>
              </div>
            )}

            <div className="full-content-text">
              <p>{selectedNews.content[language] || selectedNews.content['fr']}</p>
            </div>

            {/* Reactions & Comments Section inside Detail Modal */}
            <div className="news-comments-section margin-top-lg" style={{ borderTop: '1px solid #E5E7EB', paddingTop: '1.25rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--neutral-heading)' }}>
                Réactions & Commentaires des Visiteurs ({(comments[selectedNews.id] || []).length})
              </h3>

              {/* Reaction Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleReact(selectedNews.id, 'likes')}
                >
                  J'aime ({reactions[selectedNews.id]?.likes || 0})
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleReact(selectedNews.id, 'hearts')}
                >
                  Soutien ({reactions[selectedNews.id]?.hearts || 0})
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleReact(selectedNews.id, 'claps')}
                >
                  Bravo ({reactions[selectedNews.id]?.claps || 0})
                </button>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={(e) => handleAddComment(e, selectedNews.id)} style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Votre Nom ou Prénom (optionnel)"
                    value={commentAuthor}
                    onChange={e => setCommentAuthor(e.target.value)}
                    className="form-control"
                    style={{ maxWidth: '250px' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <textarea
                    rows={2}
                    required
                    placeholder="Exprimez votre réaction, encouragement ou avis..."
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    className="form-control"
                    style={{ flex: 1 }}
                  />
                  <button type="submit" className="btn btn-gold btn-sm" style={{ alignSelf: 'flex-end', padding: '0.6rem 1rem' }}>
                    Poster
                  </button>
                </div>
              </form>

              {/* Comments List */}
              <div className="comments-list">
                {(comments[selectedNews.id] || []).length === 0 ? (
                  <p style={{ color: '#9CA3AF', fontSize: '0.88rem', fontStyle: 'italic' }}>
                    Soyez le premier à commenter cette publication !
                  </p>
                ) : (
                  (comments[selectedNews.id] || []).map(comment => (
                    <div key={comment.id} style={{ background: '#F9FAFB', padding: '0.75rem 1rem', borderRadius: '8px', marginBottom: '0.5rem', border: '1px solid #F3F4F6' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <strong style={{ fontSize: '0.88rem', color: '#1F2937' }}>{comment.author}</strong>
                        <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{comment.date}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.88rem', color: '#4B5563' }}>{comment.text}</p>
                    </div>
                  ))
                )}
              </div>
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
