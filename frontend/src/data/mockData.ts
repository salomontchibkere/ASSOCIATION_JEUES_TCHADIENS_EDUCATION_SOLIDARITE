import type { Project, NewsArticle, Event, Donation, Committee, Partner, MediaItem, OfficialDocument, User } from '../types';

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: {
      fr: "Construction du bureau administratif au CEG de Nangassou",
      en: "Construction of the Administrative Office at CEG Nangassou",
      ar: "بناء المكتب الإداري في إعدادية نانغاسو"
    },
    description: {
      fr: "Construction d'un bâtiment administratif moderne de deux chambres pour améliorer les conditions de travail des enseignants et la gestion du Collège d'Enseignement Général (CEG) de Nangassou.",
      en: "Construction of a modern two-room administrative building to improve working conditions for teachers and management at CEG Nangassou.",
      ar: "بناء مبنى إداري حديث يتكون من غرفتين لتحسين ظروف عمل المعلمين وإدارة الإعدادية."
    },
    category: 'education',
    location: 'Nangassou, Tchad',
    startDate: '2026-01-10',
    endDate: '2026-06-30',
    objective: {
      fr: "Doter le CEG de Nangassou d'infrastructures administratives décentes et fonctionnelles.",
      en: "Provide CEG Nangassou with decent and functional administrative infrastructure.",
      ar: "تزويد إعدادية نانغاسو ببنية تحتية إدارية لائقة وفعالة."
    },
    targetBudget: 6500000,
    raisedBudget: 6500000,
    beneficiariesCount: 450,
    status: 'realise',
    imageUrl: './images/IMG-20260813-WA0106.jpg',
    results: {
      fr: "Bâtiment livré et inauguré avec succès. Deux bureaux équipés pour l'administration du collège.",
      en: "Building successfully delivered and inaugurated. Two fully equipped offices for school administration.",
      ar: "تم تسليم المبنى وافتتاحه بنجاح. مكتبان مجهزان لإدارة الإعدادية."
    },
    featured: true,
    year: 2026
  },
  {
    id: 'proj-2',
    title: {
      fr: "Distribution de fournitures scolaires au CEG de Nangassou",
      en: "Distribution of School Supplies at CEG Nangassou",
      ar: "توزيع المستلزمات المدرسية في إعدادية نانغاسو"
    },
    description: {
      fr: "Octroi de kits scolaires complets (cahiers, stylos, livres, règles, sacs) à plus de 300 élèves vulnérables pour favoriser la scolarisation et prévenir l'abandon scolaire.",
      en: "Distribution of complete school kits (notebooks, pens, books, backpacks) to over 300 vulnerable students to encourage schooling and prevent dropout.",
      ar: "تقديم حقائب مدرسية كاملة لأكثر من 300 طالب من العائلات المتعثرة لتعزيز التعليم ورعاية الطلاب."
    },
    category: 'education',
    location: 'Nangassou, Tchad',
    startDate: '2023-09-15',
    endDate: '2023-10-30',
    objective: {
      fr: "Soutenir l'accès égalitaire à l'éducation pour les jeunes défavorisés.",
      en: "Support equal access to education for underprivileged youth.",
      ar: "دعم الوصول المساواة للتعليم للشباب الفئات الهشة."
    },
    targetBudget: 2500000,
    raisedBudget: 2500000,
    beneficiariesCount: 320,
    status: 'realise',
    imageUrl: './images/IMG-20260813-WA0142.jpg',
    results: {
      fr: "320 élèves équipés en kits scolaires pour toute l'année académique 2023-2024.",
      en: "320 students equipped with school supplies for the full academic year 2023-2024.",
      ar: "تم تزويد 320 طالباً بالأدوات المدرسية للعام الدراسي الكامل 2023-2024."
    },
    featured: true,
    year: 2023
  },
  {
    id: 'proj-3',
    title: {
      fr: "Campagne de reboisement et d'éco-citoyenneté en milieu scolaire",
      en: "Reforestation and Eco-Citizenship School Campaign",
      ar: "حملة التشجير والمواطنة البيئية في المدارس"
    },
    description: {
      fr: "Plantation de 500 arbres d'ombrage et fruitiers dans 5 établissements scolaires et ateliers de sensibilisation à la désertification et protection de l'environnement.",
      en: "Planting of 500 shade and fruit trees across 5 schools alongside awareness workshops on desertification and environmental protection.",
      ar: "غرس 500 شجرة مظلة وفاكهة في 5 مدارس وتنظيم ورش توعية بحماية البيئة ومكافحة التصحر."
    },
    category: 'environnement',
    location: 'N\'Djamena & Mandoul, Tchad',
    startDate: '2026-07-01',
    endDate: '2026-11-30',
    objective: {
      fr: "Lutter contre l'avancée du désert et inculquer la conscience écologique à la jeunesse.",
      en: "Combat desertification and foster ecological awareness among young people.",
      ar: "مكافحة التصحر وغرس الوعي البيئي لدى الشباب."
    },
    targetBudget: 4000000,
    raisedBudget: 2800000,
    beneficiariesCount: 1500,
    status: 'en_cours',
    imageUrl: './images/IMG-20260813-WA0113.jpg',
    featured: true,
    year: 2026
  },
  {
    id: 'proj-4',
    title: {
      fr: "Ateliers d'Orientation & Soutien Scolaire",
      en: "Academic Guidance & Tutoring Workshops",
      ar: "ورش التوجيه والدعم المدرسي"
    },
    description: {
      fr: "Organisation de sessions gratuites de soutien scolaire en mathématiques, sciences et français, couplées à un accompagnement d'orientation pour les candidats aux examens.",
      en: "Organization of free tutoring in math, science, and French, alongside academic orientation sessions for exam candidates.",
      ar: "تنظيم جلسات مجانية للدعم المدرسي والتوجيه الأكاديمي للطلاب المقبلين على الامتحانات."
    },
    category: 'education',
    location: 'N\'Djamena & Nangassou',
    startDate: '2026-10-01',
    endDate: '2027-05-30',
    objective: {
      fr: "Améliorer les taux de réussite aux examens nationaux et concours.",
      en: "Improve success rates in national examinations.",
      ar: "تحسين نسب النجاح في الامتحانات والمسابقات الوطنية."
    },
    targetBudget: 3500000,
    raisedBudget: 1200000,
    beneficiariesCount: 800,
    status: 'en_projet',
    imageUrl: './images/IMG-20260813-WA0129.jpg',
    featured: false,
    year: 2026
  }
];

