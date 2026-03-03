
import React from 'react';
import { marketingContent } from '../marketing';
import { X } from 'lucide-react';

export const MarketingPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-start p-4 pointer-events-none">
      <div className="bg-white w-full max-w-2xl rounded-t-3xl shadow-2xl pointer-events-auto overflow-hidden animate-in slide-in-from-bottom duration-500 max-h-[80vh] flex flex-col">
        <div className="p-6 bg-royal-maroon text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">Digital Marketing Kit</h3>
          <button onClick={onClose}><X /></button>
        </div>
        
        <div className="p-8 overflow-y-auto space-y-8 flex-1">
          <section>
            <h4 className="text-royal-gold font-bold uppercase text-xs mb-3">Google My Business Bio</h4>
            <p className="bg-gray-50 p-4 rounded-xl text-sm border">{marketingContent.gmbDescription}</p>
          </section>

          <section>
            <h4 className="text-royal-gold font-bold uppercase text-xs mb-3">Instagram Bio</h4>
            <p className="bg-gray-50 p-4 rounded-xl text-sm border whitespace-pre-wrap">{marketingContent.instagramBio}</p>
          </section>

          <section>
            <h4 className="text-royal-gold font-bold uppercase text-xs mb-3">WhatsApp Auto-Reply</h4>
            <p className="bg-gray-50 p-4 rounded-xl text-sm border whitespace-pre-wrap">{marketingContent.whatsappAutoReply}</p>
          </section>

          <section>
            <h4 className="text-royal-gold font-bold uppercase text-xs mb-3">Post Captions</h4>
            <div className="space-y-4">
              {marketingContent.captions.map((cap, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl text-sm border">
                  <span className="font-bold text-royal-maroon block mb-2">{cap.theme}</span>
                  {cap.text}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
