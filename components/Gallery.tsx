
import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1519741497674-611481863552', // Wedding Stage
  'https://images.unsplash.com/photo-1530103043960-ef38714abb15', // Birthday Decor
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622', // Wedding Reception
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce', // Birthday Balloons
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed', // Wedding Entrance
  'https://images.unsplash.com/photo-1533294485618-f58a741e0b0d', // Birthday Table
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8', // Wedding Details
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3', // Birthday Party
];

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-24 bg-royal-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">Our Work Gallery</h2>
          <p className="text-royal-gold font-medium tracking-[0.3em] uppercase text-sm">Wedding & Birthday Masterpieces</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl cursor-pointer bg-royal-maroon/5 shadow-md hover:shadow-xl transition-all duration-500"
              onClick={() => setSelectedImage(`${src}?auto=format&fit=crop&q=90`)}
            >
              <img 
                src={`${src}?auto=format&fit=crop&w=800&q=80`} 
                alt={`Premium Decoration ${index + 1}`} 
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-royal-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0" onClick={() => setSelectedImage(null)} />
          <button 
            className="absolute top-6 right-6 text-white hover:text-royal-gold transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={48} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged celebration decoration" 
            className="relative max-w-full max-h-full object-contain rounded-xl shadow-2xl z-10"
          />
        </div>
      )}
    </div>
  );
};
