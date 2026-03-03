
import React, { useState } from 'react';
import { Sparkles, X, Send } from 'lucide-react';
import { getDecorationIdeas } from '../services/gemini';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventType, setEventType] = useState('Wedding');
  const [colorPref, setColorPref] = useState('Royal Gold & Maroon');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const handleGetInspiration = async () => {
    setLoading(true);
    const result = await getDecorationIdeas(eventType, colorPref);
    setSuggestion(result || "Could not fetch suggestions. Please try again.");
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] bg-royal-gold text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse flex items-center gap-2 group"
      >
        <div className="flex items-center gap-2">
          <Sparkles size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">AI Stylist</span>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative bg-royal-cream w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="bg-royal-maroon p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <Sparkles className="text-royal-gold" />
                <h3 className="text-xl font-serif font-bold">Smart Stylist</h3>
              </div>
              <button onClick={() => setIsOpen(false)}><X /></button>
            </div>

            <div className="p-8 space-y-6">
              {!suggestion ? (
                <>
                  <p className="text-gray-600 italic">Describe your dream event and let our AI stylist suggest unique concepts.</p>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-royal-maroon/50 tracking-widest">Event Type</label>
                      <input 
                        type="text" 
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-royal-gold/30 focus:outline-none focus:border-royal-gold bg-white text-black font-medium"
                        placeholder="e.g. Traditional Wedding, Outdoor Haldi"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-royal-maroon/50 tracking-widest">Preferred Palette</label>
                      <input 
                        type="text" 
                        value={colorPref}
                        onChange={(e) => setColorPref(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-royal-gold/30 focus:outline-none focus:border-royal-gold bg-white text-black font-medium"
                        placeholder="e.g. Pastels, Bright Festive"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleGetInspiration}
                    disabled={loading}
                    className="w-full py-4 bg-royal-gold text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-yellow-600 transition-all"
                  >
                    {loading ? "Generating Magic..." : "Get Instant Ideas"}
                  </button>
                </>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  <div className="bg-white p-6 rounded-2xl border border-royal-gold/20 leading-relaxed text-gray-700 whitespace-pre-wrap font-light">
                    {suggestion}
                  </div>
                  <button 
                    onClick={() => setSuggestion(null)}
                    className="w-full py-3 text-royal-maroon font-bold border-2 border-royal-maroon rounded-xl hover:bg-royal-maroon hover:text-white transition-all"
                  >
                    Try Another Vision
                  </button>
                  <a 
                    href="https://wa.me/919788742627"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
                  >
                    Discuss these with us
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
