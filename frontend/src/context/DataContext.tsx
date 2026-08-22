import React, { createContext, useContext, useState } from 'react';
import type { Project, NewsArticle, Event, Donation, MediaItem, OfficialDocument, Committee, Partner, ContactMessage } from '../types';
import {
  initialProjects,
  initialNews,
  initialEvents,
  initialMedia,
  initialOfficialDocuments,
  initialCommittees,
  initialPartners,
  initialDonations
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

  // Actions
  addDonation: (donationData: Omit<Donation, 'id' | 'date' | 'reference' | 'status'>) => Donation;
  addProject: (project: Project) => void;
  addNewsArticle: (news: NewsArticle) => void;
  addEvent: (event: Event) => void;
  addMediaItem: (media: MediaItem) => void;
  addContactMessage: (msg: Omit<ContactMessage, 'id' | 'date' | 'status'>) => void;
  updateOfficialDocument: (doc: OfficialDocument) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [news, setNews] = useState<NewsArticle[]>(initialNews);
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [media, setMedia] = useState<MediaItem[]>(initialMedia);
  const [officialDocuments, setOfficialDocuments] = useState<OfficialDocument[]>(initialOfficialDocuments);
  const [committees] = useState<Committee[]>(initialCommittees);
  const [partners] = useState<Partner[]>(initialPartners);
  const [donations, setDonations] = useState<Donation[]>(initialDonations);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);

  const addDonation = (donationData: Omit<Donation, 'id' | 'date' | 'reference' | 'status'>): Donation => {
    const newDonation: Donation = {
      ...donationData,
      id: `don-${Date.now()}`,
      reference: `AJTES-DON-${Math.floor(10000 + Math.random() * 90000)}`,
      status: 'succes',
      date: new Date().toISOString().split('T')[0]
    };

    setDonations(prev => [newDonation, ...prev]);

    // If donation targets a specific project, update raised budget
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

  const addNewsArticle = (newArticle: NewsArticle) => {
    setNews(prev => [newArticle, ...prev]);
  };

  const addEvent = (newEvent: Event) => {
    setEvents(prev => [newEvent, ...prev]);
  };

  const addMediaItem = (newMedia: MediaItem) => {
    setMedia(prev => [newMedia, ...prev]);
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
        addDonation,
        addProject,
        addNewsArticle,
        addEvent,
        addMediaItem,
        addContactMessage,
        updateOfficialDocument
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
