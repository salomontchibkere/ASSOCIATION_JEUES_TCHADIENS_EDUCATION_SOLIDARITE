import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import type { Language } from '../../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  navigateToAuth?: (mode: 'login' | 'register') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, navigateToAuth }) => {
  const { language, setLanguage, t } = useLanguage();
  const { isLoggedIn, isAdmin, currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/KH42DjDTNHA7oNHrbBlwGI";

  const navItems = [
    { id: 'home', label: t('navHome') },
    { id: 'about', label: t('navAbout') },
    { id: 'projects', label: t('navProjects') },
    { id: 'documents', label: 'Statuts & Règlement' },
    { id: 'news', label: t('navNews') },
    { id: 'gallery', label: t('navGallery') },
    { id: 'committees', label: t('navCommittees') },
    { id: 'contact', label: t('navContact') }
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuthClick = (mode: 'login' | 'register') => {
    if (navigateToAuth) {
      navigateToAuth(mode);
    } else {
      setCurrentTab('member');
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar-header">
      {/* Single Unique Navigation Bar */}
      <div className="main-nav">
        <div className="main-nav-container">
          {/* Brand Logo */}
          <div className="logo-brand" onClick={() => handleNavClick('home')}>
            <img src="./logo_ajtes.jpeg" alt="Logo AJTES TCHAD" className="official-logo-img" />
            <div className="logo-text">
              <span className="logo-title">AJTES TCHAD</span>
              <span className="logo-sub">Éducation & Solidarité</span>
            </div>
          </div>

          {/* Desktop Links with Grouped Dropdown Menus */}
          <nav className="desktop-links">
            <button
              className={`nav-link ${currentTab === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              {t('navHome')}
            </button>

            {/* Dropdown 1: L'Association */}
            <div className="nav-dropdown-wrapper">
              <button
                className={`nav-link dropdown-trigger ${['about', 'documents', 'committees'].includes(currentTab) ? 'active' : ''}`}
              >
                L'Association <span className="dropdown-arrow">▾</span>
              </button>
              <div className="dropdown-menu">
                <button
                  className={`dropdown-item ${currentTab === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavClick('about')}
                >
                  Qui sommes-nous ?
                </button>
                <button
                  className={`dropdown-item ${currentTab === 'documents' ? 'active' : ''}`}
                  onClick={() => handleNavClick('documents')}
                >
                  Statuts & Règlement Intérieur
                </button>
                <button
                  className={`dropdown-item ${currentTab === 'committees' ? 'active' : ''}`}
                  onClick={() => handleNavClick('committees')}
                >
                  Organes & Commissions
                </button>
              </div>
            </div>

            {/* Dropdown 2: Projets & Médias */}
            <div className="nav-dropdown-wrapper">
              <button
                className={`nav-link dropdown-trigger ${['projects', 'news', 'gallery'].includes(currentTab) ? 'active' : ''}`}
              >
                Projets & Médias <span className="dropdown-arrow">▾</span>
              </button>
              <div className="dropdown-menu">
                <button
                  className={`dropdown-item ${currentTab === 'projects' ? 'active' : ''}`}
                  onClick={() => handleNavClick('projects')}
                >
                  Nos Projets & Réalisations
                </button>
                <button
                  className={`dropdown-item ${currentTab === 'news' ? 'active' : ''}`}
                  onClick={() => handleNavClick('news')}
                >
                  Actualités & Événements
                </button>
                <button
                  className={`dropdown-item ${currentTab === 'gallery' ? 'active' : ''}`}
                  onClick={() => handleNavClick('gallery')}
                >
                  Galerie Photos & Vidéos
                </button>
              </div>
            </div>

            <button
              className={`nav-link ${currentTab === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              {t('navContact')}
            </button>
          </nav>

          {/* Integrated Actions Group on the SAME Single Line */}
          <div className="cta-actions">
            {/* WhatsApp Link */}
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              title="Rejoindre le Groupe WhatsApp Officiel AJTES"
            >
              WhatsApp
            </a>

            {/* Language Selector Dropdown */}
            <div className="lang-select-box">
              <select
                className="lang-select-dropdown"
                value={language}
                onChange={e => setLanguage(e.target.value as Language)}
                aria-label="Sélectionner la langue"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div>

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <div className="user-control-group">
                <span className="user-name" title={currentUser?.name}>{currentUser?.name}</span>
                {isAdmin && (
                  <button
                    className="btn btn-admin btn-sm"
                    onClick={() => handleNavClick('admin')}
                    title="Accéder au Tableau de Bord Administration"
                  >
                    Admin
                  </button>
                )}
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleNavClick('member')}
                  title="Mon Espace Membre"
                >
                  Mon Espace
                </button>
                <button className="btn btn-secondary btn-sm logout-btn" onClick={logout} title="Déconnexion">
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="auth-buttons-minimal">
                <button className="btn btn-secondary btn-sm" onClick={() => handleAuthClick('login')}>
                  Se connecter
                </button>
                <button className="btn btn-primary btn-sm" onClick={() => handleAuthClick('register')}>
                  S'inscrire
                </button>
              </div>
            )}

            {/* Donate CTA Button */}
            <button className="btn btn-gold btn-sm" onClick={() => handleNavClick('donate')}>
              Faire un Don
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-links">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`mobile-nav-link ${currentTab === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}

            <div className="mobile-lang-row">
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Langue:</span>
              <select
                className="lang-select-dropdown"
                value={language}
                onChange={e => setLanguage(e.target.value as Language)}
              >
                <option value="fr">Français (FR)</option>
                <option value="en">English (EN)</option>
                <option value="ar">العربية (AR)</option>
              </select>
            </div>

            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp w-full margin-top-sm"
            >
              WhatsApp Officiel
            </a>

            <div className="mobile-drawer-ctas">
              <button className="btn btn-gold w-full" onClick={() => handleNavClick('donate')}>
                Faire un Don
              </button>
              {!isLoggedIn ? (
                <div className="grid-2 gap-sm">
                  <button className="btn btn-primary w-full" onClick={() => handleAuthClick('register')}>
                    S'inscrire
                  </button>
                  <button className="btn btn-secondary w-full" onClick={() => handleAuthClick('login')}>
                    Connexion
                  </button>
                </div>
              ) : (
                <button className="btn btn-primary w-full" onClick={() => handleNavClick('member')}>
                  Mon Espace Membre
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Inline styles for Single-Line Navbar with Dropdowns */}
      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 900;
          background: #FFFFFF;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid var(--neutral-border);
        }

        .main-nav {
          padding: 0.65rem 1.25rem;
          background: #FFFFFF;
        }

        .main-nav-container {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          flex-shrink: 0;
        }

        .official-logo-img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid var(--primary-emerald);
          box-shadow: 0 3px 8px rgba(0, 122, 61, 0.2);
        }

        .logo-title {
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--neutral-heading);
          display: block;
          line-height: 1.1;
        }

        .logo-sub {
          font-size: 0.72rem;
          color: var(--primary-emerald-text);
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: nowrap;
        }

        .nav-link {
          background: none;
          border: none;
          padding: 0.45rem 0.75rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--neutral-heading);
          cursor: pointer;
          border-radius: var(--radius-pill);
          transition: all 0.2s;
          white-space: nowrap;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--primary-emerald-text);
          background-color: var(--primary-emerald-light);
        }

        /* Dropdown Styling */
        .nav-dropdown-wrapper {
          position: relative;
          display: inline-block;
        }

        .dropdown-trigger {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .dropdown-arrow {
          font-size: 0.75rem;
          transition: transform 0.2s ease;
        }

        .nav-dropdown-wrapper:hover .dropdown-arrow {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          background: #FFFFFF;
          border-radius: var(--radius-md);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          border: 1px solid var(--neutral-border);
          padding: 0.4rem 0;
          margin-top: 0.3rem;
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: all 0.2s ease;
          z-index: 1000;
        }

        .nav-dropdown-wrapper:hover .dropdown-menu,
        .nav-dropdown-wrapper:focus-within .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 0.6rem 1.1rem;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--neutral-heading);
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }

        .dropdown-item:hover, .dropdown-item.active {
          background-color: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
        }

        .cta-actions {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          flex-shrink: 0;
        }

        .btn-whatsapp {
          background-color: #25D366;
          color: #FFFFFF;
          font-weight: 700;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          padding: 0.35rem 0.7rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: opacity 0.2s;
        }

        .btn-whatsapp:hover {
          opacity: 0.9;
          color: #FFFFFF;
        }

        .lang-select-box {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-pill);
          box-shadow: var(--shadow-sm);
        }

        .lang-select-dropdown {
          background: transparent;
          border: none;
          color: var(--neutral-heading);
          font-size: 0.78rem;
          font-weight: 700;
          font-family: var(--font-main);
          cursor: pointer;
          outline: none;
        }

        .user-control-group {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .user-name {
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--neutral-heading);
          max-width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .auth-buttons-minimal {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .mobile-hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--neutral-heading);
          cursor: pointer;
        }

        .mobile-drawer {
          background: #FFFFFF;
          border-top: 1px solid var(--neutral-border);
          padding: 1rem 1.5rem 1.5rem 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          text-align: left;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--neutral-heading);
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: block;
          text-decoration: none;
        }

        .mobile-lang-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1rem;
          background: var(--neutral-light-bg);
          border-radius: var(--radius-sm);
        }

        .margin-top-sm { margin-top: 0.5rem; }

        @media (max-width: 1180px) {
          .desktop-links { display: none; }
          .cta-actions { display: none; }
          .mobile-hamburger { display: block; }
        }
      `}</style>
    </header>



  );
};