export const initialNews: NewsArticle[] = [];

export const initialEvents: Event[] = [
  {
    id: 'evt-1',
    title: {
      fr: "Forum de la Jeunesse Tchadienne pour l'Éducation et le Développement",
      en: "Chadian Youth Forum on Education & Development",
      ar: "منتدى الشباب التشادي للتعليم والتنمية"
    },
    description: {
      fr: "Grand rassemblement annuel des membres et partenaires de l'AJTES pour débattre des défis éducatifs et planifier les actions de terrain 2027.",
      en: "Annual gathering of AJTES members and partners to discuss educational challenges and plan 2027 field actions.",
      ar: "التجمع السنوي الكبير لأعضاء الجمعية والشركاء لمناقشة تحديات التعليم وتخطيط أنشطة 2027."
    },
    date: '2026-10-15',
    time: '09:00 - 16:30',
    location: 'Palais des Arts et de la Culture, N\'Djamena',
    organizer: 'Bureau National AJTES',
    imageUrl: './images/IMG-20260813-WA0130.jpg',
    maxAttendees: 200,
    registeredCount: 84
  },
  {
    id: 'evt-2',
    title: {
      fr: "Journée Verte : Grand Salongo et Reboisement Communautaire",
      en: "Green Day: Community Cleaning & Reforestation",
      ar: "اليوم الأخضر: حملة النظافة والتشجير المجتمعي"
    },
    description: {
      fr: "Action collective de salubrité et de plantation d'arbres réunissant les volontaires de l'AJTES et les habitants du quartier.",
      en: "Collective sanitation and tree-planting drive reuniting AJTES volunteers and neighbourhood residents.",
      ar: "حملة جماعية للنظافة وغرس الأشجار تجمع متطوعي الجمعية وسكان الحي."
    },
    date: '2026-09-05',
    time: '07:30 - 12:00',
    location: 'Quartier Nangassou & CEG, Tchad',
    organizer: 'Commission Environnement AJTES',
    imageUrl: './images/IMG-20260813-WA0132.jpg',
    maxAttendees: 100,
    registeredCount: 62
  }
];

