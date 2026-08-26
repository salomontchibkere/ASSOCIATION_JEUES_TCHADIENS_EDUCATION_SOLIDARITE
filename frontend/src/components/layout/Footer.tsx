import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      {/* Institutional Call Banner */}
      <div className="footer-callout">
        <div className="footer-callout-container">
          <div className="callout-content">
            <h3>{t('partnerCallTitle')}</h3>
            <p>{t('partnerCallText')}</p>
          </div>
          <div className="callout-actions">
            <button className="btn btn-gold" onClick={() => setCurrentTab('donate')}>
              Faire un Don
            </button>
            <button className="btn btn-secondary" onClick={() => setCurrentTab('contact')}>
              Nous Contactez
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="main-footer-body">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src="./logo_ajtes.jpeg" alt="Logo AJTES TCHAD" className="official-footer-logo-img" />
              <span className="logo-name">AJTES TCHAD</span>
            </div>
            <p className="footer-bio">
              Association des Jeunes Tchadiens pour l’Éducation et la Solidarité. Organisation créée en 2022 pour l'épanouissement de la jeunesse et le soutien scolaire.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook Official" className="social-icon fb">
                FB
              </a>
              <a href="https://chat.whatsapp.com/KH42DjDTNHA7oNHrbBlwGI" target="_blank" rel="noreferrer" title="Groupe WhatsApp Officiel AJTES" className="social-icon wa">
                WA
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" title="Chaîne YouTube" className="social-icon yt">
                YT
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" title="TikTok" className="social-icon tt">
                TT
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-col">
            <h4>Navigation rapide</h4>
            <ul className="footer-links">
              <li><button onClick={() => setCurrentTab('home')}>Accueil</button></li>
              <li><button onClick={() => setCurrentTab('about')}>Qui sommes-nous ?</button></li>
              <li><button onClick={() => setCurrentTab('projects')}>Nos Projets & Réalisations</button></li>
              <li><button onClick={() => setCurrentTab('documents')}>Statuts & Règlement Intérieur</button></li>
              <li><button onClick={() => setCurrentTab('gallery')}>Galerie Photos & Vidéos</button></li>
            </ul>
          </div>

          {/* Engagement & Actions */}
          <div className="footer-col">
            <h4>Agir avec l'AJTES</h4>
            <ul className="footer-links">
              <li><button onClick={() => setCurrentTab('donate')}>Faire un Don (FCFA)</button></li>
              <li><button onClick={() => setCurrentTab('member')}>Devenir Membre Actif</button></li>
              <li><button onClick={() => setCurrentTab('member')}>Bénévolat & Projets</button></li>
              <li><button onClick={() => setCurrentTab('committees')}>Nos Comités & Partenaires</button></li>
              <li><button onClick={() => setCurrentTab('contact')}>Contact & Questions</button></li>
            </ul>
          </div>

          {/* Contact Details & Newsletter */}
          <div className="footer-col contact-col">
            <h4>Contact & Siège</h4>
            <p>N'Djamena, République du Tchad</p>
            <p>Airtel Money: +235 66 43 95 02 / +235 68 90 23 47</p>
            <p>Email: association.ajtes@gmail.com</p>
            
            <div className="footer-newsletter">
              <h5>Lettre d'Information</h5>
              <p className="newsletter-desc">Recevez le bilan annuel et les actualités de nos projets scolaires.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Merci ! Vous êtes abonné à la lettre d'information de l'AJTES."); }} className="newsletter-form">
                <input type="email" placeholder="Votre email..." required className="newsletter-input" />
                <button type="submit" className="btn btn-gold btn-sm">S'abonner</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Slogan Banner */}
      <div className="footer-slogan-bar">
        <p>« {t('mainSlogan')} »</p>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2022 - 2026 AJTES - Association des Jeunes Tchadiens pour l’Éducation et la Solidarité. Tous droits réservés.</p>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--neutral-heading);
          color: #E2E8F0;
          margin-top: 4rem;
        }

        .footer-callout {
          background: linear-gradient(135deg, var(--primary-emerald), #004D26);
          color: #FFF;
          padding: 3rem 1.5rem;
        }

        .footer-callout-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .callout-content {
          max-width: 750px;
        }

        .callout-content h3 {
          color: #FFF;
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        .callout-content p {
          color: #E6F5ED;
          font-size: 1.05rem;
        }

        .callout-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .main-footer-body {
          padding: 4rem 1.5rem 2rem 1.5rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
        }

        .footer-col h4 {
          color: #FFF;
          font-size: 1.15rem;
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 35px;
          height: 3px;
          background-color: var(--accent-gold);
          border-radius: 2px;
        }

        [dir="rtl"] .footer-col h4::after {
          left: auto;
          right: 0;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .official-footer-logo-img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid var(--accent-gold);
        }

        .footer-logo .logo-icon {
          width: 38px;
          height: 38px;
          background: var(--primary-emerald);
          color: #FFF;
          font-weight: 800;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }

        .logo-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #FFF;
        }

        .footer-bio {
          font-size: 0.92rem;
          color: #94A3B8;
          margin-bottom: 1.5rem;
        }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          background: rgba(255, 255, 255, 0.08);
          color: #FFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .social-icon:hover {
          background: var(--primary-emerald);
          color: #FFF;
          transform: translateY(-3px);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.6rem;
        }

        .footer-links button {
          background: none;
          border: none;
          color: #94A3B8;
          font-size: 0.92rem;
          cursor: pointer;
          transition: color 0.2s;
          padding: 0;
        }

        .footer-links button:hover {
          color: var(--accent-gold);
        }

        .contact-col p {
          font-size: 0.92rem;
          color: #94A3B8;
          margin-bottom: 0.5rem;
        }

        .footer-newsletter {
          margin-top: 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-newsletter h5 {
          color: #FFF;
          font-size: 0.95rem;
          margin-bottom: 0.35rem;
        }

        .newsletter-desc {
          font-size: 0.8rem;
          color: #94A3B8;
          margin-bottom: 0.75rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.4rem;
        }

        .newsletter-input {
          flex: 1;
          padding: 0.4rem 0.75rem;
          font-size: 0.82rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
          color: #FFF;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--accent-gold);
        }

        .footer-slogan-bar {
          background-color: rgba(0, 0, 0, 0.2);
          text-align: center;
          padding: 1rem 1.5rem;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--accent-gold);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-bottom {
          text-align: center;
          padding: 1.5rem;
          font-size: 0.85rem;
          color: #64748B;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-admin-link {
          margin-top: 0.25rem;
        }

        .admin-discrete-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94A3B8;
          font-size: 0.78rem;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all 0.2s;
        }

        .admin-discrete-btn:hover {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};
