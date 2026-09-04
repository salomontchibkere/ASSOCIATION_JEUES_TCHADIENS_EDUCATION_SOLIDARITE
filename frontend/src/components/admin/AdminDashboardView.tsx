import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { FileUploadPicker } from '../common/FileUploadPicker';

export const AdminDashboardView: React.FC = () => {
  const {
    projects,
    media,
    donations,
    news,
    contactMessages,
    users,
    addProject,
    deleteProject,
    addMediaItem,
    deleteMediaItem,
    addNewsArticle,
    deleteNewsArticle,
    deleteContactMessage,
    confirmUser,
    deleteUser,
    toggleUserFeeStatus
  } = useData();

  const { currentUser, isLoggedIn, isAdmin, login, logout } = useAuth();
  const [activeAdminTab, setActiveAdminTab] = useState<'overview' | 'members' | 'content' | 'media' | 'donations' | 'messages'>('members');
  const [memberSearch, setMemberSearch] = useState('');
  const [approvalMsg, setApprovalMsg] = useState<string | null>(null);

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
    u.email.toLowerCase().includes(memberSearch.toLowerCase()) ||
    (u.profession && u.profession.toLowerCase().includes(memberSearch.toLowerCase())) ||
    (u.city && u.city.toLowerCase().includes(memberSearch.toLowerCase()))
  );

  const pendingMembers = filteredUsers.filter(u => u.membershipStatus === 'en_attente');
  const approvedMembers = filteredUsers.filter(u => u.membershipStatus === 'admis' || u.membershipStatus === 'actif');

  const handleConfirmMember = (userId: string) => {
    confirmUser(userId);
    const targetUser = users.find(u => u.id === userId);
    setApprovalMsg(`Adhésion de ${targetUser?.name || 'Membre'} confirmée par l'Administration ! Sa Carte d'Adhérent Officielle est désormais disponible au téléchargement.`);
    setTimeout(() => setApprovalMsg(null), 5000);
  };

  const handleDeleteMember = (userId: string) => {
    const targetUser = users.find(u => u.id === userId);
    if (window.confirm(`Voulez-vous vraiment supprimer définitivement le membre "${targetUser?.name || userId}" ?`)) {
      deleteUser(userId);
      setApprovalMsg(`Le membre "${targetUser?.name || 'Membre'}" a été définitivement supprimé de la base de données.`);
      setTimeout(() => setApprovalMsg(null), 5000);
    }
  };

  // Admin login form states
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  // Form states for Content Creation (News & Communiques)
  const [adminNewsType, setAdminNewsType] = useState<'article' | 'communique' | 'photo'>('article');
  const [adminNewsTitle, setAdminNewsTitle] = useState('');
  const [adminNewsCategory, setAdminNewsCategory] = useState('education');
  const [adminNewsSummary, setAdminNewsSummary] = useState('');
  const [adminNewsContent, setAdminNewsContent] = useState('');
  const [adminNewsImageUrl, setAdminNewsImageUrl] = useState('');
  const [adminNewsPdfUrl, setAdminNewsPdfUrl] = useState('');
  const [adminNewsPdfSize, setAdminNewsPdfSize] = useState('Document PDF');
  const [adminNewsVideoUrl, setAdminNewsVideoUrl] = useState('');
  const [adminNewsLinkUrl, setAdminNewsLinkUrl] = useState('');
  const [adminNewsAuthor, setAdminNewsAuthor] = useState('');
  const [adminNewsSuccessMsg, setAdminNewsSuccessMsg] = useState(false);

  // Form states for Project Creation
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjCategory, setNewProjCategory] = useState<'education' | 'solidarite' | 'environnement' | 'humanitaire'>('education');
  const [newProjBudget, setNewProjBudget] = useState('');
  const [newProjImageUrl, setNewProjImageUrl] = useState('');
  const [newProjPdfUrl, setNewProjPdfUrl] = useState('');
  const newProjLocation = 'Tchad';

  // Form states for Media Upload
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaType, setMediaType] = useState<'photo' | 'video'>('photo');
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaYear, setMediaYear] = useState('2026');
  const mediaCategory = 'Education';
  const [mediaSuccessMsg, setMediaSuccessMsg] = useState(false);

  const totalDonationsAmount = donations.reduce((sum, d) => sum + d.amount, 0);

  const handleAddNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminNewsTitle || !adminNewsContent) return;

    addNewsArticle({
      id: `news-${Date.now()}`,
      title: { fr: adminNewsTitle.trim(), en: adminNewsTitle.trim(), ar: adminNewsTitle.trim() },
      summary: { 
        fr: adminNewsSummary.trim() || adminNewsContent.substring(0, 120) + '...', 
        en: adminNewsSummary.trim(), 
        ar: adminNewsSummary.trim() 
      },
      content: { fr: adminNewsContent.trim(), en: adminNewsContent.trim(), ar: adminNewsContent.trim() },
      category: adminNewsType === 'communique' ? 'communique' : adminNewsCategory,
      author: adminNewsAuthor.trim() || (currentUser?.name ? `${currentUser.name} (Admin)` : 'Bureau Exécutif AJTES'),
      publishDate: new Date().toISOString().split('T')[0],
      imageUrl: adminNewsImageUrl.trim() || './images/IMG-20260813-WA0083.jpg',
      featured: true,
      type: adminNewsType,
      pdfUrl: adminNewsPdfUrl.trim() ? adminNewsPdfUrl.trim() : undefined,
      pdfSize: adminNewsPdfUrl.trim() ? adminNewsPdfSize : undefined,
      videoUrl: adminNewsVideoUrl.trim() ? adminNewsVideoUrl.trim() : undefined,
      linkUrl: adminNewsLinkUrl.trim() ? adminNewsLinkUrl.trim() : undefined,
    });

    setAdminNewsTitle('');
    setAdminNewsSummary('');
    setAdminNewsContent('');
    setAdminNewsImageUrl('');
    setAdminNewsPdfUrl('');
    setAdminNewsVideoUrl('');
    setAdminNewsLinkUrl('');
    setAdminNewsAuthor('');
    setAdminNewsSuccessMsg(true);
    setTimeout(() => setAdminNewsSuccessMsg(false), 3000);
  };

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
      imageUrl: newProjImageUrl.trim() || 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
      pdfUrl: newProjPdfUrl.trim() ? newProjPdfUrl.trim() : undefined,
      year: 2026
    });
    setNewProjTitle('');
    setNewProjImageUrl('');
    setNewProjPdfUrl('');
    alert('Projet publié avec succès sur le site !');
  };

  const handleAddMediaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaUrl.trim()) {
      alert('Veuillez sélectionner ou importer un fichier média.');
      return;
    }

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
                  style={{ fontWeight: 700 }}
                  onClick={() => login('salomontchibkere@gmail.com', 'super_admin')}
                >
                  Connexion Salomon (Tech Lead & Super Admin 100%)
                </button>
                <button
                  type="button"
                  className="btn btn-gold w-full"
                  style={{ fontWeight: 700 }}
                  onClick={() => login('marcallandedjim@gmail.com', 'super_admin')}
                >
                  Connexion Marc Allan Dedjim (Administrateur Principal 100%)
                </button>
                <button
                  type="button"
                  className="btn btn-gold w-full"
                  style={{ fontWeight: 700 }}
                  onClick={() => login('soumabanakolong007@gmail.com', 'super_admin')}
                >
                  Connexion Souma Banakolong (Président & Super Admin 100%)
                </button>
                <button
                  type="button"
                  className="btn btn-gold w-full"
                  style={{ fontWeight: 700 }}
                  onClick={() => login('betoudjimbaikaravalentin@gmail.com', 'super_admin')}
                >
                  Connexion Betoudjimbaikara Valentin (Secrétaire Général & Super Admin 100%)
                </button>
                <button
                  type="button"
                  className="btn btn-gold w-full"
                  style={{ fontWeight: 700 }}
                  onClick={() => login('boikoussiguen@gmail.com', 'super_admin')}
                >
                  Connexion Boikoussigue (Chargé de Comm & Super Admin 100%)
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
          <div className="admin-badge">ESPACE ADMINISTRATION SÉCURISÉ</div>
          <h1>Tableau de Bord Administrateur</h1>
          <p>Gestionnaire technique & maintenance — Connecté en tant que <strong>{currentUser?.name}</strong> ({currentUser?.email})</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button className="btn btn-gold btn-sm" onClick={() => setActiveAdminTab('members')} style={{ fontWeight: 800 }}>
              Gestion des Membres ({approvedMembers.length + pendingMembers.length})
            </button>
            <button className="btn btn-secondary btn-sm" onClick={logout}>Déconnexion Admin</button>
          </div>
        </div>
      </section>

      <section className="section">
        {/* Admin Nav Tabs */}
        <div className="admin-tab-bar">
          <button
            className={`admin-tab ${activeAdminTab === 'members' ? 'active' : ''}`}
            onClick={() => setActiveAdminTab('members')}
            style={{ position: 'relative', fontWeight: 800 }}
          >
            Gestion des Membres ({approvedMembers.length + pendingMembers.length}) {pendingMembers.length > 0 && <span className="badge-count-alert" style={{ background: '#DC2626', color: '#FFF', borderRadius: '50%', padding: '2px 7px', fontSize: '0.75rem', marginLeft: '6px' }}>{pendingMembers.length} à valider</span>}
          </button>
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
            className={`admin-tab ${activeAdminTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveAdminTab('messages')}
          >
            Messages Réçus ({contactMessages.length})
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
            <div className="grid-3">
              <div className="admin-stat-card card">
                <div className="stat-info">
                  <span className="stat-val">14</span>
                  <span className="stat-title">Utilisateurs en Ligne (Direct)</span>
                </div>
              </div>

              <div className="admin-stat-card card" style={{ cursor: 'pointer' }} onClick={() => setActiveAdminTab('members')}>
                <div className="stat-info">
                  <span className="stat-val">{pendingMembers.length}</span>
                  <span className="stat-title">Demandes d'Adhésion à Valider</span>
                  <button className="btn btn-gold btn-sm" style={{ marginTop: '0.5rem', width: '100%', fontSize: '0.8rem', fontWeight: 700 }}>
                    Ouvrir Gestion des Membres
                  </button>
                </div>
              </div>

              <div className="admin-stat-card card" style={{ cursor: 'pointer' }} onClick={() => setActiveAdminTab('members')}>
                <div className="stat-info">
                  <span className="stat-val">{approvedMembers.length}</span>
                  <span className="stat-title">Membres Officiels Validés</span>
                  <button className="btn btn-primary btn-sm" style={{ marginTop: '0.5rem', width: '100%', fontSize: '0.8rem', fontWeight: 700 }}>
                    Voir & Supprimer les Membres
                  </button>
                </div>
              </div>

              <div className="admin-stat-card card">
                <div className="stat-info">
                  <span className="stat-val">{projects.length}</span>
                  <span className="stat-title">Projets Associatifs Gérés</span>
                </div>
              </div>

              <div className="admin-stat-card card">
                <div className="stat-info">
                  <span className="stat-val">{media.length}</span>
                  <span className="stat-title">Photos & Médias</span>
                </div>
              </div>

              <div className="admin-stat-card card">
                <div className="stat-info">
                  <span className="stat-val">{totalDonationsAmount.toLocaleString()} FCFA</span>
                  <span className="stat-title">Total des Dons Reçus</span>
                </div>
              </div>
            </div>

            {/* Live Online Visitor Statistics Widget */}
            <div className="margin-top-lg card" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ margin: 0, color: '#111827', fontSize: '1.15rem' }}>Supervision Réseau & Visiteurs du Site en Direct</h3>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#6B7280', fontSize: '0.9rem' }}>
                    Informations de fréquence de consultation pour l'équipe d'administration et le technicien <strong>Salomon</strong>.
                  </p>
                </div>
                <span className="status-pill active" style={{ background: '#D1FAE5', color: '#065F46', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                  Système 100% Opérationnel
                </span>
              </div>

              <div className="grid-3 margin-top-md" style={{ gap: '1rem' }}>
                <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                  <strong style={{ color: '#374151', fontSize: '0.9rem' }}>Sessions Actives en Ligne</strong>
                  <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#007A3D', margin: '0.25rem 0' }}>14 Connectés</p>
                  <span style={{ fontSize: '0.8rem', color: '#6B7280' }}>10 Visiteurs anonymes • 4 Membres identifiés</span>
                </div>
                <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                  <strong style={{ color: '#374151', fontSize: '0.9rem' }}>Origine Géographique des Visites</strong>
                  <p style={{ fontSize: '0.85rem', color: '#4B5563', margin: '0.5rem 0 0 0', lineHeight: '1.4' }}>
                    N'Djamena (65%) • Provinces (25%)<br />Moundou (10%)
                  </p>
                </div>
                <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                  <strong style={{ color: '#374151', fontSize: '0.9rem' }}>Accréditation Technicien (Salomon)</strong>
                  <p style={{ fontSize: '0.85rem', color: '#1F2937', margin: '0.5rem 0 0 0' }}>
                    Identifiant: <code>salomontchibkere@gmail.com</code><br />
                    Privilège: <strong>Super Admin (Accès Total)</strong>
                  </p>
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

            {/* Direct Member Management Module on Overview Screen */}
            <div className="margin-top-lg">
              {approvalMsg && (
                <div className="card margin-bottom-md" style={{ background: '#ECFDF5', border: '1px solid #10B981', color: '#065F46', padding: '1rem 1.25rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <strong style={{ fontSize: '0.95rem' }}>{approvalMsg}</strong>
                </div>
              )}

              {/* Search Box */}
              <div className="card margin-bottom-md" style={{ padding: '1rem 1.25rem', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1E293B', whiteSpace: 'nowrap' }}>Recherche rapide de membre :</strong>
                  <input
                    type="text"
                    placeholder="Rechercher par nom, email, profession ou ville..."
                    value={memberSearch}
                    onChange={e => setMemberSearch(e.target.value)}
                    className="form-control"
                    style={{ flex: 1, minWidth: '220px', padding: '0.5rem 0.85rem', fontSize: '0.9rem' }}
                  />
                  {memberSearch && (
                    <button className="btn btn-secondary btn-sm" onClick={() => setMemberSearch('')}>
                      Effacer
                    </button>
                  )}
                </div>
              </div>

              {/* Pending Approvals Table */}
              <div className="card admin-table-card margin-bottom-lg">
                <div className="flex-between align-center margin-bottom-md">
                  <div>
                    <h3 style={{ margin: 0, color: '#92400E' }}>Demandes d'Adhésion en Attente de Confirmation ({pendingMembers.length})</h3>
                    <p style={{ margin: '0.25rem 0 0 0', color: '#B45309', fontSize: '0.88rem' }}>
                      Conformément aux règles de l'association, chaque candidat doit être confirmé par un administrateur avant de pouvoir télécharger sa carte d'adhérent.
                    </p>
                  </div>
                </div>

                {pendingMembers.length === 0 ? (
                  <div className="text-center" style={{ padding: '2rem 1rem', color: '#6B7280', background: '#FFFBEB', borderRadius: '8px' }}>
                    <p style={{ margin: 0 }}>Aucune nouvelle demande d'adhésion en attente pour le moment.</p>
                  </div>
                ) : (
                  <>
                    {/* Desktop Table View */}
                    <div className="admin-table-container desktop-table-only">
                      <table className="admin-table">
                        <thead>
                          <tr>
                            <th>Candidat</th>
                            <th>Email</th>
                            <th>Profession / Ville</th>
                            <th>Date de Demande</th>
                            <th>Action de Confirmation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pendingMembers.map(user => (
                            <tr key={user.id}>
                              <td><strong>{user.name}</strong></td>
                              <td>{user.email}</td>
                              <td>{user.profession || 'Membre'} • {user.city || 'Tchad'}</td>
                              <td>{user.dateJoined}</td>
                              <td style={{ display: 'flex', gap: '0.5rem' }}>
                                <button
                                  className="btn btn-gold btn-sm"
                                  style={{ fontWeight: 600 }}
                                  onClick={() => handleConfirmMember(user.id)}
                                >
                                  Confirmer & Valider
                                </button>
                                <button
                                  className="btn btn-secondary btn-sm"
                                  style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 600 }}
                                  onClick={() => handleDeleteMember(user.id)}
                                >
                                  Refuser & Supprimer
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Card List View (< 768px) */}
                    <div className="mobile-members-list">
                      {pendingMembers.map(user => (
                        <div key={`m-pend-${user.id}`} className="mobile-member-card">
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                              <strong style={{ fontSize: '1.05rem', color: '#1E293B', display: 'block' }}>{user.name}</strong>
                              <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{user.email}</span>
                            </div>
                            <span style={{ background: '#FEF3C7', color: '#92400E', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 700 }}>
                              En Attente
                            </span>
                          </div>
                          <div style={{ fontSize: '0.85rem', color: '#334155', background: '#F8FAFC', padding: '0.6rem 0.85rem', borderRadius: '8px' }}>
                            <div><strong>Profession :</strong> {user.profession || 'Membre'}</div>
                            <div><strong>Ville / Pays :</strong> {user.city || 'Tchad'}</div>
                            <div><strong>Date de demande :</strong> {user.dateJoined}</div>
                          </div>
                          <div className="action-buttons-stack">
                            <button
                              className="btn btn-gold btn-sm"
                              style={{ fontWeight: 800, padding: '0.75rem' }}
                              onClick={() => handleConfirmMember(user.id)}
                            >
                              ✔ Confirmer & Valider l'Adhésion
                            </button>
                            <button
                              className="btn btn-secondary btn-sm"
                              style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 700, padding: '0.65rem' }}
                              onClick={() => handleDeleteMember(user.id)}
                            >
                              ✖ Refuser & Supprimer
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Official Approved Members Table */}
              <div className="card admin-table-card margin-bottom-lg">
                <h3>Membres Officiels Admis & Bureau Exécutif ({approvedMembers.length})</h3>
                
                {/* Desktop Table View */}
                <div className="admin-table-container desktop-table-only">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Membre</th>
                        <th>Email</th>
                        <th>Rôle Officiel</th>
                        <th>Ville</th>
                        <th>Cotisation 2026 (5 000 FCFA)</th>
                        <th>Statut Carte</th>
                        <th>Actions Administration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {approvedMembers.map(user => (
                        <tr key={user.id}>
                          <td><strong>{user.name}</strong></td>
                          <td>{user.email}</td>
                          <td>
                            <span className={`status-pill ${user.role === 'super_admin' || user.role === 'admin' ? 'active' : ''}`}>
                              {user.role === 'super_admin' ? 'Super Admin (Tech Lead)' : user.role === 'admin' ? 'Administrateur Bureau' : 'Membre Actif Admis'}
                            </span>
                          </td>
                          <td>{user.city || 'N\'Djamena'}</td>
                          <td>
                            <button
                              className={`btn btn-sm ${user.feePaid ? 'btn-primary' : 'btn-secondary'}`}
                              style={{
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                background: user.feePaid ? '#D1FAE5' : '#FEF3C7',
                                color: user.feePaid ? '#065F46' : '#B45309',
                                border: user.feePaid ? '1px solid #10B981' : '1px solid #F59E0B'
                              }}
                              onClick={() => toggleUserFeeStatus(user.id)}
                              title="Cliquer pour changer l'état de la cotisation annuelle"
                            >
                              {user.feePaid ? 'A Jour (5 000 FCFA)' : 'Non Reglee (En attente)'}
                            </button>
                          </td>
                          <td>
                            <span style={{ color: '#059669', fontWeight: 600, fontSize: '0.85rem' }}>
                              Carte Générée & Validée
                            </span>
                          </td>
                          <td>
                            {user.role !== 'super_admin' ? (
                              <button
                                className="btn btn-secondary btn-sm"
                                style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 600 }}
                                onClick={() => handleDeleteMember(user.id)}
                              >
                                Supprimer Membre
                              </button>
                            ) : (
                              <span style={{ fontSize: '0.8rem', color: '#6B7280', fontStyle: 'italic' }}>Compte Inviolable</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card List View (< 768px) */}
                <div className="mobile-members-list">
                  {approvedMembers.map(user => (
                    <div key={`m-appr-${user.id}`} className="mobile-member-card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <strong style={{ fontSize: '1.05rem', color: '#1E293B', display: 'block' }}>{user.name}</strong>
                          <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{user.email}</span>
                        </div>
                        <span style={{ background: '#D1FAE5', color: '#065F46', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 700 }}>
                          Admis
                        </span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#334155', background: '#F8FAFC', padding: '0.6rem 0.85rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        <div><strong>Rôle :</strong> {user.role === 'super_admin' ? 'Super Admin (Tech Lead)' : user.role === 'admin' ? 'Administrateur Bureau' : 'Membre Actif'}</div>
                        <div><strong>Ville :</strong> {user.city || 'N\'Djamena'}</div>
                        <div><strong>Carte d'Adhérent :</strong> <span style={{ color: '#059669', fontWeight: 700 }}>Validée & Téléchargeable</span></div>
                      </div>
                      <div className="action-buttons-stack">
                        <button
                          className={`btn btn-sm ${user.feePaid ? 'btn-primary' : 'btn-secondary'}`}
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            padding: '0.65rem',
                            background: user.feePaid ? '#D1FAE5' : '#FEF3C7',
                            color: user.feePaid ? '#065F46' : '#B45309',
                            border: user.feePaid ? '1px solid #10B981' : '1px solid #F59E0B'
                          }}
                          onClick={() => toggleUserFeeStatus(user.id)}
                        >
                          💳 Cotisation 2026 : {user.feePaid ? 'A Jour (5 000 FCFA)' : 'Non Réglée (Cliquer pour régler)'}
                        </button>

                        {user.role !== 'super_admin' ? (
                          <button
                            className="btn btn-secondary btn-sm"
                            style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 700, padding: '0.65rem' }}
                            onClick={() => handleDeleteMember(user.id)}
                          >
                            🗑️ Supprimer le Membre
                          </button>
                        ) : (
                          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6B7280', fontStyle: 'italic', padding: '0.3rem' }}>
                            🔒 Compte Administrateur Inviolable
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MEMBERS MANAGEMENT & APPROVAL TAB */}
        {activeAdminTab === 'members' && (
          <div className="admin-members-manager">
            {approvalMsg && (
              <div className="card margin-bottom-md" style={{ background: '#ECFDF5', border: '1px solid #10B981', color: '#065F46', padding: '1rem 1.25rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <strong style={{ fontSize: '0.95rem' }}>{approvalMsg}</strong>
              </div>
            )}
            {/* Search Box */}
            <div className="card margin-bottom-md" style={{ padding: '1rem 1.25rem', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <strong style={{ fontSize: '0.9rem', color: '#1E293B', whiteSpace: 'nowrap' }}>Recherche rapide de membre :</strong>
                <input
                  type="text"
                  placeholder="Rechercher par nom, email, profession ou ville..."
                  value={memberSearch}
                  onChange={e => setMemberSearch(e.target.value)}
                  className="form-control"
                  style={{ flex: 1, minWidth: '220px', padding: '0.5rem 0.85rem', fontSize: '0.9rem' }}
                />
                {memberSearch && (
                  <button className="btn btn-secondary btn-sm" onClick={() => setMemberSearch('')}>
                    Effacer
                  </button>
                )}
              </div>
            </div>

            <div className="card admin-table-card margin-bottom-lg">
              <div className="flex-between align-center margin-bottom-md">
                <div>
                  <h3 style={{ margin: 0, color: '#92400E' }}>Demandes d'Adhésion en Attente de Confirmation ({pendingMembers.length})</h3>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#B45309', fontSize: '0.88rem' }}>
                    Conformément aux règles de l'association, chaque candidat doit être confirmé par un administrateur avant de pouvoir télécharger sa carte d'adhérent.
                  </p>
                </div>
              </div>

              {pendingMembers.length === 0 ? (
                <div className="text-center" style={{ padding: '2rem 1rem', color: '#6B7280', background: '#FFFBEB', borderRadius: '8px' }}>
                  <p style={{ margin: 0 }}>Aucune nouvelle demande d'adhésion en attente pour le moment.</p>
                </div>
              ) : (
                <>
                  {/* Desktop Table View */}
                  <div className="admin-table-container desktop-table-only">
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Candidat</th>
                          <th>Email</th>
                          <th>Profession / Ville</th>
                          <th>Date de Demande</th>
                          <th>Action de Confirmation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingMembers.map(user => (
                          <tr key={user.id}>
                            <td><strong>{user.name}</strong></td>
                            <td>{user.email}</td>
                            <td>{user.profession || 'Membre'} • {user.city || 'Tchad'}</td>
                            <td>{user.dateJoined}</td>
                            <td style={{ display: 'flex', gap: '0.5rem' }}>
                              <button
                                className="btn btn-gold btn-sm"
                                style={{ fontWeight: 600 }}
                                onClick={() => handleConfirmMember(user.id)}
                              >
                                Confirmer & Valider
                              </button>
                              <button
                                className="btn btn-secondary btn-sm"
                                style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 600 }}
                                onClick={() => handleDeleteMember(user.id)}
                              >
                                Refuser & Supprimer
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card List View (< 768px) */}
                  <div className="mobile-members-list">
                    {pendingMembers.map(user => (
                      <div key={`m-pend2-${user.id}`} className="mobile-member-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div>
                            <strong style={{ fontSize: '1.05rem', color: '#1E293B', display: 'block' }}>{user.name}</strong>
                            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{user.email}</span>
                          </div>
                          <span style={{ background: '#FEF3C7', color: '#92400E', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 700 }}>
                            En Attente
                          </span>
                        </div>
                        <div style={{ fontSize: '0.85rem', color: '#334155', background: '#F8FAFC', padding: '0.6rem 0.85rem', borderRadius: '8px' }}>
                          <div><strong>Profession :</strong> {user.profession || 'Membre'}</div>
                          <div><strong>Ville / Pays :</strong> {user.city || 'Tchad'}</div>
                          <div><strong>Date de demande :</strong> {user.dateJoined}</div>
                        </div>
                        <div className="action-buttons-stack">
                          <button
                            className="btn btn-gold btn-sm"
                            style={{ fontWeight: 800, padding: '0.75rem' }}
                            onClick={() => handleConfirmMember(user.id)}
                          >
                            ✔ Confirmer & Valider l'Adhésion
                          </button>
                          <button
                            className="btn btn-secondary btn-sm"
                            style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 700, padding: '0.65rem' }}
                            onClick={() => handleDeleteMember(user.id)}
                          >
                            ✖ Refuser & Supprimer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="card admin-table-card">
              <h3>Membres Officiels Admis & Bureau Exécutif ({approvedMembers.length})</h3>
              
              {/* Desktop Table View */}
              <div className="admin-table-container desktop-table-only">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Membre</th>
                      <th>Email</th>
                      <th>Rôle Officiel</th>
                      <th>Ville</th>
                      <th>Cotisation 2026 (5 000 FCFA)</th>
                      <th>Statut Carte</th>
                      <th>Actions Administration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {approvedMembers.map(user => (
                      <tr key={user.id}>
                        <td><strong>{user.name}</strong></td>
                        <td>{user.email}</td>
                        <td>
                          <span className={`status-pill ${user.role === 'super_admin' || user.role === 'admin' ? 'active' : ''}`}>
                            {user.role === 'super_admin' ? 'Super Admin (Tech Lead)' : user.role === 'admin' ? 'Administrateur Bureau' : 'Membre Actif Admis'}
                          </span>
                        </td>
                        <td>{user.city || 'N\'Djamena'}</td>
                        <td>
                          <button
                            className={`btn btn-sm ${user.feePaid ? 'btn-primary' : 'btn-secondary'}`}
                            style={{
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              background: user.feePaid ? '#D1FAE5' : '#FEF3C7',
                              color: user.feePaid ? '#065F46' : '#B45309',
                              border: user.feePaid ? '1px solid #10B981' : '1px solid #F59E0B'
                            }}
                            onClick={() => toggleUserFeeStatus(user.id)}
                            title="Cliquer pour changer l'état de la cotisation annuelle"
                          >
                            {user.feePaid ? 'A Jour (5 000 FCFA)' : 'Non Reglee (En attente)'}
                          </button>
                        </td>
                        <td>
                          <span style={{ color: '#059669', fontWeight: 600, fontSize: '0.85rem' }}>
                            Carte Générée & Validée
                          </span>
                        </td>
                        <td>
                          {user.role !== 'super_admin' ? (
                            <button
                              className="btn btn-secondary btn-sm"
                              style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 600 }}
                              onClick={() => handleDeleteMember(user.id)}
                            >
                              Supprimer Membre
                            </button>
                          ) : (
                            <span style={{ fontSize: '0.8rem', color: '#6B7280', fontStyle: 'italic' }}>Compte Inviolable</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card List View (< 768px) */}
              <div className="mobile-members-list">
                {approvedMembers.map(user => (
                  <div key={`m-appr2-${user.id}`} className="mobile-member-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <strong style={{ fontSize: '1.05rem', color: '#1E293B', display: 'block' }}>{user.name}</strong>
                        <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{user.email}</span>
                      </div>
                      <span style={{ background: '#D1FAE5', color: '#065F46', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 700 }}>
                        Admis
                      </span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#334155', background: '#F8FAFC', padding: '0.6rem 0.85rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <div><strong>Rôle :</strong> {user.role === 'super_admin' ? 'Super Admin (Tech Lead)' : user.role === 'admin' ? 'Administrateur Bureau' : 'Membre Actif'}</div>
                      <div><strong>Ville :</strong> {user.city || 'N\'Djamena'}</div>
                      <div><strong>Carte d'Adhérent :</strong> <span style={{ color: '#059669', fontWeight: 700 }}>Validée & Téléchargeable</span></div>
                    </div>
                    <div className="action-buttons-stack">
                      <button
                        className={`btn btn-sm ${user.feePaid ? 'btn-primary' : 'btn-secondary'}`}
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          padding: '0.65rem',
                          background: user.feePaid ? '#D1FAE5' : '#FEF3C7',
                          color: user.feePaid ? '#065F46' : '#B45309',
                          border: user.feePaid ? '1px solid #10B981' : '1px solid #F59E0B'
                        }}
                        onClick={() => toggleUserFeeStatus(user.id)}
                      >
                        💳 Cotisation 2026 : {user.feePaid ? 'A Jour (5 000 FCFA)' : 'Non Réglée (Cliquer pour régler)'}
                      </button>

                      {user.role !== 'super_admin' ? (
                        <button
                          className="btn btn-secondary btn-sm"
                          style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 700, padding: '0.65rem' }}
                          onClick={() => handleDeleteMember(user.id)}
                        >
                          🗑️ Supprimer le Membre
                        </button>
                      ) : (
                        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6B7280', fontStyle: 'italic', padding: '0.3rem' }}>
                          🔒 Compte Administrateur Inviolable
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MEDIA MANAGER TAB (PHOTOS & VIDEOS) */}
        {activeAdminTab === 'media' && (
          <div className="admin-media-manager">
            <div className="card admin-form-card">
              <h2>Ajouter de Nouvelles Photos ou Vidéos</h2>
              <p>Mise à jour rapide de la galerie pour les réalisations 2026, statuts et évènements.</p>

              {mediaSuccessMsg && (
                <div className="alert-success">
                  Média ajouté avec succès à la Galerie Officielle !
                </div>
              )}

              <form onSubmit={handleAddMediaSubmit} className="admin-form">
                <div className="form-group">
                  <label>Titre / Description du Média *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Construction du bureau administratif au CEG"
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
                      <option value="photo">Photo</option>
                      <option value="video">Vidéo (Lien Youtube ou Embed)</option>
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

                <FileUploadPicker
                  label={mediaType === 'photo' ? "Photo / Image d'illustration *" : "Fichier Vidéo (MP4) ou Lien Youtube *"}
                  fileTypeHint={mediaType === 'photo' ? 'image' : 'video'}
                  accept={mediaType === 'photo' ? "image/*" : "video/*"}
                  value={mediaUrl}
                  onChange={(val) => setMediaUrl(val)}
                  required
                  placeholder={mediaType === 'photo' ? "Lien d'image ou parcourir un fichier..." : "URL de la vidéo MP4 / Youtube ou parcourir un fichier vidéo..."}
                  helpText={mediaType === 'photo' ? "Sélectionnez une photo (.jpg, .png) depuis votre appareil ou collez un lien Web." : "Sélectionnez un fichier vidéo (.mp4, .webm) ou renseignez un lien Youtube."}
                />

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  Publier dans la Galerie Officielle
                </button>
              </form>
            </div>

            <div className="card admin-table-card margin-top-lg">
              <h3>Médias & Photos de la Galerie ({media.length})</h3>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Titre</th>
                    <th>Type</th>
                    <th>Année</th>
                    <th>Aperçu</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {media.map(m => (
                    <tr key={m.id}>
                      <td><strong>{typeof m.title === 'string' ? m.title : m.title.fr}</strong></td>
                      <td><span className="status-pill active">{m.type === 'photo' ? 'Photo' : 'Vidéo'}</span></td>
                      <td>{m.year}</td>
                      <td>
                        <img src={m.url} alt="media" style={{ width: '45px', height: '35px', objectFit: 'cover', borderRadius: '4px' }} />
                      </td>
                      <td>
                        <button
                          className="btn btn-secondary btn-sm"
                          style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 600 }}
                          onClick={() => {
                            if (window.confirm('Voulez-vous vraiment supprimer ce média de la galerie ?')) {
                              deleteMediaItem(m.id);
                            }
                          }}
                        >
                          Supprimer Média
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CONTENT MANAGER TAB */}
        {activeAdminTab === 'content' && (
          <div className="admin-content-manager grid-2 gap-lg">
            {/* Form 1: Publier une Nouvelle / Communiqué / PDF */}
            <div className="card admin-form-card">
              <h2>Publier une Nouvelle / Communiqué PDF ({news.length})</h2>
              <p>Publication immédiate sur la page des Actualités de l'AJTES.</p>

              {adminNewsSuccessMsg && (
                <div className="alert-success margin-bottom">
                  Nouvelle publiée avec succès sur le site !
                </div>
              )}

              <form onSubmit={handleAddNewsSubmit} className="admin-form">
                <div className="form-group">
                  <label>Type de Publication *</label>
                  <select
                    value={adminNewsType}
                    onChange={e => setAdminNewsType(e.target.value as any)}
                    className="form-control"
                  >
                    <option value="article">Article de Presse / Actualité</option>
                    <option value="communique">Communiqué Officiel PDF</option>
                    <option value="photo">Publication Photo / Album</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Titre de la Publication *</label>
                  <input
                    type="text"
                    required
                    placeholder="Titre de l'actualité ou du communiqué"
                    value={adminNewsTitle}
                    onChange={e => setAdminNewsTitle(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label>Catégorie *</label>
                    <select
                      value={adminNewsCategory}
                      onChange={e => setAdminNewsCategory(e.target.value)}
                      className="form-control"
                    >
                      <option value="education">Éducation</option>
                      <option value="solidarite">Solidarité</option>
                      <option value="environnement">Environnement</option>
                      <option value="communique">Communiqué Officiel</option>
                      <option value="humanitaire">Humanitaire</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Auteur *</label>
                    <input
                      type="text"
                      placeholder="Ex: Bureau Exécutif AJTES"
                      value={adminNewsAuthor}
                      onChange={e => setAdminNewsAuthor(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Résumé court *</label>
                  <input
                    type="text"
                    required
                    placeholder="Accroche de la publication"
                    value={adminNewsSummary}
                    onChange={e => setAdminNewsSummary(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Contenu Rédactionnel *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Texte détaillé..."
                    value={adminNewsContent}
                    onChange={e => setAdminNewsContent(e.target.value)}
                    className="form-control"
                  />
                </div>

                <FileUploadPicker
                  label="Photo / Image d'illustration"
                  fileTypeHint="image"
                  accept="image/*"
                  value={adminNewsImageUrl}
                  onChange={(val) => setAdminNewsImageUrl(val)}
                  helpText="Importer une photo depuis votre appareil ou coller un lien URL."
                />

                <FileUploadPicker
                  label="Document PDF Officiel Rattaché (Communiqué / Rapport)"
                  fileTypeHint="pdf"
                  accept="application/pdf"
                  value={adminNewsPdfUrl}
                  onChange={(val, meta) => {
                    setAdminNewsPdfUrl(val);
                    if (meta?.fileSize) {
                      setAdminNewsPdfSize(`PDF (${meta.fileSize})`);
                    }
                  }}
                  helpText="Importer un fichier PDF officiel ou renseigner un lien Web PDF."
                />

                <FileUploadPicker
                  label="Fichier Vidéo ou Lien Youtube Rattaché"
                  fileTypeHint="video"
                  accept="video/*"
                  value={adminNewsVideoUrl}
                  onChange={(val) => setAdminNewsVideoUrl(val)}
                  helpText="Importer un fichier vidéo (.mp4) ou intégrer un lien vidéo Youtube."
                />

                <div className="form-group">
                  <label>Lien Web / URL Externe (Source)</label>
                  <input
                    type="url"
                    placeholder="Ex: https://exemple.org/communique-ajtes"
                    value={adminNewsLinkUrl}
                    onChange={e => setAdminNewsLinkUrl(e.target.value)}
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-gold btn-lg w-full margin-top">
                  Publier la Nouvelle
                </button>
              </form>
            </div>

            {/* Form 2: Publier un Nouveau Projet */}
            <div className="card admin-form-card">
              <h2>Publier un Nouveau Projet</h2>
              <p>Ajouter une réalisation ou projet en cours d'exécution.</p>
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

                <FileUploadPicker
                  label="Photo d'illustration du Projet"
                  fileTypeHint="image"
                  accept="image/*"
                  value={newProjImageUrl}
                  onChange={(val) => setNewProjImageUrl(val)}
                  helpText="Importer une image de couverture pour ce projet."
                />

                <FileUploadPicker
                  label="Document PDF du Projet (Fiche technique / Rapport)"
                  fileTypeHint="pdf"
                  accept="application/pdf"
                  value={newProjPdfUrl}
                  onChange={(val) => setNewProjPdfUrl(val)}
                  helpText="Optionnel : Joindre un document PDF récapitulatif."
                />

                <button type="submit" className="btn btn-primary btn-lg w-full margin-top">
                  Publier le projet
                </button>
              </form>
            </div>

            {/* List and Delete Existing Projects & News */}
            <div className="card admin-table-card margin-top-lg" style={{ gridColumn: '1 / -1' }}>
              <h3>Projets et Réalisations Associatives ({projects.length})</h3>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Titre du Projet</th>
                    <th>Catégorie</th>
                    <th>Année</th>
                    <th>Budget Cible</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(p => (
                    <tr key={p.id}>
                      <td><strong>{typeof p.title === 'string' ? p.title : p.title.fr}</strong></td>
                      <td>{p.category}</td>
                      <td>{p.year || 2026}</td>
                      <td>{(p.targetBudget || 0).toLocaleString()} FCFA</td>
                      <td>
                        <button
                          className="btn btn-secondary btn-sm"
                          style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 600 }}
                          onClick={() => {
                            if (window.confirm('Voulez-vous vraiment supprimer ce projet ?')) {
                              deleteProject(p.id);
                            }
                          }}
                        >
                          Supprimer Projet
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card admin-table-card margin-top-lg" style={{ gridColumn: '1 / -1' }}>
              <h3>Actualités et Communiqués Publiés ({news.length})</h3>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Titre</th>
                    <th>Catégorie</th>
                    <th>Auteur</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map(n => (
                    <tr key={n.id}>
                      <td><strong>{typeof n.title === 'string' ? n.title : n.title.fr}</strong></td>
                      <td>{n.category}</td>
                      <td>{n.author}</td>
                      <td>{n.publishDate}</td>
                      <td>
                        <button
                          className="btn btn-secondary btn-sm"
                          style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 600 }}
                          onClick={() => {
                            if (window.confirm('Voulez-vous vraiment supprimer cette actualité ?')) {
                              deleteNewsArticle(n.id);
                            }
                          }}
                        >
                          Supprimer Actualité
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MESSAGES TAB */}
        {activeAdminTab === 'messages' && (
          <div className="card admin-table-card">
            <div className="table-header-row margin-bottom-md">
              <div>
                <h3 style={{ margin: 0 }}>Boîte de Réception — Messages de Contact ({contactMessages.length})</h3>
                <p style={{ margin: '0.25rem 0 0 0', color: '#6B7280', fontSize: '0.9rem' }}>
                  Tous les messages envoyés par les visiteurs via le formulaire de contact du site.
                </p>
              </div>
            </div>

            {contactMessages.length === 0 ? (
              <div className="text-center" style={{ padding: '2.5rem 1rem', color: '#6B7280', background: '#F9FAFB', borderRadius: '8px' }}>
                <p style={{ margin: 0, fontWeight: 600 }}>Aucun message reçu pour le moment.</p>
              </div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Expéditeur</th>
                    <th>Email / Téléphone</th>
                    <th>Sujet</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Actions Administration</th>
                  </tr>
                </thead>
                <tbody>
                  {contactMessages.map(msg => (
                    <tr key={msg.id}>
                      <td><strong>{msg.name}</strong></td>
                      <td>
                        {msg.email}<br />
                        <span style={{ fontSize: '0.8rem', color: '#6B7280' }}>{msg.phone || 'Non renseigné'}</span>
                      </td>
                      <td><span className="status-pill active">{msg.subject}</span></td>
                      <td style={{ maxWidth: '300px', whiteSpace: 'pre-wrap', fontSize: '0.85rem' }}>{msg.message}</td>
                      <td>{msg.date}</td>
                      <td>
                        <button
                          className="btn btn-secondary btn-sm"
                          style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5', fontWeight: 600 }}
                          onClick={() => {
                            if (window.confirm(`Supprimer le message de "${msg.name}" ?`)) {
                              deleteContactMessage(msg.id);
                            }
                          }}
                        >
                          Supprimer Message
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
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

        .admin-table-container {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-top: 1rem;
        }

        .mobile-members-list {
          display: none;
        }

        @media (max-width: 768px) {
          .admin-table-card {
            padding: 1.25rem 0.85rem !important;
          }
          .desktop-table-only {
            display: none !important;
          }
          .mobile-members-list {
            display: flex !important;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
          }
          .mobile-member-card {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            padding: 1.15rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          }
          .mobile-member-card .action-buttons-stack {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-top: 0.5rem;
            width: 100%;
          }
          .mobile-member-card .action-buttons-stack button {
            width: 100%;
            justify-content: center;
            padding: 0.75rem 1rem;
            font-size: 0.88rem;
            font-weight: 700;
            border-radius: 8px;
          }
          .admin-tab-bar {
            justify-content: flex-start;
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          .admin-tab {
            flex-shrink: 0;
            padding: 0.6rem 0.9rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};
