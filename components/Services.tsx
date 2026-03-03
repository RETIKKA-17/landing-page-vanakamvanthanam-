
import React from 'react';
import { Flower, PartyPopper, Users, Star, Gift, Moon } from 'lucide-react';

const services = [
  {
    title: 'Wedding Decorations',
    description: 'Grand mandaps, floral aisles, and royal stage setups for your big day.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    icon: <Users className="text-royal-gold" />,
  },
  {
    title: 'Birthday Decorations',
    description: 'Themed setups, balloon arches, and magical wonderlands for all ages.',
    image: 'https://i.pinimg.com/736x/a2/c1/ea/a2c1eaa36d1d9e3b282ef571c2cfcb1e.jpg',
    icon: <PartyPopper className="text-royal-gold" />,
  },
  {
    title: 'Balloon Decorations',
    description: 'Creative balloon art, structures, and organic garlands for dynamic impact.',
    image: 'https://i.pinimg.com/1200x/25/25/95/25259575f9799543a26220a077ee4846.jpg',
    icon: <Gift className="text-royal-gold" />,
  },
  {
    title: 'Flower Decorations',
    description: 'Fresh exotic blossoms crafted into traditional and modern arrangements.',
    image: 'https://i.pinimg.com/736x/ab/c2/61/abc2618033aab38e910151c9a8753088.jpg',
    icon: <Flower className="text-royal-gold" />,
  },
  {
    title: 'Stage & Event Setup',
    description: 'Professional lighting and corporate stage branding that impresses.',
    image: 'https://i.pinimg.com/736x/bb/bd/6f/bbbd6f7532d933baf24e387adf91b790.jpg',
    icon: <Star className="text-royal-gold" />,
  },
  {
    title: 'Festival Decorations',
    description: 'Vibrant Diwali, Ganpati, and Pongal home and office transformations.',
    image: 'https://i.pinimg.com/736x/2a/7d/ad/2a7dadbec7769c6930b6d132aba954bb.jpg',
    icon: <Moon className="text-royal-gold" />,
  },
];

export const Services: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">Our Premium Services</h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-6" />
          <p className="text-gray-600">
            We offer a comprehensive suite of decoration services designed to transform any space into a breathtaking environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-royal-cream rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-royal-gold/10"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                    {/* Fixed: Use any type to allow size property in cloneElement for Lucide icons */}
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-3 group-hover:text-royal-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {service.description}
                </p>
                <button className="text-royal-gold font-bold flex items-center gap-2 group/btn">
                  Explore Designs 
                  <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
