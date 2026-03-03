
import React, { useState } from 'react';
import { 
  X, Play, Camera, Film, Layout, Maximize2, 
  MessageCircle, ExternalLink, Filter 
} from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  category: 'wedding' | 'birthday';
  title: string;
}

const mediaItems: MediaItem[] = [
  // Full Wedding Gallery
  { 
    id: 'w_1', 
    type: 'image', 
    category: 'wedding', 
    title: 'Grand Floral Mandap', 
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552' 
  },
  { 
    id: 'w_2', 
    type: 'image', 
    category: 'wedding', 
    title: 'Royal Reception Walkway', 
    url: 'https://i.pinimg.com/736x/6c/a2/d4/6ca2d4dcb3a7bf115525085f196ac900.jpg' 
  },
  { 
    id: 'vid_w_1', 
    type: 'video', 
    category: 'wedding', 
    title: 'Cinematic Entrance Highlights', 
    thumbnail: 'https://i.pinimg.com/736x/ba/70/53/ba7053030e83533946c8aeefe477b8d2.jpg', 
    url: 'https://www.instagram.com/reel/DRXBltekjDk/?igsh=MXBhZW92a3d2YTlqZg==' 
  },
  { 
    id: 'w_3', 
    type: 'image', 
    category: 'wedding', 
    title: 'Exotic Table Decor', 
    url: 'https://i.pinimg.com/736x/23/88/a0/2388a0e1a766fc9da53acd8bf832c388.jpg' 
  },
  { 
    id: 'w_4', 
    type: 'image', 
    category: 'wedding', 
    title: 'Traditional Petal Decor', 
    url: 'https://i.pinimg.com/736x/f2/57/23/f257237cd5f6fd6dddf9c03b78b082d1.jpg' 
  },

  // Full Birthday Gallery
  { 
    id: 'b_1', 
    type: 'image', 
    category: 'birthday', 
    title: 'Magical Princess Castle', 
    url: 'https://i.pinimg.com/736x/3f/ea/4d/3fea4dd06b0663be18ea58134432df9f.jpg' 
  },
  { 
    id: 'vid_b_1', 
    type: 'video', 
    category: 'birthday', 
    title: 'Neon Balloon Party Tour', 
    thumbnail: 'https://i.pinimg.com/1200x/39/ad/ab/39adab1a89ec9cdb19a1d0cd54c9de56.jpg', 
    url: 'https://www.instagram.com/reel/DTkm3qFkmxT/?igsh=MTk2dDR1eW9hd2lxcw==' 
  },
  { 
    id: 'b_2', 
    type: 'image', 
    category: 'birthday', 
    title: 'Pastel Dreams Setup', 
    url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce' 
  },
  { 
    id: 'b_3', 
    type: 'image', 
    category: 'birthday', 
    title: 'Whimsical Cake Display', 
    url: 'https://i.pinimg.com/736x/2a/1e/cd/2a1ecd92d86915808d6357c18cdd490a.jpg' 
  },
  { 
    id: 'b_4', 
    type: 'image', 
    category: 'birthday', 
    title: 'Modern Festive Setup', 
    url: 'https://i.pinimg.com/736x/7d/64/c2/7d64c2df283d158cafdd3ad0e79bc664.jpg' 
  },
];

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'image' | 'video'>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredItems = mediaItems.filter(item => 
    activeFilter === 'all' ? true : item.type === activeFilter
  );

  const handleEnquire = (title: string) => {
    const message = encodeURIComponent(`Hi Vanakkam Vandhanam! I am impressed by your "${title}" design and would like to get a quote for my upcoming event.`);
    window.open(`https://wa.me/919788742627?text=${message}`, '_blank');
  };

  const isInstagram = (url: string) => url.includes('instagram.com');

  return (
    <div className="min-h-screen pb-24 bg-royal-cream fade-in">
      {/* Page Header */}
      <div className="bg-royal-maroon py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-royal-gold/10 font-serif text-[12vw] font-bold select-none pointer-events-none">V V</div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6">Exquisite <span className="text-royal-gold">Artistry</span></h1>
          <p className="text-white/70 max-w-2xl mx-auto text-xl font-light">
            Luxury wedding stages and bespoke birthday wonderlands.
          </p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="sticky top-20 z-40 bg-royal-cream/90 backdrop-blur-lg py-8 border-b border-royal-gold/10">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`flex items-center gap-2 px-10 py-4 rounded-full font-bold transition-all shadow-sm ${activeFilter === 'all' ? 'bg-royal-gold text-white shadow-royal-gold/30' : 'bg-white text-royal-maroon border border-royal-gold/20 hover:bg-royal-gold/10'}`}
          >
            <Layout size={20} />
            Show All
          </button>
          <button 
            onClick={() => setActiveFilter('image')}
            className={`flex items-center gap-2 px-10 py-4 rounded-full font-bold transition-all shadow-sm ${activeFilter === 'image' ? 'bg-royal-gold text-white shadow-royal-gold/30' : 'bg-white text-royal-maroon border border-royal-gold/20 hover:bg-royal-gold/10'}`}
          >
            <Camera size={20} />
            Gallery Photos
          </button>
          <button 
            onClick={() => setActiveFilter('video')}
            className={`flex items-center gap-2 px-10 py-4 rounded-full font-bold transition-all shadow-sm ${activeFilter === 'video' ? 'bg-royal-gold text-white shadow-royal-gold/30' : 'bg-white text-royal-maroon border border-royal-gold/20 hover:bg-royal-gold/10'}`}
          >
            <Film size={20} />
            Cinematic Reels
          </button>
        </div>
      </div>

      {/* Media Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-700 break-inside-avoid border border-royal-gold/5"
              onClick={() => setSelectedMedia(item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Media Content */}
              <div className="relative overflow-hidden aspect-auto bg-gray-50">
                <img 
                  src={item.type === 'image' ? `${item.url}?auto=format&fit=crop&w=1000&q=85` : `${item.thumbnail}?auto=format&fit=crop&w=1000&q=85`} 
                  alt={item.title}
                  className={`w-full h-auto object-cover transition-transform duration-1000 ${hoveredId === item.id ? 'scale-110' : 'scale-100'}`}
                  loading="lazy"
                />
                
                {/* Visual Indicators */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-maroon/90 via-royal-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 z-20">
                  <span className="text-royal-gold text-xs font-bold uppercase tracking-[0.4em] mb-3 block">{item.category}</span>
                  <h3 className="text-white text-2xl font-serif font-bold mb-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                  <div className="flex items-center gap-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-md text-white border border-white/30">
                      {item.type === 'video' ? <Play size={18} fill="white" /> : <Maximize2 size={18} />}
                    </div>
                    <span className="text-white/80 text-sm font-medium">View Project Details</span>
                  </div>
                </div>

                {/* Static Play Icon for Videos */}
                {item.type === 'video' && hoveredId !== item.id && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="bg-white/30 backdrop-blur-xl p-8 rounded-full text-white border border-white/50 shadow-2xl">
                      <Play size={40} fill="white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-500">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" onClick={() => setSelectedMedia(null)} />
          
          <button 
            className="absolute top-8 right-8 text-white hover:text-royal-gold transition-colors z-[110]"
            onClick={() => setSelectedMedia(null)}
          >
            <X size={48} />
          </button>

          <div className="relative w-full max-w-6xl max-h-full flex flex-col items-center gap-8 z-10">
            {selectedMedia.type === 'image' ? (
              <div className="relative group">
                <img 
                  src={`${selectedMedia.url}?auto=format&fit=crop&w=1600&q=95`} 
                  alt={selectedMedia.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-3xl shadow-2xl border border-white/10"
                />
              </div>
            ) : (
              <div className={`w-full ${isInstagram(selectedMedia.url) ? 'max-w-md aspect-[9/16]' : 'aspect-video'} bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10`}>
                {isInstagram(selectedMedia.url) ? (
                  <iframe
                    src={`${selectedMedia.url.split('?')[0]}embed`}
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    allow="encrypted-media"
                  ></iframe>
                ) : (
                  <video 
                    src={selectedMedia.url} 
                    controls 
                    autoPlay 
                    className="w-full h-full"
                  />
                )}
              </div>
            )}

            <div className="text-center text-white space-y-6 max-w-3xl px-6">
              <div className="inline-block px-4 py-1 bg-royal-gold/20 text-royal-gold rounded-full text-xs font-bold uppercase tracking-widest border border-royal-gold/30 mb-2">
                {selectedMedia.category} Masterpiece
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">{selectedMedia.title}</h2>
              <p className="text-white/60 text-lg md:text-xl font-light italic leading-relaxed">
                Experience the magic of Vanakkam Vandhanam's bespoke {selectedMedia.category} decoration services, tailored to your unique vision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <button 
                  onClick={() => handleEnquire(selectedMedia.title)}
                  className="bg-[#25D366] text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 hover:scale-105 transition-transform shadow-xl shadow-green-500/20"
                >
                  <MessageCircle size={24} fill="white" />
                  Chat for this Design
                </button>
                <button 
                  onClick={() => setSelectedMedia(null)}
                  className="bg-white/5 border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
                >
                  Close Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="container mx-auto px-4 mt-32">
        <div className="bg-royal-maroon rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(128,0,0,0.3)] border border-royal-gold/10">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 p-16 font-serif text-[18vw] font-bold text-white select-none rotate-12">DECOR</div>
          </div>
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">Plan Your <span className="text-royal-gold italic">Dream</span> Event</h2>
            <p className="text-white/70 text-xl md:text-2xl max-w-3xl mx-auto font-light">
              From majestic mandaps to whimsical birthdays, we bring your imagination to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-6">
              <button 
                onClick={() => handleEnquire('Custom Vision Inquiry')}
                className="bg-royal-gold text-white px-14 py-6 rounded-2xl font-bold text-2xl hover:bg-yellow-600 transition-all shadow-2xl flex items-center justify-center gap-4 hover:-translate-y-2 duration-300"
              >
                <ExternalLink size={32} />
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
