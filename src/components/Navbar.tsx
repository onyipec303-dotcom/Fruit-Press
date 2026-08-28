import React from 'react';
import { STORE_CONFIG } from '../config';
import { ShoppingBag, Truck, Phone, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FFFBF5]/95 border-b border-orange-100 shadow-xs transition-all">
      {/* Top micro banner for nationwide delivery & direct call line */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white text-[11px] sm:text-xs font-bold py-1.5 px-4 text-center tracking-wider flex items-center justify-center flex-wrap gap-x-4 gap-y-1">
        <div className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 inline-block" />
          <span>FREE DELIVERY NATIONWIDE ACROSS NIGERIA</span>
        </div>
        <div className="hidden sm:inline-block opacity-60">•</div>
        <div className="flex items-center gap-2">
          <a
            href={STORE_CONFIG.supportCallUrl}
            className="inline-flex items-center gap-1 hover:underline hover:text-orange-100 transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span>Call/WhatsApp: {STORE_CONFIG.supportCallLine}</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand identity: Peculiar Stores */}
        <a href="#" className="group flex items-center">
          <BrandLogo size="md" />
        </a>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick WhatsApp / Call button */}
          <a
            href={STORE_CONFIG.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-all cursor-pointer"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{STORE_CONFIG.whatsappDisplayNumber}</span>
          </a>

          {/* Price Callout */}
          <div className="hidden sm:flex flex-col text-right pr-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Offer Price</span>
            <span className="text-sm font-black text-[#2D241E]">
              {STORE_CONFIG.currencySymbol}{STORE_CONFIG.unitPriceNaira.toLocaleString()}
            </span>
          </div>
          
          <button
            onClick={onOrderClick}
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-black tracking-wider uppercase shadow-button-glow transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>ORDER NOW</span>
          </button>
        </div>
      </div>
    </header>
  );
};

