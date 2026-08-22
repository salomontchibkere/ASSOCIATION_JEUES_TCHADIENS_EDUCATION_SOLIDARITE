import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '../types';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
    ar: string;
  };
}

export const uiTranslations: Translations = {
  // Navigation
  navHome: { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' },
  navAbout: { fr: 'Qui sommes-nous ?', en: 'About Us', ar: 'من نحن' },
  navProjects: { fr: 'Nos Projets', en: 'Our Projects', ar: 'مشاريعنا' },
  navNews: { fr: 'Actualités & Événements', en: 'News & Events', ar: 'الأخبار والفعاليات' },
  navGallery: { fr: 'Galerie', en: 'Gallery', ar: 'المعرض' },
  navCommittees: { fr: 'Comités & Partenaires', en: 'Committees & Partners', ar: 'اللجان والشركاء' },
  navDocuments: { fr: 'Documents Officiels', en: 'Official Documents', ar: 'الوثائق الرسمية' },
  navContact: { fr: 'Contact', en: 'Contact', ar: 'اتصل بنا' },
  navDonate: { fr: 'Faire un Don', en: 'Make a Donation', ar: 'تبرع الآن' },
  navJoin: { fr: 'Devenir Membre', en: 'Join Us', ar: 'الانضمام إلينا' },
  navMemberSpace: { fr: 'Espace Membre', en: 'Member Space', ar: 'فضاء الأعضاء' },
  navAdminSpace: { fr: 'Administration', en: 'Admin Panel', ar: 'الإدارة' },

  // Hero Section
  heroTitle: {
    fr: "Ensemble pour l'éducation et la solidarité de la jeunesse tchadienne",
    en: "Together for the education and solidarity of Chadian youth",
    ar: "معًا من أجل تعليم وتضامن الشباب التشادي"
  },
  heroSubtitle: {
    fr: "L'AJTES agit depuis 2022 pour offrir de meilleures opportunités d'apprentissage et développer l'entraide communautaire au Tchad.",
    en: "AJTES acts since 2022 to provide better educational opportunities and build community solidarity in Chad.",
    ar: "تعمل الجمعية منذ عام 2022 لتوفير فرص تعليمية أفضل وتعزيز التضامن المجتمعي في تشاد."
  },
  btnDiscover: { fr: 'Découvrir AJTES', en: 'Discover AJTES', ar: 'اكتشف الجمعية' },
  btnSupport: { fr: 'Soutenir nos actions', en: 'Support Our Cause', ar: 'ادعم مبادراتنا' },
  btnBecomePartner: { fr: 'Devenir Partenaire', en: 'Become a Partner', ar: 'كن شريكًا' },

  // Slogans
  mainSlogan: {
    fr: "ÉDUQUER, SOLIDARISER ET DONNER À LA JEUNESSE TCHADIENNE LES MOYENS DE CONSTRUIRE SON AVENIR.",
    en: "EDUCATING, UNITING, AND EMPOWERING CHADIAN YOUTH TO BUILD THEIR FUTURE.",
    ar: "التعليم والتضامن والتمكين لشباب تشاد لبناء مستقبلهم."
  },

  // Stats
  statCreationYear: { fr: 'Année de création', en: 'Year Founded', ar: 'سنة التأسيس' },
  statProjects: { fr: 'Projets réalisés & en cours', en: 'Projects Completed & Active', ar: 'المشاريع المنفذة والجارية' },
  statBeneficiaries: { fr: 'Élèves & Bénéficiaires', en: 'Students & Beneficiaries', ar: 'الطلاب والمستفيدون' },
  statMembers: { fr: 'Membres engagés', en: 'Committed Members', ar: 'الأعضاء المشاركون' },

  // Domains
  domainsTitle: { fr: "Nos Domaines d'Action", en: "Our Fields of Action", ar: "مجالات عملنا" },
  domainEdu: { fr: 'Éducation & Écoles', en: 'Education & Schools', ar: 'التعليم والمدارس' },
  domainSolidarity: { fr: 'Solidarité & Entraide', en: 'Solidarity & Assistance', ar: 'التضامن والدعم' },
  domainHum: { fr: 'Action Humanitaire', en: 'Humanitarian Action', ar: 'العمل الإنساني' },
  domainEnv: { fr: 'Environnement & Climat', en: 'Environment & Climate', ar: 'البيئة والمناخ' },
  domainCulture: { fr: 'Culture & Patrimoine', en: 'Culture & Heritage', ar: 'الثقافة والتراث' },
  domainSport: { fr: 'Sport & Jeunesse', en: 'Sport & Youth', ar: 'الرياضة والشباب' },
  domainReligion: { fr: 'Valeurs & Éthique', en: 'Values & Ethics', ar: 'القيم والأخلاق' },
  domainDev: { fr: 'Développement Communautaire', en: 'Community Development', ar: 'التنمية المجتمعية' },

  // Realizations
  realizationsTitle: { fr: 'Nos Réalisations Clés Sur le Terrain', en: 'Key Achievements on the Field', ar: 'إنجازاتنا الرئيسية على الميدان' },
  year2022Title: { fr: '2022 — Création de l\'AJTES', en: '2022 — Foundation of AJTES', ar: '2022 — تأسيس الجمعية' },
  year2022Desc: { fr: 'Lancement des premières activités d\'entraide et de sensibilisation pour l\'éducation.', en: 'Launch of first community support and education awareness activities.', ar: 'إطلاق أولى أنشطة التضامن والتوعية التعليمية.' },
  year2023Title: { fr: '2023 — Distribution au CEG de Nangassou', en: '2023 — Distribution at CEG Nangassou', ar: '2023 — توزيع المستلزمات في إعدادية نانغاسو' },
  year2023Desc: { fr: 'Fournitures scolaires complètes distribuées aux élèves défavorisés.', en: 'Complete school kits distributed to underprivileged students.', ar: "توزيع مستلزمات مدرسية كاملة على الطلاب المتعثرين." },
  year2026Title: { fr: '2026 — Bureau administratif au CEG de Nangassou', en: '2026 — Admin Office at CEG Nangassou', ar: '2026 — المبنى الإداري بإعدادية نانغاسو' },
  year2026Desc: { fr: 'Construction et équipement d\'un bâtiment administratif de deux chambres.', en: 'Construction and equipping of a 2-room administrative office building.', ar: 'بناء وتجهيز مبنى إداري مكون من غرفتين.' },

  // Footer & Institutional Call
  footerSlogan: {
    fr: "Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES) — Créée en 2022.",
    en: "Association of Young Chadians for Education and Solidarity (AJTES) — Founded in 2022.",
    ar: "جمعية الشباب التشاديين من أجل التعليم والتضامن (AJTES) — تأسست عام 2022."
  },
  partnerCallTitle: { fr: "Appel Institutionnel aux Partenaires & ONG", en: "Institutional Call to Partners & NGOs", ar: "نداء للمؤسسات والمنظمات الشريكة" },
  partnerCallText: {
    fr: "AJTES invite les ONG, institutions étatiques, entreprises et personnes de bonne volonté à unir leurs efforts afin d'offrir un avenir meilleur à la jeunesse tchadienne.",
    en: "AJTES invites NGOs, government institutions, companies, and individuals of goodwill to join forces to empower Chadian youth.",
    ar: "تدعو الجمعية المنظمات والمؤسسات والشركات وأهل الخير لتكثيف الجهود من أجل بناء مستقبل أفضل لشباب تشاد."
  },

  // Donation
  donateTitle: { fr: 'Soutenir l\'AJTES — Faire un Don', en: 'Support AJTES — Make a Donation', ar: 'دعم الجمعية — تقديم تبرع' },
  selectAmount: { fr: 'Choisissez ou saisissez le montant (FCFA)', en: 'Select or enter amount (FCFA)', ar: 'اختر أو أدخل المبلغ (فرنك إفريقي)' },
  customAmount: { fr: 'Montant libre en FCFA', en: 'Custom amount in FCFA', ar: 'مبلغ آخر بالفرنك الإفريقي' },
  selectPayment: { fr: 'Moyen de paiement', en: 'Payment method', ar: 'طريقة الدفع' },
  airtelMoney: { fr: 'Airtel Money Tchad', en: 'Airtel Money Chad', ar: 'إيرتل ماني تشاد' },
  moovAfrica: { fr: 'Moov Africa Tchad', en: 'Moov Africa Chad', ar: 'موف إفريقيا تشاد' },
  bankCard: { fr: 'Carte Bancaire (Visa/Mastercard)', en: 'Bank Card', ar: 'بطاقة مصرفية' },
  donateNowBtn: { fr: 'Valider et effectuer le don', en: 'Submit Donation', ar: 'تأكيد التبرع' },
  receiptTitle: { fr: 'Reçu Officiel de Don — AJTES', en: 'Official Donation Receipt — AJTES', ar: 'إيصال التبرع الرسمي — الجمعية' },

  // Member
  registerTitle: { fr: 'Rejoindre l\'AJTES — Adhésion', en: 'Join AJTES — Membership', ar: 'الانضمام إلى الجمعية — طلب العضوية' },
  memberTypeActive: { fr: 'Membre Actif', en: 'Active Member', ar: 'عضو فعال' },
  memberTypeSymp: { fr: 'Membre Sympathisant', en: 'Supporting Member', ar: 'عضو محب' },
  memberTypeVol: { fr: 'Bénévole', en: 'Volunteer', ar: 'متطوع' },
  memberTypePart: { fr: 'Membre Partenaire', en: 'Partner Member', ar: 'عضو شريك' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    if (uiTranslations[key]) {
      return uiTranslations[key][language] || uiTranslations[key]['fr'];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
