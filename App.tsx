
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { ServicesPage } from './components/ServicesPage';
import { GalleryPage } from './components/GalleryPage';

type ViewState = 'home' | 'services' | 'gallery';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<ViewState>('home');

  // Handle navigation from Navbar
  const handleNavigate = (page: ViewState) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-royal-cream text-sans">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="transition-opacity duration-500">
        {currentPage === 'home' && (
          <>
            <section id="home" className="scroll-mt-28">
              <Hero onBookClick={() => handleNavigate('services')} />
            </section>
            
            <section id="about" className="scroll-mt-28">
              <About />
            </section>
            
            <section id="services" className="scroll-mt-28">
              <Services />
            </section>
            
            <section id="gallery" className="scroll-mt-28">
              <Gallery />
            </section>
            
            <section id="why-us" className="scroll-mt-28">
              <WhyChooseUs />
            </section>
            
            <section id="contact" className="scroll-mt-28">
              <Contact />
            </section>
          </>
        )}

        {currentPage === 'services' && (
          <div className="pt-20">
            <ServicesPage />
          </div>
        )}

        {currentPage === 'gallery' && (
          <div className="pt-20">
            <GalleryPage />
          </div>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      
      {/* Premium Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;