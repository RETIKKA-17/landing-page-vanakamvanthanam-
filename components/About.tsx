
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="py-24 bg-royal-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-maroon/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-4 border-2 border-royal-gold/30 rounded-2xl group-hover:inset-0 transition-all duration-500" />
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80" 
            alt="Vanakkam Vandhanam Team at Work" 
            className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute bottom-6 right-6 bg-royal-maroon p-8 rounded-xl text-white shadow-xl">
            <span className="block text-4xl font-serif font-bold text-royal-gold">10+</span>
            <span className="text-sm font-semibold tracking-widest uppercase">Years of Magic</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <div className="inline-block px-4 py-1 bg-royal-gold/10 rounded-full">
            <span className="text-royal-gold font-bold text-sm tracking-widest uppercase">Our Legacy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon leading-tight">
            Tradition Meets Contemporary <span className="text-royal-gold italic">Artistry</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Vanakkam Vandhanam isn't just a business; it's a passion project dedicated to making your life's biggest milestones visually breathtaking. 
            Rooted in Indian traditions yet inspired by global aesthetics, we create environments that speak your language.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Whether it's a grand royal wedding stage or a cozy home-style birthday setup, our focus remains on <strong>creativity, tradition, and absolute customer satisfaction.</strong>
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-royal-maroon font-bold text-xl font-serif">Personalized</h4>
              <p className="text-sm text-gray-500">Every design is custom-built for your taste.</p>
            </div>
            <div>
              <h4 className="text-royal-maroon font-bold text-xl font-serif">Timely</h4>
              <p className="text-sm text-gray-500">We value your time as much as your event.</p>
            </div>
          </div>

          <button className="border-2 border-royal-maroon text-royal-maroon px-8 py-3 rounded-full font-bold hover:bg-royal-maroon hover:text-white transition-all">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
};
