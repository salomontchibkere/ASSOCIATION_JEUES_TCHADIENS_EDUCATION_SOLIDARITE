export type Language = 'fr' | 'en' | 'ar';

export type MemberType = 'actif' | 'sympathisant' | 'benevole' | 'partenaire';

export type UserRole = 'super_admin' | 'admin' | 'resp_com' | 'resp_projets' | 'tresorier' | 'membre';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  profession?: string;
  phone?: string;
  city?: string;
  avatarUrl?: string;
  memberType?: MemberType;
  membershipStatus?: 'actif' | 'admis' | 'en_attente' | 'suspendu';
  feePaid?: boolean;
  feeAmount?: number;
  feeYear?: number;
  dateJoined: string;
}

export interface Project {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'education' | 'solidarite' | 'environnement' | 'culture' | 'sport' | 'humanitaire';
  location: string;
  startDate: string;
  endDate?: string;
  objective: Record<Language, string>;
  targetBudget: number; // in FCFA
  raisedBudget: number; // in FCFA
  beneficiariesCount: number;
  status: 'en_cours' | 'realise' | 'en_projet';
  imageUrl: string;
  results?: Record<Language, string>;
  featured?: boolean;
  year?: number;
  pdfUrl?: string;
  videoUrl?: string;
  linkUrl?: string;
}

export interface NewsArticle {
  id: string;
  title: Record<Language, string>;
  content: Record<Language, string>;
  summary: Record<Language, string>;
  category: 'education' | 'solidarite' | 'environnement' | 'sport' | 'culture' | 'humanitaire' | 'communique' | 'pdf' | 'photo' | 'article' | string;
  author: string;
  publishDate: string;
  imageUrl: string;
  featured?: boolean;
  type?: 'article' | 'pdf' | 'photo' | 'communique';
  pdfUrl?: string;
  pdfSize?: string;
  videoUrl?: string;
  linkUrl?: string;
}

export interface Event {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  date: string;
  time: string;
  location: string;
  organizer: string;
  imageUrl: string;
  maxAttendees?: number;
  registeredCount: number;
}

export interface Donation {
  id: string;
  donorName: string;
  donorEmail: string;
  amount: number; // in FCFA
  projectId?: string;
  projectTitle?: string;
  paymentMethod: 'airtel_money' | 'moov_africa' | 'carte_bancaire';
  reference: string;
  status: 'succes' | 'en_attente' | 'echoue';
  date: string;
}

export interface Committee {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  leader: string;
  membersCount: number;
  region: string;
  imageUrl?: string;
}

export interface Partner {
  id: string;
  name: string;
  type: 'ong' | 'institution' | 'entreprise' | 'ecole' | 'fondation';
  logoUrl: string;
  description: Record<Language, string>;
  websiteUrl?: string;
}

export interface MediaItem {
  id: string;
  title: Record<Language, string>;
  type: 'photo' | 'video';
  url: string;
  thumbnailUrl?: string;
  year: number;
  category: string;
  location?: string;
}

export interface OfficialDocument {
  id: string;
  title: Record<Language, string>;
  type: 'statuts' | 'reglement_interieur' | 'rapport_annuel' | 'autre';
  description: Record<Language, string>;
  downloadUrl?: string;
  lastUpdated: string;
  contentMarkdown: Record<Language, string>;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  topic: 'information' | 'partenariat' | 'don' | 'adhesion' | 'benevolat' | 'projet' | 'autre';
  message: string;
  date: string;
  status: 'nouveau' | 'lu' | 'traite';
}
