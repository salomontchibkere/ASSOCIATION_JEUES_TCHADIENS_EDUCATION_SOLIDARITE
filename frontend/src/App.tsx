import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { HeroSection } from './components/home/HeroSection';
import { ActionFields } from './components/home/ActionFields';
import { Realizations } from './components/home/Realizations';

import { AboutView } from './components/about/AboutView';
import { OfficialDocuments } from './components/about/OfficialDocuments';
import { ProjectsView } from './components/projects/ProjectsView';
import { NewsEventsView } from './components/news/NewsEventsView';
import { GalleryView } from './components/gallery/GalleryView';
import { DonationView } from './components/donation/DonationView';
import { MemberSpaceView } from './components/member/MemberSpaceView';
import { AdminDashboardView } from './components/admin/AdminDashboardView';
import { ContactView } from './components/contact/ContactView';
import { CommitteesView } from './components/committees/CommitteesView';

function AppContent() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [memberAuthMode, setMemberAuthMode] = useState<'login' | 'register'>('register');

  const handleNavigateToMember = (mode: 'login' | 'register') => {
    setMemberAuthMode(mode);
    setCurrentTab('member');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <>
            <HeroSection setCurrentTab={setCurrentTab} />
            <ActionFields />
            <Realizations />
          </>
        );
      case 'about':
        return <AboutView />;
      case 'documents':
        return (
          <div style={{ paddingTop: '2rem' }}>
            <OfficialDocuments />
          </div>
        );
      case 'projects':
        return <ProjectsView setCurrentTab={setCurrentTab} />;
      case 'news':
        return <NewsEventsView />;
      case 'gallery':
        return <GalleryView />;
      case 'committees':
        return <CommitteesView setCurrentTab={setCurrentTab} />;
      case 'donate':
        return <DonationView />;
      case 'member':
        return <MemberSpaceView initialMode={memberAuthMode} setCurrentTab={setCurrentTab} />;
      case 'admin':
        return <AdminDashboardView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <>
            <HeroSection setCurrentTab={setCurrentTab} />
            <ActionFields />
            <Realizations />
          </>
        );
    }
  };

  return (
    <div className="app-layout">
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        navigateToAuth={handleNavigateToMember}
      />
      <main className="main-content">
        {renderTabContent()}
      </main>
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <DataProvider>
          <AppContent />
        </DataProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
