import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Project, NewsArticle, Event, Donation, MediaItem, OfficialDocument, Committee, Partner, ContactMessage, User } from '../types';
import {
  initialProjects,
  initialNews,
  initialEvents,
  initialMedia,
  initialOfficialDocuments,
  initialCommittees,
  initialPartners,
  initialDonations,
  initialUsers
} from '../data/mockData';

interface DataContextType {
  projects: Project[];
  news: NewsArticle[];
  events: Event[];
  media: MediaItem[];
  officialDocuments: OfficialDocument[];
  committees: Committee[];
  partners: Partner[];
  donations: Donation[];
  contactMessages: ContactMessage[];
  users: User[];

  // Actions
  addDonation: (donationData: Omit<Donation, 'id' | 'date' | 'reference' | 'status'>) => Donation;
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  addNewsArticle: (news: NewsArticle) => void;
  deleteNewsArticle: (id: string) => void;
  addEvent: (event: Event) => void;
  addMediaItem: (media: MediaItem) => void;
  deleteMediaItem: (id: string) => void;
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'date' | 'status'>) => void;
  deleteContactMessage: (id: string) => void;
  updateOfficialDocument: (doc: OfficialDocument) => void;
  confirmUser: (userId: string) => void;
  deleteUser: (userId: string) => void;
  toggleUserFeeStatus: (userId: string, feePaid?: boolean, amount?: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const loadSaved = <T,>(key: string, fallback: T): T => {
  try {
    const item = localStorage.getItem(`ajtes_v2_${key}`);
    if (item) {
      // If cached item contains residual "Nangassou", discard it to enforce neutrality
      if (item.includes('Nangassou') || item.includes('nangassou')) {
        localStorage.removeItem(`ajtes_v2_${key}`);
        return fallback;
      }
      return JSON.parse(item);
    }
    // Also clean up old v1 keys if present
    localStorage.removeItem(`ajtes_${key}`);
    return fallback;
  } catch (e) {
    return fallback;
  }
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => loadSaved('projects', initialProjects));
  const [news, setNews] = useState<NewsArticle[]>(() => loadSaved('news', initialNews));
  const [events, setEvents] = useState<Event[]>(() => loadSaved('events', initialEvents));
  const [media, setMedia] = useState<MediaItem[]>(() => loadSaved('media', initialMedia));
  const [officialDocuments, setOfficialDocuments] = useState<OfficialDocument[]>(() => {
    const loaded = loadSaved('officialDocuments', initialOfficialDocuments);
    // Strictly filter out any confidential or non-public documents
    const sanitized = loaded.filter(doc => doc.id === 'doc-statuts' || doc.id === 'doc-reglement');
    try {
      localStorage.setItem('ajtes_v2_officialDocuments', JSON.stringify(sanitized));
    } catch (e) {}
    return sanitized;
  });
  const [committees] = useState<Committee[]>(initialCommittees);
  const [partners] = useState<Partner[]>(initialPartners);
  const [donations, setDonations] = useState<Donation[]>(() => loadSaved('donations', initialDonations));
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => loadSaved('contactMessages', []));
  const [users, setUsers] = useState<User[]>(() => loadSaved('users', initialUsers));

  // Sync state to localStorage with v2 key
  useEffect(() => { localStorage.setItem('ajtes_v2_projects', JSON.stringify(projects)); }, [projects]);
  useEffect(() => { localStorage.setItem('ajtes_v2_news', JSON.stringify(news)); }, [news]);
  useEffect(() => { localStorage.setItem('ajtes_v2_media', JSON.stringify(media)); }, [media]);
  useEffect(() => { localStorage.setItem('ajtes_v2_donations', JSON.stringify(donations)); }, [donations]);
  useEffect(() => { localStorage.setItem('ajtes_v2_contactMessages', JSON.stringify(contactMessages)); }, [contactMessages]);
  useEffect(() => { localStorage.setItem('ajtes_v2_users', JSON.stringify(users)); }, [users]);

  const confirmUser = (userId: string) => {
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, membershipStatus: 'admis' } : u));
  };

  const deleteUser = (userId: string) => {
    setUsers(prev => prev.filter(u => u.id !== userId));
  };

  const toggleUserFeeStatus = (userId: string, feePaid?: boolean, amount: number = 5000) => {
    setUsers(prev => prev.map(u => {
      if (u.id === userId) {
        const nextStatus = feePaid !== undefined ? feePaid : !u.feePaid;
        return {
          ...u,
          feePaid: nextStatus,
          feeAmount: amount,
          feeYear: 2026
        };
      }
      return u;
    }));
  };

  const addDonation = (donationData: Omit<Donation, 'id' | 'date' | 'reference' | 'status'>): Donation => {
    const newDonation: Donation = {
      ...donationData,
      id: `don-${Date.now()}`,
      reference: `AJTES-DON-${Math.floor(10000 + Math.random() * 90000)}`,
      status: 'succes',
      date: new Date().toISOString().split('T')[0]
    };

    setDonations(prev => [newDonation, ...prev]);

    if (donationData.projectId) {
      setProjects(prev =>
        prev.map(p => {
          if (p.id === donationData.projectId) {
            return {
              ...p,
              raisedBudget: p.raisedBudget + donationData.amount
            };
          }
          return p;
        })
      );
    }

    return newDonation;
  };

  const addProject = (project: Project) => {
    setProjects(prev => [project, ...prev]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const addNewsArticle = (newArticle: NewsArticle) => {
    setNews(prev => [newArticle, ...prev]);
  };

  const deleteNewsArticle = (id: string) => {
    setNews(prev => prev.filter(n => n.id !== id));
  };

  const addEvent = (newEvent: Event) => {
    setEvents(prev => [newEvent, ...prev]);
  };

  const addMediaItem = (newMedia: MediaItem) => {
    setMedia(prev => [newMedia, ...prev]);
  };

  const deleteMediaItem = (id: string) => {
    setMedia(prev => prev.filter(m => m.id !== id));
  };

  const addContactMessage = (msg: Omit<ContactMessage, 'id' | 'date' | 'status'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'nouveau'
    };
    setContactMessages(prev => [newMsg, ...prev]);
  };

  const deleteContactMessage = (id: string) => {
    setContactMessages(prev => prev.filter(m => m.id !== id));
  };

  const updateOfficialDocument = (updatedDoc: OfficialDocument) => {
    setOfficialDocuments(prev =>
      prev.map(d => (d.id === updatedDoc.id ? updatedDoc : d))
    );
  };

  return (
    <DataContext.Provider
      value={{
        projects,
        news,
        events,
        media,
        officialDocuments,
        committees,
        partners,
        donations,
        contactMessages,
        users,
        addDonation,
        addProject,
        deleteProject,
        addNewsArticle,
        deleteNewsArticle,
        addEvent,
        addMediaItem,
        deleteMediaItem,
        addContactMessage,
        deleteContactMessage,
        updateOfficialDocument,
        confirmUser,
        deleteUser,
        toggleUserFeeStatus
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
