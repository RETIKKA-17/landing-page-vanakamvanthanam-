
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'services' | 'gallery') => void;
  currentPage: 'home' | 'services' | 'gallery';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: 'services' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavAction = (e: React.MouseEvent, link: { name: string, href: string }) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (link.name === 'Home' || link.name === 'Services' || link.name === 'Gallery') {
      onNavigate(link.href as 'home' | 'services' | 'gallery');
      return;
    }

    if (currentPage !== 'home') {
      onNavigate('home');
      // Wait for state change and scroll
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const isDarkText = isScrolled || currentPage !== 'home';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDarkText ? 'bg-royal-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div 
          className="flex flex-col cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <span className={`font-serif text-2xl font-bold tracking-tighter ${isDarkText ? 'text-royal-maroon' : 'text-white'}`}>
            Vanakkam Vandhanam
          </span>
          <span className={`text-[11px] tracking-wider font-semibold ${isDarkText ? 'text-royal-gold' : 'text-royal-gold/90'}`}>
            Party-na 🙏 வணக்கம் வந்தனம் dhaan !
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavAction(e, link)}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-royal-gold cursor-pointer ${isDarkText ? 'text-royal-maroon' : 'text-white'} ${currentPage === link.href ? 'text-royal-gold border-b-2 border-royal-gold' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/919788742627"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-royal-gold text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-yellow-600 transition-all transform hover:scale-105"
          >
            <Phone size={16} />
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isDarkText ? 'text-royal-maroon' : 'text-white'} />
          ) : (
            <Menu className={isDarkText ? 'text-royal-maroon' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-royal-cream shadow-xl border-t border-royal-gold/20 fade-in">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavAction(e, link)}
                className={`text-royal-maroon text-lg font-semibold uppercase tracking-widest border-b border-royal-gold/10 pb-2 cursor-pointer ${currentPage === link.href ? 'text-royal-gold' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919788742627"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-royal-maroon text-white px-6 py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Contact on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
