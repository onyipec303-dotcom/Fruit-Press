import React from 'react';
import { motion } from 'motion/react';
import { STORE_CONFIG } from '../config';
import { ShieldCheck, HelpCircle, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';

interface PerspectiveSectionProps {
  onOrderClick: () => void;
}

export const PerspectiveSection: React.FC<PerspectiveSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      
      {/* 1. Objection / Mindset Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-white border-2 border-orange-200/80 p-6 sm:p-10 shadow-elevated-card relative overflow-hidden"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 shadow-xs">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-orange-600 tracking-wider uppercase block mb-1">
              COMMON THOUGHT
            </span>
            {/* Verbatim Headline */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              "BUT I'VE ALWAYS JUST SQUEEZED FRUIT BY HAND..."
            </h3>
          </div>
        </div>

        {/* Verbatim Body */}
        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pl-0 sm:pl-16">
          <p className="font-bold text-slate-900 text-lg sm:text-xl text-orange-700">
            That's exactly why this tool is useful.
          </p>
          <p>
            You don't need to change how you make juice completely.
          </p>
          <p>
            You're simply replacing the tiring part—repeated hand squeezing—with a simple lever press.
          </p>
          <p className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200/70 font-semibold text-slate-800">
            And you don't need electricity, technical knowledge or special training.
          </p>
        </div>
      </motion.div>

      {/* 2. Buy with Confidence / Guarantee Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border-2 border-slate-700 p-6 sm:p-8 shadow-elevated-card flex flex-col sm:flex-row items-center gap-6"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
          <ShieldCheck className="w-9 h-9" />
        </div>

        <div className="space-y-2 text-center sm:text-left flex-1">
          {/* Verbatim Headline */}
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center justify-center sm:justify-start gap-2">
            <span>🛡️ BUY WITH CONFIDENCE</span>
          </h3>

          {/* Verbatim Copy */}
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Your product should arrive in good working condition.
          </p>
          <p className="text-slate-300 text-xs sm:text-sm font-medium">
            If it arrives damaged, report it directly to {STORE_CONFIG.businessName} according to our rapid replacement terms.
          </p>
        </div>

        <div className="shrink-0 flex flex-col items-center sm:items-end gap-2">
          <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 text-xs font-bold text-orange-300 text-center">
            ✓ Inspected Before Dispatch
          </div>
          <span className="text-[11px] text-slate-400 font-semibold">
            {STORE_CONFIG.businessName} Verified
          </span>
        </div>
      </motion.div>

      {/* Centered CTA */}
      <div className="text-center pt-2">
        <button
          onClick={onOrderClick}
          type="button"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-button-glow transition-all active:scale-95 cursor-pointer"
        >
          <span>ORDER YOURS NOW (1 Unit: ₦25K • 2 Units: ₦45K)</span>
        </button>
      </div>

    </section>
  );
};
