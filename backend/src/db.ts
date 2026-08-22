import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

export interface User {
  id: string;
  email: string;
  password: string;
  fullName: string;
  role: 'ADMIN' | 'MEMBER' | 'TREASURER' | 'PROJECT_MANAGER';
  phone?: string;
  avatar?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  memberProfile?: MemberProfile;
}

export interface MemberProfile {
  id: string;
  userId: string;
  profession?: string;
  city?: string;
  country?: string;
  bio?: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
}

export interface News {
  id: string;
  titleFr: string;
  titleEn?: string;
  titleAr?: string;
  contentFr: string;
  contentEn?: string;
  contentAr?: string;
  category: string;
  image?: string;
  published: boolean;
  authorId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  titleFr: string;
  titleEn?: string;
  titleAr?: string;
  descriptionFr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  location: string;
  eventDate: string;
  image?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  titleFr: string;
  titleEn?: string;
  titleAr?: string;
  summaryFr: string;
  summaryEn?: string;
  summaryAr?: string;
  descriptionFr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PLANNED';
  budget?: number;
  year: number;
  location: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Donation {
  id: string;
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  status: string;
  transactionRef: string;
  notes?: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface Committee {
  id: string;
  nameFr: string;
  nameEn?: string;
  nameAr?: string;
  descriptionFr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  leaderName?: string;
  leaderRole?: string;
  image?: string;
  createdAt: string;
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
  type: string;
  website?: string;
  createdAt: string;
}

interface DatabaseSchema {
  users: User[];
  memberProfiles: MemberProfile[];
  news: News[];
  events: Event[];
  projects: Project[];
  donations: Donation[];
  contactMessages: ContactMessage[];
  committees: Committee[];
  partners: Partner[];
}

const initialDbData: DatabaseSchema = {
  users: [],
  memberProfiles: [],
  news: [],
  events: [],
  projects: [],
  donations: [],
  contactMessages: [],
  committees: [],
  partners: [],
};

class Database {
  private data: DatabaseSchema;

  constructor() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (fs.existsSync(DB_FILE)) {
      try {
        const fileContent = fs.readFileSync(DB_FILE, 'utf-8');
        this.data = JSON.parse(fileContent);
      } catch {
        this.data = { ...initialDbData };
        this.save();
      }
    } else {
      this.data = { ...initialDbData };
      this.save();
    }
  }

  private save() {
    fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), 'utf-8');
  }

  get users() { return this.data.users; }
  get memberProfiles() { return this.data.memberProfiles; }
  get news() { return this.data.news; }
  get events() { return this.data.events; }
  get projects() { return this.data.projects; }
  get donations() { return this.data.donations; }
  get contactMessages() { return this.data.contactMessages; }
  get committees() { return this.data.committees; }
  get partners() { return this.data.partners; }

  saveDb() {
    this.save();
  }
}

export const db = new Database();
