import React from 'react';
import { motion } from 'motion/react';
import { STORE_CONFIG } from '../config';
import { PRODUCT_IMAGES } from '../productImages';
import { CheckCircle2, ShieldCheck, Truck, Sparkles, ArrowDown, ZapOff, Battery, Flame, Play, Eye } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section className="relative pt-8 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-200/40 via-amber-100/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center">
        
        {/* Urgent Problem Question Hook Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/90 border border-orange-300 text-orange-950 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-xs mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping" />
          <span>STILL SQUEEZING FRUIT BY HAND?</span>
        </motion.div>

        {/* Verbatim Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto"
        >
          Make Fresh Juice Easier — Without Electricity, Batteries or Stress.
        </motion.h1>

        {/* Verbatim Subtext / Empathy Copy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto space-y-3 leading-relaxed font-normal"
        >
          <p>
            You want fresh orange, lemon or lime juice…
          </p>
          <p className="font-medium text-slate-800">
            But squeezing fruit by hand can be tiring, messy and time-consuming—especially when you're preparing several fruits for your family or customers.
          </p>
          <p className="text-orange-700 font-bold text-lg sm:text-xl pt-1">
            There’s an easier way.
          </p>
        </motion.div>

        {/* Product Photo Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-orange-200 group max-w-2xl mx-auto bg-slate-950 flex items-center justify-center min-h-[360px] sm:min-h-[420px]"
        >
          <img
            src={PRODUCT_IMAGES.hero}
            alt="Manual Hand Fruit Press with solid cast metal lever"
            className="w-full max-h-[420px] object-contain transform group-hover:scale-102 transition-transform duration-500 p-2"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />
          
          {/* Overlaid Badges */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Authentic Product Photo
            </span>
            <span className="px-3 py-1.5 rounded-full bg-orange-600/90 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-md">
              Heavy-Duty Cast Metal
            </span>
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md text-white border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div>
              <div className="text-xs sm:text-sm font-black text-amber-400 uppercase tracking-wide">
                100% Pure Juice Extraction
              </div>
              <div className="text-[11px] sm:text-xs text-slate-200 mt-0.5">
                Works for Oranges, Lemons, Limes, Watermelons, Grapes, Kiwis & More
              </div>
            </div>
            <button
              type="button"
              onClick={onOrderClick}
              className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider transition-colors shrink-0 shadow-sm cursor-pointer"
            >
              Order This Press →
            </button>
          </div>
        </motion.div>

        {/* Verbatim Product Reveal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border-2 border-orange-200/90 shadow-elevated-card max-w-3xl mx-auto text-left relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-orange-100 pb-4 mb-4">
            <div>
              <span className="text-xs font-extrabold text-orange-600 tracking-widest uppercase block mb-1">
                INNOVATIVE MANUAL SOLUTION
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                MEET THE MANUAL HAND FRUIT PRESS
              </h2>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shrink-0 self-start sm:self-auto">
              <Truck className="w-3.5 h-3.5 text-emerald-600" />
              <span>FREE Delivery Nationwide</span>
            </div>
          </div>

          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed mb-6">
            Simply place your fruit inside, pull the handle, and let the press do the hard work.
          </p>

          {/* Verbatim 3 "No" Bullet points + Key Outcome */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-orange-50/70 border border-orange-200/60 text-slate-900 font-bold text-sm">
              <div className="w-7 h-7 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                ✕
              </div>
              <span>No electricity.</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-orange-50/70 border border-orange-200/60 text-slate-900 font-bold text-sm">
              <div className="w-7 h-7 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                ✕
              </div>
              <span>No batteries.</span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-orange-50/70 border border-orange-200/60 text-slate-900 font-bold text-sm">
              <div className="w-7 h-7 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                ✕
              </div>
              <span>No complicated setup.</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 border border-amber-300/60 text-center font-bold text-orange-950 text-base sm:text-lg">
            ✨ Just cut, press and enjoy fresh juice.
          </div>
        </motion.div>

        {/* Centered Primary CTA Button & Offer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-3"
        >
          <button
            onClick={onOrderClick}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-lg sm:text-xl font-extrabold tracking-wide shadow-button-glow transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>👉 ORDER NOW</span>
            <span className="w-2 h-2 rounded-full bg-white/80 animate-ping" />
          </button>

          {/* Price & Discount Callout with Buy 2 for ₦45,000 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700 font-bold mt-1">
            <span className="bg-orange-100/90 text-orange-950 px-3 py-1 rounded-full border border-orange-300">
              1 Unit: ₦25,000
            </span>
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-3.5 py-1 rounded-full shadow-xs flex items-center gap-1 font-black">
              🔥 BUY 2 FOR ₦45,000 (SAVE ₦5K)
            </span>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1 font-bold">
              <Truck className="w-3.5 h-3.5" /> FREE DELIVERY
            </span>
          </div>

          <p className="text-xs text-slate-500 max-w-md">
            Click to fill in your delivery details. Pay upon confirmation with zero hassle.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
