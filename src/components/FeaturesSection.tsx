import React from 'react';
import { motion } from 'motion/react';
import { ZapOff, Sparkles, HandMetal, Repeat, Sparkle, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FeaturesSectionProps {
  onOrderClick: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOrderClick }) => {
  const features = [
    {
      title: 'No Electricity Needed',
      description: "Use it during power outages or anywhere electricity isn't available.",
      icon: ZapOff,
      badge: '100% Manual Reliability',
      accentColor: 'text-amber-600 bg-amber-100 border-amber-200',
    },
    {
      title: 'Easy to Use',
      description: 'No special skills or complicated instructions. Just place, press and extract.',
      icon: Sparkles,
      badge: 'Zero Learning Curve',
      accentColor: 'text-orange-600 bg-orange-100 border-orange-200',
    },
    {
      title: 'Less Hand Strain',
      description: 'Let the lever provide the pressing force instead of squeezing fruit repeatedly by hand.',
      icon: HeartHandshake,
      badge: 'Comfort Mechanical Grip',
      accentColor: 'text-rose-600 bg-rose-100 border-rose-200',
    },
    {
      title: 'Built for Repeated Use',
      description: 'A reusable manual tool for homes, cafés, restaurants, caterers and juice sellers.',
      icon: Repeat,
      badge: 'Commercial Durability',
      accentColor: 'text-emerald-600 bg-emerald-100 border-emerald-200',
    },
    {
      title: 'Easy to Clean',
      description: 'Simple design makes cleanup after juicing straightforward.',
      icon: Sparkle,
      badge: 'Quick Rinse Strainer',
      accentColor: 'text-blue-600 bg-blue-100 border-blue-200',
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-300 text-orange-900 text-xs font-extrabold uppercase tracking-wider mb-4">
          <span>KEY BENEFITS</span>
        </div>
        
        {/* Verbatim Section Heading */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          WHY YOU'LL WANT ONE IN YOUR KITCHEN OR BUSINESS
        </h2>
        <p className="text-slate-600 text-base mt-3">
          Designed for maximum juice extraction with minimal effort and complete peace of mind.
        </p>
      </div>

      {/* Elevated Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;
          const isSpanTwo = index === 3; // for balanced visual masonry

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-3xl bg-white border-2 border-orange-200/70 p-6 sm:p-7 shadow-elevated-card hover:shadow-elevated-hover transition-all duration-300 flex flex-col justify-between group ${
                isSpanTwo ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs group-hover:scale-110 transition-transform ${item.accentColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Verbatim Feature Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2.5 flex items-center gap-1.5">
                  <span className="text-emerald-600">✅</span>
                  <span>{item.title}</span>
                </h3>

                {/* Verbatim Feature Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-orange-700 font-bold">
                <span>100% Hassle-Free</span>
                <span className="text-slate-400">→</span>
              </div>
            </motion.div>
          );
        })}

        {/* Highlight 6th Card: Free Delivery Nationwide callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-orange-600 to-amber-600 text-white p-6 sm:p-7 shadow-elevated-card flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center mb-5 text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
              🎁 BONUS: FREE DELIVERY
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              We ship across all 36 states and Abuja FCT at no extra shipping cost. Ready to juice straight out of the box.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/20 text-xs font-bold text-amber-200">
            Only ₦25,000 Complete Package
          </div>
        </motion.div>
      </div>

      {/* Centered CTA Button */}
      <div className="mt-12 text-center">
        <button
          onClick={onOrderClick}
          type="button"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-base tracking-wide shadow-button-glow transition-all active:scale-95 cursor-pointer"
        >
          <span>CLAIM YOUR MANUAL FRUIT PRESS TODAY</span>
        </button>
      </div>

    </section>
  );
};
