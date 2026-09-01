import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

async function generateDeliveryPDF() {
  console.log('📄 Génération du Dossier Officiel de Livraison Technique (4 Pages Strictes)...');

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

  // Corporate Colors
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
    
    doc.fillColor('#ffffff').fontSize(10).font('Helvetica-Bold').text(pageTitle.toUpperCase(), 350, 18, { align: 'right' });
    doc.fillColor(accentGold).fontSize(7.5).font('Helvetica').text('DOSSIER DE LIVRAISON TECHNIQUE & MANUEL D\'EXPLOITATION', 350, 32, { align: 'right' });
    doc.moveTo(35, 60).lineTo(560, 60).strokeColor(emeraldGreen).lineWidth(2).stroke();
  };

  // Helper for Footer
  const drawPageFooter = (pageNum: number, totalPages: number) => {
    doc.rect(0, 796, 595.28, 45.89).fill(darkSlate);
    doc.fillColor('#94a3b8').fontSize(7.5).font('Helvetica').text(
      'Dossier de Livraison Technique Officiel — Association AJTES TCHAD — N\'Djamena, République du Tchad',
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

  // Decorative Accent bar
  doc.rect(0, 0, 15, 841.89).fill(emeraldGreen);

  doc.fillColor(emeraldGreen).fontSize(24).font('Helvetica-Bold').text('ASSOCIATION AJTES TCHAD', 45, 110);
  doc.fillColor(accentGold).fontSize(11).font('Helvetica-Bold').text('SIÈGE SOCIAL : N\'DJAMENA, RÉPUBLIQUE DU TCHAD', 45, 142);

  doc.moveTo(45, 165).lineTo(550, 165).strokeColor(borderGray).lineWidth(1).stroke();

  doc.fillColor('#ffffff').fontSize(22).font('Helvetica-Bold').text('DOSSIER OFFICIEL DE LIVRAISON TECHNIQUE', 45, 205, { width: 490 });
  doc.fillColor('#94a3b8').fontSize(13).font('Helvetica').text('Manuel d\'Exploitation, Architecture Full-Stack, Sécurité & Guide de Déploiement', 45, 260, { width: 490 });

  // Metadata Card on Cover
  doc.rect(45, 340, 490, 240).fillAndStroke('#1e293b', borderGray);

  doc.fillColor(accentGold).fontSize(11).font('Helvetica-Bold').text('INFORMATIONS DE LIVRAISON & PROJET', 65, 360);

  const coverMeta = [
    { label: 'Projet :', val: 'Plateforme Numérique Officielle AJTES (Site & Administration)' },
    { label: 'Client :', val: 'Bureau Exécutif AJTES Tchad' },
    { label: 'Responsable Technique :', val: 'SALOMON (Tech Lead & Architecte logiciel)' },
    { label: 'Super Administrateur :', val: 'Marc Allan Dedjim (Pouvoir complet 100%)' },
    { label: 'Technologies :', val: 'React 19, Vite, Node.js, Express, Prisma ORM, SQLite' },
    { label: 'Version de Livraison :', val: 'Version 2.4.0 (Finale Production 2026)' },
    { label: 'Date d\'Homologation :', val: `${new Date().toLocaleDateString('fr-FR')} — N'Djamena, Tchad` }
  ];

  let coverY = 390;
  coverMeta.forEach(m => {
    doc.fillColor('#94a3b8').fontSize(9).font('Helvetica').text(m.label, 65, coverY, { width: 140 });
    doc.fillColor('#ffffff').fontSize(9).font('Helvetica-Bold').text(m.val, 205, coverY, { width: 310 });
    coverY += 24;
  });

  doc.fillColor('#94a3b8').fontSize(8.5).font('Helvetica').text('CONFIDENTIEL — DOCUMENT STRICTEMENT RÉSERVÉ AU BUREAU NATIONAL AJTES', 45, 780, { align: 'center' });

  // ==========================================
  // --- PAGE 2: RESUME EXECUTIF & ARCHITECTURE ---
  // ==========================================
  doc.addPage();
  drawPageHeader('1. Présentation & Architecture');

  let y = 75;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('1.1. RÉSUMÉ EXÉCUTIF DU PROJET', 35, y);
  y += 16;
  doc.fillColor(textDark).fontSize(8.5).font('Helvetica').text(
    'Ce dossier documente la livraison complète de la plateforme numérique de l\'Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité (AJTES). La solution comprend la vitrine institutionnelle bilingue/trilingue, le portail des comités régionaux, le module d\'adhésion et d\'espace membre, le système de dons par Mobile Money (Airtel & Moov Tchad) ainsi que le panneau de contrôle d\'administration sécurisé pour le Bureau Exécutif.',
    35, y, { width: 525, align: 'justify', lineGap: 2 }
  );

  y += 55;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('1.2. STACK TECHNIQUE & ARCHITECTURE APPLICATIVE', 35, y);
  y += 16;

  const stackItems = [
    { title: 'Interface Utilisateur (Frontend)', desc: 'Développé sous React 19 et Vite. Design responsive haut de gamme, composants modulaires vanilla CSS, support multilingue (Français, Anglais, Arabe).' },
    { title: 'API & Serveur Backend', desc: 'Conçu avec Node.js et Express TypeScript. Architecture RESTful sécurisée avec middleware de contrôle des droits et validation de données.' },
    { title: 'Base de Données & ORM', desc: 'Alimenté par Prisma ORM et SQLite. Modélisation relationnelle stricte des utilisateurs, projets, dons, actualités et comités.' },
    { title: 'Génération de Documents PDF', desc: 'Moteur PDFKit embarqué pour l\'édition instantanée des cartes de membres, des reçus de don et des fiches de configuration.' }
  ];

  stackItems.forEach((s) => {
    doc.rect(35, y, 525, 45).fillAndStroke(lightBg, borderGray);
    doc.fillColor(darkSlate).fontSize(9).font('Helvetica-Bold').text(s.title, 45, y + 6);
    doc.fillColor(textDark).fontSize(8).font('Helvetica').text(s.desc, 45, y + 20, { width: 505 });
    y += 51;
  });

  y += 10;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('1.3. SCHÉMA DU FLUX DES DONNÉES', 35, y);
  y += 16;
  doc.rect(35, y, 525, 65).fillAndStroke('#0f172a', borderGray);
  doc.fillColor('#38bdf8').fontSize(8.5).font('Helvetica-Bold').text('[CLIENT BROWSER / MOBILE]', 50, y + 12);
  doc.fillColor('#ffffff').fontSize(8).font('Helvetica').text('➜ Requetes HTTPS / JWT Auth ➜', 180, y + 12);
  doc.fillColor('#34d399').fontSize(8.5).font('Helvetica-Bold').text('[EXPRESS BACKEND SERVER]', 340, y + 12);

  doc.fillColor('#ffffff').fontSize(8).font('Helvetica').text('⬇ Prisma Client Query Engine', 340, y + 30);
  doc.fillColor('#fbbf24').fontSize(8.5).font('Helvetica-Bold').text('[SQLITE DATABASE (dev.db)]', 340, y + 44);

  drawPageFooter(2, 4);

  // ==========================================
  // --- PAGE 3: HABILITATIONS & SÉCURITÉ (RBAC) ---
  // ==========================================
  doc.addPage();
  drawPageHeader('2. Gouvernance & Sécurité');

  y = 75;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('2.1. RÉPERTOIRE OFFICIEL DES COMPTES ADMINISTRATEURS', 35, y);
  y += 16;

  const users = [
    { name: 'Marc Allan Dedjim', role: 'Super Admin (Pouvoir 100%)', email: 'marcallandedjim@gmail.com', phone: '+235 63 00 04 84' },
    { name: 'Betoudjimbaikara Valentin', role: 'Secrétaire Général', email: 'betoudjimbaikaravalentin@gmail.com', phone: '+235 63 37 36 39' },
    { name: 'Souma Banakolong', role: 'Président de l\'Association', email: 'soumabanakolong007@gmail.com', phone: '+237 690 969 577' },
    { name: 'Boikoussigue', role: 'Chargé de Communication', email: 'boikoussiguen@gmail.com', phone: '+235 65 03 18 49' },
    { name: 'Salomon', role: 'Tech Lead & Admin Technique', email: 'salomontchibkere@gmail.com', phone: '+237 655 136 824' }
  ];

  users.forEach((u, idx) => {
    doc.rect(35, y, 525, 42).fillAndStroke(lightBg, borderGray);
    doc.fillColor(darkSlate).fontSize(9).font('Helvetica-Bold').text(`${idx + 1}. ${u.name.toUpperCase()}`, 45, y + 6, { continued: true });
    doc.fillColor(emeraldGreen).font('Helvetica-Bold').text(` — ${u.role}`);
    doc.fillColor(textDark).fontSize(8).font('Helvetica').text(`E-mail : ${u.email}  |  Téléphone : ${u.phone}`, 45, y + 22);
    y += 48;
  });

  y += 10;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('2.2. DISPOSITIFS DE SÉCURITÉ NATIVE', 35, y);
  y += 16;

  const securityFeatures = [
    { title: 'Hachage des Mots de Passe', detail: 'Utilisation de l\'algorithme bcryptjs avec un facteur de salage (cost 10). Aucun mot de passe en clair n\'est stocké.' },
    { title: 'Authentification par Jetons JWT', detail: 'Les requêtes administratives requièrent un en-tête Authorization HTTP bearer contenant un JWT valide.' },
    { title: 'Isolation des Rôles (RBAC)', detail: 'Seuls les utilisateurs dotés des rôles ADMIN ou SUPER_ADMIN peuvent modifier la base de données.' },
    { title: 'Protection XSS & Injection SQL', detail: 'Prisma ORM effectue la paramétrisation automatique des requêtes SQL pour éliminer les failles d\'injection.' }
  ];

  securityFeatures.forEach((sec) => {
    doc.rect(35, y, 525, 38).fillAndStroke('#f1f5f9', borderGray);
    doc.fillColor(darkSlate).fontSize(8.5).font('Helvetica-Bold').text(`• ${sec.title}`, 43, y + 6);
    doc.fillColor(textDark).fontSize(7.5).font('Helvetica').text(sec.detail, 43, y + 20, { width: 505 });
    y += 44;
  });

  drawPageFooter(3, 4);

  // ==========================================
  // --- PAGE 4: GUIDE D'EXPLOITATION & MANUEL COMPACT ---
  // ==========================================
  doc.addPage();
  drawPageHeader('3. Manuel d\'Exploitation');

  y = 75;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('3.1. GUIDE DE MAINTENANCE & DÉPLOIEMENT GITHUB PAGES', 35, y);
  y += 16;

  const steps = [
    { step: '1. Publication du Code', desc: 'Exécutez `git push origin main` depuis le terminal pour envoyer toutes les modifications sur GitHub.' },
    { step: '2. Publication via /docs', desc: 'Sur GitHub (Settings > Pages), sélectionnez Source: "Deploy from a branch", branche: "main", dossier: "/docs".' },
    { step: '3. Mise à Jour de la Base', desc: 'Pour réinitialiser les comptes et données de démonstration, lancez `npm run prisma:seed` dans backend.' },
    { step: '4. Sauvegarde des Données', desc: 'Conservez une copie régulière du fichier `backend/prisma/dev.db` pour prévenir toute perte de données.' }
  ];

  steps.forEach((st) => {
    doc.rect(35, y, 525, 42).fillAndStroke(lightBg, borderGray);
    doc.fillColor(darkSlate).fontSize(9).font('Helvetica-Bold').text(st.step, 45, y + 6);
    doc.fillColor(textDark).fontSize(8).font('Helvetica').text(st.desc, 45, y + 22, { width: 505 });
    y += 48;
  });

  y += 15;
  doc.fillColor(emeraldGreen).fontSize(11).font('Helvetica-Bold').text('3.2. PROCES-VERBAL DE RECETTE & ACCEPTATION FINALE', 35, y);
  y += 16;

  doc.rect(35, y, 525, 170).fillAndStroke('#ffffff', borderGray);

  doc.fillColor(textDark).fontSize(8).font('Helvetica').text(
    'Les soussignés certifient que la plateforme numérique officielle AJTES TCHAD a été développée, testée et livrée conformément aux exigences de l\'association. Le Bureau Exécutif accuse réception des identifiants d\'accès administratifs et du code source.',
    45, y + 12, { width: 505, align: 'justify' }
  );

  doc.moveTo(45, y + 55).lineTo(550, y + 55).strokeColor(borderGray).stroke();

  doc.fillColor(darkSlate).fontSize(8.5).font('Helvetica-Bold').text('POUR LE BUREAU EXÉCUTIF AJTES', 55, y + 70);
  doc.fillColor(darkSlate).fontSize(8.5).font('Helvetica-Bold').text('POUR L\'ÉQUIPE TECHNIQUE', 330, y + 70);

  doc.fillColor(textDark).fontSize(8).font('Helvetica').text('Marc Allan DEDJIM (Super Admin)', 55, y + 90);
  doc.fillColor(textDark).fontSize(8).font('Helvetica').text('Souma BANAKOLONG (Président)', 55, y + 105);

  doc.fillColor(emeraldGreen).fontSize(8.5).font('Helvetica-Bold').text('SALOMON — Tech Lead & Architecte', 330, y + 90);
  doc.fillColor('#64748b').fontSize(8).font('Helvetica').text('Signé à N\'Djamena, République du Tchad', 330, y + 105);
  doc.fillColor(accentGold).fontSize(8).font('Helvetica-Bold').text(`Date : ${new Date().toLocaleDateString('fr-FR')}`, 330, y + 120);

  drawPageFooter(4, 4);

  doc.end();

  return new Promise((resolve) => {
    streamPublic.on('finish', () => {
      console.log('✅ Dossier de Livraison PDF généré en 4 PAGES STRICTES PARFAITES.');
      resolve(true);
    });
  });
}

generateDeliveryPDF().catch(console.error);
