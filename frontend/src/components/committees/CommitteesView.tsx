import React from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';

interface CommitteesViewProps {
  setCurrentTab: (tab: string) => void;
}

export const CommitteesView: React.FC<CommitteesViewProps> = ({ setCurrentTab }) => {
  const { committees, partners } = useData();
  const { language } = useLanguage();

  return (
    <div className="committees-page">
      <section className="page-banner">
        <div className="banner-container">
          <span className="section-badge">Gouvernance & Réseau</span>
          <h1>Comités & Partenaires Officiels</h1>
          <p>
            L'AJTES s'appuie sur des comités locaux dynamiques et s'associe avec des institutions, ONG et entreprises engagées.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-title-container">
          <span className="section-badge">Structure Organique</span>
          <h2 className="section-title">Nos Comités & Commissions Specialized</h2>
        </div>

        <div className="grid-3">
          {committees.map(c => (
            <div key={c.id} className="committee-card card">
              <div className="card-top-icon">🏛️</div>
              <h3>{c.name[language] || c.name['fr']}</h3>
              <p className="region-badge">📍 {c.region}</p>
              <p className="comm-desc">{c.description[language] || c.description['fr']}</p>
              <div className="comm-footer">
                <span>👤 Resp: {c.leader}</span>
                <span>👥 {c.membersCount} Membres</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate">
        <div className="section-title-container">
          <span className="section-badge">Ils nous font confiance</span>
          <h2 className="section-title">Nos Partenaires Institutionnels & ONG</h2>
        </div>

        <div className="grid-2">
          {partners.map(p => (
            <div key={p.id} className="partner-card card">
              <img src={p.logoUrl} alt={p.name} className="partner-logo" />
              <div className="partner-info">
                <span className="partner-type">{p.type.toUpperCase()}</span>
                <h3>{p.name}</h3>
                <p>{p.description[language] || p.description['fr']}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="partner-cta-box card margin-top-lg">
          <h3>Vous êtes une ONG, une Institution ou une Entreprise ?</h3>
          <p>
            Rejoignez l'AJTES pour co-financer des projets éducatifs et environnementaux sur le terrain au Tchad.
          </p>
          <button className="btn btn-gold btn-lg" onClick={() => setCurrentTab('contact')}>
            🤝 Devenir Partenaire de l'AJTES
          </button>
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

        .bg-slate { background-color: var(--neutral-light-bg); }

        .committee-card {
          padding: 1.75rem;
          text-align: center;
        }

        .card-top-icon {
          font-size: 2.25rem;
          margin-bottom: 0.75rem;
        }

        .committee-card h3 {
          font-size: 1.25rem;
          color: var(--neutral-heading);
          margin-bottom: 0.35rem;
        }

        .region-badge {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-emerald);
          margin-bottom: 1rem;
        }

        .comm-desc {
          font-size: 0.92rem;
          color: var(--neutral-body);
          margin-bottom: 1.25rem;
        }

        .comm-footer {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--neutral-border);
          font-size: 0.82rem;
          color: var(--neutral-muted);
          font-weight: 600;
        }

        .partner-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .partner-logo {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 12px;
        }

        .partner-info h3 {
          font-size: 1.15rem;
          color: var(--neutral-heading);
          margin-bottom: 0.35rem;
        }

        .partner-type {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary-emerald);
          background: var(--primary-emerald-light);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        .partner-cta-box {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, var(--neutral-heading), #004D26);
          color: #FFF;
        }

        .partner-cta-box h3 {
          color: #FFF;
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        .partner-cta-box p {
          color: #E2E8F0;
          font-size: 1.05rem;
          max-width: 700px;
          margin: 0 auto 1.5rem auto;
        }
      `}</style>
    </div>
  );
};
