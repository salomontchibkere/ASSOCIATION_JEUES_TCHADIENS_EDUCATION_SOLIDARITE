import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
export const ContactView: React.FC = () => {
  const { addContactMessage } = useData();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState<'information' | 'partenariat' | 'don' | 'adhesion' | 'benevolat' | 'projet' | 'autre'>('information');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addContactMessage({
      name,
      email,
      phone,
      subject: subject || 'Demande via le site web',
      topic,
      message
    });
    setSentSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setTimeout(() => setSentSuccess(false), 3500);
  };

  return (
    <div className="contact-page">
      <section className="page-banner">
        <div className="banner-container">
          <span className="section-badge">Formulaire & Coordonnées</span>
          <h1>Contactez l'AJTES Tchad</h1>
          <p>
            Vous souhaitez poser une question, proposer un partenariat institutionnel, soutenir un projet ou devenir bénévole ? Écrivez-nous !
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          {/* Contact Details & Social Links */}
          <div className="contact-info-card card">
            <h2>Nos Coordonnées Officielles</h2>
            <p className="subtitle">L'association est à votre écoute à N'Djamena et Nangassou.</p>

            <div className="info-items">
              <div className="info-item">
                <div>
                  <strong>Adresse du Siège & Bureaux</strong>
                  <p>N'Djamena & Nangassou, République du Tchad</p>
                </div>
              </div>

              <div className="info-item">
                <div>
                  <strong>Airtel Money & Téléphones Officiels</strong>
                  <p>+235 66 43 95 02 / +235 68 90 23 47</p>
                </div>
              </div>

              <div className="info-item">
                <div>
                  <strong>Adresse E-mail Officielle</strong>
                  <p>association.ajtes@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div>
                  <strong>Responsable Technique & Maintenance</strong>
                  <p>SALOMON</p>
                </div>
              </div>
            </div>

            <div className="social-box margin-top-lg">
              <h4>Suivez nos actions sur les Réseaux Sociaux</h4>
              <div className="social-links-grid">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn fb">
                  Facebook AJTES Officiel
                </a>
                <a href="https://chat.whatsapp.com/KH42DjDTNHA7oNHrbBlwGI" target="_blank" rel="noreferrer" className="social-btn wa">
                  Groupe WhatsApp Officiel
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn yt">
                  Chaîne YouTube
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-btn tt">
                  Compte TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card card">
            <h2>Envoyez-nous un Message</h2>

            {sentSuccess && (
              <div className="alert-success">
                Votre message a été envoyé avec succès ! Le bureau de l'AJTES vous répondra dans les plus brefs délais.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Objet du message *</label>
                <select
                  value={topic}
                  onChange={e => setTopic(e.target.value as any)}
                  className="form-control"
                >
                  <option value="information">Demande d'information générale</option>
                  <option value="partenariat">Proposition de Partenariat (ONG / Institution)</option>
                  <option value="don">Question relative à un Don</option>
                  <option value="adhesion">Adhésion & Bénévolat</option>
                  <option value="projet">Proposer un projet / établissement</option>
                  <option value="autre">Autre sujet</option>
                </select>
              </div>

              <div className="grid-2">
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
              </div>

              <div className="form-group">
                <label>Téléphone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+235 66 43 95 02 / +235 68 90 23 47"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Sujet du message</label>
                <input
                  type="text"
                  placeholder="Ex: Soutien pour l'école de Nangassou"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Votre Message *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Écrivez votre message ici..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-full margin-top">
                Envoyer mon message
              </button>
            </form>
          </div>
        </div>
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

        .contact-info-card, .contact-form-card {
          padding: 2.5rem;
        }

        .contact-info-card h2, .contact-form-card h2 {
          font-size: 1.5rem;
          color: var(--neutral-heading);
          margin-bottom: 0.5rem;
        }

        .subtitle {
          font-size: 0.95rem;
          color: var(--neutral-muted);
          margin-bottom: 2rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-item .icon {
          font-size: 1.5rem;
          background: var(--primary-emerald-light);
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--neutral-heading);
        }

        .info-item p {
          font-size: 0.9rem;
          color: var(--neutral-body);
        }

        .social-box h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .social-links-grid {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .social-btn {
          padding: 0.75rem 1rem;
          background: var(--neutral-light-bg);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--neutral-heading);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: background 0.2s;
        }

        .social-btn:hover {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1.5rem;
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
