import React from 'react';
import { STORE_CONFIG } from '../config';
import { MessageCircle, Phone, Truck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOrderClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOrderClick }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" className="[&_span]:text-white" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Make Fresh Juice Easier — Without Electricity, Batteries or Stress. Distributed and guaranteed across Nigeria exclusively by {STORE_CONFIG.businessName}.
            </p>
          </div>

          {/* Offer & Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Customer Support & Delivery
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Truck className="w-4 h-4" />
                <span>FREE DELIVERY ACROSS NIGERIA</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <a href={STORE_CONFIG.supportCallUrl} className="hover:underline hover:text-white">
                  Call Line: {STORE_CONFIG.supportCallLine}
                </a>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <MessageCircle className="w-3.5 h-3.5" />
                <a href={STORE_CONFIG.whatsappDirectUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp: {STORE_CONFIG.whatsappDisplayNumber}
                </a>
              </div>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="space-y-3 flex flex-col items-start md:items-end justify-center">
            <button
              onClick={onOrderClick}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-black tracking-wider uppercase shadow-button-glow transition-all active:scale-95 cursor-pointer"
            >
              <span>ORDER YOUR PRESS TODAY</span>
            </button>
            <span className="text-[11px] text-slate-400">
              {STORE_CONFIG.businessName} • Verified Vendor
            </span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {STORE_CONFIG.businessName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Manual Hand Fruit Press • 100% Pure Fresh Juice</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

