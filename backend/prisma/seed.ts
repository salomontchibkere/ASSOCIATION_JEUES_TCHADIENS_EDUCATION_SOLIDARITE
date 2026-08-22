import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Démarrage du remplissage (seeding) de la base de données AJTES...');

  // 1. Création de l'Administrateur principal
  const adminPassword = await bcrypt.hash('AdminAJTES2026!', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'contact@ajtes.td' },
    update: {},
    create: {
      email: 'contact@ajtes.td',
      password: adminPassword,
      fullName: 'SALOMON (Admin AJTES)',
      role: 'ADMIN',
      phone: '+235 60 00 00 00',
      memberProfile: {
        create: {
          profession: 'Responsable Technique & Maintenance',
          city: "N'Djamena",
          country: 'Tchad',
          status: 'APPROVED',
          bio: 'Responsable technique et administrateur de la plateforme numérique AJTES.',
        },
      },
    },
  });
  console.log('✅ Compte Administrateur initialisé:', admin.email);

  // 2. Création des Projets Phares de l'Association
  await prisma.project.createMany({
    data: [
      {
        titleFr: 'Construction du bureau administratif du CEG de Nangassou',
        summaryFr: 'Construction d\'un bureau administratif de deux chambres au niveau du CEG de Nangassou.',
        descriptionFr: 'En 2026, l\'AJTES a réalisé la construction d\'un bâtiment administratif moderne de deux pièces pour équiper le Collège d\'Enseignement Général (CEG) de Nangassou, offrant de meilleures conditions de travail au corps enseignant.',
        status: 'COMPLETED',
        year: 2026,
        location: 'Nangassou, Tchad',
        budget: 3500000,
      },
      {
        titleFr: 'Distribution de fournitures scolaires au CEG de Nangassou',
        summaryFr: 'Distribution gratuite de kits scolaires complets aux élèves du CEG de Nangassou.',
        descriptionFr: 'Actions de solidarité menées en 2023 pour encourager la scolarisation des jeunes ruraux à travers la dotation de cahiers, stylos et manuels pédagogiques.',
        status: 'COMPLETED',
        year: 2023,
        location: 'Nangassou, Tchad',
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
        titleFr: 'Inauguration officielle du nouveau bureau administratif au CEG de Nangassou',
        contentFr: 'L\'Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité (AJTES) a inauguré avec succès le nouveau bureau administratif de deux chambres construit pour le CEG de Nangassou. Une grande avancée pour la jeunesse locale !',
        category: 'ACTUALITE',
        published: true,
        authorId: admin.id,
      },
      {
        titleFr: 'Lancement du nouveau site officiel et de la plateforme membre AJTES',
        contentFr: 'Nous sommes fiers de vous présenter la vitrine numérique officielle de l\'AJTES. Rejoignez la communauté, devenez membre ou faites un don en ligne !',
        category: 'ANNONCE',
        published: true,
        authorId: admin.id,
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
