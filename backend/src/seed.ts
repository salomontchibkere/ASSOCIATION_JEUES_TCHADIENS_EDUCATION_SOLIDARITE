import bcrypt from 'bcryptjs';
import { db, User, MemberProfile, Project, News, Committee } from './db.js';
import { cryptoUUID } from './utils/uuid.js';

export async function seedInitialData() {
  if (db.users.length > 0) {
    console.log('ℹ️ La base de données contient déjà des données.');
    return;
  }

  console.log('🌱 Démarrage de l\'initialisation des données AJTES...');

  const now = new Date().toISOString();

  // 1. Création de l'Administrateur principal (Salomon - Super Admin)
  const adminPassword = await bcrypt.hash('SALOMON123@#', 10);
  const adminUserId = cryptoUUID();
  const adminProfileId = cryptoUUID();

  const adminProfile: MemberProfile = {
    id: adminProfileId,
    userId: adminUserId,
    profession: 'Responsable Technique & Maintenance',
    city: "N'Djamena",
    country: 'Tchad',
    bio: 'Super Administrateur et Responsable Technique du site officiel AJTES.',
    status: 'APPROVED',
    createdAt: now,
    updatedAt: now,
  };

  const adminUser: User = {
    id: adminUserId,
    email: 'salomontchibkere@gmail.com',
    password: adminPassword,
    fullName: 'SALOMON (Super Admin AJTES)',
    role: 'ADMIN',
    phone: '655136824',
    isActive: true,
    createdAt: now,
    updatedAt: now,
    memberProfile: adminProfile,
  };

  db.users.push(adminUser);
  db.memberProfiles.push(adminProfile);

  // 2. Projets et Réalisations depuis le Cahier des Charges (2022, 2023, 2026)
  const initialProjects: Project[] = [
    {
      id: cryptoUUID(),
      titleFr: 'Construction du bureau administratif du CEG de Nangassou',
      summaryFr: 'Construction d\'un bureau administratif de deux chambres au niveau du CEG de Nangassou.',
      descriptionFr: 'En 2026, l\'AJTES a réalisé la construction d\'un bâtiment administratif moderne de deux pièces pour équiper le Collège d\'Enseignement Général (CEG) de Nangassou, offrant de meilleures conditions de travail au corps enseignant.',
      status: 'COMPLETED',
      year: 2026,
      location: 'Nangassou, Tchad',
      budget: 3500000,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cryptoUUID(),
      titleFr: 'Distribution de fournitures scolaires aux élèves du CEG de Nangassou',
      summaryFr: 'Distribution gratuite de kits scolaires complets aux élèves du CEG de Nangassou.',
      descriptionFr: 'Actions de solidarité menées en 2023 pour encourager la scolarisation des jeunes ruraux à travers la dotation de cahiers, stylos et manuels pédagogiques.',
      status: 'COMPLETED',
      year: 2023,
      location: 'Nangassou, Tchad',
      budget: 1200000,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cryptoUUID(),
      titleFr: 'Lancement des activités fondatrices d\'éducation et de solidarité',
      summaryFr: 'Création de l\'association et lancement des premières activités de sensibilisation.',
      descriptionFr: 'Activités fondatrices démarrées dès la création de l\'association en 2022 pour impliquer la jeunesse tchadienne dans la protection de son cadre de vie et la promotion de l\'éducation.',
      status: 'COMPLETED',
      year: 2022,
      location: 'Tchad',
      budget: 800000,
      createdAt: now,
      updatedAt: now,
    },
  ];

  db.projects.push(...initialProjects);

  // 3. Actualités
  const initialNews: News[] = [
    {
      id: cryptoUUID(),
      titleFr: 'Inauguration officielle du bureau administratif du CEG de Nangassou',
      contentFr: 'L\'Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité (AJTES) annonce la finalisation et l\'inauguration du nouveau bureau administratif de deux chambres au CEG de Nangassou. Un grand pas vers de meilleures conditions d\'apprentissage !',
      category: 'ACTUALITE',
      published: true,
      authorId: adminUserId,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: cryptoUUID(),
      titleFr: 'Ouverture de la plateforme numérique officielle AJTES',
      contentFr: 'Découvrez notre nouvelle vitrine interactive ! Vous pouvez désormais adhérer en ligne, soutenir nos projets éducatifs par des dons ou contacter directement nos équipes.',
      category: 'ANNONCE',
      published: true,
      authorId: adminUserId,
      createdAt: now,
      updatedAt: now,
    },
  ];

  db.news.push(...initialNews);

  // 4. Comités
  const initialCommittees: Committee[] = [
    {
      id: cryptoUUID(),
      nameFr: 'Comité Éducation & Soutien Pédagogique',
      descriptionFr: 'Supervise la distribution des fournitures, le soutien aux écoles et les initiatives d\'accompagnement scolaire.',
      leaderName: 'Bureau Exécutif',
      leaderRole: 'Coordinateur Éducation',
      createdAt: now,
    },
    {
      id: cryptoUUID(),
      nameFr: 'Comité Solidarité & Action Sociale',
      descriptionFr: 'Gère les projets humanitaires, l\'aide d\'urgence et l\'engagement auprès des communautés vulnérables.',
      leaderName: 'Bureau Exécutif',
      leaderRole: 'Coordinateur Social',
      createdAt: now,
    },
  ];

  db.committees.push(...initialCommittees);

  db.saveDb();
  console.log('🎉 Initialisation des données terminée avec succès !');
}
