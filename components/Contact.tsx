
import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-maroon mb-6">Let's Create Magic Together</h2>
              <p className="text-gray-600 text-lg">
                Have a vision for your next event? Reach out to us for a free consultation and personalized quote.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-royal-cream text-royal-maroon rounded-full group-hover:bg-royal-gold group-hover:text-white transition-colors shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-royal-maroon">Our Design Studio</h5>
                  <p className="text-gray-500">Matha Electronics Nearby, Abirami Amman Kovil Street, Dindigul</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-royal-cream text-royal-maroon rounded-full group-hover:bg-royal-gold group-hover:text-white transition-colors shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-royal-maroon">Call Us Anytime</h5>
                  <a href="tel:919788742627" className="text-gray-500 hover:text-royal-gold transition-colors font-medium">9788742627</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-royal-cream text-royal-maroon rounded-full group-hover:bg-royal-gold group-hover:text-white transition-colors shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-royal-maroon">Email Enquiries</h5>
                  <a href="mailto:hello@vanakkamvandhanam.com" className="text-gray-500 hover:text-royal-gold transition-colors">hello@vanakkamvandhanam.com</a>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/919788742627"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-lg"
            >
              <MessageSquare size={28} fill="white" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-royal-cream p-8 md:p-12 rounded-[2rem] shadow-xl border border-royal-gold/10">
              <h3 className="text-2xl font-serif font-bold text-royal-maroon mb-8 text-center uppercase tracking-widest">Enquiry Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-royal-maroon/70">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full px-6 py-4 rounded-xl border border-royal-gold/20 focus:outline-none focus:ring-2 focus:ring-royal-gold/50 transition-all bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-royal-maroon/70">Phone Number</label>
                    <input type="tel" required placeholder="+91 00000 00000" className="w-full px-6 py-4 rounded-xl border border-royal-gold/20 focus:outline-none focus:ring-2 focus:ring-royal-gold/50 transition-all bg-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-royal-maroon/70">Event Type</label>
                  <select className="w-full px-6 py-4 rounded-xl border border-royal-gold/20 focus:outline-none focus:ring-2 focus:ring-royal-gold/50 transition-all bg-white">
                    <option>Wedding Decoration</option>
                    <option>Birthday Party</option>
                    <option>Corporate Event</option>
                    <option>Festival Setup</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-royal-maroon/70">Your Vision</label>
                  <textarea rows={4} required placeholder="Describe what you have in mind..." className="w-full px-6 py-4 rounded-xl border border-royal-gold/20 focus:outline-none focus:ring-2 focus:ring-royal-gold/50 transition-all bg-white" />
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-5 rounded-xl font-bold text-lg transition-all ${
                    formStatus === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-royal-maroon text-white hover:bg-black shadow-lg hover:shadow-royal-maroon/20'
                  }`}
                >
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'success' && '✓ Message Sent!'}
                </button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-royal-gold font-bold italic text-lg">
                  Party-na 🙏 வணக்கம் வந்தனம் dhaan !
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
