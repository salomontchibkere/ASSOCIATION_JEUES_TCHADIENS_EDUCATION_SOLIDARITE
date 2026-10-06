import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
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
              <a href="https://facebook.com/events/s/retrouvez-nous-ici-/1425446342790196/" target="_blank" rel="noreferrer" title="Facebook Official AJTES" className="social-icon fb" aria-label="Facebook AJTES">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://chat.whatsapp.com/KH42DjDTNHA7oNHrbBlwGI" target="_blank" rel="noreferrer" title="Groupe WhatsApp Officiel AJTES" className="social-icon wa" aria-label="WhatsApp AJTES">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893 0-3.177-1.237-6.164-3.486-8.414z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" title="Chaîne YouTube" className="social-icon yt" aria-label="YouTube AJTES">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" title="TikTok" className="social-icon tt" aria-label="TikTok AJTES">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-col">
            <h4>Navigation rapide</h4>
            <ul className="footer-links">
              <li><button onClick={() => setCurrentTab('home')}>Accueil</button></li>
              <li><button onClick={() => setCurrentTab('about')}>Qui sommes-nous ?</button></li>
              <li><button onClick={() => setCurrentTab('realizations')}>Nos Réalisations Clés</button></li>
              <li><button onClick={() => setCurrentTab('projects')}>Nos Projets</button></li>
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
            <p>Email: impactdigital2026@gmail.com</p>
            
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

      {/* Copyright & Discreet Admin Access */}
      <div className="footer-bottom">
        <p>© 2022 - 2026 AJTES - Association des Jeunes Tchadiens pour l’Éducation et la Solidarité. Tous droits réservés.</p>
        <div className="footer-admin-link">
          <button className="admin-discrete-btn" onClick={() => setCurrentTab('admin')}>
            ⚙️ Espace Administration (Accès Restreint)
          </button>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--neutral-heading);
          color: #E2E8F0;
          margin-top: 4rem;
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
          color: #FFF;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .social-icon.fb:hover { background-color: #1877F2; }
        .social-icon.wa:hover { background-color: #25D366; }
        .social-icon.yt:hover { background-color: #FF0000; }
        .social-icon.tt:hover { background-color: #000000; }

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