export const initialOfficialDocuments: OfficialDocument[] = [
  {
    id: 'doc-statuts',
    title: {
      fr: "Statuts de l'Association AJTES",
      en: "Statutes of the AJTES Association",
      ar: "النظام الأساسي لجمعية تأجتس"
    },
    type: 'statuts',
    description: {
      fr: "Texte officiel fondateur définissant la création en 2022, les objectifs, l'organisation, les organes de gouvernance et les règles de fonctionnement de l'AJTES.",
      en: "Official founding document establishing the creation in 2022, objectives, governance structure, and operating rules of AJTES.",
      ar: "الوثيقة التأسيسية الرسمية التي تحدد التأسيس في 2022 والأهداف والأجهزة الإدارية وقواعد عمل الجمعية."
    },
    lastUpdated: '2022-04-12',
    contentMarkdown: {
      fr: `### STATUTS DE L'ASSOCIATION DES JEUNES TCHADIENS POUR L’ÉDUCATION ET LA SOLIDARITÉ (AJTES)

**TITRE I : CRÉATION, DÉNOMINATION, SIÈGE ET DURÉE**
- **Article 1 :** Il est formé entre les adhérents aux présents statuts une association régie par la législation en vigueur en République du Tchad, dénommée *Association des Jeunes Tchadiens pour l’Éducation et la Solidarité*, en sigle **AJTES**.
- **Article 2 :** L'association a été créée en l'an **2022**. Sa durée est illimitée.
- **Article 3 :** Le siège social est établi à N'Djamena, Tchad, avec possibilité d'antennes régionales et comités locaux.

**TITRE II : OBJECTIFS ET DOMAINES D'ACTION**
- **Article 4 :** L'AJTES a pour mission de contribuer au développement et à l'épanouissement de la jeunesse tchadienne.
- **Article 5 :** Ses domaines d'intervention prioritaires sont :
  1. Éducation et promotion de la scolarisation.
  2. Construction et rénovation d'infrastructures scolaires.
  3. Actions environnementales et éco-citoyennes (reboisement, salubrité).
  4. Entraide, solidarité et intégration des jeunes défavorisés.`,
      en: `### STATUTES OF THE ASSOCIATION OF YOUNG CHADIANS FOR EDUCATION AND SOLIDARITY (AJTES)

**TITLE I: CREATION, NAME, HEADQUARTERS AND DURATION**
- **Article 1:** An association governed by Chadian law is hereby established, named *Association des Jeunes Tchadiens pour l’Éducation et la Solidarité* (**AJTES**).
- **Article 2:** The association was created in **2022**. Its duration is unlimited.
- **Article 3:** Headquarters are located in N'Djamena, Chad.`,
      ar: `### النظام الأساسي لجمعية الشباب التشاديين من أجل التعليم والتضامن (AJTES)

**الباب الأول: التأسيس والتسمية والمقر**
- **المادة 1:** تؤسس بين الأعضاء جمعية خاضعة للقوانين النافذة في جمهورية تشاد باسم *جمعية الشباب التشاديين من أجل التعليم والتضامن* (**AJTES**).
- **المادة 2:** تأسست الجمعية عام **2022** ومدتها غير محدودة.`
    }
  },
  {
    id: 'doc-reglement',
    title: {
      fr: "Règlement Intérieur Officiel",
      en: "Official Internal Regulations",
      ar: "النظام الداخلي الرسمي"
    },
    type: 'reglement_interieur',
    description: {
      fr: "Règles détaillées de fonctionnement interne, droits et devoirs des membres, procédures de vote, gestion financière et règles disciplinaires.",
      en: "Detailed rules for internal operation, member rights and duties, voting procedures, and financial management.",
      ar: "القواعد التفصيلية للعمل الداخلي وحقوق وواجبات الأعضاء والإجراءات المالية والإنضباطية."
    },
    lastUpdated: '2022-05-01',
    contentMarkdown: {
      fr: `### RÈGLEMENT INTÉRIEUR DE L'AJTES

**CHAPITRE I : DROITS ET DEVOIRS DES MEMBRES**
- **Article 1 :** Tout membre actif a le droit de participer aux Assemblées Générales, d'exprimer son opinion et de participer aux votes.
- **Article 2 :** Les membres s'engagent à respecter les valeurs fondamentales de l'AJTES : Éducation, Solidarité, Engagement, Transparence et Respect.
- **Article 3 :** Chaque membre doit s'acquitter régulièrement de sa cotisation associative.

**CHAPITRE II : FONCTIONNEMENT DES COMITÉS ET COMMISSIONS**
- **Article 4 :** Les comités régionaux et commissions thématiques travaillent sous la supervision du Bureau National.
- **Article 5 :** Le responsable technique et maintenance (Salomon) assure la gestion des outils numériques et des données.

**CHAPITRE III : GESTION DES FONDS ET DONS**
- **Article 6 :** Tous les dons reçus (Airtel Money, Moov Africa, virement bancaire) sont affectés en toute transparence aux projets désignés.`,
      en: `### INTERNAL REGULATIONS OF AJTES

**CHAPTER I: MEMBER RIGHTS & RESPONSIBILITIES**
- **Article 1:** Every active member has the right to attend meetings and vote.
- **Article 2:** Members commit to uphold values of Education, Solidarity, Integrity and Transparency.`,
      ar: `### النظام الداخلي لجمعية تأجتس

**الفصل الأول: حقوق وواجبات الأعضاء**
- **المادة 1:** يحق لكل عضو فعال المشاركة في الجمعيات العمومية والتصويت.
- **المادة 2:** يلتزم الأعضاء بقيم التعليم والتضامن والشفافية.`
    }
  }
];

