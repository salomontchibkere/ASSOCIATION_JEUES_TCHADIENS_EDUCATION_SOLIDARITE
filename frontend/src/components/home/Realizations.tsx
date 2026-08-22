import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Realizations: React.FC = () => {
  const { t } = useLanguage();

  const milestones = [
    {
      year: '2022',
      badge: 'Fondation & Lancement',
      title: t('year2022Title'),
      desc: t('year2022Desc'),
      details: 'Création officielle de l’AJTES par un groupe de jeunes tchadiens engagés. Organisation des premières campagnes d\'orientation et de sensibilisation pour l\'éducation et l\'environnement.',
      img: '/images/IMG-20260813-WA0123.jpg'
    },
    {
      year: '2023',
      badge: 'Action Scolaire Nangassou',
      title: t('year2023Title'),
      desc: t('year2023Desc'),
      details: 'Distribution directe de fournitures scolaires (cahiers, stylos, sacs, matériel pédagogique) aux élèves du Collège d\'Enseignement Général (CEG) de Nangassou.',
      img: '/images/IMG-20260813-WA0142.jpg'
    },
    {
      year: '2026',
      badge: 'Infrastructures & Bâtiment',
      title: t('year2026Title'),
      desc: t('year2026Desc'),
      details: 'Construction complète et équipement d\'un bureau administratif de deux chambres au niveau du CEG de Nangassou pour assurer de meilleures conditions de travail au personnel enseignant.',
      img: '/images/IMG-20260813-WA0106.jpg'
    }
  ];

  return (
    <section className="section bg-slate">
      <div className="section-title-container">
        <span className="section-badge">Impact Concret sur le Terrain</span>
        <h2 className="section-title">{t('realizationsTitle')}</h2>
        <p className="section-subtitle">
          Depuis sa création en 2022, l'AJTES prouve par des réalisations matérielles tangibles qu’elle agit chaque jour pour l’avenir des élèves et des établissements scolaires.
        </p>
      </div>

      <div className="timeline-grid">
        {milestones.map((m, i) => (
          <div key={i} className="timeline-card card">
            <div className="card-image-box">
              <img src={m.img} alt={m.title} />
              <span className="timeline-year-tag">{m.year}</span>
            </div>
            <div className="card-body">
              <span className="milestone-badge">{m.badge}</span>
              <h3 className="milestone-title">{m.title}</h3>
              <p className="milestone-desc">{m.desc}</p>
              <div className="milestone-details">{m.details}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .bg-slate {
          background-color: var(--neutral-light-bg);
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .timeline-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .card-image-box {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .card-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .timeline-card:hover .card-image-box img {
          transform: scale(1.08);
        }

        .timeline-year-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--accent-gold);
          color: #121A24;
          font-weight: 800;
          font-size: 1.1rem;
          padding: 0.3rem 0.9rem;
          border-radius: var(--radius-sm);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        [dir="rtl"] .timeline-year-tag {
          right: auto;
          left: 1rem;
        }

        .card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .milestone-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-emerald);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .milestone-title {
          font-size: 1.25rem;
          color: var(--neutral-heading);
          margin-bottom: 0.75rem;
        }

        .milestone-desc {
          font-size: 0.95rem;
          color: var(--neutral-body);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .milestone-details {
          font-size: 0.9rem;
          color: var(--neutral-muted);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};
