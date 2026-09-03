import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useLanguage } from '../../context/LanguageContext';
import type { Donation } from '../../types';

export const DonationView: React.FC = () => {
  const { addDonation, projects } = useData();
  const { t } = useLanguage();

  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number>(10000);
  const [customAmountInput, setCustomAmountInput] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'airtel_money' | 'moov_africa' | 'carte_bancaire'>('airtel_money');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [receipt, setReceipt] = useState<Donation | null>(null);

  const presetAmounts = [2000, 5000, 10000, 25000, 50000];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmountInput ? parseFloat(customAmountInput) : selectedAmount;
    if (!finalAmount || finalAmount <= 0) return;

    const targetProj = projects.find(p => p.id === selectedProjectId);

    const createdDonation = addDonation({
      donorName: donorName || 'Donateur Anonyme',
      donorEmail: donorEmail || 'donateur@ajtes.td',
      amount: finalAmount,
      projectId: selectedProjectId || undefined,
      projectTitle: targetProj ? targetProj.title['fr'] : 'Soutien général aux actions AJTES',
      paymentMethod
    });

    setReceipt(createdDonation);
  };

  return (
    <div className="donation-page">
      <section className="page-banner">
        <div className="banner-container">
          <span className="section-badge">Solidarité & Soutien</span>
          <h1>Faire un Don à l'AJTES</h1>
          <p>
            Votre contribution (même modeste) permet de financer les kits scolaires des élèves et la rénovation des écoles au Tchad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="donation-form-wrapper card">
          {!receipt ? (
            <form onSubmit={handleDonationSubmit} className="donation-form">
              <h2 className="form-title">1. Choisissez le montant du Don (FCFA)</h2>

              {/* Amount Presets */}
              <div className="amount-grid">
                {presetAmounts.map(amt => (
                  <button
                    key={amt}
                    type="button"
                    className={`amount-btn ${selectedAmount === amt && !customAmountInput ? 'active' : ''}`}
                    onClick={() => { setSelectedAmount(amt); setCustomAmountInput(''); }}
                  >
                    {amt.toLocaleString()} FCFA
                  </button>
                ))}
              </div>

              <div className="form-group margin-top">
                <label>Ou saisissez un montant libre (FCFA) :</label>
                <input
                  type="number"
                  placeholder="Ex: 15000"
                  value={customAmountInput}
                  onChange={e => setCustomAmountInput(e.target.value)}
                  className="form-control"
                />
              </div>

              <h2 className="form-title margin-top-lg">2. Choisissez l'affectation du Don</h2>
              <div className="form-group">
                <label>Projet à soutenir (Optionnel) :</label>
                <select
                  value={selectedProjectId}
                  onChange={e => setSelectedProjectId(e.target.value)}
                  className="form-control"
                >
                  <option value="">Fonds Général (Éducation & Solidarité Jeunesse)</option>
                  {projects.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.title['fr']} ({p.location})
                    </option>
                  ))}
                </select>
              </div>

              <h2 className="form-title margin-top-lg">3. Choisissez le Moyen de Paiement</h2>
              <div className="payment-grid">
                <div
                  className={`payment-card ${paymentMethod === 'airtel_money' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('airtel_money')}
                >
                  <div className="pay-text">
                    <strong>Airtel Money Tchad</strong>
                    <span>Paiement mobile instantané</span>
                  </div>
                </div>

                <div
                  className={`payment-card ${paymentMethod === 'moov_africa' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('moov_africa')}
                >
                  <div className="pay-text">
                    <strong>Moov Africa Tchad</strong>
                    <span>Paiement mobile sécurisé</span>
                  </div>
                </div>

                <div
                  className={`payment-card ${paymentMethod === 'carte_bancaire' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('carte_bancaire')}
                >
                  <div className="pay-text">
                    <strong>Carte Bancaire</strong>
                    <span>Visa / Mastercard</span>
                  </div>
                </div>
              </div>

              {paymentMethod === 'airtel_money' && (
                <div className="airtel-info-box margin-top">
                  <div className="airtel-title">INSTRUCTIONS AIRTEL MONEY TCHAD (*150#)</div>
                  <div className="airtel-numbers">
                    <span>Numéro 1 : <strong>+235 66 43 95 02</strong></span>
                    <span>Numéro 2 : <strong>+235 68 90 23 47</strong></span>
                  </div>
                  <p className="airtel-desc">
                    <strong>Procédure USSD :</strong> Composez <code>*150#</code> sur votre mobile -&gt; Sélectionnez <em>"Envoi d'argent"</em> -&gt; Saisissez l'un des numéros ci-dessus -&gt; Entrez le montant et validez avec votre code secret.
                  </p>
                </div>
              )}

              {paymentMethod === 'moov_africa' && (
                <div className="airtel-info-box margin-top" style={{ background: '#E0F2FE', borderColor: '#0284C7' }}>
                  <div className="airtel-title" style={{ color: '#0369A1' }}>INSTRUCTIONS MOOV AFRICA TCHAD (*800#)</div>
                  <div className="airtel-numbers">
                    <span>Moov Money : <strong>+235 99 00 11 22</strong></span>
                  </div>
                  <p className="airtel-desc" style={{ color: '#075985' }}>
                    <strong>Procédure USSD :</strong> Composez <code>*800#</code> -&gt; Choisissez <em>"Transfert d'argent"</em> -&gt; Entrez le numéro de l'association et le montant.
                  </p>
                </div>
              )}

              {(paymentMethod === 'airtel_money' || paymentMethod === 'moov_africa') && (
                <div className="form-group margin-top">
                  <label>Votre Numéro de Téléphone {paymentMethod === 'airtel_money' ? 'Airtel Money' : 'Moov Africa'} (Tchad) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: 66439502 ou 68902347"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="form-control"
                  />
                </div>
              )}

              <h2 className="form-title margin-top-lg">4. Vos Coordonnées</h2>
              <div className="grid-2">
                <div className="form-group">
                  <label>Nom et Prénom *</label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom complet"
                    value={donorName}
                    onChange={e => setDonorName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Adresse E-mail *</label>
                  <input
                    type="email"
                    required
                    placeholder="votre.email@example.td"
                    value={donorEmail}
                    onChange={e => setDonorEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="margin-top-lg">
                <button type="submit" className="btn btn-gold btn-lg w-full">
                  Confirmer le Don de {(customAmountInput ? parseFloat(customAmountInput) : selectedAmount).toLocaleString()} FCFA
                </button>
              </div>
            </form>
          ) : (
            /* OFFICIAL TRANSACTION RECEIPT */
            <div className="receipt-container">
              <div className="receipt-badge">TRANSACTION RÉUSSIE</div>
              <h2>{t('receiptTitle')}</h2>
              <p className="receipt-ref">Référence Transaction: <strong>{receipt.reference}</strong></p>

              <div className="receipt-details-table">
                <div className="receipt-row">
                  <span>Donateur:</span>
                  <strong>{receipt.donorName} ({receipt.donorEmail})</strong>
                </div>
                <div className="receipt-row">
                  <span>Montant versé:</span>
                  <strong className="receipt-amount">{receipt.amount.toLocaleString()} FCFA</strong>
                </div>
                <div className="receipt-row">
                  <span>Projet soutenu:</span>
                  <strong>{receipt.projectTitle}</strong>
                </div>
                <div className="receipt-row">
                  <span>Mode de Paiement:</span>
                  <strong>
                    {receipt.paymentMethod === 'airtel_money' ? 'Airtel Money Tchad' : receipt.paymentMethod === 'moov_africa' ? 'Moov Africa Tchad' : 'Carte Bancaire'}
                  </strong>
                </div>
                <div className="receipt-row">
                  <span>Date:</span>
                  <strong>{receipt.date}</strong>
                </div>
              </div>

              <div className="receipt-actions">
                <a
                  href={`http://localhost:5000/api/donations/${receipt.reference}/receipt`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                >
                  Télécharger le Reçu Officiel PDF (avec QR Code)
                </a>
                <button className="btn btn-primary" onClick={() => window.print()}>
                  Imprimer ce Reçu
                </button>
                <button className="btn btn-secondary" onClick={() => setReceipt(null)}>
                  Effectuer un autre don
                </button>
              </div>
            </div>
          )}
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

        .donation-form-wrapper {
          max-width: 800px;
          margin: 0 auto;
          padding: 2.5rem;
        }

        .form-title {
          font-size: 1.25rem;
          color: var(--primary-emerald);
          border-bottom: 2px solid var(--primary-emerald-light);
          padding-bottom: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .margin-top { margin-top: 1.25rem; }
        .margin-top-lg { margin-top: 2rem; }

        .amount-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 1rem;
        }

        .amount-btn {
          padding: 0.9rem;
          background: var(--neutral-light-bg);
          border: 2px solid var(--neutral-border);
          border-radius: var(--radius-md);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--neutral-heading);
          cursor: pointer;
          transition: all 0.2s;
        }

        .amount-btn.active, .amount-btn:hover {
          background: var(--accent-gold);
          border-color: var(--accent-gold-hover);
          color: #121A24;
        }

        .payment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }

        .payment-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          border: 2px solid var(--neutral-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s;
          background: var(--neutral-light-bg);
        }

        .payment-card.active, .payment-card:hover {
          border-color: var(--primary-emerald);
          background: var(--primary-emerald-light);
        }

        .pay-icon { font-size: 2rem; }

        .pay-text {
          display: flex;
          flex-direction: column;
        }

        .pay-text strong {
          font-size: 0.95rem;
          color: var(--neutral-heading);
        }

        .pay-text span {
          font-size: 0.78rem;
          color: var(--neutral-muted);
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

        .airtel-info-box {
          background: #FEF3C7;
          border: 2px dashed #D97706;
          padding: 1.25rem;
          border-radius: var(--radius-md);
          text-align: left;
        }

        .airtel-title {
          font-weight: 800;
          font-size: 0.95rem;
          color: #B45309;
          margin-bottom: 0.5rem;
        }

        .airtel-numbers {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 1.05rem;
          color: var(--neutral-heading);
          margin-bottom: 0.5rem;
        }

        .airtel-desc {
          font-size: 0.85rem;
          color: #92400E;
          line-height: 1.5;
        }

        .form-control {
          padding: 0.75rem 1rem;
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-family: var(--font-main);
        }

        .receipt-container {
          text-align: center;
        }

        .receipt-badge {
          display: inline-block;
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
          font-weight: 800;
          padding: 0.4rem 1.25rem;
          border-radius: var(--radius-pill);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .receipt-ref {
          font-size: 1rem;
          color: var(--neutral-muted);
          margin-bottom: 2rem;
        }

        .receipt-details-table {
          background: var(--neutral-light-bg);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          margin-bottom: 2rem;
          text-align: left;
        }

        [dir="rtl"] .receipt-details-table { text-align: right; }

        .receipt-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px dashed var(--neutral-border);
          font-size: 0.95rem;
        }

        .receipt-row:last-child { border-bottom: none; }

        .receipt-amount {
          color: var(--primary-emerald);
          font-size: 1.2rem;
        }

        .receipt-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};
