import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import type { MemberType } from '../../types';

interface MemberSpaceViewProps {
  initialMode?: 'login' | 'register';
  setCurrentTab?: (tab: string) => void;
}

export const MemberSpaceView: React.FC<MemberSpaceViewProps> = ({ initialMode = 'register', setCurrentTab }) => {
  const { currentUser, isLoggedIn, isAdmin, login, logout, register } = useAuth();

  const [isLoginMode, setIsLoginMode] = useState(initialMode === 'login');
  const [showQRModal, setShowQRModal] = useState(false);

  React.useEffect(() => {
    if (initialMode) {
      setIsLoginMode(initialMode === 'login');
    }
  }, [initialMode]);

  // Form states
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('N\'Djamena');
  const [memberType, setMemberType] = useState<MemberType>('actif');

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginMode) {
      login(email);
    } else {
      register({
        name,
        email,
        profession,
        phone,
        city,
        memberType,
        role: 'membre',
        membershipStatus: 'actif'
      });
    }
  };

  return (
    <div className="member-page">
      <section className="page-banner">
        <div className="banner-container">
          <span className="section-badge">Communauté & Engagements</span>
          <h1>Espace Membre & Adhésion AJTES</h1>
          <p>
            Rejoignez notre réseau de jeunes engagés, soutenez les activités scolaires et suivez votre statut de membre.
          </p>
        </div>
      </section>

      <section className="section">
        {!isLoggedIn ? (
          /* AUTH FORM (LOGIN / REGISTER) */
          <div className="auth-form-card card">
            <div className="auth-toggle">
              <button
                className={`toggle-btn ${isLoginMode ? 'active' : ''}`}
                onClick={() => setIsLoginMode(true)}
              >
                Se Connecter
              </button>
              <button
                className={`toggle-btn ${!isLoginMode ? 'active' : ''}`}
                onClick={() => setIsLoginMode(false)}
              >
                Devenir Membre (Adhésion)
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="auth-form">
              {!isLoginMode && (
                <>
                  <div className="form-group">
                    <label>Nom et Prénom *</label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom complet"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label>Profession / Statut *</label>
                      <select
                        required
                        value={profession}
                        onChange={e => setProfession(e.target.value)}
                        className="form-control"
                      >
                        <option value="" disabled>-- Sélectionner votre profession --</option>
                        <option value="Élève / Étudiant(e)">Élève / Étudiant(e)</option>
                        <option value="Enseignant(e) / Formateur(trice)">Enseignant(e) / Formateur(trice)</option>
                        <option value="Ingénieur(e) / Technicien(ne)">Ingénieur(e) / Technicien(ne)</option>
                        <option value="Fonctionnaire / Agent de l'État">Fonctionnaire / Agent de l'État</option>
                        <option value="Commerçant(e) / Entrepreneur(e)">Commerçant(e) / Entrepreneur(e)</option>
                        <option value="Professionnel(le) de Santé / Médecin">Professionnel(le) de Santé / Médecin</option>
                        <option value="Juriste / Avocat(e)">Juriste / Avocat(e)</option>
                        <option value="Artisan(e) / Ouvrier(ère)">Artisan(e) / Ouvrier(ère)</option>
                        <option value="Agriculteur(trice) / Éleveur(euse)">Agriculteur(trice) / Éleveur(euse)</option>
                        <option value="Consultant(e) / Indépendant(e)">Consultant(e) / Indépendant(e)</option>
                        <option value="Sans emploi / En recherche">Sans emploi / En recherche d'emploi</option>
                        <option value="Autre profession">Autre profession</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Téléphone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+235 66 43 95 02 / +235 68 90 23 47"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label>Ville / Localisation *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: N'Djamena, Nangassou, Sarh"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label>Type d'adhésion souhaité *</label>
                      <select
                        value={memberType}
                        onChange={e => setMemberType(e.target.value as MemberType)}
                        className="form-control"
                      >
                        <option value="actif">Membre Actif (Participation aux réunions & votes)</option>
                        <option value="sympathisant">Membre Sympathisant (Soutien & suivi)</option>
                        <option value="benevole">Bénévole (Actions de terrain)</option>
                        <option value="partenaire">Membre Partenaire (Organisation / Institution)</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className="form-group">
                <label>Adresse E-mail *</label>
                <input
                  type="email"
                  required
                  placeholder="votre.email@example.td"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Mot de Passe *</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-full margin-top">
                {isLoginMode ? 'Se connecter à mon espace' : 'Valider mon inscription à l\'AJTES'}
              </button>
            </form>
          </div>
        ) : (
          /* LOGGED IN MEMBER DASHBOARD */
          <div className="dashboard-container">
            {/* Login & Security Notification Notice */}
            <div className="notification-toast-alert" style={{
              backgroundColor: '#E6F4EA',
              border: '1px solid #34A853',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              boxShadow: '0 4px 12px rgba(52, 168, 83, 0.12)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div>
                  <strong style={{ color: '#0F5132', fontSize: '0.95rem', display: 'block' }}>
                    Notification de Connexion Envoyée à {currentUser?.email}
                  </strong>
                  <span style={{ color: '#146C43', fontSize: '0.85rem' }}>
                    Le service backend a généré une notification de sécurité pour cette session. 
                    <em> (Note : En mode local, configurez SMTP_PASS dans le fichier backend/.env pour délivrer l'email dans la boîte de réception réelle).</em>
                  </span>
                </div>
              </div>
            </div>

            {/* Header Profile */}
            <div className="profile-header-card card">
              <div className="profile-info">
                <div className="profile-avatar">
                  {currentUser?.avatarUrl ? (
                    <img src={currentUser.avatarUrl} alt={currentUser.name} className="avatar-img" />
                  ) : (
                    currentUser?.name.charAt(0)
                  )}
                </div>
                <div className="profile-details">
                  <h2>{currentUser?.name}</h2>
                  <p>Email: {currentUser?.email} • Tél: {currentUser?.phone || '+235 60 00 00 00'}</p>
                  <p>Ville: {currentUser?.city || 'Tchad'} • Profession: {currentUser?.profession || 'Membre Engagé'}</p>
                </div>
              </div>
              <div className="status-box">
                <span className="status-pill active">
                  Statut: {currentUser?.membershipStatus === 'actif' ? 'Membre Actif (Cotisation 2026)' : 'En Attente'}
                </span>
                <span className="role-pill">Rôle: {currentUser?.role}</span>
                {isAdmin && setCurrentTab && (
                  <button className="btn btn-gold btn-sm" onClick={() => setCurrentTab('admin')}>
                    Accéder à l'Admin
                  </button>
                )}
                <button className="btn btn-secondary btn-sm" onClick={logout}>
                  Déconnexion
                </button>
              </div>
            </div>

            {/* Digital Membership Card Preview */}
            <div className="digital-card-section margin-top-lg">
              <div className="flex-between align-center margin-bottom-sm">
                <h3 className="section-subtitle-dark" style={{ margin: 0 }}>Carte d'Adhérent Officielle AJTES</h3>
                <div className="card-actions-row" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a
                    href={`http://localhost:5000/api/members/${currentUser?.id || 'demo'}/card`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    Télécharger Carte PDF (Officiel)
                  </a>
                  <button className="btn btn-secondary btn-sm" onClick={() => setShowQRModal(true)} title="Vérifier la carte">
                    Scanner QR
                  </button>
                </div>
              </div>

              <div className="digital-member-card">
                <div className="card-top">
                  <div className="card-brand">
                    <span className="brand-logo">AJTES</span>
                    <div>
                      <strong>AJTES TCHAD</strong>
                      <span className="card-motto">Éducation & Solidarité</span>
                    </div>
                  </div>
                  <span className="card-year">2026</span>
                </div>
                <div className="card-main">
                  <div className="card-photo">
                    {currentUser?.avatarUrl ? (
                      <img src={currentUser.avatarUrl} alt={currentUser.name} className="card-avatar-img" />
                    ) : (
                      currentUser?.name.charAt(0)
                    )}
                  </div>
                  <div className="card-info">
                    <h4>{currentUser?.name}</h4>
                    <p className="card-role">{currentUser?.role === 'admin' ? 'Administrateur du Bureau' : 'Membre Actif'}</p>
                    <p className="card-id">ID: AJTES-2026-{(currentUser?.email.length || 7) * 142}</p>
                    <p className="card-city">{currentUser?.city || 'N\'Djamena'}, Tchad</p>
                  </div>
                  <div className="card-qr" onClick={() => setShowQRModal(true)} title="Cliquez pour scanner et vérifier l'authenticité" style={{ cursor: 'pointer' }}>
                    <span>CODE QR OFFICIEL</span>
                    <div className="qr-box">
                      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" rx="1" fill="#000" />
                        <rect x="14" y="3" width="7" height="7" rx="1" fill="#000" />
                        <rect x="3" y="14" width="7" height="7" rx="1" fill="#000" />
                        <rect x="14" y="14" width="4" height="4" fill="#000" />
                        <rect x="18" y="18" width="3" height="3" fill="#000" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Verification Modal */}
            {showQRModal && (
              <div className="modal-overlay" onClick={() => setShowQRModal(false)}>
                <div className="modal-content qr-verify-modal" onClick={e => e.stopPropagation()}>
                  <button className="modal-close" onClick={() => setShowQRModal(false)}>✕</button>
                  <div className="text-center">
                    <div className="seal-badge margin-bottom-sm">
                      ADHÉRENT CERTIFIÉ AJTES TCHAD
                    </div>
                    <h2>Vérification d'Authenticité</h2>
                    <p className="text-muted">Document officiel délivré par le Bureau National AJTES (N'Djamena)</p>

                    <div className="qr-big-display margin-top-md margin-bottom-md">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="8" height="8" rx="1" fill="#007A3D" />
                        <rect x="14" y="2" width="8" height="8" rx="1" fill="#007A3D" />
                        <rect x="2" y="14" width="8" height="8" rx="1" fill="#007A3D" />
                        <rect x="14" y="14" width="5" height="5" fill="#D97706" />
                        <rect x="19" y="19" width="3" height="3" fill="#007A3D" />
                      </svg>
                      <span className="qr-code-string">AJTES-VERIFY-2026-{(currentUser?.email.length || 7) * 142}</span>
                    </div>

                    <div className="verify-info-table">
                      <div className="v-row"><span>Nom & Prénom:</span> <strong>{currentUser?.name}</strong></div>
                      <div className="v-row"><span>Rôle Officiel:</span> <strong>{currentUser?.role === 'admin' ? 'Administrateur' : 'Membre Actif'}</strong></div>
                      <div className="v-row"><span>Matricule AJTES:</span> <strong>AJTES-2026-{(currentUser?.email.length || 7) * 142}</strong></div>
                      <div className="v-row"><span>Siège Social:</span> <strong>N'Djamena, République du Tchad</strong></div>
                      <div className="v-row"><span>Année d'Exercice:</span> <strong>2026 (Statut Actif)</strong></div>
                    </div>

                    <div className="margin-top-lg flex-center gap-sm">
                      <button className="btn btn-gold btn-sm" onClick={() => { setShowQRModal(false); window.print(); }}>
                        Imprimer la Carte
                      </button>
                      <button className="btn btn-secondary btn-sm" onClick={() => setShowQRModal(false)}>
                        Fermer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Dashboard Sections Grid */}
            <div className="grid-2 margin-top-lg">
              <div className="dash-card card">
                <h3>Documents d'Adhésion & Réglementation</h3>
                <p>Accédez aux textes de gouvernance officiels de l'association.</p>
                <div className="doc-links">
                  {isAdmin ? (
                    <>
                      <a href="./documents/statuts_AJTES.pdf" download target="_blank" rel="noopener noreferrer" className="doc-link">Statuts AJTES (PDF Admin)</a>
                      <a href="./documents/reglement_interieur_AJTES.pdf" download target="_blank" rel="noopener noreferrer" className="doc-link">Règlement Intérieur (PDF Admin)</a>
                    </>
                  ) : (
                    <>
                      <a href="/#documents" className="doc-link">Consulter les Statuts en ligne</a>
                      <a href="/#documents" className="doc-link">Consulter le Règlement Intérieur en ligne</a>
                      <span className="doc-link text-muted" style={{ fontSize: '0.8rem', opacity: 0.8 }}>Téléchargement PDF réservé à l'Administration</span>
                    </>
                  )}
                  <button onClick={() => window.print()} className="doc-link btn-link-reset">Imprimer ma Carte d'Adhérent</button>
                </div>
              </div>

              <div className="dash-card card">
                <h3>Engagements & Activités Officiels</h3>
                <p>Prochains événements et actions scolaires auxquels vous êtes inscrit.</p>
                <div className="activity-list">
                  <div className="act-item">
                    <span>Forum de la Jeunesse Tchadienne (N'Djamena)</span>
                    <span className="act-date">15 Octobre 2026</span>
                  </div>
                  <div className="act-item">
                    <span>Journée Écologique & Reboisement (Nangassou)</span>
                    <span className="act-date">05 Septembre 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

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

        .auth-form-card {
          max-width: 650px;
          margin: 0 auto;
          padding: 2.5rem;
        }

        .auth-toggle {
          display: flex;
          background: var(--neutral-light-bg);
          border-radius: var(--radius-md);
          padding: 0.35rem;
          margin-bottom: 2rem;
        }

        .toggle-btn {
          flex: 1;
          padding: 0.75rem;
          border: none;
          background: none;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--neutral-body);
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all 0.2s;
        }

        .toggle-btn.active {
          background: var(--neutral-card-bg);
          color: var(--primary-emerald);
          box-shadow: var(--shadow-sm);
        }

        .auth-form {
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

        .margin-top { margin-top: 1rem; }
        .margin-top-lg { margin-top: 2rem; }

        .dashboard-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .profile-header-card {
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          background: linear-gradient(135deg, var(--neutral-card-bg), var(--primary-emerald-light));
        }

        .profile-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .profile-avatar {
          width: 70px;
          height: 70px;
          background: var(--primary-emerald);
          color: #FFF;
          font-size: 2rem;
          font-weight: 800;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .profile-details h2 {
          font-size: 1.5rem;
          color: var(--neutral-heading);
        }

        .profile-details p {
          font-size: 0.9rem;
          color: var(--neutral-body);
        }

        .status-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        [dir="rtl"] .status-box {
          align-items: flex-start;
        }

        .status-pill {
          background: var(--primary-emerald);
          color: #FFF;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
        }

        .role-pill {
          font-size: 0.8rem;
          color: var(--neutral-muted);
          font-weight: 600;
        }

        .dash-card {
          padding: 1.75rem;
        }

        .dash-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--primary-emerald);
        }

        .dash-card p {
          font-size: 0.9rem;
          color: var(--neutral-muted);
          margin-bottom: 1.25rem;
        }

        .doc-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .doc-link {
          padding: 0.75rem 1rem;
          background: var(--neutral-light-bg);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--neutral-heading);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .doc-link:hover {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .act-item {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem;
          background: var(--neutral-light-bg);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .btn-link-reset {
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          font-family: inherit;
        }

        .digital-card-section {
          margin-top: 2rem;
        }

        .section-subtitle-dark {
          font-size: 1.2rem;
          color: var(--neutral-heading);
          margin-bottom: 1rem;
        }

        .digital-member-card {
          background: linear-gradient(135deg, #092014 0%, #007A3D 50%, #121A24 100%);
          color: #FFF;
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          box-shadow: 0 15px 35px rgba(0, 122, 61, 0.3);
          border: 2px solid var(--accent-gold);
          max-width: 550px;
          margin: 0 auto;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
        }

        .card-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .brand-logo {
          background: var(--accent-gold);
          color: #121A24;
          font-weight: 900;
          font-size: 0.9rem;
          padding: 0.35rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .card-motto {
          display: block;
          font-size: 0.75rem;
          color: var(--accent-gold);
        }

        .card-year {
          background: rgba(255, 255, 255, 0.15);
          font-weight: 800;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.85rem;
        }

        .card-main {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .card-photo {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: var(--accent-gold);
          color: #121A24;
          font-size: 2rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #FFF;
        }

        .card-info {
          flex: 1;
        }

        .card-info h4 {
          color: #FFF;
          font-size: 1.2rem;
          margin-bottom: 0.2rem;
        }

        .card-role {
          color: var(--accent-gold);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .card-id {
          font-size: 0.8rem;
          color: #CBD5E1;
          font-family: monospace;
        }

        .card-city {
          font-size: 0.8rem;
          color: #94A3B8;
        }

        .card-qr {
          text-align: center;
          font-size: 0.65rem;
          color: #CBD5E1;
          transition: transform 0.2s;
        }

        .card-qr:hover {
          transform: scale(1.06);
        }

        .qr-box {
          background: #FFF;
          color: #000;
          padding: 0.4rem;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.2rem;
        }

        .qr-verify-modal {
          max-width: 520px;
          width: 92%;
          padding: 2.25rem;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .seal-badge {
          display: inline-block;
          background: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
          font-weight: 800;
          font-size: 0.85rem;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(0, 122, 61, 0.3);
        }

        .qr-big-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          background: var(--neutral-light-bg);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--neutral-border);
        }

        .qr-code-string {
          font-family: monospace;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--neutral-heading);
          letter-spacing: 1px;
        }

        .verify-info-table {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          text-align: left;
          background: #F8FAFC;
          padding: 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--neutral-border);
        }

        .v-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--neutral-body);
          border-bottom: 1px dashed var(--neutral-border);
          padding-bottom: 0.35rem;
        }

        .v-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .v-row strong {
          color: var(--neutral-heading);
        }
      `}</style>
    </div>
  );
};
