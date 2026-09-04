import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Démarrage du remplissage (seeding) de la base de données AJTES...');

  // 1. Création des Administrateurs & Bureau Exécutif
  const executiveUsers = [
    {
      email: 'salomontchibkere@gmail.com',
      passwordRaw: 'SalomonAJTES2026!',
      fullName: 'SALOMON (Tech Lead & Super Admin)',
      role: 'ADMIN',
      phone: '+237655136824',
      profession: 'Responsable Technique & Maintenance',
      bio: 'Responsable technique et administrateur de la plateforme numérique AJTES.',
    },
    {
      email: 'contact@ajtes.td',
      passwordRaw: 'AdminAJTES2026!',
      fullName: 'SALOMON (Admin AJTES)',
      role: 'ADMIN',
      phone: '+237655136824',
      profession: 'Administration Officielle AJTES',
      bio: 'Compte institutionnel d\'administration AJTES.',
    },
    {
      email: 'marcallandedjim@gmail.com',
      passwordRaw: 'Marc123@#',
      fullName: 'Marc Allan Dedjim (Super Admin)',
      role: 'ADMIN',
      phone: '63000484',
      profession: 'Administrateur Principal (Pouvoir Complet)',
      bio: 'Administrateur général de la plateforme AJTES avec privilèges complets (100%).',
    },
    {
      email: 'betoudjimbaikaravalentin@gmail.com',
      passwordRaw: 'Tchad222',
      fullName: 'Betoudjimbaikara Valentin (Secrétaire Général)',
      role: 'ADMIN',
      phone: '63373639',
      profession: 'Secrétaire Général (SG)',
      bio: 'Secrétaire Général de l\'AJTES — Gestion des registres et de l\'administration.',
    },
    {
      email: 'soumabanakolong007@gmail.com',
      passwordRaw: 'Souma123@#',
      fullName: 'Souma Banakolong (Président)',
      role: 'ADMIN',
      phone: '+237690969577',
      profession: 'Président de l\'Association AJTES',
      bio: 'Président de l\'AJTES — Supervision générale et validation des adhésions.',
    },
    {
      email: 'boikoussiguen@gmail.com',
      passwordRaw: 'Boikou123@#',
      fullName: 'Boikoussigue (Chargé de Communication)',
      role: 'ADMIN',
      phone: '65031849',
      profession: 'Chargé de Communication & Secrétaire',
      bio: 'Chargé de communication — Gestion des contenus, médias et actualités.',
    },
  ];

  let adminRefId = '';

  for (const userConfig of executiveUsers) {
    const hashedPassword = await bcrypt.hash(userConfig.passwordRaw, 10);
    const user = await prisma.user.upsert({
      where: { email: userConfig.email },
      update: {
        password: hashedPassword,
        fullName: userConfig.fullName,
        role: userConfig.role,
        phone: userConfig.phone,
      },
      create: {
        email: userConfig.email,
        password: hashedPassword,
        fullName: userConfig.fullName,
        role: userConfig.role,
        phone: userConfig.phone,
        memberProfile: {
          create: {
            profession: userConfig.profession,
            city: "N'Djamena",
            country: 'Tchad',
            status: 'APPROVED',
            bio: userConfig.bio,
          },
        },
      },
    });

    if (userConfig.email === 'salomontchibkere@gmail.com' || !adminRefId) {
      adminRefId = user.id;
    }
    console.log(`✅ Compte Administrateur initialisé: ${user.fullName} (${user.email})`);
  }

  // 2. Création des Projets Phares de l'Association
  await prisma.project.createMany({
    data: [
      {
        titleFr: 'Construction du bureau administratif du CEG',
        summaryFr: 'Construction d\'un bureau administratif de deux chambres au niveau du CEG.',
        descriptionFr: 'En 2026, l\'AJTES a réalisé la construction d\'un bâtiment administratif moderne de deux pièces pour équiper le Collège d\'Enseignement Général (CEG) de Tchad, offrant de meilleures conditions de travail au corps enseignant.',
        status: 'COMPLETED',
        year: 2026,
        location: 'Tchad',
        budget: 3500000,
      },
      {
        titleFr: 'Distribution de fournitures scolaires au CEG',
        summaryFr: 'Distribution gratuite de kits scolaires complets aux élèves du CEG.',
        descriptionFr: 'Actions de solidarité menées en 2023 pour encourager la scolarisation des jeunes ruraux à travers la dotation de cahiers, stylos et manuels pédagogiques.',
        status: 'COMPLETED',
        year: 2023,
        location: 'Tchad',
        budget: 1200000,
      },
      {
        titleFr: 'Campagne de sensibilisation à l\'éco-citoyenneté et à l\'éducation',
        summaryFr: 'Lancement des activités fondatrices de sensibilisation environnementale et éducative.',
        descriptionFr: 'Activités fondatrices démarrées dès la création de l\'association en 2022 pour impliquer la jeunesse tchadienne dans la protection de son cadre de vie.',
        status: 'COMPLETED',
        year: 2022,
        location: 'Tchad',
        budget: 800000,
      },
    ],
  });
  console.log('✅ Projets et réalisations initialisés.');

  // 3. Création des Actualités initiales
  await prisma.news.createMany({
    data: [
      {
        titleFr: 'Inauguration officielle du nouveau bureau administratif au CEG',
        contentFr: 'L\'Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité (AJTES) a inauguré avec succès le nouveau bureau administratif de deux chambres construit pour le CEG. Une grande avancée pour la jeunesse locale !',
        category: 'ACTUALITE',
        published: true,
        authorId: adminRefId,
      },
      {
        titleFr: 'Lancement du nouveau site officiel et de la plateforme membre AJTES',
        contentFr: 'Nous sommes fiers de vous présenter la vitrine numérique officielle de l\'AJTES. Rejoignez la communauté, devenez membre ou faites un don en ligne !',
        category: 'ANNONCE',
        published: true,
        authorId: adminRefId,
      },
    ],
  });
  console.log('✅ Actualités initialisées.');

  // 4. Création des Comités Régionaux
  await prisma.committee.createMany({
    data: [
      {
        nameFr: 'Comité Éducation & Soutien Scolaire',
        descriptionFr: 'Organise la distribution des fournitures, le parrainage des élèves et l\'appui aux établissements scolaires.',
        leaderName: 'Comité Central',
        leaderRole: 'Coordinateur Éducation',
      },
      {
        nameFr: 'Comité Solidarité & Action Sociale',
        descriptionFr: 'Coordonne l\'aide d\'urgence, l\'accompagnement des jeunes vulnérables et les projets communautaires.',
        leaderName: 'Comité Central',
        leaderRole: 'Coordinateur Social',
      },
    ],
  });
  console.log('✅ Comités initialisés.');

  console.log('🎉 Seeding terminé avec succès !');
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
