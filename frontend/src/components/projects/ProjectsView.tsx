import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { ShareButtons } from '../common/ShareButtons';
import type { Project } from '../../types';

interface ProjectsViewProps {
  setCurrentTab: (tab: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ setCurrentTab }) => {
  const { projects } = useData();
  const { language } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'education', label: 'Éducation & Écoles' },
    { id: 'solidarite', label: 'Solidarité Sociale' },
    { id: 'environnement', label: 'Salubrité & Reboisement' },
    { id: 'humanitaire', label: 'Urgence & Santé' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects-page bg-white">
      <section className="projects-banner-white">
        <div className="banner-container">
          <span className="section-badge animated-pulse-badge">
            CONFORME À L'ARTICLE 5 DES STATUTS AJTES (2022)
          </span>
          <h1 className="projects-main-title">
            Nos Projets & <span className="animated-gradient-text">Actions Communautaires</span>
          </h1>
          <p className="projects-main-sub">
            Découvrez nos réalisations phares (telles que la construction du bâtiment administratif du CEG de Nangassou) et nos projets en cours de financement à travers le Tchad.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        {/* Category Filters with Vibrant Colored Text Buttons */}
        <div className="filter-bar">
          {categories.map(c => (
            <button
              key={c.id}
              className={`filter-btn ${selectedCategory === c.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-3">
          {filteredProjects.map(proj => {
            const percent = Math.min(100, Math.round((proj.raisedBudget / proj.targetBudget) * 100));

            return (
              <div key={proj.id} className="project-card card animated-float">
                <div className="proj-img-wrap">
                  <img src={proj.imageUrl} alt={proj.title['fr']} />
                  <span className={`status-badge ${proj.status}`}>
                    {proj.status === 'realise' ? 'Réalisé' : proj.status === 'en_cours' ? 'En cours' : 'En projet'}
                  </span>
                </div>

                <div className="proj-content">
                  <div className="proj-meta">
                    <span>Lieu : {proj.location}</span>
                    <span>{proj.beneficiariesCount} Bénéficiaires</span>
                  </div>

                  <h3 className="proj-title">{proj.title[language] || proj.title['fr']}</h3>
                  <p className="proj-desc">{proj.description[language] || proj.description['fr']}</p>

                  {/* Budget Progress Bar */}
                  <div className="budget-box">
                    <div className="budget-labels">
                      <span>Budget: <strong>{proj.targetBudget.toLocaleString()} FCFA</strong></span>
                      <span>{percent}% financé</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${percent}%` }}></div>
                    </div>
                    <div className="raised-info">
                      Recueilli: {proj.raisedBudget.toLocaleString()} FCFA
                    </div>
                  </div>

                  <ShareButtons title={proj.title['fr']} />

                  <div className="proj-actions margin-top">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setActiveModalProject(proj)}
                    >
                      En savoir plus
                    </button>
                    {proj.status !== 'realise' && (
                      <button
                        className="btn btn-gold btn-sm"
                        onClick={() => setCurrentTab('donate')}
                      >
                        Soutenir ce projet
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModalProject(null)}>✕</button>

            <div className="proj-modal-body">
              <img src={activeModalProject.imageUrl} alt={activeModalProject.title['fr']} className="modal-img" />
              <span className={`status-badge ${activeModalProject.status} modal-badge`}>
                {activeModalProject.status === 'realise' ? 'Réalisé (Statuts 2022)' : 'En cours de réalisation'}
              </span>

              <h2>{activeModalProject.title[language] || activeModalProject.title['fr']}</h2>
              <p className="modal-loc">{activeModalProject.location} • Lancement: {activeModalProject.startDate}</p>

              <div className="modal-section">
                <h4>Description complète</h4>
                <p>{activeModalProject.description[language] || activeModalProject.description['fr']}</p>
              </div>

              <div className="modal-section">
                <h4>Objectif du projet</h4>
                <p>{activeModalProject.objective[language] || activeModalProject.objective['fr']}</p>
              </div>

              {activeModalProject.results && (
                <div className="modal-section results-box">
                  <h4>Résultats obtenus</h4>
                  <p>{activeModalProject.results[language] || activeModalProject.results['fr']}</p>
                </div>
              )}

              <ShareButtons title={activeModalProject.title['fr']} />

              <div className="modal-footer-actions">
                <button className="btn btn-gold btn-lg w-full" onClick={() => { setActiveModalProject(null); setCurrentTab('donate'); }}>
                  Soutenir ce projet par un Don (FCFA)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .bg-white {
          background-color: #FFFFFF;
        }

        .projects-banner-white {
          background-color: #FFFFFF;
          color: var(--neutral-heading);
          padding: 4rem 1.5rem 2.5rem 1.5rem;
          text-align: center;
          border-bottom: 1px solid var(--neutral-border);
        }

        .banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .projects-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--neutral-heading);
          margin: 0.85rem 0;
        }

        .projects-main-sub {
          font-size: 1.1rem;
          color: var(--neutral-body);
          line-height: 1.6;
        }

        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .filter-btn {
          background: #F8FAFC;
          border: 2px solid var(--neutral-border);
          padding: 0.6rem 1.35rem;
          border-radius: var(--radius-pill);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--neutral-heading);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: var(--primary-emerald);
          color: var(--primary-emerald-text);
          background: var(--primary-emerald-light);
        }

        .filter-btn.active {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
          border-color: var(--primary-emerald);
          box-shadow: 0 4px 12px rgba(0, 122, 61, 0.15);
        }

        .project-card {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
        }

        .proj-img-wrap {
          position: relative;
          height: 210px;
        }

        .proj-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 800;
          color: #FFF;
        }

        [dir="rtl"] .status-badge {
          left: auto;
          right: 0.75rem;
        }

        .status-badge.realise { background-color: var(--primary-emerald); }
        .status-badge.en_cours { background-color: #D97706; color: #FFFFFF; }
        .status-badge.en_projet { background-color: #2563EB; }

        .proj-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .proj-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--neutral-muted);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .proj-title {
          font-size: 1.25rem;
          color: var(--neutral-heading);
          margin-bottom: 0.5rem;
        }

        .proj-desc {
          font-size: 0.92rem;
          color: var(--neutral-body);
          margin-bottom: 1.25rem;
          flex-grow: 1;
          line-height: 1.55;
        }

        .budget-box {
          background: #F8FAFC;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.25rem;
          border: 1px solid var(--neutral-border);
        }

        .budget-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          margin-bottom: 0.4rem;
          font-weight: 600;
        }

        .progress-track {
          height: 8px;
          background: #E2E8F0;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.35rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-emerald), #D97706);
          border-radius: 4px;
        }

        .raised-info {
          font-size: 0.82rem;
          color: var(--primary-emerald-text);
          font-weight: 800;
        }

        .proj-actions {
          display: flex;
          gap: 0.5rem;
          justify-content: space-between;
        }

        .modal-img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }

        .modal-section {
          margin-top: 1.25rem;
        }

        .modal-section h4 {
          font-size: 1rem;
          color: var(--primary-emerald-text);
          margin-bottom: 0.35rem;
        }

        .results-box {
          background: var(--primary-emerald-light);
          padding: 1rem;
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--primary-emerald);
          color: var(--primary-emerald-text);
        }

        .modal-footer-actions {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};
