
import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

interface HeroProps {
  onBookClick?: () => void;
}

const BlurredMarigold: React.FC<{ isYellow: boolean, index: number, extraClasses?: string }> = ({ isYellow, index, extraClasses = "" }) => {
  return (
    <div 
      className={`w-5 h-5 md:w-6 md:h-6 rounded-full shadow-inner transform transition-transform duration-1000 ${extraClasses}`}
      style={{
        background: isYellow 
          ? 'radial-gradient(circle at center, #FFD700, #FFA500)' 
          : 'radial-gradient(circle at center, #D40000, #800000)',
        filter: 'blur(2px)',
        opacity: 0.7,
        animation: `swaySide ${4 + (index % 3)}s ease-in-out infinite alternate`,
        animationDelay: `${index * 0.2}s`
      }}
    />
  );
};

const MarigoldGarland: React.FC<{ side: 'left' | 'right' }> = ({ side }) => {
  const items = Array.from({ length: 20 });
  return (
    <div className={`absolute top-0 ${side === 'left' ? 'left-0 md:left-2' : 'right-0 md:right-2'} z-20 pointer-events-none flex flex-col items-center select-none h-full`}>
      {/* Decorative String */}
      <div className="w-px h-full bg-royal-gold/10 absolute top-0" />
      
      <div className="flex flex-col items-center pt-2">
        {items.map((_, i) => (
          <BlurredMarigold key={i} isYellow={i % 2 === 0} index={i} extraClasses="my-1" />
        ))}
      </div>
    </div>
  );
};

const TopMarigoldArch: React.FC = () => {
  // Increased count to ensure no gaps on extra wide screens
  const count = 50;
  return (
    <div className="absolute top-0 left-0 w-full z-20 pointer-events-none flex justify-between px-1 pt-0.5 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <BlurredMarigold 
          key={i} 
          isYellow={i % 2 === 0} 
          index={i} 
          extraClasses={`mt-${(i % 3)} md:mt-${(i % 2)}`} // Tighter vertical positioning
        />
      ))}
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Complete Festive Frame */}
      <TopMarigoldArch />
      <MarigoldGarland side="left" />
      <MarigoldGarland side="right" />

      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-royal-maroon/60 to-black/30" />
      </div>

      {/* Hero Content - Expanded max-width for full screen breathability */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 text-center text-white z-10 fade-in">
        <h2 className="text-royal-gold font-serif italic text-xl md:text-3xl mb-4 tracking-[0.3em] uppercase">
          Namaste & Welcome
        </h2>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-[1.1]">
          Making Every <span className="text-royal-gold">Celebration</span> Beautiful
        </h1>
        <p className="text-xl md:text-3xl font-light mb-12 max-w-3xl mx-auto tracking-wide text-gray-200">
          Party-na 🙏 <span className="font-semibold text-royal-gold">வணக்கம் வந்தனம்</span> dhaan !
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          <button 
            onClick={onBookClick}
            className="w-full sm:w-auto bg-royal-gold text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-4 hover:bg-yellow-600 transition-all group shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1"
          >
            <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
            Book Your Decoration
          </button>
          <a 
            href="https://wa.me/919788742627"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-4 hover:bg-white/20 transition-all hover:-translate-y-1"
          >
            <MessageCircle size={24} className="text-green-400" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-royal-gold rounded-full" />
        </div>
      </div>

      <style>{`
        @keyframes swaySide {
          from { transform: translateX(-4px) scale(0.97); }
          to { transform: translateX(4px) scale(1.03); }
        }
      `}</style>
    </div>
  );
};
