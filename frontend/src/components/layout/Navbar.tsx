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
      {/* Top Utility Bar with Organized Actions */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-left-group">
            <span className="slogan-badge animated-pulse-badge">
              AJTES TCHAD — Éducation & Solidarité (Statuts 2022)
            </span>
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-sm"
              title="Rejoindre le Groupe WhatsApp Officiel AJTES"
            >
              WhatsApp Officiel
            </a>
          </div>

          <div className="top-actions-group">
            {/* Language Selector Dropdown */}
            <div className="lang-select-box">
              <select
                className="lang-select-dropdown"
                value={language}
                onChange={e => setLanguage(e.target.value as Language)}
                aria-label="Sélectionner la langue"
              >
                <option value="fr">FR - Français</option>
                <option value="en">EN - English</option>
                <option value="ar">AR - العربية</option>
              </select>
            </div>

            {/* Auth / Admin Control Bar */}
            <div className="auth-control-pill">
              {isLoggedIn ? (
                <div className="user-control-group">
                  <span className="user-name">{currentUser?.name}</span>
                  {isAdmin && (
                    <button
                      className="btn btn-admin btn-sm"
                      onClick={() => handleNavClick('admin')}
                      title="Accéder au Tableau de Bord Administration"
                    >
                      Administration
                    </button>
                  )}
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleNavClick('member')}
                    title="Mon Espace Membre"
                  >
                    Espace Membre
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
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav">
        <div className="main-nav-container">
          {/* Logo */}
          <div className="logo-brand" onClick={() => handleNavClick('home')}>
            <img src="/logo_ajtes.jpeg" alt="Logo AJTES TCHAD" className="official-logo-img" />
            <div className="logo-text">
              <span className="logo-title">AJTES TCHAD</span>
              <span className="logo-sub">Éducation & Solidarité</span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="desktop-links">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-link ${currentTab === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Clean Main CTAs (Only 2 Main Buttons) */}
          <div className="cta-actions">
            <button className="btn btn-gold btn-sm" onClick={() => handleNavClick('donate')}>
              Faire un Don
            </button>
            <button className="btn btn-primary btn-sm" onClick={() => handleNavClick('member')}>
              Espace Membre
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

      {/* Inline styles for Navbar */}
      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 900;
          background: #FFFFFF;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid var(--neutral-border);
        }

        .top-bar {
          background-color: #F8FAFC;
          color: var(--neutral-heading);
          font-size: 0.85rem;
          padding: 0.45rem 1.5rem;
          border-bottom: 1px solid var(--neutral-border);
        }

        .top-bar-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .top-left-group {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .slogan-badge {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(0, 122, 61, 0.2);
        }

        .top-actions-group {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .lang-select-box {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
          box-shadow: var(--shadow-sm);
        }

        .lang-select-dropdown {
          background: transparent;
          border: none;
          color: var(--neutral-heading);
          font-size: 0.82rem;
          font-weight: 700;
          font-family: var(--font-main);
          cursor: pointer;
          outline: none;
        }

        .auth-control-pill {
          display: flex;
          align-items: center;
        }

        .user-control-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .user-name {
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--neutral-heading);
          margin-right: 0.25rem;
        }

        .auth-buttons-minimal {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .main-nav {
          padding: 0.8rem 1.5rem;
          background: #FFFFFF;
        }

        .main-nav-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .official-logo-img {
          width: 48px;
          height: 48px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid var(--primary-emerald);
          box-shadow: 0 4px 10px rgba(0, 122, 61, 0.25);
        }

        .logo-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--primary-emerald), var(--accent-gold));
          color: #FFF;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 122, 61, 0.25);
        }

        .logo-title {
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--neutral-heading);
          display: block;
          line-height: 1.1;
        }

        .logo-sub {
          font-size: 0.75rem;
          color: var(--primary-emerald-text);
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .nav-link {
          background: none;
          border: none;
          padding: 0.5rem 0.8rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--neutral-heading);
          cursor: pointer;
          border-radius: var(--radius-pill);
          transition: all 0.2s;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--primary-emerald-text);
          background-color: var(--primary-emerald-light);
        }

        .cta-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
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

        .margin-top-sm { margin-top: 0.5rem; }

        @media (max-width: 1080px) {
          .desktop-links { display: none; }
          .cta-actions { display: none; }
          .mobile-hamburger { display: block; }
        }
      `}</style>
    </header>
  );
};
