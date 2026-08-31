import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';

export const AdminDashboardView: React.FC = () => {
  const {
    projects,
    media,
    donations,
    addProject,
    addMediaItem
  } = useData();

  const { currentUser, isLoggedIn, isAdmin, login, loginAsAdmin, logout } = useAuth();
  const [activeAdminTab, setActiveAdminTab] = useState<'overview' | 'content' | 'media' | 'donations'>('overview');

  // Admin login form states
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  // Form states for Content Creation
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjCategory, setNewProjCategory] = useState<'education' | 'solidarite' | 'environnement' | 'humanitaire'>('education');
  const [newProjBudget, setNewProjBudget] = useState('5000000');
  const newProjLocation = 'Nangassou, Tchad';

  // Form states for Media Upload
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaType, setMediaType] = useState<'photo' | 'video'>('photo');
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaYear, setMediaYear] = useState('2026');
  const mediaCategory = 'Education';
  const [mediaSuccessMsg, setMediaSuccessMsg] = useState(false);

  const totalDonationsAmount = donations.reduce((sum, d) => sum + d.amount, 0);

  const handleAddProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProject({
      id: `proj-${Date.now()}`,
      title: { fr: newProjTitle, en: newProjTitle, ar: newProjTitle },
      description: { fr: 'Nouveau projet ajouté depuis le tableau de bord d\'administration.', en: 'New project added from admin dashboard.', ar: 'مشروع جديد تم إضافته من لوحة التحكم.' },
      category: newProjCategory,
      location: newProjLocation,
      startDate: new Date().toISOString().split('T')[0],
      objective: { fr: 'Objectif du projet', en: 'Project objective', ar: 'هدف المشروع' },
      targetBudget: parseFloat(newProjBudget) || 5000000,
      raisedBudget: 0,
      beneficiariesCount: 200,
      status: 'en_cours',
      imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
      year: 2026
    });
    setNewProjTitle('');
    alert('Projet publié avec succès sur le site !');
  };

  const handleAddMediaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMediaItem({
      id: `media-${Date.now()}`,
      title: { fr: mediaTitle, en: mediaTitle, ar: mediaTitle },
      type: mediaType,
      url: mediaUrl || 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      year: parseInt(mediaYear) || 2026,
      category: mediaCategory,
      location: 'Tchad'
    });

    setMediaTitle('');
    setMediaUrl('');
    setMediaSuccessMsg(true);
    setTimeout(() => setMediaSuccessMsg(false), 3000);
  };

  // Security Guard: Check if logged in user is admin
  if (!isLoggedIn || !isAdmin) {
    return (
      <div className="admin-page">
        <section className="admin-header-banner">
          <div className="admin-banner-container">
            <div className="admin-badge">ESPACE RÉSERVÉ — ACCÈS ACCRÉDITÉ</div>
            <h1>Portail d'Administration AJTES</h1>
            <p>Accès restreint au Bureau National & Responsables Techniques</p>
          </div>
        </section>

        <section className="section">
          <div className="admin-login-card card">
            <div className="security-icon">🛡️</div>
            <h2>Identification Administrateur</h2>
            <p className="security-text">
              Veuillez saisir vos identifiants d'administration pour accéder à la console de gestion des projets, des dons et des médias de l'AJTES.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                login(adminEmail || 'salomon.admin@ajtes.td', 'admin');
              }}
              className="admin-form"
            >
              <div className="form-group">
                <label>Email Administrateur *</label>
                <input
                  type="email"
                  required
                  placeholder="salomon.admin@ajtes.td"
                  value={adminEmail}
                  onChange={e => setAdminEmail(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Mot de Passe *</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={adminPassword}
                  onChange={e => setAdminPassword(e.target.value)}
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-full margin-top">
                Connexion au Tableau de Bord
              </button>

              <div className="demo-admin-divider">
                <span>CONNEXION RAPIDE ACCRÉDITÉE (BUREAU EXÉCUTIF)</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button
                  type="button"
                  className="btn btn-gold w-full"
                  onClick={() => login('marcallandedjim@gmail.com', 'super_admin')}
                >
                  Connexion Marc Allan Dedjim (Super Admin)
                </button>
                <button
                  type="button"
                  className="btn btn-secondary w-full"
                  onClick={() => login('soumabanakolong007@gmail.com', 'admin')}
                >
                  Connexion Souma Banakolong (Président)
                </button>
                <button
                  type="button"
                  className="btn btn-secondary w-full"
                  onClick={() => login('betoudjimbaikaravalentin@gmail.com', 'admin')}
                >
                  Connexion Betoudjimbaikara Valentin (Secrétaire Général)
                </button>
                <button
                  type="button"
                  className="btn btn-secondary w-full"
                  onClick={() => login('boikoussiguen@gmail.com', 'admin')}
                >
                  Connexion Boikoussigue (Chargé de Com)
                </button>
                <button
                  type="button"
                  className="btn btn-outline w-full"
                  style={{ marginTop: '0.25rem' }}
                  onClick={() => loginAsAdmin()}
                >
                  Connexion Salomon (Tech Lead & Super Admin)
                </button>
              </div>
            </form>
          </div>
        </section>

        <style>{`
          .admin-login-card {
            max-width: 520px;
            margin: 0 auto;
            padding: 2.5rem;
            text-align: center;
          }
          .security-icon {
            font-size: 3rem;
            margin-bottom: 0.5rem;
          }
          .security-text {
            color: var(--neutral-muted);
            font-size: 0.92rem;
            margin-bottom: 1.5rem;
          }
          .demo-admin-divider {
            position: relative;
            text-align: center;
            margin: 1.25rem 0;
          }
          .demo-admin-divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: var(--neutral-border);
          }
          .demo-admin-divider span {
            position: relative;
            background: var(--neutral-card-bg);
            padding: 0 0.75rem;
            color: var(--neutral-muted);
            font-size: 0.8rem;
            font-weight: 700;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <section className="admin-header-banner">
        <div className="admin-banner-container">
          <div className="admin-badge">⚡ ESPACE ADMINISTRATION SÉCURISÉ</div>
          <h1>Tableau de Bord Administrateur</h1>
          <p>Gestionnaire technique & maintenance — Connecté en tant que <strong>{currentUser?.name}</strong> ({currentUser?.email})</p>
          <div style={{ marginTop: '0.75rem' }}>
            <button className="btn btn-secondary btn-sm" onClick={logout}>Déconnexion Admin</button>
          </div>
        </div>
      </section>

      <section className="section">
        {/* Admin Nav Tabs */}
        <div className="admin-tab-bar">
          <button
            className={`admin-tab ${activeAdminTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveAdminTab('overview')}
          >
            Vue d'Ensemble & Stats
          </button>
          <button
            className={`admin-tab ${activeAdminTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveAdminTab('content')}
          >
            Gestion des Projets & Actus
          </button>
          <button
            className={`admin-tab ${activeAdminTab === 'media' ? 'active' : ''}`}
            onClick={() => setActiveAdminTab('media')}
          >
            Ajout Photos & Vidéos
          </button>
          <button
            className={`admin-tab ${activeAdminTab === 'donations' ? 'active' : ''}`}
            onClick={() => setActiveAdminTab('donations')}
          >
            Historique des Dons ({donations.length})
          </button>
        </div>

        {/* OVERVIEW TAB */}
        {activeAdminTab === 'overview' && (
          <div className="admin-overview">
            <div className="grid-4">
              <div className="admin-stat-card card">
                <span className="stat-icon">💰</span>
                <div className="stat-info">
                  <span className="stat-val">{totalDonationsAmount.toLocaleString()} FCFA</span>
                  <span className="stat-title">Total des Dons Reçus</span>
                </div>
              </div>

              <div className="admin-stat-card card">
                <span className="stat-icon">🏗️</span>
                <div className="stat-info">
                  <span className="stat-val">{projects.length}</span>
                  <span className="stat-title">Projets Gérés</span>
                </div>
              </div>

              <div className="admin-stat-card card">
                <span className="stat-icon">📷</span>
                <div className="stat-info">
                  <span className="stat-val">{media.length}</span>
                  <span className="stat-title">Médias (Photos & Vidéos)</span>
                </div>
              </div>

              <div className="admin-stat-card card">
                <span className="stat-icon">👥</span>
                <div className="stat-info">
                  <span className="stat-val">120+</span>
                  <span className="stat-title">Membres Répertoriés</span>
                </div>
              </div>
            </div>

            {/* Recent Donations Activity Table */}
            <div className="margin-top-lg card admin-table-card">
              <h3>Dernières Transactions de Dons</h3>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Référence</th>
                    <th>Donateur</th>
                    <th>Montant (FCFA)</th>
                    <th>Méthode</th>
                    <th>Projet</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map(d => (
                    <tr key={d.id}>
                      <td><strong>{d.reference}</strong></td>
                      <td>{d.donorName}</td>
                      <td className="amount-col">{d.amount.toLocaleString()} FCFA</td>
                      <td>
                        <span className="method-pill">
                          {d.paymentMethod === 'airtel_money' ? 'Airtel Money' : d.paymentMethod === 'moov_africa' ? 'Moov Africa' : 'Carte Bancaire'}
                        </span>
                      </td>
                      <td>{d.projectTitle}</td>
                      <td>{d.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MEDIA MANAGER TAB (PHOTOS & VIDEOS) */}
        {activeAdminTab === 'media' && (
          <div className="admin-media-manager">
            <div className="card admin-form-card">
              <h2>📷 Ajouter de Nouvelles Photos ou Vidéos</h2>
              <p>Mise à jour rapide de la galerie pour les réalisations 2026, statuts et évènements.</p>

              {mediaSuccessMsg && (
                <div className="alert-success">
                  ✅ Média ajouté avec succès à la Galerie Officielle !
                </div>
              )}

              <form onSubmit={handleAddMediaSubmit} className="admin-form">
                <div className="form-group">
                  <label>Titre / Description du Média *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Construction du bureau administratif au CEG de Nangassou"
                    value={mediaTitle}
                    onChange={e => setMediaTitle(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label>Type de Média *</label>
                    <select
                      value={mediaType}
                      onChange={e => setMediaType(e.target.value as 'photo' | 'video')}
                      className="form-control"
                    >
                      <option value="photo">📷 Photo</option>
                      <option value="video">🎬 Vidéo (Lien Youtube ou Embed)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Année de réalisation *</label>
                    <select
                      value={mediaYear}
                      onChange={e => setMediaYear(e.target.value)}
                      className="form-control"
                    >
                      <option value="2026">2026</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>URL de l'image ou de la vidéo *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://images.unsplash.com/... ou URL vidéo"
                    value={mediaUrl}
                    onChange={e => setMediaUrl(e.target.value)}
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  ➕ Publier dans la Galerie Officielle
                </button>
              </form>
            </div>
          </div>
        )}

        {/* CONTENT MANAGER TAB */}
        {activeAdminTab === 'content' && (
          <div className="admin-content-manager">
            <div className="card admin-form-card">
              <h2>🏗️ Publier un Nouveau Projet</h2>
              <form onSubmit={handleAddProjectSubmit} className="admin-form">
                <div className="form-group">
                  <label>Titre du Projet *</label>
                  <input
                    type="text"
                    required
                    placeholder="Titre du projet"
                    value={newProjTitle}
                    onChange={e => setNewProjTitle(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label>Catégorie *</label>
                    <select
                      value={newProjCategory}
                      onChange={e => setNewProjCategory(e.target.value as any)}
                      className="form-control"
                    >
                      <option value="education">Éducation</option>
                      <option value="solidarite">Solidarité</option>
                      <option value="environnement">Environnement</option>
                      <option value="humanitaire">Humanitaire</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Budget cible (FCFA) *</label>
                    <input
                      type="number"
                      required
                      value={newProjBudget}
                      onChange={e => setNewProjBudget(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full margin-top">
                  🚀 Publier le projet
                </button>
              </form>
            </div>
          </div>
        )}

        {/* DONATIONS LOGS TAB */}
        {activeAdminTab === 'donations' && (
          <div className="card admin-table-card">
            <div className="table-header-row">
              <h2>Registre des Dons Reçus</h2>
              <button
                className="btn btn-gold btn-sm"
                onClick={() => alert('Exportation du fichier CSV des dons (Simulée)')}
              >
                Exporter en CSV
              </button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>Donateur</th>
                  <th>Email</th>
                  <th>Montant</th>
                  <th>Moyen</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {donations.map(d => (
                  <tr key={d.id}>
                    <td>{d.reference}</td>
                    <td>{d.donorName}</td>
                    <td>{d.donorEmail}</td>
                    <td className="amount-col">{d.amount.toLocaleString()} FCFA</td>
                    <td>{d.paymentMethod}</td>
                    <td>{d.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <style>{`
        .admin-header-banner {
          background: linear-gradient(135deg, #121A24, #004D26);
          color: #FFF;
          padding: 3.5rem 1.5rem;
          text-align: center;
        }

        .admin-banner-container h1 {
          color: #FFF;
          font-size: 2.2rem;
          margin: 0.5rem 0;
        }

        .admin-badge {
          display: inline-block;
          background: var(--accent-gold);
          color: #121A24;
          font-weight: 800;
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.82rem;
        }

        .admin-tab-bar {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .admin-tab {
          padding: 0.75rem 1.25rem;
          font-weight: 700;
          font-size: 0.92rem;
          background: var(--neutral-card-bg);
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          color: var(--neutral-heading);
          transition: all 0.2s;
        }

        .admin-tab.active {
          background: var(--primary-emerald);
          color: #FFF;
          border-color: var(--primary-emerald);
        }

        .admin-stat-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          font-size: 2.25rem;
          background: var(--primary-emerald-light);
          width: 54px;
          height: 54px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-val {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--neutral-heading);
        }

        .stat-title {
          font-size: 0.82rem;
          color: var(--neutral-muted);
          font-weight: 600;
        }

        .admin-table-card {
          padding: 2rem;
        }

        .table-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        [dir="rtl"] .admin-table { text-align: right; }

        .admin-table th, .admin-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--neutral-border);
          font-size: 0.9rem;
        }

        .admin-table th {
          background: var(--neutral-light-bg);
          font-weight: 700;
          color: var(--neutral-heading);
        }

        .amount-col {
          color: var(--primary-emerald);
          font-weight: 800;
        }

        .method-pill {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.8rem;
        }

        .admin-form-card {
          max-width: 700px;
          margin: 0 auto;
          padding: 2.5rem;
        }

        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1.5rem;
        }

        .alert-success {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
          font-weight: 700;
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-sm);
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};
