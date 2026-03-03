
import React from 'react';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'gallery') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (target === 'home' || target === 'services' || target === 'gallery') {
      onNavigate(target as 'home' | 'services' | 'gallery');
    } else {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-royal-cream py-16 border-t border-royal-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div 
            className="font-serif text-3xl font-bold text-royal-maroon mb-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            Vanakkam Vandhanam
          </div>
          <div className="text-royal-gold text-sm tracking-wide font-bold mb-8">
            Party-na 🙏 வணக்கம் வந்தனம் dhaan !
          </div>
          
          <div className="flex gap-6 mb-12">
            <a 
              href="https://www.instagram.com/vanakkam_vandhanam_decoration?igsh=dHYwZDlqMXNqZnc=" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full text-royal-maroon hover:bg-royal-gold hover:text-white transition-all shadow-md"
            >
              <Instagram size={20} />
            </a>
            <a href="#" className="p-4 bg-white rounded-full text-royal-maroon hover:bg-royal-gold hover:text-white transition-all shadow-md">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-4 bg-white rounded-full text-royal-maroon hover:bg-royal-gold hover:text-white transition-all shadow-md">
              <Twitter size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-semibold text-royal-maroon/60 uppercase tracking-widest">
            <a href="#home" onClick={(e) => handleNav(e, 'home')} className="hover:text-royal-gold transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleNav(e, '#about')} className="hover:text-royal-gold transition-colors">About</a>
            <a href="#services" onClick={(e) => handleNav(e, 'services')} className="hover:text-royal-gold transition-colors">Services</a>
            <a href="#gallery" onClick={(e) => handleNav(e, 'gallery')} className="hover:text-royal-gold transition-colors">Gallery</a>
            <a href="#contact" onClick={(e) => handleNav(e, '#contact')} className="hover:text-royal-gold transition-colors">Contact</a>
          </div>

          <div className="w-full max-w-4xl h-px bg-royal-gold/20 mb-8" />

          <p className="text-royal-maroon/40 text-sm flex items-center gap-2">
            &copy; {new Date().getFullYear()} Vanakkam Vandhanam. Crafted with <Heart size={14} className="text-red-500 fill-red-500" /> for your special moments.
          </p>
        </div>
      </div>
    </footer>
  );
};
