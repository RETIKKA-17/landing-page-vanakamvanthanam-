
import React from 'react';
import { ShieldCheck, Zap, Palette, Clock, Heart } from 'lucide-react';

const reasons = [
  {
    title: 'Experienced Team',
    description: 'Expert decorators with over a decade of industry experience.',
    icon: <ShieldCheck className="text-royal-gold" />,
  },
  {
    title: 'Custom Designs',
    description: 'We listen to your vision and bring it to life with precision.',
    icon: <Palette className="text-royal-gold" />,
  },
  {
    title: 'On-time Setup',
    description: 'Punctuality is our promise. Your stage is ready before your guests arrive.',
    icon: <Clock className="text-royal-gold" />,
  },
  {
    title: 'Affordable Luxury',
    description: 'Premium aesthetics at prices that respect your budget.',
    icon: <Zap className="text-royal-gold" />,
  },
  {
    title: 'Customer First',
    description: 'Your satisfaction is our ultimate reward and brand legacy.',
    icon: <Heart className="text-royal-gold" />,
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-24 bg-royal-maroon text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Vanakkam <span className="text-royal-gold">Vandhanam?</span></h2>
            <p className="text-white/70 text-lg mb-8">
              We don't just decorate; we create atmospheres that evoke emotion and celebrate life's most beautiful moments.
            </p>
            <button className="bg-royal-gold text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition-all shadow-xl">
              Start Your Project
            </button>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-6 items-start p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/10 group">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                  {/* Fixed: Use any type to allow size property in cloneElement for Lucide icons */}
                  {React.cloneElement(reason.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-royal-gold mb-2">{reason.title}</h4>
                  <p className="text-white/60 font-light">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
