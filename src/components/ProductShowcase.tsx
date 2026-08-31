import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_IMAGES } from '../productImages';
import { ShieldCheck, Sparkles, Droplets, Zap, CheckCircle2, Award, Hammer, Gauge, Filter, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductShowcaseProps {
  onOrderClick: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOrderClick }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const currentPhoto = PRODUCT_IMAGES.gallery[selectedPhotoIndex];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Container with Elevated Card Styling */}
      <div className="rounded-3xl bg-white border-2 border-orange-200/80 shadow-elevated-card p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        
        {/* Subtle accent background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/60 via-amber-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Interactive 3-Photo Showcase Gallery */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Main Featured Photo Frame */}
            <div className="w-full relative rounded-2xl overflow-hidden border-2 border-orange-200 shadow-lg bg-slate-950 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPhotoIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-4/3 w-full flex items-center justify-center bg-slate-950 p-2"
                >
                  <img
                    src={currentPhoto.url}
                    alt={currentPhoto.title}
                    className="max-h-full max-w-full object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-2xl" />
                </motion.div>
              </AnimatePresence>

              {/* Tag Overlays */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-black tracking-wider uppercase backdrop-blur-xs shadow-xs">
                {currentPhoto.tag}
              </div>
              
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-600/90 text-white text-[11px] font-black tracking-wider uppercase backdrop-blur-xs shadow-xs flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Authentic Photo
              </div>

              {/* Photo Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-black/75 backdrop-blur-md text-white border border-white/10">
                <p className="text-xs font-black text-amber-300">{currentPhoto.title}</p>
                <p className="text-[11px] text-slate-200 line-clamp-2 mt-0.5">{currentPhoto.subtitle}</p>
              </div>
            </div>

            {/* Thumbnail Selectors for the 3 user photos */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full mt-3">
              {PRODUCT_IMAGES.gallery.map((photo, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`p-1.5 rounded-xl border-2 transition-all text-left cursor-pointer flex flex-col items-center bg-white ${
                    selectedPhotoIndex === idx
                      ? 'border-orange-600 bg-orange-50 ring-2 ring-orange-300 shadow-md scale-102'
                      : 'border-slate-200 hover:border-orange-300 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="w-full h-16 rounded-lg overflow-hidden bg-slate-900 mb-1.5 flex items-center justify-center p-0.5">
                    <img
                      src={photo.url}
                      alt={photo.tag}
                      className="w-full h-full object-cover rounded"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-[11px] font-black text-slate-900 truncate w-full text-center">{photo.tag}</div>
                  <div className="text-[9px] text-slate-500 truncate w-full text-center">Photo {idx + 1} of 3</div>
                </button>
              ))}
            </div>

            {/* Mechanical Specifications Badges */}
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
