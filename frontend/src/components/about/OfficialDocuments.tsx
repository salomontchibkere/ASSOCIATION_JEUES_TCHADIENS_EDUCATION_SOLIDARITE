import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import type { OfficialDocument } from '../../types';

export const OfficialDocuments: React.FC = () => {
  const { officialDocuments } = useData();
  const { language } = useLanguage();
  const { isAdmin } = useAuth();
  const [selectedDoc, setSelectedDoc] = useState<OfficialDocument | null>(officialDocuments[0] || null);
  const [viewMode, setViewMode] = useState<'pdf' | 'text'>('pdf');

  return (
    <section className="section bg-white-docs">
      <div className="section-title-container">
        <span className="section-badge animated-pulse-badge">
          📜 CADRE JURIDIQUE & STATUTS OFFICIELS (2022)
        </span>
        <h2 className="section-title">Statuts & Règlement Intérieur de l'AJTES</h2>
        <p className="section-subtitle">
          Lisez directement en ligne la charte fondamentale et la réglementation officielle adoptées en Assemblée Générale à N'Djamena (Tchad).
        </p>
      </div>

      <div className="documents-container">
        {/* Document Tabs / List */}
        <div className="docs-tabs">
          {officialDocuments.map(doc => (
            <button
              key={doc.id}
              className={`doc-tab-btn ${selectedDoc?.id === doc.id ? 'active' : ''}`}
              onClick={() => setSelectedDoc(doc)}
            >
              <span className="doc-type-badge">PDF</span>
              <div className="doc-tab-text">
                <span className="doc-title">{doc.title[language] || doc.title['fr']}</span>
                <span className="doc-meta">Statuts Officiels 2022</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Document Reader Box */}
        {selectedDoc && (
          <div className="doc-reader-card card">
            <div className="doc-header">
              <div className="doc-header-info">
                <h3>{selectedDoc.title[language] || selectedDoc.title['fr']}</h3>
                <p className="doc-desc">{selectedDoc.description[language] || selectedDoc.description['fr']}</p>
              </div>

              <div className="doc-actions">
                {/* Mode toggle */}
                <div className="view-mode-toggle">
                  <button
                    className={`mode-btn ${viewMode === 'pdf' ? 'active' : ''}`}
                    onClick={() => setViewMode('pdf')}
                  >
                    Visionneuse PDF
                  </button>
                  <button
                    className={`mode-btn ${viewMode === 'text' ? 'active' : ''}`}
                    onClick={() => setViewMode('text')}
                  >
                    Texte des Articles
                  </button>
                </div>

                {/* Download Button strictly for Admin */}
                {isAdmin ? (
                  <a
                    href={selectedDoc.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm"
                    style={{ textDecoration: 'none' }}
                  >
                    Télécharger le PDF (Bureau Exécutif)
                  </a>
                ) : (
                  <span
                    className="admin-only-badge"
                    title="Seuls les administrateurs du Bureau Exécutif peuvent télécharger le fichier PDF source."
                  >
                    Téléchargement PDF réservé à l'Administration
                  </span>
                )}
              </div>
            </div>

            {/* Document Content Display */}
            {viewMode === 'pdf' ? (
              <div className="pdf-embed-wrapper">
                <iframe
                  src={`${selectedDoc.downloadUrl}#toolbar=0`}
                  title={selectedDoc.title['fr']}
                  className="pdf-iframe-reader"
                />
              </div>
            ) : (
              <div className="doc-content-body">
                <div className="doc-legal-note">
                  <strong>Note Officielle :</strong> Conformément au Règlement Intérieur de l'AJTES (2022), tout membre est tenu d'en respecter l'intégralité des clauses.
                </div>
                <pre className="doc-text-formatting">
                  {selectedDoc.contentMarkdown[language] || selectedDoc.contentMarkdown['fr']}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .bg-white-docs {
          background-color: #FFFFFF;
        }

        .documents-container {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 2rem;
        }

        .docs-tabs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .doc-tab-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          text-align: left;
          transition: all 0.25s ease;
        }

        [dir="rtl"] .doc-tab-btn {
          text-align: right;
        }

        .doc-tab-btn:hover, .doc-tab-btn.active {
          background: var(--primary-emerald-light);
          border-color: var(--primary-emerald);
        }

        .doc-type-badge {
          background: var(--primary-emerald);
          color: #FFF;
          font-weight: 800;
          font-size: 0.7rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }

        .doc-tab-text {
          display: flex;
          flex-direction: column;
        }

        .doc-title {
          font-weight: 700;
          font-size: 1rem;
          color: var(--neutral-heading);
        }

        .doc-meta {
          font-size: 0.8rem;
          color: var(--neutral-muted);
          margin-top: 0.2rem;
        }

        .doc-reader-card {
          padding: 2rem;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
        }

        .doc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .doc-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
        }

        .view-mode-toggle {
          display: flex;
          background: #F8FAFC;
          padding: 0.25rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--neutral-border);
        }

        .mode-btn {
          padding: 0.45rem 1rem;
          border: none;
          background: none;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--neutral-body);
          cursor: pointer;
          border-radius: var(--radius-pill);
          transition: all 0.2s;
        }

        .mode-btn.active {
          background: var(--primary-emerald);
          color: #FFF;
        }

        .admin-only-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: #B45309;
          background: #FEF3C7;
          border: 1px solid rgba(217, 119, 6, 0.4);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-pill);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .pdf-embed-wrapper {
          width: 100%;
          height: 600px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--neutral-border);
          box-shadow: var(--shadow-sm);
        }

        .pdf-iframe-reader {
          width: 100%;
          height: 100%;
          border: none;
        }

        .doc-legal-note {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
          border-left: 4px solid var(--primary-emerald);
        }

        .doc-header h3 {
          font-size: 1.5rem;
          color: var(--neutral-heading);
          margin-bottom: 0.35rem;
        }

        .doc-desc {
          font-size: 0.95rem;
          color: var(--neutral-body);
        }

        .doc-content-body {
          background: #F8FAFC;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          max-height: 500px;
          overflow-y: auto;
          border: 1px solid var(--neutral-border);
        }

        .doc-text-formatting {
          white-space: pre-wrap;
          font-family: var(--font-main);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--neutral-dark);
        }

        @media (max-width: 850px) {
          .documents-container {
            grid-template-columns: 1fr;
          }
          .doc-actions {
            align-items: stretch;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
