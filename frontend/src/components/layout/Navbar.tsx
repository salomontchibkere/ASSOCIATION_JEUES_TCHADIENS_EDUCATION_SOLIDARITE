import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import type { Language } from '../../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  navigateToAuth?: (mode: 'login' | 'register') => void;
}

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893 0-3.177-1.237-6.164-3.486-8.414z"/>
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, navigateToAuth }) => {
  const { language, setLanguage, t } = useLanguage();
  const { isLoggedIn, currentUser, logout, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/KH42DjDTNHA7oNHrbBlwGI";
  const FACEBOOK_PAGE_LINK = "https://facebook.com/events/s/retrouvez-nous-ici-/1425446342790196/";

  const navItems = [
    { id: 'home', label: t('navHome') },
    { id: 'about', label: t('navAbout') },
    { id: 'realizations', label: 'Nos Réalisations' },
    { id: 'projects', label: t('navProjects') },
    { id: 'documents', label: 'Statuts & Règlement' },
    { id: 'news', label: 'Actualités & Nouvelles' },
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

          {/* Desktop Links with Organized Activities Dropdown */}
          <nav className="desktop-links">
            <button
              className={`nav-link ${currentTab === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              {t('navHome')}
            </button>

            <button
              className={`nav-link ${currentTab === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              {t('navAbout')}
            </button>

            {/* Submenu Dropdown for Activities & News */}
            <div className="nav-dropdown-wrapper">
              <button
                className={`nav-link dropdown-trigger ${['realizations', 'projects', 'news', 'committees'].includes(currentTab) ? 'active' : ''}`}
                onClick={() => handleNavClick('realizations')}
                title="Découvrir nos activités, réalisations et projets"
              >
                Activités <span className="dropdown-arrow">▼</span>
              </button>
              <div className="dropdown-menu">
                <button
                  className={`dropdown-item ${currentTab === 'realizations' ? 'active' : ''}`}
                  onClick={() => handleNavClick('realizations')}
                >
                  Nos Réalisations
                </button>
                <button
                  className={`dropdown-item ${currentTab === 'projects' ? 'active' : ''}`}
                  onClick={() => handleNavClick('projects')}
                >
                  {t('navProjects')}
                </button>
                <button
                  className={`dropdown-item ${currentTab === 'news' ? 'active' : ''}`}
                  onClick={() => handleNavClick('news')}
                >
                  Actualités & Nouvelles
                </button>
                <button
                  className={`dropdown-item ${currentTab === 'committees' ? 'active' : ''}`}
                  onClick={() => handleNavClick('committees')}
                >
                  Comités de Gestion
                </button>
              </div>
            </div>

            <button
              className={`nav-link ${currentTab === 'gallery' ? 'active' : ''}`}
              onClick={() => handleNavClick('gallery')}
            >
              {t('navGallery')}
            </button>

            <button
              className={`nav-link ${currentTab === 'documents' ? 'active' : ''}`}
              onClick={() => handleNavClick('documents')}
            >
              Statuts & Règlement
            </button>

            <button
              className={`nav-link ${currentTab === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              {t('navContact')}
            </button>
          </nav>

          {/* Integrated Actions Group on Single Line */}
          <div className="cta-actions">
            {/* Facebook Link - Icon Only */}
            <a
              href={FACEBOOK_PAGE_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-social-icon btn-social-facebook"
              title="Page Facebook Officielle AJTES"
              aria-label="Page Facebook Officielle AJTES"
            >
              <FacebookIcon />
            </a>

            {/* WhatsApp Link - Icon Only */}
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-social-icon btn-social-whatsapp"
              title="Rejoindre le Groupe WhatsApp Officiel AJTES"
              aria-label="Groupe WhatsApp Officiel AJTES"
            >
              <WhatsAppIcon />
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
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleNavClick('member')}
                  title="Mon Espace Membre"
                >
                  Mon Espace
                </button>
                {isAdmin && (
                  <button
                    className="btn btn-gold btn-sm"
                    onClick={() => handleNavClick('admin')}
                    title="Console d'Administration"
                    style={{ fontWeight: 800 }}
                  >
                    Admin
                  </button>
                )}
                <button className="btn btn-secondary btn-sm logout-btn" onClick={logout} title="Déconnexion">
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="auth-buttons-minimal">
                <button
                  className="btn btn-secondary btn-sm btn-nav-login"
                  onClick={() => handleAuthClick('login')}
                  title="Se connecter à votre compte"
                >
                  Se connecter
                </button>
                <button
                  className="btn btn-primary btn-sm btn-nav-register"
                  onClick={() => handleAuthClick('register')}
                  title="Créer un compte ou adhérer à l'AJTES"
                >
                  S'inscrire
                </button>
              </div>
            )}
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

            <div className="mobile-social-row">
              <a
                href={FACEBOOK_PAGE_LINK}
                target="_blank"
                rel="noreferrer"
                className="mobile-social-btn fb"
                title="Page Facebook Officielle AJTES"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>

              <a
                href={WHATSAPP_GROUP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mobile-social-btn wa"
                title="Rejoindre le Groupe WhatsApp Officiel AJTES"
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="mobile-drawer-ctas">
              {!isLoggedIn ? (
                <div className="grid-2 gap-sm">
                  <button className="btn btn-secondary w-full" onClick={() => handleAuthClick('login')}>
                    Se connecter
                  </button>
                  <button className="btn btn-primary w-full" onClick={() => handleAuthClick('register')}>
                    S'inscrire
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
                  <button className="btn btn-primary w-full" onClick={() => handleNavClick('member')}>
                    Mon Espace Membre
                  </button>
                  {isAdmin && (
                    <button className="btn btn-gold w-full" onClick={() => handleNavClick('admin')} style={{ fontWeight: 800 }}>
                      🛡️ Tableau de Bord Admin
                    </button>
                  )}
                  <button className="btn btn-secondary w-full" onClick={logout} style={{ fontSize: '0.85rem' }}>
                    Déconnexion
                  </button>
                </div>
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
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .btn-social-icon {
          width: 36px;
          height: 36px;
          min-width: 36px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          border: none;
          cursor: pointer;
        }

        .btn-social-facebook {
          background-color: #1877F2;
          color: #FFFFFF !important;
        }

        .btn-social-facebook:hover {
          transform: translateY(-2px) scale(1.08);
          box-shadow: 0 4px 12px rgba(24, 119, 242, 0.4);
          filter: brightness(1.08);
          color: #FFFFFF !important;
        }

        .btn-social-whatsapp {
          background-color: #25D366;
          color: #FFFFFF !important;
        }

        .btn-social-whatsapp:hover {
          transform: translateY(-2px) scale(1.08);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          filter: brightness(1.08);
          color: #FFFFFF !important;
        }

        .lang-select-box {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-pill);
          box-shadow: var(--shadow-sm);
          flex-shrink: 0;
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
          flex-shrink: 0;
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
          gap: 0.45rem;
          flex-shrink: 0;
        }

        .btn-nav-login {
          white-space: nowrap !important;
          flex-shrink: 0;
          font-weight: 700;
          padding: 0.42rem 0.9rem;
          font-size: 0.85rem;
          line-height: 1.2;
          border-radius: var(--radius-pill);
          border: 1.5px solid var(--neutral-border);
          background-color: #FFFFFF;
          color: var(--neutral-heading) !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-nav-login:hover {
          background-color: var(--primary-emerald-light);
          border-color: var(--primary-emerald);
          color: var(--primary-emerald-text) !important;
          transform: translateY(-1px);
          box-shadow: 0 3px 8px rgba(0, 122, 61, 0.15);
        }

        .btn-nav-register {
          white-space: nowrap !important;
          flex-shrink: 0;
          font-weight: 700;
          padding: 0.42rem 0.95rem;
          font-size: 0.85rem;
          line-height: 1.2;
          border-radius: var(--radius-pill);
          background-color: var(--primary-emerald-light);
          color: var(--primary-emerald-text) !important;
          border: 1.5px solid rgba(0, 122, 61, 0.3);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-nav-register:hover {
          background-color: var(--primary-emerald);
          color: #FFFFFF !important;
          border-color: var(--primary-emerald);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 122, 61, 0.25);
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

        .mobile-social-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
          margin-top: 0.5rem;
        }

        .mobile-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.65rem 0.8rem;
          border-radius: var(--radius-pill);
          color: #FFFFFF !important;
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none;
          transition: transform 0.2s, filter 0.2s;
        }

        .mobile-social-btn.fb {
          background-color: #1877F2;
        }

        .mobile-social-btn.wa {
          background-color: #25D366;
        }

        .mobile-social-btn:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        .margin-top-sm { margin-top: 0.5rem; }

        @media (max-width: 1140px) {
          .desktop-links { display: none; }
          .cta-actions { display: none; }
          .mobile-hamburger { display: block; }
        }
      `}</style>
    </header>



  );
};
