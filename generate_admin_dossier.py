#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Générateur du Dossier Administratif Officiel de Livraison
Projet : Plateforme Numérique Officielle AJTES Tchad
Auteur : Salomon TCHIBKERE
Format : HTML imprimable + PDF certifié A4 (Police 12pt stricte)
Page 1 : Page de couverture prestigieuse avec double bordure noble et trame de sécurité
"""

import base64
import os
import subprocess

def get_base64_logo():
    logo_path = 'logo_ajtes.jpeg'
    if os.path.exists(logo_path):
        with open(logo_path, 'rb') as f:
            return base64.b64encode(f.read()).decode('utf-8')
    return ''

def generate_html(logo_b64):
    html = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Dossier Administratif de Livraison & PV de Réception Définitive — AJTES Tchad</title>
<style>
  @page {{
    size: A4 portrait;
    margin: 18mm 16mm 18mm 16mm;
    @bottom-center {{
      content: "Page " counter(page) " sur " counter(pages);
      font-size: 10pt;
      font-family: 'Times New Roman', Times, serif;
      color: #64748b;
    }}
  }}

  * {{
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}

  body {{
    font-family: 'Times New Roman', Times, 'Liberation Serif', serif;
    font-size: 12pt !important;
    line-height: 1.5;
    color: #1a202c;
    background: #fff;
    margin: 0;
    padding: 0;
  }}

  p, li, td, th, div, span, blockquote {{
    font-size: 12pt;
    line-height: 1.5;
  }}

  .page {{
    page-break-after: always;
    position: relative;
    padding-bottom: 15px;
  }}

  .page:last-child {{
    page-break-after: avoid;
  }}

  /* ========================================================= */
  /* PAGE DE COUVERTURE PRESTIGIEUSE (PAGE 1 UNIQUEMENT)       */
  /* ========================================================= */
  .cover-page {{
    page-break-after: always;
    position: relative;
    box-sizing: border-box;
  }}

  /* Cadre extérieur noble */
  .cover-outer-border {{
    border: 3.5px solid #1e3a8a;
    padding: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 15px rgba(30, 58, 138, 0.08);
  }}

  /* Cadre intérieur avec trame de sécurité institutionnelle */
  .cover-inner-border {{
    border: 1.5px solid #b45309;
    padding: 18px 20px 14px 20px;
    position: relative;
    background: 
      radial-gradient(circle at 50% 35%, rgba(255, 255, 255, 0.94) 0%, rgba(248, 250, 252, 0.96) 100%),
      repeating-linear-gradient(45deg, rgba(30, 58, 138, 0.018) 0px, rgba(30, 58, 138, 0.018) 2px, transparent 2px, transparent 12px),
      repeating-linear-gradient(-45deg, rgba(180, 83, 9, 0.014) 0px, rgba(180, 83, 9, 0.014) 2px, transparent 2px, transparent 12px);
  }}

  /* Ornements d'angle (coins administratifs) */
  .corner-ornament {{
    position: absolute;
    width: 14px;
    height: 14px;
    z-index: 5;
  }}
  .corner-tl {{ top: 4px; left: 4px; border-top: 3px solid #1e3a8a; border-left: 3px solid #1e3a8a; }}
  .corner-tr {{ top: 4px; right: 4px; border-top: 3px solid #1e3a8a; border-right: 3px solid #1e3a8a; }}
  .corner-bl {{ bottom: 4px; left: 4px; border-bottom: 3px solid #1e3a8a; border-left: 3px solid #1e3a8a; }}
  .corner-br {{ bottom: 4px; right: 4px; border-bottom: 3px solid #1e3a8a; border-right: 3px solid #1e3a8a; }}

  /* Ruban tricolore République du Tchad */
  .tchad-flag-bar {{
    display: flex;
    height: 4px;
    width: 160px;
    margin: 6px auto 10px auto;
  }}
  .tchad-flag-bar .c-blue {{ background-color: #0c2380; flex: 1; }}
  .tchad-flag-bar .c-gold {{ background-color: #f7bf14; flex: 1; }}
  .tchad-flag-bar .c-red  {{ background-color: #c91823; flex: 1; }}

  .cover-header-rep {{
    text-align: center;
    margin-bottom: 12px;
  }}

  .cover-rep-title {{
    font-size: 13pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: #1e3a8a;
    margin: 0;
  }}

  .cover-rep-motto {{
    font-size: 10.5pt;
    font-style: italic;
    color: #475569;
    letter-spacing: 1px;
    margin: 2px 0;
  }}

  .cover-ministry {{
    font-size: 10pt;
    font-weight: 600;
    color: #334155;
    margin: 0;
  }}

  .cover-assoc-lead {{
    font-size: 11.5pt;
    font-weight: bold;
    color: #b45309;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 4px 0 0 0;
  }}

  /* Médaillon central Logo */
  .cover-logo-wrapper {{
    text-align: center;
    margin: 12px auto 14px auto;
  }}

  .cover-logo-img {{
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 50%;
    border: 3.5px solid #1e3a8a;
    outline: 2px solid #b45309;
    outline-offset: 3px;
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.2);
    display: block;
    margin: 0 auto;
  }}

  .cover-assoc-devise {{
    font-size: 9.5pt;
    font-style: italic;
    color: #64748b;
    margin-top: 6px;
  }}

  /* Cartouche Titre Officiel */
  .cover-title-cartouche {{
    text-align: center;
    background: linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%);
    border: 1.5px solid #cbd5e1;
    border-top: 4px solid #1e3a8a;
    border-bottom: 3px solid #b45309;
    padding: 12px 14px;
    margin: 10px 0 14px 0;
    border-radius: 4px;
  }}

  .cover-cartouche-tag {{
    font-size: 9.5pt;
    font-weight: bold;
    color: #1e3a8a;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 4px;
  }}

  .cover-title-main {{
    font-size: 17pt;
    font-weight: bold;
    color: #0f172a;
    text-transform: uppercase;
    line-height: 1.25;
    margin: 4px 0 6px 0;
  }}

  .cover-title-sub {{
    font-size: 12pt;
    font-weight: 600;
    color: #b45309;
    margin: 0;
  }}

  /* Référence officielle du dossier */
  .cover-ref-strip {{
    text-align: center;
    margin-bottom: 14px;
  }}

  .cover-ref-box {{
    display: inline-block;
    background: #1e3a8a;
    color: #ffffff;
    font-size: 10.5pt;
    font-weight: bold;
    letter-spacing: 1.5px;
    padding: 5px 18px;
    border-radius: 3px;
    border: 1px solid #172554;
  }}

  /* Tableau d'identification officiel bipartite */
  .cover-parties-table {{
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 12px;
  }}

  .cover-parties-table td {{
    width: 50%;
    vertical-align: top;
    padding: 10px 12px;
    border: 1px solid #cbd5e1;
    background-color: #ffffff;
    font-size: 11pt;
  }}

  .party-header {{
    font-size: 10.5pt;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 4px;
    margin-bottom: 6px;
    border-bottom: 2px solid;
  }}

  .party-header.client {{
    color: #1e3a8a;
    border-color: #1e3a8a;
  }}

  .party-header.provider {{
    color: #b45309;
    border-color: #b45309;
  }}

  .party-name {{
    font-size: 11pt;
    font-weight: bold;
    color: #0f172a;
    margin-bottom: 3px;
  }}

  .party-detail {{
    font-size: 10.5pt;
    line-height: 1.4;
    color: #334155;
  }}

  /* Bandeau de conformité et validation */
  .cover-status-banner {{
    background-color: #f0fdf4;
    border: 1.5px solid #86efac;
    border-left: 5px solid #16a34a;
    padding: 6px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 2px;
  }}

  .cover-status-badge {{
    font-weight: bold;
    color: #15803d;
    font-size: 10.5pt;
  }}

  .cover-status-date {{
    font-size: 10pt;
    color: #475569;
    font-weight: 600;
  }}

  /* Pied de page de couverture */
  .cover-legal-note {{
    text-align: center;
    font-size: 9.5pt;
    color: #64748b;
    border-top: 1px solid #cbd5e1;
    padding-top: 8px;
    line-height: 1.35;
    margin: 0;
  }}

  /* ========================================================= */
  /* STYLES DES PAGES SUIVANTES (PAGES 2 À 8)                   */
  /* ========================================================= */
  .republic-header {{
    text-align: center;
    border-bottom: 2px double #1e3a8a;
    padding-bottom: 10px;
    margin-bottom: 22px;
  }}

  .republic-title {{
    font-size: 12.5pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #1e3a8a;
    margin: 0 0 3px 0;
  }}

  .republic-motto {{
    font-size: 10.5pt;
    font-style: italic;
    color: #475569;
    margin: 0 0 5px 0;
  }}

  .assoc-header-title {{
    font-size: 11.5pt;
    font-weight: bold;
    color: #b45309;
    text-transform: uppercase;
    margin: 0;
  }}

  h1.section-title {{
    font-size: 14.5pt;
    font-weight: bold;
    color: #1e3a8a;
    text-transform: uppercase;
    border-bottom: 2px solid #1e3a8a;
    padding-bottom: 5px;
    margin-top: 20px;
    margin-bottom: 14px;
  }}

  h2.sub-section-title {{
    font-size: 12.5pt;
    font-weight: bold;
    color: #b45309;
    margin-top: 16px;
    margin-bottom: 8px;
  }}

  /* Lettre de transmission */
  .letter-meta {{
    width: 100%;
    margin-bottom: 16px;
  }}

  .letter-meta td {{
    vertical-align: top;
    padding: 3px 0;
    font-size: 12pt;
  }}

  .letter-obj {{
    background-color: #f1f5f9;
    border-left: 4px solid #1e3a8a;
    padding: 9px 12px;
    font-weight: bold;
    margin: 16px 0;
  }}

  .letter-body p {{
    text-align: justify;
    margin-bottom: 12px;
    text-indent: 25px;
  }}

  .letter-sign {{
    margin-top: 22px;
    float: right;
    text-align: right;
    width: 280px;
  }}

  /* Tableaux administratifs */
  table.admin-table {{
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
  }}

  table.admin-table th {{
    background-color: #1e3a8a;
    color: #ffffff;
    font-weight: bold;
    text-align: left;
    padding: 7px 9px;
    border: 1px solid #1e3a8a;
    font-size: 11pt;
  }}

  table.admin-table td {{
    padding: 7px 9px;
    border: 1px solid #cbd5e1;
    font-size: 11pt;
    vertical-align: top;
  }}

  table.admin-table tr:nth-child(even) td {{
    background-color: #f8fafc;
  }}

  .badge-conforme {{
    background-color: #dcfce7;
    color: #15803d;
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 3px;
    display: inline-block;
    border: 1px solid #86efac;
    font-size: 10.5pt;
  }}

  /* Encadrés d'information */
  .info-box {{
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    border-left: 4px solid #b45309;
    padding: 10px 14px;
    margin: 14px 0;
  }}

  .info-box-title {{
    font-weight: bold;
    color: #b45309;
    margin-bottom: 5px;
    font-size: 11.5pt;
  }}

  /* Cadres d'émargement et signatures */
  .signature-grid {{
    width: 100%;
    border-collapse: collapse;
    margin-top: 25px;
  }}

  .signature-grid td {{
    width: 50%;
    vertical-align: top;
    padding: 12px;
    border: 1px solid #cbd5e1;
  }}

  .signature-box {{
    min-height: 135px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}

  .signature-role {{
    font-weight: bold;
    color: #1e3a8a;
    font-size: 11.5pt;
    text-transform: uppercase;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 4px;
    margin-bottom: 8px;
  }}

  .signature-notice {{
    font-size: 10.5pt;
    font-style: italic;
    color: #64748b;
    margin-bottom: 40px;
  }}

  .signature-name {{
    font-weight: bold;
    font-size: 11.5pt;
    color: #0f172a;
  }}

  .seal-box {{
    width: 105px;
    height: 105px;
    border: 2px dashed #94a3b8;
    margin: 12px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 9pt;
    color: #94a3b8;
    font-style: italic;
    border-radius: 50%;
  }}

  ul.admin-list {{
    margin: 8px 0;
    padding-left: 26px;
  }}

  ul.admin-list li {{
    margin-bottom: 5px;
    text-align: justify;
  }}

  .page-footer-note {{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 9.5pt;
    color: #64748b;
    border-top: 1px solid #e2e8f0;
    padding-top: 5px;
  }}
</style>
</head>
<body>

  <!-- ============================================================== -->
  <!-- PAGE 1 : PAGE DE COUVERTURE PRESTIGIEUSE (BORDURE & TRAME)     -->
  <!-- ============================================================== -->
  <div class="cover-page">
    <div class="cover-outer-border">
      <div class="cover-inner-border">
        <!-- Coins ornementaux -->
        <div class="corner-ornament corner-tl"></div>
        <div class="corner-ornament corner-tr"></div>
        <div class="corner-ornament corner-bl"></div>
        <div class="corner-ornament corner-br"></div>

        <!-- En-tête républicain -->
        <div class="cover-header-rep">
          <div class="cover-rep-title">RÉPUBLIQUE DU TCHAD</div>
          <div class="cover-rep-motto">Unité — Travail — Progrès</div>
          <div class="tchad-flag-bar">
            <div class="c-blue"></div>
            <div class="c-gold"></div>
            <div class="c-red"></div>
          </div>
          <div class="cover-ministry">Ministère de la Jeunesse, des Sports et du Leadership Entrepreneurial</div>
          <div class="cover-assoc-lead">Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES)</div>
        </div>

        <!-- Médaillon central Logo -->
        <div class="cover-logo-wrapper">
          {"<img src='data:image/jpeg;base64," + logo_b64 + "' class='cover-logo-img' alt='Logo Officiel AJTES'>" if logo_b64 else ""}
          <div class="cover-assoc-devise">« Coopération — Intégrité — Force »</div>
        </div>

        <!-- Cartouche Titre Officiel -->
        <div class="cover-title-cartouche">
          <div class="cover-cartouche-tag">Dossier Administratif Officiel &amp; Homologation Technique</div>
          <div class="cover-title-main">DOSSIER DE LIVRAISON DE PROJET &amp; PROCÈS-VERBAL DE RÉCEPTION DÉFINITIVE</div>
          <div class="cover-title-sub">Plateforme Numérique Officielle, Portail Adhérents &amp; Système de Gestion Intégré</div>
        </div>

        <!-- Référence officielle -->
        <div class="cover-ref-strip">
          <div class="cover-ref-box">
            RÉFÉRENCE OFFICIELLE DU MARCHÉ : AJTES/DIR/LIV-ADM/2026-N°001
          </div>
        </div>

        <!-- Tableau bipartite Client / Prestataire -->
        <table class="cover-parties-table">
          <tr>
            <td>
              <div class="party-header client">Maître d’Ouvrage (Client)</div>
              <div class="party-name">Association AJTES Tchad</div>
              <div class="party-detail">
                Représentée par le Bureau Exécutif National<br>
                Siège Social : N'Djamena, République du Tchad<br>
                <strong>E-mail Officiel : ajtes235@gmail.com</strong><br>
                Tél. : +235 66 43 95 02 / +235 68 90 23 47
              </div>
            </td>
            <td>
              <div class="party-header provider">Maître d’Œuvre (Prestataire)</div>
              <div class="party-name">M. Salomon TCHIBKERE</div>
              <div class="party-detail">
                Ingénieur Concepteur Logiciel &amp; Chef de Projet<br>
                <strong>Résidence &amp; Établissement : Yaoundé, Cameroun</strong><br>
                E-mail : salomontchibkere@gmail.com<br>
                Tél. : +237 655 13 68 24
              </div>
            </td>
          </tr>
        </table>

        <!-- Bandeau de conformité -->
        <div class="cover-status-banner">
          <div class="cover-status-badge">✔ STATUT : PROJET 100% FINALISÉ — CONFORME SANS RÉSERVE</div>
          <div class="cover-status-date">Date de Dépôt : 06 Octobre 2026</div>
        </div>

        <!-- Mention légale de transmission -->
        <p class="cover-legal-note">
          Document administratif certifié conforme, établi à <strong>Yaoundé</strong> pour transmission et dépôt au siège de l'AJTES à <strong>N'Djamena</strong>.<br>
          Établi en trois (03) exemplaires originaux pour archivage institutionnel, audit comptable et gouvernance.
        </p>

      </div>
    </div>
  </div>

  <!-- ============================================================== -->
  <!-- PAGE 2 : BORDEREAU DE TRANSMISSION                             -->
  <!-- ============================================================== -->
  <div class="page">
    <div class="republic-header">
      <div class="republic-title">RÉPUBLIQUE DU TCHAD</div>
      <div class="republic-motto">Unité — Travail — Progrès</div>
      <div class="assoc-header-title">AJTES Tchad — Direction du Projet Informatique</div>
    </div>

    <h1 class="section-title">1. Bordereau de Dépôt &amp; Lettre Administrative de Transmission</h1>

    <table class="letter-meta">
      <tr>
        <td style="width: 50%;">
          <strong>EXPÉDITEUR :</strong><br>
          M. Salomon TCHIBKERE<br>
          Ingénieur Développeur &amp; Chef de Projet Web<br>
          Yaoundé, Cameroun<br>
          E-mail : salomontchibkere@gmail.com<br>
          Tél. : +237 655 13 68 24
        </td>
        <td style="width: 50%; text-align: right;">
          <strong>DESTINATAIRE :</strong><br>
          À l'attention de Monsieur le Président<br>
          et des Membres du Bureau Exécutif de l'AJTES<br>
          Siège National de l'AJTES<br>
          N'Djamena, République du Tchad<br>
          E-mail Officiel : ajtes235@gmail.com
        </td>
      </tr>
    </table>

    <p style="text-align: right; margin-top: 8px;"><strong>Fait à Yaoundé, le 06 Octobre 2026</strong></p>

    <div class="letter-obj">
      OBJET : Dépôt officiel du Dossier de Livraison et demande de signature du Procès-Verbal de Réception Définitive de la Plateforme Numérique AJTES Tchad.
    </div>

    <div class="letter-body">
      <p>
        Monsieur le Président, Mesdames et Messieurs les Membres du Bureau Exécutif,
      </p>
      <p>
        J’ai l’honneur et le privilège de vous soumettre, par la présente, le dossier complet de livraison technique et administrative relatif aux travaux de conception, de développement et de mise en ligne de la <strong>Plateforme Numérique Officielle de l’Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES)</strong>.
      </p>
      <p>
        Conformément aux stipulations du Cahier des Charges institutionnel et aux orientations stratégiques de l’AJTES, l’ensemble des fonctionnalités attendues ont été scrupuleusement implémentées, validées et optimisées. L'outil mis à votre disposition dote désormais l’association d’un portail de premier plan, accessible à l'échelle internationale en trois langues (Français, Anglais, Arabe), d'un mécanisme d'adhésion dématérialisé, d'un module de collecte de dons transparent avec émission de reçus officiels, et d'une interface d'administration ultra-sécurisée adaptée aux smartphones et ordinateurs.
      </p>
      <p>
        L'infrastructure est déployée sur une architecture Cloud haute disponibilité à double redondance, garantissant une consultation fluide et sans interruption pour vos partenaires techniques et financiers, vos membres et le grand public.
      </p>
      <p>
        Je sollicite respectueusement la convocation de la commission de recette pour procéder à l'émargement conjoint du Procès-Verbal de Réception Définitive joint au présent dossier.
      </p>
      <p>
        En vous réitérant mon engagement constant aux côtés de l’AJTES pour l’éducation et l’épanouissement de la jeunesse tchadienne, je vous prie d’agréer, Monsieur le Président, l'expression de mes salutations distinguées.
      </p>
    </div>

    <div class="letter-sign">
      <p style="margin-bottom: 3px;"><strong>L'Ingénieur Concepteur,</strong></p>
      <p style="margin-bottom: 45px; color: #64748b; font-size: 10.5pt;">(Signature et paraphe)</p>
      <p><strong>Salomon TCHIBKERE</strong><br><span style="font-size: 10pt; color: #475569;">Yaoundé, Cameroun</span></p>
    </div>
  </div>

  <!-- ============================================================== -->
  <!-- PAGE 3 : FICHE SIGNALÉTIQUE DU PROJET                          -->
  <!-- ============================================================== -->
  <div class="page">
    <div class="republic-header">
      <div class="republic-title">RÉPUBLIQUE DU TCHAD</div>
      <div class="republic-motto">Unité — Travail — Progrès</div>
      <div class="assoc-header-title">AJTES Tchad — Direction du Projet Informatique</div>
    </div>

    <h1 class="section-title">2. Fiche Signalétique &amp; Cadre Institutionnel du Projet</h1>

    <h2 class="sub-section-title">2.1. Contexte et Justification de la Plateforme</h2>
    <p style="text-align: justify;">
      Fondée en 2022 en République du Tchad, l'<strong>Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES)</strong> œuvre activement pour l'accès universel à l'éducation, le soutien scolaire aux enfants défavorisés, la rénovation des infrastructures éducatives et la promotion de la solidarité communautaire.
    </p>
    <p style="text-align: justify;">
      Afin d'asseoir sa visibilité institutionnelle, d'accroître sa crédibilité auprès des bailleurs de fonds internationaux (ONG, agences onusiennes, partenaires au développement) et d'automatiser la gestion de ses membres, l'AJTES a commandité la mise en place d'une plateforme web moderne, sécurisée et ergonomique.
    </p>

    <h2 class="sub-section-title">2.2. Tableau Synoptique du Projet</h2>
    <table class="admin-table">
      <tr>
        <th style="width: 35%;">Paramètre Administratif</th>
        <th>Détail &amp; Spécification Retenue</th>
      </tr>
      <tr>
        <td><strong>Intitulé Officiel :</strong></td>
        <td>Portail Web Institutionnel &amp; Système de Gestion Intégré AJTES Tchad</td>
      </tr>
      <tr>
        <td><strong>Maître d’Ouvrage (Client) :</strong></td>
        <td>AJTES Tchad (Siège : N'Djamena, Tchad) — E-mail : <code>ajtes235@gmail.com</code></td>
      </tr>
      <tr>
        <td><strong>Maître d’Œuvre (Prestataire) :</strong></td>
        <td>M. Salomon TCHIBKERE (Yaoundé, Cameroun) — E-mail : <code>salomontchibkere@gmail.com</code></td>
      </tr>
      <tr>
        <td><strong>Bénéficiaire Direct :</strong></td>
        <td>Bureau Exécutif, Membres Adhérents et Bénévoles de l'AJTES</td>
      </tr>
      <tr>
        <td><strong>Public Cible :</strong></td>
        <td>Jeunes élèves, donateurs nationaux et de la diaspora, partenaires éducatifs</td>
      </tr>
      <tr>
        <td><strong>Langues Officielles Intégrées :</strong></td>
        <td>Français (langue principale), Anglais, Arabe (ar-TD)</td>
      </tr>
      <tr>
        <td><strong>Technologies Frontend :</strong></td>
        <td>React 19, TypeScript, Vite 8, Lucide Icons, CSS Vanilla Modulaire</td>
      </tr>
      <tr>
        <td><strong>Technologies Backend &amp; BD :</strong></td>
        <td>Node.js, Express.js, Prisma ORM 5.22, SQLite chiffré, JWT, bcryptjs</td>
      </tr>
      <tr>
        <td><strong>Dépôt Source Certifié :</strong></td>
        <td>GitHub : <code>salomontchibkere/ASSOCIATION_JEUES_TCHADIENS_EDUCATION_SOLIDARITE</code></td>
      </tr>
      <tr>
        <td><strong>Hébergement Cloud CDN 1 :</strong></td>
        <td>Serveur CDN Direct Universel : <code>https://ajtes-tchad.surge.sh</code></td>
      </tr>
      <tr>
        <td><strong>Hébergement Cloud CDN 2 :</strong></td>
        <td>Plateforme GitHub Pages : <code>https://salomontchibkere.github.io/...</code></td>
      </tr>
      <tr>
        <td><strong>Responsable Technique Hébergement :</strong></td>
        <td>salomontchibkere@gmail.com (Administrateur Technique Développeur)</td>
      </tr>
    </table>

    <div class="info-box">
      <div class="info-box-title">Principes Directeurs d'Éco-Conception et de Performance</div>
      La plateforme a été optimisée avec une compression intelligente des éléments multimédias (réduction des images de 24 Mo à 5,9 Mo sans altération de la netteté) afin de garantir un affichage instantané même en cas de connexion internet mobile à débit modéré (réseaux 3G/4G au Tchad).
    </div>
  </div>

  <!-- ============================================================== -->
  <!-- PAGE 4 : INVENTAIRE DES LIVRABLES (PART 1)                     -->
  <!-- ============================================================== -->
  <div class="page">
    <div class="republic-header">
      <div class="republic-title">RÉPUBLIQUE DU TCHAD</div>
      <div class="republic-motto">Unité — Travail — Progrès</div>
      <div class="assoc-header-title">AJTES Tchad — Direction du Projet Informatique</div>
    </div>

    <h1 class="section-title">3. Inventaire Détaillé des Livrables Contractuels</h1>

    <p style="text-align: justify;">
      L’ensemble des modules constitutifs du projet ont été réalisés en stricte conformité avec le Cahier des Charges. La présente section détaille les sept (07) grands livrables transmis au client :
    </p>

    <h2 class="sub-section-title">Livrable 1 : Portail Public Institutionnel Multilingue</h2>
    <ul class="admin-list">
      <li><strong>Page d'Accueil Dynamique :</strong> Bannière d'impact, chiffres clés de l'association, résumé des missions, citation de Nelson Mandela sur l'éducation et appel solennel aux dons.</li>
      <li><strong>Section « Qui Sommes-Nous » :</strong> Historique complet de la fondation (2022), vision humanitaire, organigramme des comités et valeurs cardinales.</li>
      <li><strong>Médiathèque et Réalisations :</strong> Présentation documentée des chantiers réalisés (notamment le bâtiment administratif de 2 bureaux du CEG remis à l'administration scolaire).</li>
      <li><strong>Moteur de Traduction Trilingue :</strong> Commutateur linguistique instantané en haut de page permettant une consultation fluide en Français, Anglais et Arabe.</li>
    </ul>

    <h2 class="sub-section-title">Livrable 2 : Système d’Adhésion en Ligne &amp; Espace Adhérent</h2>
    <ul class="admin-list">
      <li><strong>Formulaire d'Enregistrement Standardisé :</strong> Collecte sécurisée des coordonnées du candidat (nom, prénom, tranche d’âge, profession, ville de résidence, compétences à mettre à profit).</li>
      <li><strong>Engagement Associatif :</strong> Validation formelle de l'acceptation des Statuts et du Règlement Intérieur de l'AJTES lors de la souscription.</li>
      <li><strong>Tableau de Suivi des Membres :</strong> Enregistrement instantané des dossiers pour traitement et validation administrative par le Bureau Exécutif.</li>
    </ul>

    <h2 class="sub-section-title">Livrable 3 : Module de Dons Sécurisé &amp; Reçus Fiscaux Automatiques</h2>
    <ul class="admin-list">
      <li><strong>Modes de Paiement Locaux et Internationaux :</strong> Prise en charge des montants en Francs CFA (XAF) avec coordonnées directes Airtel Money Tchad (+235 66 43 95 02 / +235 68 90 23 47) et virement bancaire.</li>
      <li><strong>Génération Automatique de Reçu Officiel :</strong> Dès la soumission d'une contribution, le système génère un reçu officiel numéroté (format <code>AJTES-DON-XXXXX</code>) attestant du don, téléchargeable et imprimable avec cachet institutionnel.</li>
      <li><strong>Transparence Financière :</strong> Traçabilité absolue des intentions de dons transmises directement aux consoles de la trésorerie.</li>
    </ul>

    <h2 class="sub-section-title">Livrable 4 : Console d’Administration et Tableaux de Bord</h2>
    <ul class="admin-list">
      <li><strong>Tableau de Bord Exécutif :</strong> Statistiques en temps réel sur le nombre d'adhérents inscrits, le volume financier des dons promis, les projets publiés et les messages entrants.</li>
      <li><strong>Gestion des Contenus (CMS) :</strong> Création, modification et suppression des actualités, des projets scolaires, des événements et des documents officiels.</li>
      <li><strong>Optimisation Tactile Smartphone :</strong> Intégration d'un bouton d'accès discret dans le tiroir mobile et défilement horizontal fluide des tableaux administratifs sur téléphone.</li>
    </ul>
  </div>

  <!-- ============================================================== -->
  <!-- PAGE 5 : INVENTAIRE DES LIVRABLES (PART 2)                     -->
  <!-- ============================================================== -->
  <div class="page">
    <div class="republic-header">
      <div class="republic-title">RÉPUBLIQUE DU TCHAD</div>
      <div class="republic-motto">Unité — Travail — Progrès</div>
      <div class="assoc-header-title">AJTES Tchad — Direction du Projet Informatique</div>
    </div>

    <h1 class="section-title">3. Inventaire des Livrables Contractuels (Suite)</h1>

    <h2 class="sub-section-title">Livrable 5 : Architecture Backend REST &amp; Base de Données</h2>
    <ul class="admin-list">
      <li><strong>Moteur d'API Node.js / Express :</strong> Endpoints RESTful normalisés pour les opérations CRUD sur l'ensemble des modules (utilisateurs, adhésions, dons, articles, projets).</li>
      <li><strong>Prisma ORM &amp; Schéma Relationnel :</strong> Modélisation rigoureuse des tables de données garantissant l'intégrité référentielle et la traçabilité des enregistrements.</li>
      <li><strong>Sécurité et Chiffrement :</strong> Authentification chiffrée par jetons JWT (JSON Web Tokens), hachage fort des mots de passe en bcryptjs, et contrôle strict des types de données par Zod.</li>
    </ul>

    <h2 class="sub-section-title">Livrable 6 : Double Déploiement Cloud Haute Disponibilité</h2>
    <ul class="admin-list">
      <li><strong>Canal 1 — CDN Surge Haute Vitesse :</strong> Hébergement sur le domaine universel <code>https://ajtes-tchad.surge.sh</code> garantissant une consultation sans filtrage pare-feu sur tous les opérateurs mobiles (Airtel Tchad, Moov Africa).</li>
      <li><strong>Canal 2 — GitHub Pages Institutionnel :</strong> Déploiement miroir permanent sur <code>https://salomontchibkere.github.io/ASSOCIATION_JEUES_TCHADIENS_EDUCATION_SOLIDARITE/</code>.</li>
      <li><strong>Pipeline d'Intégration Continue (CI/CD) :</strong> Automatisation complète sous GitHub Actions recompilant et publiant automatiquement le portail à chaque mise à jour du code source.</li>
    </ul>

    <h2 class="sub-section-title">Livrable 7 : Documentation Technique &amp; Manuels d'Exploitation</h2>
    <ul class="admin-list">
      <li><strong>Code Source Intégralement Commenté :</strong> Dépôt Git documenté avec historique propre et architecture modulaire pérenne.</li>
      <li><strong>Fichier README.md Professionnel :</strong> Manuel complet décrivant les procédures d'installation locale, de compilation, d'initialisation de base de données et de maintenance.</li>
      <li><strong>Présent Dossier Administratif de Livraison :</strong> Pièce officielle à valeur probante pour le Bureau Exécutif, les commissaires aux comptes et les archives.</li>
    </ul>

    <div class="info-box">
      <div class="info-box-title">Synthèse de Conformité des Livrables</div>
      Tous les sept (07) livrables contractuels ont été inspectés, testés en conditions réelles sur postes fixes et terminaux mobiles, et déclarés conformes aux standards logiciels les plus exigeants.
    </div>
  </div>

  <!-- ============================================================== -->
  <!-- PAGE 6 : PROCÈS-VERBAL DE RECETTE                              -->
  <!-- ============================================================== -->
  <div class="page">
    <div class="republic-header">
      <div class="republic-title">RÉPUBLIQUE DU TCHAD</div>
      <div class="republic-motto">Unité — Travail — Progrès</div>
      <div class="assoc-header-title">AJTES Tchad — Commission de Réception des Projets</div>
    </div>

    <h1 class="section-title">4. Procès-Verbal Officiel de Recette Technique &amp; Fonctionnelle</h1>

    <p style="text-align: justify;">
      Le présent Procès-Verbal consigne les résultats des tests d'aptitude, de robustesse, d'ergonomie et de sécurité exécutés conjointement lors de la phase de validation finale du projet.
    </p>

    <table class="admin-table">
      <tr>
        <th style="width: 8%;">N°</th>
        <th style="width: 42%;">Fonctionnalité / Critère Évalué</th>
        <th style="width: 32%;">Résultat du Test</th>
        <th style="width: 18%;">Appréciation</th>
      </tr>
      <tr>
        <td>01</td>
        <td>Respect de la charte visuelle et du logo AJTES</td>
        <td>Logos, couleurs et typographies harmonisées</td>
        <td><span class="badge-conforme">CONFORME</span></td>
      </tr>
      <tr>
        <td>02</td>
        <td>Affichage et responsive sur Téléphone Mobile</td>
        <td>Tableaux avec défilement fluide, tiroir tactile</td>
        <td><span class="badge-conforme">CONFORME</span></td>
      </tr>
      <tr>
        <td>03</td>
        <td>Traduction trilingue (Français, Anglais, Arabe)</td>
        <td>Bascule instantanée sur l'ensemble du site</td>
        <td><span class="badge-conforme">CONFORME</span></td>
      </tr>
      <tr>
        <td>04</td>
        <td>Vitesse de chargement des pages (&lt; 2 secondes)</td>
        <td>Bundle optimisé à 6,5 Mo (images compressées)</td>
        <td><span class="badge-conforme">CONFORME</span></td>
      </tr>
      <tr>
        <td>05</td>
        <td>Fonctionnement du formulaire d'adhésion membre</td>
        <td>Validation des données et stockage immédiat</td>
        <td><span class="badge-conforme">CONFORME</span></td>
      </tr>
      <tr>
        <td>06</td>
        <td>Génération de reçu officiel de don (PDF/Print)</td>
        <td>Attestation numérotée avec référence unique</td>
        <td><span class="badge-conforme">CONFORME</span></td>
      </tr>
      <tr>
        <td>07</td>
        <td>Filtrage et recherche dans l'administration</td>
        <td>Recherche dynamique par nom et catégorie</td>
        <td><span class="badge-conforme">CONFORME</span></td>
      </tr>
      <tr>
        <td>08</td>
        <td>Sécurité des accès administrateur (JWT + bcrypt)</td>
        <td>Authentification robuste contre les intrusions</td>
        <td><span class="badge-conforme">CONFORME</span></td>
      </tr>
      <tr>
        <td>09</td>
        <td>Téléchargement des Statuts et Textes Officiels</td>
        <td>Téléchargement direct en un clic opérationnel</td>
        <td><span class="badge-conforme">CONFORME</span></td>
      </tr>
      <tr>
        <td>10</td>
        <td>Déploiement continu automatisé (GitHub Actions)</td>
        <td>CI/CD fonctionnel avec conclusion de succès</td>
        <td><span class="badge-conforme">CONFORME</span></td>
      </tr>
    </table>

    <div class="info-box">
      <div class="info-box-title">DÉCISION SOLENNELLE DE LA COMMISSION DE RECETTE</div>
      Au vu de la conformité intégrale constatée sur l'ensemble des critères fonctionnels et techniques, la commission prononce la <strong>RÉCEPTION DÉFINITIVE SANS RÉSERVE</strong> de la plateforme web de l'AJTES Tchad à compter de la date du 06 Octobre 2026.
    </div>
  </div>

  <!-- ============================================================== -->
  <!-- PAGE 7 : PROPRIÉTÉ INTELLECTUELLE & ACCÈS                      -->
  <!-- ============================================================== -->
  <div class="page">
    <div class="republic-header">
      <div class="republic-title">RÉPUBLIQUE DU TCHAD</div>
      <div class="republic-motto">Unité — Travail — Progrès</div>
      <div class="assoc-header-title">AJTES Tchad — Direction du Projet Informatique</div>
    </div>

    <h1 class="section-title">5. Propriété Intellectuelle, Cession des Droits &amp; Accès</h1>

    <h2 class="sub-section-title">5.1. Cession Intégrale des Droits d'Auteur et de Propriété</h2>
    <p style="text-align: justify;">
      Le Prestataire, M. Salomon TCHIBKERE, cède à titre exclusif, irrévocable et pour la durée légale des droits d’auteur, l’ensemble des droits de propriété intellectuelle afférents à la Plateforme Numérique développée au profit exclusif de l'<strong>Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES)</strong>.
    </p>
    <p style="text-align: justify;">
      Cette cession comprend expressément :
    </p>
    <ul class="admin-list">
      <li>Le droit d'utilisation, d'exploitation commerciale ou institutionnelle, et de diffusion publique.</li>
      <li>Le droit de reproduction, de duplication et d'adaptation du code source.</li>
      <li>La propriété exclusive des bases de données d'adhérents, de donateurs et de contacts collectés.</li>
    </ul>

    <h2 class="sub-section-title">5.2. Trousseau des Clés d'Accès et Identifiants Administrateurs</h2>
    <table class="admin-table">
      <tr>
        <th style="width: 35%;">Espace / Service</th>
        <th style="width: 35%;">Identifiant / Compte</th>
        <th style="width: 30%;">Niveau d'Autorisation</th>
      </tr>
      <tr>
        <td><strong>Administration Officielle AJTES :</strong></td>
        <td><code>ajtes235@gmail.com</code> / <code>admin@ajtes.td</code></td>
        <td>Super Administrateur de l'Association</td>
      </tr>
      <tr>
        <td><strong>Plateforme Cloud Surge :</strong></td>
        <td><code>salomontchibkere@gmail.com</code></td>
        <td>Compte Technique de Maintenance (Domaine <code>ajtes-tchad.surge.sh</code>)</td>
      </tr>
      <tr>
        <td><strong>Dépôt GitHub Officiel :</strong></td>
        <td><code>salomontchibkere</code></td>
        <td>Gestionnaire du code source et CI/CD</td>
      </tr>
      <tr>
        <td><strong>Base de Données Locale :</strong></td>
        <td>Prisma Client SQLite (<code>dev.db</code>)</td>
        <td>Accès Direct Sécurisé</td>
      </tr>
    </table>

    <h2 class="sub-section-title">5.3. Garantie et Souveraineté des Données Personnelles</h2>
    <p style="text-align: justify;">
      Toutes les informations enregistrées (coordonnées des adhérents et donateurs) demeurent la propriété confidentielle et souveraine de l'AJTES. Aucune donnée n'est cédée, louée ni partagée avec des tiers, conformément aux lois en vigueur et aux standards internationaux de protection de la vie privée.
    </p>
  </div>

  <!-- ============================================================== -->
  <!-- PAGE 8 : GARANTIE, MAINTENANCE & SIGNATURES                    -->
  <!-- ============================================================== -->
  <div class="page">
    <div class="republic-header">
      <div class="republic-title">RÉPUBLIQUE DU TCHAD</div>
      <div class="republic-motto">Unité — Travail — Progrès</div>
      <div class="assoc-header-title">AJTES Tchad — Direction du Projet Informatique</div>
    </div>

    <h1 class="section-title">6. Garantie, Maintenance &amp; Émargement Officiel</h1>

    <h2 class="sub-section-title">6.1. Engagement de Garantie Post-Livraison</h2>
    <p style="text-align: justify;">
      Le prestataire accorde à l'AJTES une <strong>garantie contractuelle d'assistance technique de six (06) mois</strong> à compter de la signature du présent acte. Durant cette période, toute anomalie bloquante ou dysfonctionnement imputable au code source sera corrigé gratuitement et sans délai.
    </p>

    <h2 class="sub-section-title">6.2. Cadre d'Émargement et Signatures Conjointes</h2>
    <p style="text-align: justify; margin-bottom: 18px;">
      En foi de quoi, le présent Procès-Verbal de Réception Définitive a été dressé, lu, approuvé et signé conjointement par les parties pour servir et valoir ce que de droit.
    </p>

    <table class="signature-grid">
      <tr>
        <td>
          <div class="signature-box">
            <div>
              <div class="signature-role">Pour le Prestataire / Maître d’Œuvre</div>
              <div class="signature-notice">« Lu, approuvé et certifié conforme pour livraison définitive »</div>
            </div>
            <div>
              <div style="height: 55px;"></div>
              <div class="signature-name">M. Salomon TCHIBKERE</div>
              <div style="font-size: 10.5pt; color: #475569;">Ingénieur Concepteur Web</div>
              <div style="font-size: 10.5pt; color: #475569;">Établi à Yaoundé, le 06 / 10 / 2026</div>
            </div>
          </div>
        </td>
        <td>
          <div class="signature-box">
            <div>
              <div class="signature-role">Pour le Client / Maître d'Ouvrage</div>
              <div class="signature-notice">« Bon pour réception définitive sans réserve et prise en charge »</div>
            </div>
            <div>
              <div style="height: 55px;"></div>
              <div class="signature-name">Le Président National de l'AJTES</div>
              <div style="font-size: 10.5pt; color: #475569;">Pour le Bureau Exécutif (N'Djamena)</div>
              <div style="font-size: 10.5pt; color: #475569;">Date : ..... / ..... / 2026</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="background-color: #f8fafc; text-align: center; padding: 14px;">
          <div style="font-weight: bold; color: #1e3a8a; text-transform: uppercase; font-size: 11pt; margin-bottom: 5px;">
            Emplacement Réservé au Cachet Officiel / Sceau de l'Association AJTES
          </div>
          <div class="seal-box">
            Cachet Officiel<br>AJTES Tchad
          </div>
        </td>
      </tr>
    </table>

    <div class="page-footer-note">
      Dossier Officiel de Livraison AJTES-LIV-ADM-2026-N°001 — Établi à Yaoundé pour transmission au siège de l'AJTES (N'Djamena, République du Tchad)
    </div>
  </div>

</body>
</html>
"""
    return html

def main():
    logo_b64 = get_base64_logo()
    html_content = generate_html(logo_b64)
    
    html_file = "Dossier_Administratif_Livraison_AJTES_2026.html"
    with open(html_file, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"HTML généré : {html_file}")
    
    pdf_file = "Dossier_Administratif_Livraison_AJTES_2026.pdf"
    cmd = [
        "google-chrome",
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        f"--print-to-pdf={pdf_file}",
        "--no-pdf-header-footer",
        html_file
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(pdf_file):
        size = os.path.getsize(pdf_file)
        print(f"PDF généré avec succès : {pdf_file} ({size / 1024:.1f} Ko)")
    else:
        print("Erreur de génération PDF :", res.stderr)

if __name__ == "__main__":
    main()
