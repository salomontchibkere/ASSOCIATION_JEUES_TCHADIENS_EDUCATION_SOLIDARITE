import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

async function generateDeliveryPDF() {
  console.log('📄 Génération du Rapport Complet de Réalisation & Livraison (PDF 6 Pages)...');

  const doc = new PDFDocument({
    size: 'A4',
    margin: 0,
    bufferPages: true
  });

  const publicDocPath = path.join(process.cwd(), '../frontend/public/documents/Dossier_Livraison_Technique_AJTES_2026.pdf');
  const rootDocPath = path.join(process.cwd(), '../Dossier_Livraison_Technique_AJTES_2026.pdf');

  const streamRoot = fs.createWriteStream(rootDocPath);
  const streamPublic = fs.createWriteStream(publicDocPath);

  doc.pipe(streamRoot);
  doc.pipe(streamPublic);

  // Corporate Color Palette
  const darkSlate = '#0f172a';
  const emeraldGreen = '#007A3D';
  const accentGold = '#D97706';
  const lightBg = '#f8fafc';
  const borderGray = '#cbd5e1';
  const textDark = '#334155';

  // Helper for Header
  const drawPageHeader = (pageTitle: string) => {
    doc.rect(0, 0, 595.28, 60).fill(darkSlate);
    doc.fillColor(emeraldGreen).fontSize(14).font('Helvetica-Bold').text('AJTES TCHAD', 35, 15);
    doc.fillColor('#94a3b8').fontSize(8).font('Helvetica').text('Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité', 35, 34);
    
    doc.fillColor('#ffffff').fontSize(9.5).font('Helvetica-Bold').text(pageTitle.toUpperCase(), 330, 18, { align: 'right' });
    doc.fillColor(accentGold).fontSize(7.5).font('Helvetica').text('RAPPORT DE RÉALISATION ET DE LIVRAISON TECHNIQUE', 330, 32, { align: 'right' });
    doc.moveTo(35, 60).lineTo(560, 60).strokeColor(emeraldGreen).lineWidth(2).stroke();
  };

  // Helper for Footer
  const drawPageFooter = (pageNum: number, totalPages: number) => {
    doc.rect(0, 796, 595.28, 45.89).fill(darkSlate);
    doc.fillColor('#94a3b8').fontSize(7.5).font('Helvetica').text(
      'Document Officiel de Livraison Technique — Association AJTES TCHAD — N\'Djamena, République du Tchad',
      35, 808, { align: 'left' }
    );
    doc.fillColor(accentGold).fontSize(7.5).font('Helvetica-Bold').text(
      `Page ${pageNum} sur ${totalPages}`,
      35, 808, { align: 'right' }
    );
  };

  // ==========================================
  // --- PAGE 1: PAGE DE GARDE EXECUTIVE ---
  // ==========================================
  doc.rect(0, 0, 595.28, 841.89).fill('#0b1329');

  // Decorative Vertical Bar
  doc.rect(0, 0, 16, 841.89).fill(emeraldGreen);

  doc.fillColor(emeraldGreen).fontSize(24).font('Helvetica-Bold').text('ASSOCIATION AJTES TCHAD', 45, 105);
  doc.fillColor(accentGold).fontSize(11).font('Helvetica-Bold').text('SIÈGE SOCIAL : N\'DJAMENA, RÉPUBLIQUE DU TCHAD', 45, 137);

  doc.moveTo(45, 160).lineTo(550, 160).strokeColor(borderGray).lineWidth(1).stroke();

  doc.fillColor('#ffffff').fontSize(22).font('Helvetica-Bold').text('RAPPORT COMPLET DE RÉALISATION', 45, 195, { width: 490 });
  doc.fillColor('#ffffff').fontSize(18).font('Helvetica-Bold').text('& DOSSIER DE LIVRAISON TECHNIQUE', 45, 225, { width: 490 });
  doc.fillColor('#94a3b8').fontSize(12).font('Helvetica').text('Bilan Exhaustif, Architecture Full-Stack, Répertoire des Accès, Sécurité & Déploiement', 45, 260, { width: 490 });

  // Metadata Card on Cover
  doc.rect(45, 330, 490, 250).fillAndStroke('#1e293b', borderGray);

  doc.fillColor(accentGold).fontSize(11).font('Helvetica-Bold').text('INFORMATIONS DE HOMOLOGATION & LIVRAISON', 65, 350);

  const coverMeta = [
    { label: 'Projet :', val: 'Plateforme Numérique Officielle AJTES (Site & Administration)' },
    { label: 'Client / Destinataire :', val: 'Bureau Exécutif National de l\'AJTES Tchad' },
    { label: 'Maître d\'Œuvre :', val: 'SALOMON (Tech Lead & Architecte logiciel)' },
    { label: 'Super Administrateur :', val: 'Marc Allan Dedjim (Pouvoir décisionnel complet 100%)' },
    { label: 'Technologies :', val: 'React 19, Vite 8, Node.js, Express, Prisma ORM, SQLite' },
    { label: 'Version de Livraison :', val: 'Version 2.4.0 (Finale Production 2026)' },
    { label: 'Statut de Livraison :', val: 'CONFORME & HOMOLOGUÉ POUR EXPLOITATION' },
    { label: 'Date d\'Homologation :', val: `${new Date().toLocaleDateString('fr-FR')} — N'Djamena, Tchad` }
  ];

  let coverY = 380;
  coverMeta.forEach(m => {
    doc.fillColor('#94a3b8').fontSize(8.5).font('Helvetica').text(m.label, 65, coverY, { width: 140 });
    doc.fillColor('#ffffff').fontSize(8.5).font('Helvetica-Bold').text(m.val, 205, coverY, { width: 310 });
    coverY += 22;
  });

  doc.fillColor('#94a3b8').fontSize(8.5).font('Helvetica').text('DOCUMENT OFFICIEL — STRICTEMENT RÉSERVÉ AU BUREAU NATIONAL AJTES', 45, 780, { align: 'center' });

  // ==========================================
  // --- PAGE 2: CONTEXTE & ARCHITECTURE ---
  // ==========================================
  doc.addPage();
  drawPageHeader('1. Contexte & Architecture');

  let y = 75;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('1.1. CONTEXTE ET OBJECTIFS DU PROJET', 35, y);
  y += 16;
  doc.fillColor(textDark).fontSize(8.5).font('Helvetica').text(
    'L\'Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité (AJTES), créée en 2022 et basée à N\'Djamena, s\'est dotée d\'une plateforme numérique moderne pour appuyer sa mission citoyenne. L\'objectif est d\'offrir une vitrine institutionnelle internationale, d\'automatiser le traitement des dons par Mobile Money (Airtel & Moov Tchad), de gérer les adhésions des membres et de sécuriser la gouvernance administrative.',
    35, y, { width: 525, align: 'justify', lineGap: 2 }
  );

  y += 65;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('1.2. ARCHITECTURE TECHNIQUE FULL-STACK', 35, y);
  y += 16;

  const stackItems = [
    { title: 'Frontend (Interface Web & Mobile)', desc: 'Construit avec React 19 et Vite. Design modulaire Vanilla CSS responsive, animations fluides (Lucide-React & Framer Motion), support multilingue natif (Français, Anglais, Arabe).' },
    { title: 'Backend (Serveur d\'API RESTful)', desc: 'Développé en Node.js Express avec TypeScript. Architecture sécurisée par middlewares de validation, contrôle de droits RBAC et gestionnaires de requêtes.' },
    { title: 'Base de Données & Modélisation', desc: 'Gestion par Prisma ORM et SQLite (dev.db). Schéma relationnel optimisé incluant les utilisateurs, rôles, dons, projets, actualités, comités et médias.' },
    { title: 'Moteur PDF & Documents Officiels', desc: 'Intégration de PDFKit pour la génération dynamique instantanée des cartes de membres, reçus de dons munis de QR Code et fiches de configuration.' }
  ];

  stackItems.forEach((s) => {
    doc.rect(35, y, 525, 48).fillAndStroke(lightBg, borderGray);
    doc.fillColor(darkSlate).fontSize(9).font('Helvetica-Bold').text(s.title, 45, y + 6);
    doc.fillColor(textDark).fontSize(8).font('Helvetica').text(s.desc, 45, y + 21, { width: 505 });
    y += 54;
  });

  y += 10;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('1.3. FLUX TECHNIQUE DES DONNÉES', 35, y);
  y += 16;
  doc.rect(35, y, 525, 65).fillAndStroke('#0f172a', borderGray);
  doc.fillColor('#38bdf8').fontSize(8.5).font('Helvetica-Bold').text('[INTERFACE VISITEUR / ADMIN]', 50, y + 12);
  doc.fillColor('#ffffff').fontSize(8).font('Helvetica').text('➜ Requêtes HTTPS / Auth JWT ➜', 185, y + 12);
  doc.fillColor('#34d399').fontSize(8.5).font('Helvetica-Bold').text('[SERVEUR EXPRESS API]', 345, y + 12);

  doc.fillColor('#ffffff').fontSize(8).font('Helvetica').text('⬇ Prisma Query Engine (SQL Paramétré)', 345, y + 30);
  doc.fillColor('#fbbf24').fontSize(8.5).font('Helvetica-Bold').text('[BASE DE DONNÉES SQLITE]', 345, y + 44);

  drawPageFooter(2, 6);

  // ==========================================
  // --- PAGE 3: GOUVERNANCE & COMPTES RBAC ---
  // ==========================================
  doc.addPage();
  drawPageHeader('2. Répertoire des Accès Administrateurs');

  y = 75;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('2.1. RÉPERTOIRE OFFICIEL DES 5 MEMBRES DU BUREAU EXÉCUTIF', 35, y);
  y += 16;

  const users = [
    { name: 'Marc Allan Dedjim', role: 'Super Admin (Pouvoir 100%)', email: 'marcallandedjim@gmail.com', phone: '+235 63 00 04 84', desc: 'Gestion intégrale de la plateforme, validation ultime et contrôle complet des accès.' },
    { name: 'Betoudjimbaikara Valentin', role: 'Secrétaire Général', email: 'betoudjimbaikaravalentin@gmail.com', phone: '+235 63 37 36 39', desc: 'Supervision des adhésions, comptes-rendus, documents de secrétariat et annuaire.' },
    { name: 'Souma Banakolong', role: 'Président de l\'Association', email: 'soumabanakolong007@gmail.com', phone: '+237 690 969 577', desc: 'Supervision générale de l\'association, validation des projets et rapports financiers.' },
    { name: 'Boikoussigue', role: 'Chargé de Communication', email: 'boikoussiguen@gmail.com', phone: '+235 65 03 18 49', desc: 'Gestion des contenus médias, actualités, galerie photo/vidéo et communiqués.' },
    { name: 'Salomon', role: 'Tech Lead & Admin Technique', email: 'salomontchibkere@gmail.com', phone: '+237 655 136 824', desc: 'Maintenance de l\'infrastructure, sécurité du code source, API et déploiement Git.' }
  ];

  users.forEach((u, idx) => {
    doc.rect(35, y, 525, 52).fillAndStroke(lightBg, borderGray);
    doc.fillColor(darkSlate).fontSize(9).font('Helvetica-Bold').text(`${idx + 1}. ${u.name.toUpperCase()}`, 45, y + 6, { continued: true });
    doc.fillColor(emeraldGreen).font('Helvetica-Bold').text(` — ${u.role}`);
    doc.fillColor(textDark).fontSize(8).font('Helvetica').text(`E-mail : ${u.email}  |  Téléphone : ${u.phone}`, 45, y + 21);
    doc.fillColor('#64748b').fontSize(7.5).font('Helvetica').text(`Attributions : ${u.desc}`, 45, y + 34, { width: 505 });
    y += 58;
  });

  y += 10;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('2.2. SÉCURISATION DES MOTS DE PASSE', 35, y);
  y += 16;
  doc.rect(35, y, 525, 45).fillAndStroke('#f1f5f9', borderGray);
  doc.fillColor(darkSlate).fontSize(8.5).font('Helvetica-Bold').text('• Hachage bcryptjs de niveau industriel (Cost Factor 10)', 45, y + 8);
  doc.fillColor(textDark).fontSize(8).font('Helvetica').text('Aucun mot de passe en clair n\'est accessible ni conservé en base de données. L\'authentification repose sur des jetons JWT chiffrés expirant automatiquement pour prévenir les accès non autorisés.', 45, y + 22, { width: 505 });

  drawPageFooter(3, 6);

  // ==========================================
  // --- PAGE 4: DESCRIPTION DES MODULES LIVRES ---
  // ==========================================
  doc.addPage();
  drawPageHeader('3. Modules Fonctionnels Livrés');

  y = 75;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('3.1. DESCRIPTION DÉTAILLÉE DES MODULES DE LA PLATEFORME', 35, y);
  y += 16;

  const modules = [
    { name: '1. Vitrine Institutionnelle Bilingue/Trilingue', desc: 'Présentation dynamique de l\'AJTES (Histoire, Mission, Vision, Principes Fondateurs), actualités, événements et catalogue des comités régionaux.' },
    { name: '2. Espace Donateur & Mobile Money (Airtel / Moov)', desc: 'Module de dons sécurisé avec instructions USSD Airtel Money (*150#) et Moov Africa (*800#). Génération automatique de reçus PDF avec QR Code.' },
    { name: '3. Espace Membres & Carte d\'Adhésion', desc: 'Formulaire d\'adhésion pour les sympathisants et génération instantanée en ligne d\'une Carte de Membre Officielle AJTES au format PDF.' },
    { name: '4. Panneau d\'Administration Sécurisé (Dashboard)', desc: 'Interface de gestion permettant d\'ajouter des projets, de valider des dons, de publier des photos/vidéos et de gérer les droits des administrateurs.' }
  ];

  modules.forEach((mod) => {
    doc.rect(35, y, 525, 52).fillAndStroke(lightBg, borderGray);
    doc.fillColor(darkSlate).fontSize(9.5).font('Helvetica-Bold').text(mod.name, 45, y + 8);
    doc.fillColor(textDark).fontSize(8).font('Helvetica').text(mod.desc, 45, y + 24, { width: 505 });
    y += 58;
  });

  y += 10;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('3.2. NETTOYAGE ET CONFORMITÉ VISUELLE', 35, y);
  y += 16;
  doc.rect(35, y, 525, 45).fillAndStroke('#f1f5f9', borderGray);
  doc.fillColor(darkSlate).fontSize(8.5).font('Helvetica-Bold').text('• Suppression des Emojis et Stickers Informels', 45, y + 8);
  doc.fillColor(textDark).fontSize(8).font('Helvetica').text('Tous les éléments visuels informels (stickers, emojis) ont été intégralement retirés du code frontend pour garantir une interface sobement professionnelle adaptée aux bailleurs et partenaires.', 45, y + 22, { width: 505 });

  drawPageFooter(4, 6);

  // ==========================================
  // --- PAGE 5: SÉCURITÉ & DEPLOIEMENT ---
  // ==========================================
  doc.addPage();
  drawPageHeader('4. Sécurité & Déploiement');

  y = 75;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('4.1. SÉCURISATION ET AUDIT CONFORMITÉ', 35, y);
  y += 16;

  const secAudits = [
    { title: 'Protection contre l\'Injection SQL', desc: 'Utilisation exclusive de l\'ORM Prisma qui paramètre automatiquement les requêtes SQL.' },
    { title: 'Filtrage des Attaques XSS', desc: 'Assainissement automatique du DOM React empêchant l\'exécution de scripts malveillants.' },
    { title: 'Contrôle des Accès Basé sur les Rôles (RBAC)', desc: 'Seuls les comptes accrédités ADMIN ou SUPER_ADMIN peuvent exécuter des mutations en base.' },
    { title: 'Compatibilité GitHub Pages (.nojekyll)', desc: 'Ajout du fichier `.nojekyll` éliminant les erreurs de build du moteur Jekyll lors du déploiement.' }
  ];

  secAudits.forEach((sa) => {
    doc.rect(35, y, 525, 42).fillAndStroke(lightBg, borderGray);
    doc.fillColor(darkSlate).fontSize(8.5).font('Helvetica-Bold').text(`• ${sa.title}`, 45, y + 6);
    doc.fillColor(textDark).fontSize(7.5).font('Helvetica').text(sa.desc, 45, y + 20, { width: 505 });
    y += 48;
  });

  y += 10;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('4.2. MANUEL DE DÉPLOIEMENT GITHUB PAGES', 35, y);
  y += 16;

  const deploySteps = [
    { step: 'Étape 1 : Publication', cmd: 'git push origin main', detail: 'Envoie toutes les mises à jour sur le dépôt GitHub officiel.' },
    { step: 'Étape 2 : Configuration', cmd: 'Settings > Pages > Source: Deploy from a branch', detail: 'Sélectionnez la branche main et le dossier /docs.' },
    { step: 'Étape 3 : Validation', cmd: 'Vérification du statut dans l\'onglet Actions', detail: 'Le site est publié en direct sur internet sous 10 secondes.' }
  ];

  deploySteps.forEach((ds) => {
    doc.rect(35, y, 525, 42).fillAndStroke('#f8fafc', borderGray);
    doc.fillColor(darkSlate).fontSize(8.5).font('Helvetica-Bold').text(`${ds.step}  |  Commande : ${ds.cmd}`, 45, y + 6);
    doc.fillColor(textDark).fontSize(7.5).font('Helvetica').text(ds.detail, 45, y + 22, { width: 505 });
    y += 48;
  });

  drawPageFooter(5, 6);

  // ==========================================
  // --- PAGE 6: PROCES-VERBAL DE RECETTE ---
  // ==========================================
  doc.addPage();
  drawPageHeader('5. Homologation & Signatures');

  y = 75;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('5.1. PROCES-VERBAL DE RECETTE & DÉCHARGE OFFICIELLE', 35, y);
  y += 16;

  doc.rect(35, y, 525, 120).fillAndStroke('#ffffff', borderGray);

  doc.fillColor(textDark).fontSize(8.5).font('Helvetica').text(
    'Les soussignés certifient que la plateforme numérique officielle de l\'Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité (AJTES) a été développée, testée, sécurisée et livrée conformément aux spécifications du Bureau Exécutif. Le Bureau Exécutif accuse réception du code source complet, des fiches de configuration et des identifiants d\'accès.',
    45, y + 14, { width: 505, align: 'justify', lineGap: 3 }
  );

  y += 145;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('5.2. SIGNATURES OFFICIELLES DES PARTIES PRENANTES', 35, y);
  y += 18;

  doc.rect(35, y, 525, 190).fillAndStroke('#ffffff', borderGray);

  doc.fillColor(darkSlate).fontSize(9).font('Helvetica-Bold').text('POUR LE BUREAU EXÉCUTIF NATIONAL (AJTES)', 50, y + 15);
  doc.fillColor(darkSlate).fontSize(9).font('Helvetica-Bold').text('POUR L\'ÉQUIPE TECHNIQUE', 330, y + 15);

  doc.fillColor(textDark).fontSize(8.5).font('Helvetica').text('Marc Allan DEDJIM (Super Admin - Pouvoir 100%)', 50, y + 40);
  doc.fillColor(textDark).fontSize(8.5).font('Helvetica').text('Souma BANAKOLONG (Président)', 50, y + 60);
  doc.fillColor(textDark).fontSize(8.5).font('Helvetica').text('Betoudjimbaikara VALENTIN (Secrétaire Général)', 50, y + 80);
  doc.fillColor(textDark).fontSize(8.5).font('Helvetica').text('BOIKOUSSIGUE (Chargé de Communication)', 50, y + 100);

  doc.fillColor(emeraldGreen).fontSize(9).font('Helvetica-Bold').text('SALOMON — Tech Lead & Architecte', 330, y + 40);
  doc.fillColor('#64748b').fontSize(8.5).font('Helvetica').text('Signé à N\'Djamena, République du Tchad', 330, y + 60);
  doc.fillColor(accentGold).fontSize(8.5).font('Helvetica-Bold').text(`Date d'Homologation : ${new Date().toLocaleDateString('fr-FR')}`, 330, y + 80);

  drawPageFooter(6, 6);

  doc.end();

  return new Promise((resolve) => {
    streamPublic.on('finish', () => {
      console.log('✅ Rapport Complet de Livraison PDF généré en 6 PAGES STRICTES PARFAITES.');
      resolve(true);
    });
  });
}

generateDeliveryPDF().catch(console.error);
