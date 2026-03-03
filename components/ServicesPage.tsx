
import React, { useState } from 'react';
import { 
  Users, PartyPopper, Gift, Flower, Star, Moon, 
  ArrowLeft, ShoppingBag, ExternalLink, ChevronRight,
  Info
} from 'lucide-react';

interface SubService {
  id: string;
  name: string;
  description: string;
  image: string;
  priceLevel: 'Premium' | 'Elite' | 'Grand';
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  mainImage: string;
  subServices: SubService[];
}

const serviceData: ServiceCategory[] = [
  {
    id: 'weddings',
    title: 'Wedding Decorations',
    description: 'Breathtaking mandaps and stage setups that blend tradition with grandeur.',
    icon: <Users size={24} />,
    mainImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    subServices: [
      { id: 'w1', name: 'Royal Mandap Design', description: 'Traditional pillar mandaps with heavy floral draping.', image: 'https://i.pinimg.com/736x/9b/7a/ea/9b7aea6560d9325ed6e696d8e1e10dcf.jpg', priceLevel: 'Grand' },
      { id: 'w2', name: 'Floral Aisle Path', description: 'Stunning walkway lined with fresh petals and lanterns.', image: 'https://i.pinimg.com/1200x/1d/fe/da/1dfedaee26b6a9a0d1ec2b29b627ae44.jpg', priceLevel: 'Premium' },
      { id: 'w3', name: 'Elite Reception Backdrop', description: 'Modern LED and fabric mix for the perfect reception stage.', image: 'https://i.pinimg.com/1200x/dc/e3/47/dce34792339973fa7ed800ffd1f96d39.jpg', priceLevel: 'Elite' },
    ]
  },
  {
    id: 'birthdays',
    title: 'Birthday Decorations',
    description: 'Magical themes and balloon wonderlands for every milestone.',
    icon: <PartyPopper size={24} />,
    mainImage: 'https://i.pinimg.com/736x/3f/76/54/3f76541ce9e3511547d0d53820e95a29.jpg',
    subServices: [
      { id: 'b1', name: 'Jungle Safari Theme', description: 'Life-size animal cutouts and lush greenery.', image: 'https://i.pinimg.com/736x/3c/f9/c3/3cf9c3f1b8c4dc9c835dff2a2242d3f7.jpg', priceLevel: 'Elite' },
      { id: 'b2', name: 'Princess Castle Setup', description: 'Elegant pink and gold castle backdrop with cloud balloons.', image: 'https://i.pinimg.com/736x/00/5c/a0/005ca0f451bf7a0e69900b59e8b0144a.jpg', priceLevel: 'Grand' },
      { id: 'b3', name: 'Minimalist Boho Birthday', description: 'Pampas grass and subtle balloon arches for adults.', image: 'https://i.pinimg.com/736x/6b/88/52/6b8852faf748a3f38fccddf64e844e77.jpg', priceLevel: 'Premium' },
    ]
  },
  {
    id: 'balloons',
    title: 'Balloon Artistry',
    description: 'Creative structures and organic garlands for dynamic visual impact.',
    icon: <Gift size={24} />,
    mainImage: 'https://i.pinimg.com/736x/f3/3a/27/f33a2789f890f64fefa26f939544d1da.jpg',
    subServices: [
      { id: 'ba1', name: 'Organic Garland Arch', description: 'Irregular sized balloons with floral inserts.', image: 'https://i.pinimg.com/1200x/08/5d/53/085d53db0a7ee93156c02a10f5bb4dc2.jpg', priceLevel: 'Premium' },
      { id: 'ba2', name: 'Entrance Balloon Tunnel', description: 'A grand walkthrough for your guests.', image: 'https://i.pinimg.com/736x/41/f9/ff/41f9ff229f6e400923f67d310eff3a6c.jpg', priceLevel: 'Elite' },
    ]
  },
  {
    id: 'festivals',
    title: 'Festival & Traditional',
    description: 'Vibrant Diwali, Pongal, and home transformation setups.',
    icon: <Moon size={24} />,
    mainImage: 'https://i.pinimg.com/736x/31/d2/8d/31d28d576405355ba0bcc96b657f7ef4.jpg',
    subServices: [
      { id: 'f1', name: 'Traditional Marigold Draping', description: 'Classic South Indian vibe with real marigolds.', image: 'https://i.pinimg.com/736x/bb/0a/9b/bb0a9bc062b25251eafe4dc79cf9dd26.jpg', priceLevel: 'Premium' },
      { id: 'f2', name: 'Temple Theme Stage', description: 'Intricate wood and floral work resembling a temple.', image: 'https://i.pinimg.com/736x/d2/45/3d/d2453da4c2f91b535a3eda56c1f8b3c0.jpg', priceLevel: 'Grand' },
    ]
  }
];

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

  const handleBook = (itemName: string) => {
    const message = encodeURIComponent(`Namaste Vanakkam Vandhanam! I am interested in booking the "${itemName}" service from your gallery. Please share more details.`);
    window.open(`https://wa.me/919788742627?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pb-20 fade-in">
      {/* Page Header */}
      <div className="bg-royal-maroon text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          {!selectedCategory ? (
            <>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Design <span className="text-royal-gold italic">Collections</span></h1>
              <p className="text-white/70 text-lg md:text-xl font-light">
                Browse through our curated selection of premium decoration services and find the perfect inspiration for your next big celebration.
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <button 
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-royal-gold font-bold mb-6 hover:text-white transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to All Services
              </button>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{selectedCategory.title}</h1>
              <p className="text-white/70 max-w-2xl">{selectedCategory.description}</p>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        {!selectedCategory ? (
          /* Categories Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.map((category) => (
              <div 
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-royal-gold/10 hover:-translate-y-2"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={category.mainImage} alt={category.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-maroon/80 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-royal-gold">
                      {category.icon}
                    </div>
                    <span className="text-white font-bold tracking-wider">{category.title.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-royal-maroon mb-2 group-hover:text-royal-gold transition-colors">{category.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{category.description}</p>
                  <div className="flex items-center justify-between text-royal-gold font-bold text-sm">
                    <span>{category.subServices.length} Design Ideas</span>
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Detailed Explorer View */
          <div className="space-y-12 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedCategory.subServices.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-royal-gold/5 group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="h-72 relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-royal-maroon/90 text-royal-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                      {item.priceLevel}
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-serif font-bold text-royal-maroon mb-3">{item.name}</h4>
                    <p className="text-gray-600 mb-6 font-light">{item.description}</p>
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => handleBook(item.name)}
                        className="w-full py-4 bg-royal-gold text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-yellow-600 transition-all shadow-md"
                      >
                        <ShoppingBag size={20} />
                        Book This Design
                      </button>
                      <button 
                        className="w-full py-3 text-royal-maroon font-semibold flex items-center justify-center gap-2 hover:bg-royal-cream rounded-xl transition-all"
                        onClick={() => handleBook(`Info for ${item.name}`)}
                      >
                        <Info size={18} />
                        Enquire Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Vision CTA */}
            <div className="bg-royal-gold/10 border-2 border-dashed border-royal-gold/30 rounded-[3rem] p-12 text-center max-w-4xl mx-auto">
              <Star className="text-royal-gold mx-auto mb-6" size={48} />
              <h3 className="text-3xl font-serif font-bold text-royal-maroon mb-4">Have a Custom Vision?</h3>
              <p className="text-gray-600 text-lg mb-8">
                Our design gallery is just the beginning. We specialize in bringing unique, never-seen-before concepts to life. Let's sketch your dream together.
              </p>
              <button 
                onClick={() => handleBook('Custom Unique Design')}
                className="bg-royal-maroon text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-all flex items-center gap-3 mx-auto shadow-xl"
              >
                <ExternalLink size={20} />
                Collaborate with Stylist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
