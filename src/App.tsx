/**
 * ============================================================================
 * MANUAL HAND FRUIT PRESS — PREMIUM SALES LANDING PAGE
 * ============================================================================
 * 
 * All operational settings (WhatsApp number, Google Sheet Webhook URL,
 * Product Price, Currency) are centrally configured in:
 * `src/config.ts` (see the STORE_CONFIG block at the top).
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveLeverSimulator } from './components/InteractiveLeverSimulator';
import { ProductShowcase } from './components/ProductShowcase';
import { FeaturesSection } from './components/FeaturesSection';
import { ProcessSection } from './components/ProcessSection';
import { AudienceGrid } from './components/AudienceGrid';
import { PerspectiveSection } from './components/PerspectiveSection';
import { OrderSection } from './components/OrderSection';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { STORE_CONFIG } from './config';

export default function App() {
  const scrollToOrder = () => {
    const orderElement = document.getElementById('order-section');
    if (orderElement) {
      orderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDirectWhatsApp = () => {
    const defaultMsg = encodeURIComponent(
      `Hello! I am interested in ordering the ${STORE_CONFIG.productName} for ₦${STORE_CONFIG.unitPriceNaira.toLocaleString()} with Free Delivery. Please provide details.`
    );
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 flex flex-col selection:bg-orange-600 selection:text-white">
      
      {/* Sticky Top Header Navigation */}
      <Navbar onOrderClick={scrollToOrder} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero onOrderClick={scrollToOrder} />

        {/* Considered Transition Divider */}
        <SectionDivider variant="metallic-glow" />

        {/* 2. Signature Creative Moment: Interactive Lever Simulator */}
        <InteractiveLeverSimulator onOrderClick={scrollToOrder} />

        {/* Considered Transition Divider */}
        <SectionDivider variant="amber-line" />

        {/* 3. Product Power & Mechanics Showcase */}
        <ProductShowcase onOrderClick={scrollToOrder} />

        {/* Considered Transition Divider */}
        <SectionDivider variant="metallic-glow" />

        {/* 4. Core Features & Benefits */}
        <FeaturesSection onOrderClick={scrollToOrder} />

        {/* Considered Transition Divider */}
        <SectionDivider variant="subtle-wave" />

        {/* 5. Visual 3-Step Juicing Process */}
        <ProcessSection onOrderClick={scrollToOrder} />

        {/* Considered Transition Divider */}
        <SectionDivider variant="amber-line" />

        {/* 6. Target Audience & Commercial/Domestic Uses */}
        <AudienceGrid onOrderClick={scrollToOrder} />

        {/* Considered Transition Divider */}
        <SectionDivider variant="metallic-glow" />

        {/* 7. Mindset, Objection Handling & Confidence Guarantee */}
        <PerspectiveSection onOrderClick={scrollToOrder} />

        {/* Considered Transition Divider */}
        <SectionDivider variant="amber-line" />

        {/* 8. The Complete Order Offer & Validated Form Funnel */}
        <OrderSection />

      </main>

      {/* Public Footer */}
      <Footer onOrderClick={scrollToOrder} />

      {/* Floating Bottom Quick Action Bar on Mobile / Desktop */}
      <aside aria-label="Quick order actions" className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5">
        <button
          onClick={handleDirectWhatsApp}
          type="button"
          aria-label="Chat with seller on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Chat with seller on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </button>

        <button
          onClick={scrollToOrder}
          type="button"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-black tracking-wider uppercase shadow-button-glow hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>ORDER (₦25,000)</span>
        </button>
      </aside>

    </div>
  );
}
