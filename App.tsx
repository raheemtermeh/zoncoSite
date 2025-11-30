import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { SubsidiariesPage } from './components/SubsidiariesPage';
import { NewsPage } from './components/NewsPage';
import { CareersPage } from './components/CareersPage';
import { InvestorsPage } from './components/InvestorsPage';
import { ContactPage } from './components/ContactPage';
import { SustainabilityPage } from './components/SustainabilityPage';
import { InnovationPage } from './components/InnovationPage';
import { EventsPage } from './components/EventsPage';
import { FAQPage } from './components/FAQPage';
import { GalleryPage } from './components/GalleryPage';
// import { AIChat } from './components/AIChat'; // حذف شد
import { Footer } from './components/Footer';

// New Pages
import { AcademyPage } from './components/AcademyPage';
import { BlogPage } from './components/BlogPage';
import { CertificatesPage } from './components/CertificatesPage';
import { EthicsPage } from './components/EthicsPage';
import { PartnersPage } from './components/PartnersPage';
import { HelpCenterPage } from './components/HelpCenterPage';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onNavigate={setActivePage} />;
      case 'about': return <AboutPage />;
      case 'subsidiaries': return <SubsidiariesPage />;
      case 'news': return <NewsPage />;
      case 'careers': return <CareersPage />;
      case 'investors': return <InvestorsPage />;
      case 'contact': return <ContactPage />;
      case 'sustainability': return <SustainabilityPage />;
      case 'innovation': return <InnovationPage />;
      case 'events': return <EventsPage />;
      case 'faq': return <FAQPage />;
      case 'gallery': return <GalleryPage />;
      
      // New Routes
      case 'academy': return <AcademyPage />;
      case 'blog': return <BlogPage />;
      case 'certificates': return <CertificatesPage />;
      case 'ethics': return <EthicsPage />;
      case 'partners': return <PartnersPage />;
      case 'help': return <HelpCenterPage />;
      
      default: return <HomePage onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      {/* <AIChat /> حذف شد */}
    </div>
  );
}

export default App;