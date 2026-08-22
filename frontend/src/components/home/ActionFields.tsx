import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const ActionFields: React.FC = () => {
  const { t } = useLanguage();

  const fields = [
    { icon: '📚', title: t('domainEdu'), desc: 'Fournitures scolaires, construction de bureaux & soutien aux élèves (Article 5 des Statuts).' },
    { icon: '🤝', title: t('domainSolidarity'), desc: 'Entraide sociale, kits d\'hygiène et soutien aux familles défavorisées du Tchad.' },
    { icon: '🏥', title: t('domainHum'), desc: 'Assistance d\'urgence, accompagnement médical et solidarité communautaire.' },
    { icon: '🌳', title: t('domainEnv'), desc: 'Reboisement, propreté urbaine et éco-citoyenneté en milieu scolaire (Comité Salubrité).' },
    { icon: '🎭', title: t('domainCulture'), desc: 'Promotion du patrimoine tchadien et événements culturels de la jeunesse.' },
    { icon: '⚽', title: t('domainSport'), desc: 'Tournois sportifs pour la jeunesse et rassemblements citoyens d\'intégration.' },
    { icon: '🕊️', title: t('domainReligion'), desc: 'Promotion de la paix, du respect mutuel et du dialogue interculturel.' },
    { icon: '🏗️', title: t('domainDev'), desc: 'Développement local, infrastructures éducatives (CEG Nangassou) et aménagement.' },
    { icon: '🌟', title: 'Accompagnement Jeunesse', desc: 'Orientation, mentorat et valorisation des talents par le Bureau Exécutif.' }
  ];

  return (
    <section className="section bg-white">
      <div className="section-title-container">
        <span className="section-badge animated-pulse-badge">
          CONFORMES AUX STATUTS DE L'AJTES (2022)
        </span>
        <h2 className="section-title">{t('domainsTitle')}</h2>
        <p className="section-subtitle">
          L'AJTES déploie ses actions autour des piliers stratégiques définis dans ses Statuts officiels pour transformer la vie de la jeunesse et bâtir des communautés fortes.
        </p>
      </div>

      <div className="grid-3">
        {fields.map((f, i) => (
          <div key={i} className="domain-card card animated-float" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="domain-icon-box">{f.icon}</div>
            <h3 className="domain-card-title">{f.title}</h3>
            <p className="domain-card-desc">{f.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        .bg-white {
          background-color: #FFFFFF;
        }

        .domain-card {
          padding: 2rem;
          text-align: center;
          border: 1px solid var(--neutral-border);
          background: #FFFFFF;
          transition: all 0.3s ease;
        }

        .domain-card:hover {
          border-color: var(--primary-emerald);
          box-shadow: 0 10px 25px rgba(0, 122, 61, 0.1);
        }

        .domain-icon-box {
          width: 64px;
          height: 64px;
          background: var(--primary-emerald-light);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1.25rem auto;
          color: var(--primary-emerald-text);
          transition: transform 0.3s;
          border: 1px solid rgba(0, 122, 61, 0.2);
        }

        .domain-card:hover .domain-icon-box {
          transform: scale(1.1) rotate(5deg);
          background: var(--primary-emerald);
          color: #FFF;
        }

        .domain-card-title {
          font-size: 1.2rem;
          color: var(--neutral-heading);
          margin-bottom: 0.75rem;
        }

        .domain-card-desc {
          font-size: 0.92rem;
          color: var(--neutral-body);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};
