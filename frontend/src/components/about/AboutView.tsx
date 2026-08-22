import React from 'react';
import { OfficialDocuments } from './OfficialDocuments';

export const AboutView: React.FC = () => {

  const values = [
    { title: 'Éducation', desc: 'Accès égalitaire aux opportunités d\'apprentissage et soutien aux collèges tchadiens.' },
    { title: 'Solidarité', desc: 'Entraide active envers les élèves et les familles en situation de vulnérabilité.' },
    { title: 'Engagement', desc: 'Action concrète sur le terrain, responsabilité citoyenne et régularité des projets.' },
    { title: 'Inclusion & Respect', desc: 'Accueil de tous les jeunes sans distinction de genre, de région ou de croyance.' },
    { title: 'Transparence', desc: 'Gestion rigoureuse des dons et publication systématique des résultats d\'activités.' },
    { title: 'Protection de l\'Environnement', desc: 'Sensibilisation aux enjeux écologiques et campagnes de reboisement.' }
  ];

  const team = [
    { name: 'Mahamat Hassan', role: 'Président du Bureau National', bio: 'Engagé depuis la création en 2022 pour la promotion de l\'éducation.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Fatimé Zara', role: 'Vice-Présidente', bio: 'Supervise les actions de solidarité et le réseau des bénévoles.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
    { name: 'SALOMON', role: 'Responsable Technique & Maintenance', bio: 'Gestion de l\'infrastructure numérique, du site web officiel et du suivi des projets.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Djibrine Ahmat', role: 'Trésorier Général', bio: 'Responsable de la transparence financière, des dons et des rapports financiers.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <div className="about-page">
      {/* Banner */}
      <section className="about-banner">
        <div className="about-banner-container">
          <span className="section-badge">Qui Sommes-Nous ?</span>
          <h1>L'Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES)</h1>
          <p>
            Créée en 2022, l'AJTES est une organisation communautaire engagée pour bâtir un avenir meilleur pour la jeunesse tchadienne.
          </p>
        </div>
      </section>

      {/* History, Mission & Vision */}
      <section className="section bg-white">
        <div className="grid-2">
          <div className="about-text-box">
            <span className="section-badge">Notre Histoire</span>
            <h2>Née de la volonté d'agir sur le terrain</h2>
            <p>
              L'AJTES a vu le jour en 2022 face à un constat clair : les besoins urgents d'accompagnement des élèves et des établissements scolaires tchadiens nécessitent une mobilisation citoyenne forte et structurée.
            </p>
            <p>
              Dès 2023, nos volontaires sont intervenus au <strong>CEG de Nangassou</strong> pour offrir des fournitures scolaires complètes. En 2026, nous avons franchi une étape majeure avec la <strong>construction d'un bureau administratif de deux chambres</strong> dans le même établissement.
            </p>
          </div>

          <div className="mission-vision-box card">
            <div className="mv-item">
              <h3>🎯 Notre Mission</h3>
              <p>
                Contribuer au développement, à la scolarisation et à l'épanouissement de la jeunesse tchadienne à travers des projets éducatifs, sociaux, culturels et environnementaux.
              </p>
            </div>
            <div className="mv-divider"></div>
            <div className="mv-item">
              <h3>👁️ Notre Vision</h3>
              <p>
                Construire une jeunesse tchadienne mieux éduquée, solidaire, responsable et pleinement actrice du développement de sa communauté et de son pays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-slate">
        <div className="section-title-container">
          <span className="section-badge">Principes Fondateurs</span>
          <h2 className="section-title">Nos Valeurs</h2>
        </div>

        <div className="grid-3">
          {values.map((v, i) => (
            <div key={i} className="value-card card">
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Official Documents Viewer Section */}
      <OfficialDocuments />

      {/* Team Section */}
      <section className="section bg-slate">
        <div className="section-title-container">
          <span className="section-badge">Gouvernance</span>
          <h2 className="section-title">L'Équipe Dirigeante & Responsables</h2>
        </div>

        <div className="grid-4">
          {team.map((t, i) => (
            <div key={i} className="team-card card">
              <img src={t.img} alt={t.name} className="team-img" />
              <div className="team-body">
                <h3>{t.name}</h3>
                <span className="team-role">{t.role}</span>
                <p className="team-bio">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .about-banner {
          background: linear-gradient(135deg, var(--neutral-heading), var(--primary-emerald));
          color: #FFF;
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .about-banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .about-banner h1 {
          color: #FFF;
          font-size: 2.25rem;
          margin: 1rem 0;
        }

        .about-banner p {
          font-size: 1.15rem;
          color: #E2E8F0;
        }

        .about-text-box h2 {
          font-size: 1.8rem;
          margin-bottom: 1.25rem;
        }

        .mission-vision-box {
          padding: 2rem;
          background: linear-gradient(135deg, var(--primary-emerald-light), #FFFFFF);
          border: 1px solid rgba(0, 122, 61, 0.2);
        }

        .mv-item h3 {
          font-size: 1.3rem;
          color: var(--primary-emerald);
          margin-bottom: 0.5rem;
        }

        .mv-divider {
          height: 1px;
          background: var(--neutral-border);
          margin: 1.5rem 0;
        }

        .value-card {
          padding: 1.75rem;
          border-top: 4px solid var(--primary-emerald);
        }

        .value-card h3 {
          font-size: 1.15rem;
          color: var(--neutral-heading);
          margin-bottom: 0.5rem;
        }

        .team-card {
          text-align: center;
        }

        .team-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .team-body {
          padding: 1.25rem;
        }

        .team-body h3 {
          font-size: 1.1rem;
          color: var(--neutral-heading);
        }

        .team-role {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-emerald);
          margin: 0.25rem 0 0.75rem 0;
        }

        .team-bio {
          font-size: 0.88rem;
          color: var(--neutral-body);
        }
      `}</style>
    </div>
  );
};
