import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

async function generateConfigPDF() {
  console.log('📄 Génération de la Fiche Officielle de Configuration (1 Page Strict)...');

  // Set margin to 0 and handle layout manually to guarantee 1 page
  const doc = new PDFDocument({
    size: 'A4',
    margin: 0
  });

  const publicDocPath = path.join(process.cwd(), '../frontend/public/documents/Fiche_Configuration_Acces_AJTES.pdf');
  const rootDocPath = path.join(process.cwd(), '../Fiche_Configuration_Acces_AJTES_2026.pdf');

  const streamRoot = fs.createWriteStream(rootDocPath);
  const streamPublic = fs.createWriteStream(publicDocPath);

  doc.pipe(streamRoot);
  doc.pipe(streamPublic);

  // Colors
  const darkSlate = '#0f172a';
  const emeraldGreen = '#007A3D';
  const accentGold = '#D97706';
  const lightBg = '#f8fafc';
  const borderGray = '#cbd5e1';

  // --- 1. HEADER BANNER ---
  doc.rect(0, 0, 595.28, 70).fill(darkSlate);
  
  doc.fillColor(emeraldGreen).fontSize(18).font('Helvetica-Bold').text('AJTES TCHAD', 35, 16);
  doc.fillColor('#94a3b8').fontSize(8.5).font('Helvetica').text('Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité', 35, 38);
  doc.fillColor(accentGold).fontSize(7.5).font('Helvetica-Bold').text('SIÈGE SOCIAL : N\'DJAMENA, RÉPUBLIQUE DU TCHAD — STATUTS 2022', 35, 52);

  doc.fillColor('#ffffff').fontSize(11).font('Helvetica-Bold').text('FICHE DE CONFIGURATION', 370, 20, { align: 'right' });
  doc.fillColor(accentGold).fontSize(9).font('Helvetica-Bold').text('ACCÈS & DROITS D\'ADMINISTRATION', 370, 36, { align: 'right' });

  // --- 2. TITLE BAR ---
  doc.fillColor(darkSlate).fontSize(12).font('Helvetica-Bold').text('FICHE OFFICIELLE DE CONFIGURATION DES ACCÈS & RÔLES (2026)', 35, 82);
  doc.fillColor('#64748b').fontSize(8).font('Helvetica').text(`Document généré le : ${new Date().toLocaleDateString('fr-FR')} — Classification : CONFIDENTIEL / BUREAU EXÉCUTIF`, 35, 97);

  doc.moveTo(35, 108).lineTo(560, 108).strokeColor(borderGray).stroke();

  // --- 3. SECTION 1: CADRE OFFICIEL ---
  doc.fillColor(emeraldGreen).fontSize(10).font('Helvetica-Bold').text('1. CADRE GOUVERNANCE & ADMINISTRATION', 35, 114);
  doc.fillColor('#334155').fontSize(8.5).font('Helvetica').text(
    'Conformément aux directives du Bureau National et aux Statuts de l\'AJTES, cette fiche recense les identifiants officiels, rôles d\'habilitation et privilèges d\'administration attribués aux membres accrédités du Bureau Exécutif pour la gestion de la plateforme numérique (Site officiel, Espace Membres, Base de données Prisma et Services PDF).',
    35, 128, { width: 525, align: 'justify' }
  );

  // --- 4. SECTION 2: COMPTES ADMINISTRATEURS (5 CARDS) ---
  doc.fillColor(emeraldGreen).fontSize(10).font('Helvetica-Bold').text('2. REPERTOIRE DES COMPTES ADMINISTRATEURS ACCRÉDITÉS', 35, 166);

  const users = [
    {
      num: '1',
      name: 'Marc Allan Dedjim',
      role: 'Super Administrateur (Pouvoir Complet 100%)',
      email: 'marcallandedjim@gmail.com',
      phone: '+235 63 00 04 84',
      pass: 'Marc123@#',
      powers: 'Contrôle total du site, de la base de données, des comptes et des publications.'
    },
    {
      num: '2',
      name: 'Betoudjimbaikara Valentin',
      role: 'Secrétaire Général (SG)',
      email: 'betoudjimbaikaravalentin@gmail.com',
      phone: '+235 63 37 36 39',
      pass: 'Tchad222',
      powers: 'Gestion du registre des membres, secrétariat, documents et procès-verbaux.'
    },
    {
      num: '3',
      name: 'Souma Banakolong',
      role: 'Président de l\'Association AJTES',
      email: 'soumabanakolong007@gmail.com',
      phone: '+237 690 969 577',
      pass: 'Souma123@#',
      powers: 'Supervision générale, consultation des rapports et validation finale des adhésions.'
    },
    {
      num: '4',
      name: 'Boikoussigue',
      role: 'Chargé de Communication & Secrétaire',
      email: 'boikoussiguen@gmail.com',
      phone: '+235 65 03 18 49',
      pass: 'Boikou123@#',
      powers: 'Rédaction, édition et publication des projets, actualités, photos et vidéos.'
    },
    {
      num: '5',
      name: 'Salomon',
      role: 'Responsable Technique & Super Admin (100%)',
      email: 'salomontchibkere@gmail.com / contact@ajtes.td',
      phone: '+237 655 136 824',
      pass: 'Défini (AdminAJTES2026!)',
      powers: 'Supervision technique, architecture Prisma, maintenance cloud et sécurité.'
    }
  ];

  let currentY = 180;

  users.forEach((u) => {
    // Card background box
    doc.rect(35, currentY, 525, 55).fillAndStroke(lightBg, borderGray);

    doc.fillColor(darkSlate).fontSize(9).font('Helvetica-Bold').text(`${u.num}. ${u.name.toUpperCase()} — `, 43, currentY + 5, { continued: true });
    doc.fillColor(emeraldGreen).font('Helvetica-Bold').text(u.role);

    doc.fontSize(8).font('Helvetica').fillColor('#475569');
    doc.text(`Email : `, 43, currentY + 20, { continued: true });
    doc.fillColor(darkSlate).font('Helvetica-Bold').text(u.email, { continued: true });
    doc.fillColor('#475569').font('Helvetica').text(`  |  Tél : `, { continued: true });
    doc.fillColor(darkSlate).font('Helvetica-Bold').text(u.phone, { continued: true });
    doc.fillColor('#475569').font('Helvetica').text(`  |  Mdp : `, { continued: true });
    doc.fillColor('#b91c1c').font('Helvetica-Bold').text(u.pass);

    doc.fillColor('#334155').fontSize(7.5).font('Helvetica-Oblique').text(`Attributions : ${u.powers}`, 43, currentY + 35, { width: 510 });

    currentY += 60;
  });

  // --- 5. SECTION 3: SÉCURITÉ & AUTHENTIFICATION ---
  currentY += 5;
  doc.fillColor(emeraldGreen).fontSize(10).font('Helvetica-Bold').text('3. ARCHITECTURE DE SÉCURITÉ & AUTHENTIFICATION', 35, currentY);
  
  currentY += 15;
  doc.fillColor('#334155').fontSize(8).font('Helvetica').text(
    '• Cryptage des Mots de Passe : Tous les mots de passe sont hachés via bcryptjs (Cost Factor 10).\n' +
    '• Sessions & Tokens JWT : Les sessions sont sécurisées par jetons cryptographiques signés JWT.\n' +
    '• Accès Rapide Accrédité : Le tableau de bord Admin dispose d\'une console de connexion directe par rôle.\n' +
    '• Contrôle par Rôles (RBAC) : Seuls les utilisateurs autorisés avec rôle ADMIN/SUPER_ADMIN ont accès à la console.',
    35, currentY, { width: 525, lineGap: 2 }
  );

  // --- 6. SIGNATURE BLOCK ---
  currentY += 52;
  doc.moveTo(35, currentY).lineTo(560, currentY).strokeColor(borderGray).stroke();
  
  currentY += 8;
  doc.fillColor(darkSlate).fontSize(9).font('Helvetica-Bold').text('POUR LE BUREAU EXÉCUTIF AJTES', 35, currentY);
  doc.fillColor(darkSlate).fontSize(9).font('Helvetica-Bold').text('RESPONSABLE TECHNIQUE & MAINTENANCE', 350, currentY, { align: 'right' });

  currentY += 14;
  doc.fillColor('#64748b').fontSize(8).font('Helvetica').text('Signé à N\'Djamena, République du Tchad', 35, currentY);
  doc.fillColor(emeraldGreen).fontSize(8.5).font('Helvetica-Bold').text('SALOMON — Tech Lead AJTES', 350, currentY, { align: 'right' });

  // --- 7. FOOTER BANNER ---
  doc.rect(0, 796, 595.28, 45).fill(darkSlate);
  doc.fillColor('#94a3b8').fontSize(7.5).font('Helvetica').text(
    'Fiche de Configuration des Accès Officielle — Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité (AJTES)\n' +
    'Siège Social: N\'Djamena, Tchad — Email: contact@ajtes.td — Site Officiel: http://localhost:5173/',
    35, 808, { align: 'center' }
  );

  doc.end();

  return new Promise((resolve) => {
    streamPublic.on('finish', () => {
      console.log('✅ PDF de configuration généré en 1 PAGE STRICTE.');
      resolve(true);
    });
  });
}

generateConfigPDF().catch(console.error);