export const initialMedia: MediaItem[] = [
  {
    id: 'media-video-tutorial-salomon',
    title: {
      fr: "Tutoriel Officiel : Inscription, Connexion & Guide d'utilisation (Présenté par Salomon — Resp. Technique AJTES)",
      en: "Official Platform Guide & Tutorial (Presented by Salomon - AJTES Tech Lead)",
      ar: "الشرح الرسمي للموقع واستخدامه (تقديم سالومون - المسؤول التقني)"
    },
    type: 'video',
    url: './images/tutoriel_demo_salomon_ajtes.gif',
    thumbnailUrl: './images/IMG_20250119_163228_691.jpg',
    year: 2026,
    category: 'Tutoriels & Démonstrations',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-1',
    title: {
      fr: "Cérémonie officielle d'inauguration du bureau administratif",
      en: "Cérémonie officielle d'inauguration du bureau administratif",
      ar: "Cérémonie officielle d'inauguration du bureau administratif"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0083.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-2',
    title: {
      fr: "Vue du chantier et maçonnerie du bureau du CEG",
      en: "Vue du chantier et maçonnerie du bureau du CEG",
      ar: "Vue du chantier et maçonnerie du bureau du CEG"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0085.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-3',
    title: {
      fr: "Remise d'équipements et mobilier de bureau aux responsables scolaires",
      en: "Remise d'équipements et mobilier de bureau aux responsables scolaires",
      ar: "Remise d'équipements et mobilier de bureau aux responsables scolaires"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0086.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-4',
    title: {
      fr: "Contrôle technique et suivi de chantier par l'équipe AJTES",
      en: "Contrôle technique et suivi de chantier par l'équipe AJTES",
      ar: "Contrôle technique et suivi de chantier par l'équipe AJTES"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0088.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-5',
    title: {
      fr: "Inspection des finitions des deux bureaux du CEG",
      en: "Inspection des finitions des deux bureaux du CEG",
      ar: "Inspection des finitions des deux bureaux du CEG"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0092.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-6',
    title: {
      fr: "Remise symbolique des clés du bâtiment au proviseur du CEG",
      en: "Remise symbolique des clés du bâtiment au proviseur du CEG",
      ar: "Remise symbolique des clés du bâtiment au proviseur du CEG"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0093.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-7',
    title: {
      fr: "Bâtiment administratif achevé du CEG de Nangassou (Projet phare 2026)",
      en: "Bâtiment administratif achevé du CEG de Nangassou (Projet phare 2026)",
      ar: "Bâtiment administratif achevé du CEG de Nangassou (Projet phare 2026)"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0106.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-8',
    title: {
      fr: "Campagne d'éco-citoyenneté et reboisement de la cour du collège",
      en: "Campagne d'éco-citoyenneté et reboisement de la cour du collège",
      ar: "Campagne d'éco-citoyenneté et reboisement de la cour du collège"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0113.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-9',
    title: {
      fr: "Photo officielle des membres du Bureau National de l'AJTES",
      en: "Photo officielle des membres du Bureau National de l'AJTES",
      ar: "Photo officielle des membres du Bureau National de l'AJTES"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0123.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-10',
    title: {
      fr: "Mobilisation des jeunes volontaires et bénévoles AJTES",
      en: "Mobilisation des jeunes volontaires et bénévoles AJTES",
      ar: "Mobilisation des jeunes volontaires et bénévoles AJTES"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0125.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-11',
    title: {
      fr: "Atelier d'orientation académique et soutien aux élèves",
      en: "Atelier d'orientation académique et soutien aux élèves",
      ar: "Atelier d'orientation académique et soutien aux élèves"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0129.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-12',
    title: {
      fr: "Assemblée Générale annuelle des adhérents et sympathisants",
      en: "Assemblée Générale annuelle des adhérents et sympathisants",
      ar: "Assemblée Générale annuelle des adhérents et sympathisants"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0130.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-13',
    title: {
      fr: "Journée citoyenne de salubrité et assainissement public",
      en: "Journée citoyenne de salubrité et assainissement public",
      ar: "Journée citoyenne de salubrité et assainissement public"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0132.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-14',
    title: {
      fr: "Cérémonie de remise de fournitures et récompenses aux élèves (2023)",
      en: "Cérémonie de remise de fournitures et récompenses aux élèves (2023)",
      ar: "Cérémonie de remise de fournitures et récompenses aux élèves (2023)"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0140.jpg',
    year: 2023,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-15',
    title: {
      fr: "Distribution de kits scolaires complets aux élèves vulnérables",
      en: "Distribution de kits scolaires complets aux élèves vulnérables",
      ar: "Distribution de kits scolaires complets aux élèves vulnérables"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0142.jpg',
    year: 2023,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-16',
    title: {
      fr: "Concertation avec le corps enseignant du CEG de Nangassou",
      en: "Concertation avec le corps enseignant du CEG de Nangassou",
      ar: "Concertation avec le corps enseignant du CEG de Nangassou"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0143.jpg',
    year: 2023,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-17',
    title: {
      fr: "Séance de sensibilisation des familles sur l'importance de l'éducation",
      en: "Séance de sensibilisation des familles sur l'importance de l'éducation",
      ar: "Séance de sensibilisation des familles sur l'importance de l'éducation"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0146.jpg',
    year: 2023,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-18',
    title: {
      fr: "Photo de clôture d'action de terrain des bénévoles locaux",
      en: "Photo de clôture d'action de terrain des bénévoles locaux",
      ar: "Photo de clôture d'action de terrain des bénévoles locaux"
    },
    type: 'photo',
    url: './images/IMG-20260813-WA0151.jpg',
    year: 2023,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-19',
    title: {
      fr: "Séance d'entraide et soutien éducatif aux élèves de Nangassou",
      en: "Séance d'entraide et soutien éducatif aux élèves de Nangassou",
      ar: "Séance d'entraide et soutien éducatif aux élèves de Nangassou"
    },
    type: 'photo',
    url: './images/IMG-20260816-WA0051.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-20',
    title: {
      fr: "Rencontre et échanges avec les comités régionaux AJTES",
      en: "Rencontre et échanges avec les comités régionaux AJTES",
      ar: "Rencontre et échanges avec les comités régionaux AJTES"
    },
    type: 'photo',
    url: './images/IMG-20260816-WA0058.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-21',
    title: {
      fr: "Atelier de sensibilisation environnementale en milieu scolaire",
      en: "Atelier de sensibilisation environnementale en milieu scolaire",
      ar: "Atelier de sensibilisation environnementale en milieu scolaire"
    },
    type: 'photo',
    url: './images/IMG-20260816-WA0068.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-22',
    title: {
      fr: "Concertation avec les responsables communautaires et locaux",
      en: "Concertation avec les responsables communautaires et locaux",
      ar: "Concertation avec les responsables communautaires et locaux"
    },
    type: 'photo',
    url: './images/IMG-20260816-WA0072.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-23',
    title: {
      fr: "Réunion de planification stratégique du bureau exécutif",
      en: "Réunion de planification stratégique du bureau exécutif",
      ar: "Réunion de planification stratégique du bureau exécutif"
    },
    type: 'photo',
    url: './images/IMG-20260819-WA0144.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-24',
    title: {
      fr: "Action de solidarité et accompagnement sur le terrain",
      en: "Action de solidarité et accompagnement sur le terrain",
      ar: "Action de solidarité et accompagnement sur le terrain"
    },
    type: 'photo',
    url: './images/IMG-20260819-WA0156.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-25',
    title: {
      fr: "Mobilisation citoyenne des jeunes pour la rentrée scolaire",
      en: "Mobilisation citoyenne des jeunes pour la rentrée scolaire",
      ar: "Mobilisation citoyenne des jeunes pour la rentrée scolaire"
    },
    type: 'photo',
    url: './images/IMG-20260819-WA0189.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-26',
    title: {
      fr: "Distribution de matériel et équipements pédagogiques aux écoles",
      en: "Distribution de matériel et équipements pédagogiques aux écoles",
      ar: "Distribution de matériel et équipements pédagogiques aux écoles"
    },
    type: 'photo',
    url: './images/IMG-20260819-WA0196.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-27',
    title: {
      fr: "Rassemblement et fraternité des membres actifs AJTES",
      en: "Rassemblement et fraternité des membres actifs AJTES",
      ar: "Rassemblement et fraternité des membres actifs AJTES"
    },
    type: 'photo',
    url: './images/IMG-20260819-WA0213.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-28',
    title: {
      fr: "Session de travail de l'équipe technique et maintenance",
      en: "Session de travail de l'équipe technique et maintenance",
      ar: "Session de travail de l'équipe technique et maintenance"
    },
    type: 'photo',
    url: './images/IMG-20260819-WA0237.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-29',
    title: {
      fr: "Événement culturel et festif de la jeunesse AJTES",
      en: "Événement culturel et festif de la jeunesse AJTES",
      ar: "Événement culturel et festif de la jeunesse AJTES"
    },
    type: 'photo',
    url: './images/IMG-20260819-WA0246.jpg',
    year: 2026,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-30',
    title: {
      fr: "Mission solidaire et écoute des besoins communautaires",
      en: "Mission solidaire et écoute des besoins communautaires",
      ar: "Mission solidaire et écoute des besoins communautaires"
    },
    type: 'photo',
    url: './images/IMG_20250119_163228_691.jpg',
    year: 2025,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-31',
    title: {
      fr: "Échanges participatifs pour le plan d'action de développement",
      en: "Échanges participatifs pour le plan d'action de développement",
      ar: "Échanges participatifs pour le plan d'action de développement"
    },
    type: 'photo',
    url: './images/IMG_20250119_163253_600.jpg',
    year: 2025,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-32',
    title: {
      fr: "Soutien éducatif et animation culturelle avec les jeunes",
      en: "Soutien éducatif et animation culturelle avec les jeunes",
      ar: "Soutien éducatif et animation culturelle avec les jeunes"
    },
    type: 'photo',
    url: './images/IMG_20250119_163312_501.jpg',
    year: 2025,
    category: 'Photos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-photo-33',
    title: {
      fr: "Réunion de travail du comité technique sur les infrastructures",
      en: "Réunion de travail du comité technique sur les infrastructures",
      ar: "Réunion de travail du comité technique sur les infrastructures"
    },
    type: 'photo',
    url: './images/IMG_20250119_163314_691.jpg',
    year: 2025,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-34',
    title: {
      fr: "Grand forum des jeunes engagés pour la solidarité",
      en: "Grand forum des jeunes engagés pour la solidarité",
      ar: "Grand forum des jeunes engagés pour la solidarité"
    },
    type: 'photo',
    url: './images/IMG_20250119_163339_512.jpg',
    year: 2025,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-photo-35',
    title: {
      fr: "Rassemblement et bilan annuel des activités de l'AJTES",
      en: "Rassemblement et bilan annuel des activités de l'AJTES",
      ar: "Rassemblement et bilan annuel des activités de l'AJTES"
    },
    type: 'photo',
    url: './images/IMG_20250119_163427_776.jpg',
    year: 2025,
    category: 'Photos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-vid-1',
    title: {
      fr: "Vidéo — Évolution des travaux de fondation et maçonnerie du bureau",
      en: "Vidéo — Évolution des travaux de fondation et maçonnerie du bureau",
      ar: "Vidéo — Évolution des travaux de fondation et maçonnerie du bureau"
    },
    type: 'video',
    url: './videos/Demonstration_Complete_AJTES_3min_Salomon.mp4',
    thumbnailUrl: './images/IMG-20260813-WA0085.jpg',
    year: 2026,
    category: 'Vidéos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-vid-2',
    title: {
      fr: "Vidéo — Synthèse audiovisuelle des actions et projets de l'AJTES",
      en: "Vidéo — Synthèse audiovisuelle des actions et projets de l'AJTES",
      ar: "Vidéo — Synthèse audiovisuelle des actions et projets de l'AJTES"
    },
    type: 'video',
    url: './videos/TUTORIEL_AJTES_SALOMON_3MIN.mp4',
    thumbnailUrl: './images/IMG-20260813-WA0123.jpg',
    year: 2026,
    category: 'Vidéos Officielles',
    location: "N'Djamena"
  },
  {
    id: 'media-vid-3',
    title: {
      fr: "Vidéo — Témoignages des élèves, enseignants et responsables du collège",
      en: "Vidéo — Témoignages des élèves, enseignants et responsables du collège",
      ar: "Vidéo — Témoignages des élèves, enseignants et responsables du collège"
    },
    type: 'video',
    url: './videos/VID-20260726-WA0093.mp4',
    thumbnailUrl: './images/IMG-20260813-WA0093.jpg',
    year: 2026,
    category: 'Vidéos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-vid-4',
    title: {
      fr: "Vidéo — Rapport de chantier : Construction du bureau du CEG de Nangassou",
      en: "Vidéo — Rapport de chantier : Construction du bureau du CEG de Nangassou",
      ar: "Vidéo — Rapport de chantier : Construction du bureau du CEG de Nangassou"
    },
    type: 'video',
    url: './videos/VID-20260813-WA0152.mp4',
    thumbnailUrl: './images/IMG-20260813-WA0106.jpg',
    year: 2026,
    category: 'Vidéos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-vid-5',
    title: {
      fr: "Vidéo — Cérémonie d'inauguration & Allocutions officielles du Bureau AJTES",
      en: "Vidéo — Cérémonie d'inauguration & Allocutions officielles du Bureau AJTES",
      ar: "Vidéo — Cérémonie d'inauguration & Allocutions officielles du Bureau AJTES"
    },
    type: 'video',
    url: './videos/VID-20260813-WA0153.mp4',
    thumbnailUrl: './images/IMG-20260813-WA0083.jpg',
    year: 2026,
    category: 'Vidéos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-vid-6',
    title: {
      fr: "Vidéo — Reportage terrain : Activités et engagements de la jeunesse AJTES",
      en: "Vidéo — Reportage terrain : Activités et engagements de la jeunesse AJTES",
      ar: "Vidéo — Reportage terrain : Activités et engagements de la jeunesse AJTES"
    },
    type: 'video',
    url: './videos/VID-20260816-WA0077.mp4',
    thumbnailUrl: './images/IMG-20260816-WA0058.jpg',
    year: 2026,
    category: 'Vidéos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-vid-7',
    title: {
      fr: "Vidéo — Immersion terrain : Campagne de reboisement et salubrité",
      en: "Vidéo — Immersion terrain : Campagne de reboisement et salubrité",
      ar: "Vidéo — Immersion terrain : Campagne de reboisement et salubrité"
    },
    type: 'video',
    url: './videos/VID_20250928_145845.mp4',
    thumbnailUrl: './images/IMG-20260813-WA0113.jpg',
    year: 2025,
    category: 'Vidéos Officielles',
    location: "Nangassou"
  },
  {
    id: 'media-vid-8',
    title: {
      fr: "Vidéo — Présentation générale de la plateforme web AJTES",
      en: "Vidéo — Présentation générale de la plateforme web AJTES",
      ar: "Vidéo — Présentation générale de la plateforme web AJTES"
    },
    type: 'video',
    url: './videos/Demonstration_Complete_AJTES_3min_Salomon.mp4',
    thumbnailUrl: './images/IMG-20260813-WA0142.jpg',
    year: 2026,
    category: 'Vidéos Officielles',
    location: "N'Djamena"
  }
];

export const initialCommittees: Committee[] = [
  {
    id: 'com-1',
    name: {
      fr: "Bureau National d'Exécution",
      en: "National Executive Board",
      ar: "المكتب التنفيذي الوطني"
    },
    description: {
      fr: "Organe de direction et de gestion quotidienne de l'AJTES à l'échelle nationale.",
      en: "Governing body for day-to-day management of AJTES nationally.",
      ar: "الهيئة القيادية والتنفيذية اليومية على المستوى الوطني."
    },
    leader: "Présidence AJTES",
    membersCount: 7,
    region: "N'Djamena (Siège)",
    imageUrl: './images/IMG-20260813-WA0123.jpg'
  },
  {
    id: 'com-2',
    name: {
      fr: "Commission Éducation & Établissements Scolaires",
      en: "Education & Schools Commission",
      ar: "لجنة التعليم والمؤسسات المدرسية"
    },
    description: {
      fr: "Chargée de l'évaluation des besoins des écoles et du suivi des projets éducatifs.",
      en: "In charge of school needs assessment and educational projects oversight.",
      ar: "المكلفة بتقييم احتياجات المدارس ومتابعة المشاريع التعليمية."
    },
    leader: "Responsable Commission Éducation",
    membersCount: 12,
    region: "Nangassou & Logone",
    imageUrl: './images/IMG-20260813-WA0106.jpg'
  },
  {
    id: 'com-3',
    name: {
      fr: "Commission Environnement & Salubrité",
      en: "Environment & Sanitation Commission",
      ar: "لجنة البيئة والنظافة"
    },
    description: {
      fr: "Organise les campagnes de reboisement, de salubrité et de sensibilisation écologique.",
      en: "Organizes reforestation campaigns, cleaning drives, and ecological awareness.",
      ar: "تنظم حملات التشجير والنظافة والتوعية البيئية."
    },
    leader: "Responsable Environnement",
    membersCount: 15,
    region: "Multi-régions",
    imageUrl: './images/IMG-20260813-WA0113.jpg'
  }
];

export const initialPartners: Partner[] = [
  {
    id: 'part-1',
    name: "Inspection Départementale de l'Éducation Nationale",
    type: 'institution',
    logoUrl: './images/IMG-20260813-WA0143.jpg',
    description: {
      fr: "Partenaire institutionnel public accompagnant les projets scolaires au niveau local.",
      en: "Public institutional partner supporting local school infrastructure projects.",
      ar: "شريك مؤسسي حكومي يدعم المشاريع المدرسية."
    }
  },
  {
    id: 'part-2',
    name: "Association Nangassou Solidarité",
    type: 'ong',
    logoUrl: './images/IMG-20260813-WA0151.jpg',
    description: {
      fr: "ONG partenaire pour le développement local et la mobilisation communautaire.",
      en: "Partner NGO for local development and community engagement.",
      ar: "منظمة غير حكومية شريكة للتنمية المحلية."
    }
  }
];

export const initialDonations: Donation[] = [
  {
    id: 'don-101',
    donorName: 'Moussa Mahamat',
    donorEmail: 'moussa.m@example.com',
    amount: 50000,
    projectId: 'proj-1',
    projectTitle: 'Construction du bureau administratif au CEG de Nangassou',
    paymentMethod: 'airtel_money',
    reference: 'AJTES-DON-88421',
    status: 'succes',
    date: '2026-07-28'
  },
  {
    id: 'don-102',
    donorName: 'Fatimé Abakar',
    donorEmail: 'fatime.abakar@example.com',
    amount: 25000,
    projectId: 'proj-3',
    projectTitle: 'Campagne de reboisement et d\'éco-citoyenneté',
    paymentMethod: 'moov_africa',
    reference: 'AJTES-DON-99104',
    status: 'succes',
    date: '2026-08-05'
  }
];

export const initialUsers: User[] = [
  {
    id: 'usr-admin-salomon',
    name: 'Salomon (Tech Lead)',
    email: 'salomontchibkere@gmail.com',
    role: 'super_admin',
    profession: 'Super Admin & Responsable Technique AJTES',
    phone: '+237655136824',
    city: 'N\'Djamena',
    avatarUrl: './images/IMG_20250119_163228_691.jpg',
    memberType: 'actif',
    membershipStatus: 'actif',
    dateJoined: '2022-01-15'
  },
  {
    id: 'usr-admin-marc',
    name: 'Marc Allan Dedjim',
    email: 'marcallandedjim@gmail.com',
    role: 'super_admin',
    profession: 'Administrateur Principal (Pouvoir Complet 100%)',
    phone: '63000484',
    city: 'N\'Djamena',
    memberType: 'actif',
    membershipStatus: 'actif',
    dateJoined: '2022-01-15'
  },
  {
    id: 'usr-admin-valentin',
    name: 'Betoudjimbaikara Valentin',
    email: 'betoudjimbaikaravalentin@gmail.com',
    role: 'admin',
    profession: 'Secrétaire Général (SG)',
    phone: '63373639',
    city: 'N\'Djamena',
    memberType: 'actif',
    membershipStatus: 'actif',
    dateJoined: '2022-01-15'
  },
  {
    id: 'usr-admin-souma',
    name: 'Souma Banakolong',
    email: 'soumabanakolong007@gmail.com',
    role: 'admin',
    profession: 'Président de l\'AJTES',
    phone: '+237690969577',
    city: 'N\'Djamena',
    memberType: 'actif',
    membershipStatus: 'actif',
    dateJoined: '2022-01-15'
  },
  {
    id: 'usr-admin-boikoussigue',
    name: 'Boikoussigue',
    email: 'boikoussiguen@gmail.com',
    role: 'admin',
    profession: 'Chargé de Communication & Secrétaire',
    phone: '65031849',
    city: 'N\'Djamena',
    memberType: 'actif',
    membershipStatus: 'actif',
    dateJoined: '2022-01-15'
  },
  {
    id: 'usr-member1',
    name: 'Ali Brahim',
    email: 'ali.brahim@example.td',
    role: 'membre',
    profession: 'Enseignant',
    phone: '+235 66 12 34 56',
    city: 'Nangassou',
    memberType: 'actif',
    membershipStatus: 'actif',
    dateJoined: '2023-04-10'
  }
];
