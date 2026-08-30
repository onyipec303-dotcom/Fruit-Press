import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_IMAGES } from '../productImages';
import { ShieldCheck, Check, Sparkles, Droplets, Layers, Zap, ZoomIn, CheckCircle2 } from 'lucide-react';

interface ProductShowcaseProps {
  onOrderClick: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOrderClick }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const activeImage = PRODUCT_IMAGES.gallery[selectedImageIndex];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Container with Elevated Card Styling */}
      <div className="rounded-3xl bg-white border-2 border-orange-200/80 shadow-elevated-card p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        
        {/* Subtle accent background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/60 via-amber-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Authentic Photo Gallery & Interactive Previews */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Main Featured Photo Frame */}
            <div className="w-full relative rounded-2xl overflow-hidden border-2 border-orange-200 shadow-lg bg-slate-900 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="relative aspect-4/3 w-full"
                >
                  <img
                    src={activeImage.url}
                    alt={activeImage.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Top Tag */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-black tracking-wider uppercase backdrop-blur-xs shadow-xs">
                {activeImage.tag}
              </div>
              
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-600/90 text-white text-[11px] font-black tracking-wider uppercase backdrop-blur-xs shadow-xs">
                Heavy-Duty Metal
              </div>

              {/* Photo Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/10">
                <p className="text-xs font-bold text-amber-300">{activeImage.title}</p>
                <p className="text-[11px] text-slate-200 line-clamp-1 mt-0.5">{activeImage.subtitle}</p>
              </div>
            </div>

            {/* Thumbnail Selectors Showing Unit & Action Photos */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 w-full mt-3">
              {PRODUCT_IMAGES.gallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer aspect-square flex items-center justify-center bg-slate-900 ${
                    selectedImageIndex === idx
                      ? 'border-orange-600 ring-2 ring-orange-400 scale-105 shadow-md z-10'
                      : 'border-slate-200 opacity-75 hover:opacity-100 hover:border-orange-300'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.tag}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-black/80 text-white text-[9px] font-bold text-center py-0.5 truncate px-0.5">
                    {img.tag.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Mechanical Specifications Badge */}
            <div className="grid grid-cols-3 gap-2 w-full mt-4 text-center">
              <div className="p-2.5 rounded-xl bg-orange-50/80 border border-orange-200 shadow-xs">
                <span className="text-[10px] font-bold text-slate-600 uppercase block">Mechanical Ratio</span>
                <span className="text-xs font-extrabold text-orange-700">5x Press Power</span>
              </div>
              <div className="p-2.5 rounded-xl bg-orange-50/80 border border-orange-200 shadow-xs">
                <span className="text-[10px] font-bold text-slate-600 uppercase block">Spout Design</span>
                <span className="text-xs font-extrabold text-orange-700">V-Shaped Spout</span>
              </div>
              <div className="p-2.5 rounded-xl bg-orange-50/80 border border-orange-200 shadow-xs">
                <span className="text-[10px] font-bold text-slate-600 uppercase block">Cleanup Speed</span>
                <span className="text-xs font-extrabold text-orange-700">Rinse in Seconds</span>
              </div>
            </div>

          </div>

          {/* Right Column: Verbatim Content & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Engineered For Maximum Extraction</span>
              </div>

              {/* Verbatim Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                💪 MORE PRESSING POWER. LESS HAND EFFORT.
              </h2>
            </div>

            {/* Verbatim Body Copy */}
            <div className="text-slate-700 text-base sm:text-lg space-y-4 leading-relaxed font-normal">
              <p>
                The strong manual lever gives you better pressing power than squeezing fruit with your bare hands.
              </p>
              <p>
                So whether you're making a glass of juice at home or preparing drinks for customers, you can get the job done more conveniently.
              </p>
            </div>

            {/* Comparison Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50/60 border border-orange-200/80 space-y-3">
              <div className="text-xs font-extrabold text-orange-950 uppercase tracking-wide">
                WHY MANUAL LEVER BEATS SQUEEZING BY HAND:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/90 border border-red-200/80 space-y-1">
                  <div className="text-red-600 font-bold flex items-center gap-1.5">
                    <span>❌ Squeezing By Hand</span>
                  </div>
                  <p className="text-slate-600">
                    Hand fatigue, sticky mess, wasted juice left inside the pulp, aching fingers after 2-3 fruits.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/90 border border-emerald-300 space-y-1">
                  <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                    <span>✅ Manual Fruit Press</span>
                  </div>
                  <p className="text-slate-600">
                    Effortless downward handle pull, clean seed-free pour, dry pulp with 95%+ juice extracted.
                  </p>
                </div>
              </div>
            </div>

            {/* Centered CTA button */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                onClick={onOrderClick}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-button-glow transition-all active:scale-95 cursor-pointer"
              >
                <span>ORDER NOW (1 Unit: ₦25K • 2 Units: ₦45K)</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

