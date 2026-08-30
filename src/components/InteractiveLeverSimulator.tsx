import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, CheckCircle2, ZapOff, Battery, Wrench, Hand } from 'lucide-react';
import { PRODUCT_IMAGES } from '../productImages';

type HandheldFruitKey = 'orange' | 'lemon' | 'watermelon';

interface InteractiveLeverSimulatorProps {
  onOrderClick: () => void;
}

export const InteractiveLeverSimulator: React.FC<InteractiveLeverSimulatorProps> = ({ onOrderClick }) => {
  const [selectedFruit, setSelectedFruit] = useState<HandheldFruitKey>('orange');
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const fruitData = {
    orange: {
      name: 'Fresh Orange',
      emoji: '🍊',
      color: '#F97316',
      juiceColor: 'from-amber-400 via-orange-500 to-orange-600',
      actionImg: PRODUCT_IMAGES.pressingOrange,
      actionTitle: 'Customer Squeezing Sweet Orange Juice by Hand',
      yieldText: '100% Pure Vitamin C Orange Juice Extracted'
    },
    lemon: {
      name: 'Fresh Lemon & Lime',
      emoji: '🍋',
      color: '#EAB308',
      juiceColor: 'from-yellow-300 via-yellow-400 to-amber-500',
      actionImg: PRODUCT_IMAGES.pressingLemon,
      actionTitle: 'Customer Squeezing Lemons & Limes (Seed-Free)',
      yieldText: 'Maximum Seed-Free Lemonade & Lime Juice'
    },
    watermelon: {
      name: 'Watermelon & Grapes',
      emoji: '🍉',
      color: '#F43F5E',
      juiceColor: 'from-rose-400 via-red-500 to-pink-600',
      actionImg: PRODUCT_IMAGES.pressingWatermelon,
      actionTitle: 'Customer Squeezing Watermelon & Soft Fruits',
      yieldText: 'Effortless Chilled Watermelon & Fruit Juice'
    }
  };

  const handlePress = () => {
    setIsPressed(true);
  };

  const handleReset = () => {
    setIsPressed(false);
  };

  const current = fruitData[selectedFruit];

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4 sm:px-6">
      <div className="relative rounded-3xl bg-white border-2 border-orange-200/80 shadow-elevated-card overflow-hidden p-6 sm:p-8 lg:p-10">
        
        {/* Decorative ambient gradient */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/30 to-transparent blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gradient-to-tr from-amber-200/30 to-transparent blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center relative z-10 max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-300/60 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Interactive Experience • Handheld Manual Press</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            See How Easily The Handheld Press Does The Hard Work
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Select a fruit, squeeze the heavy-duty ergonomic handles, and watch fresh juice extract smoothly straight into your glass.
          </p>
        </div>

        {/* Interactive Fruit Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 mb-8 relative z-10">
          {(['orange', 'lemon', 'watermelon'] as HandheldFruitKey[]).map((fruitKey) => {
            const f = fruitData[fruitKey];
            const isSelected = selectedFruit === fruitKey;
            return (
              <button
                key={fruitKey}
                onClick={() => {
                  setSelectedFruit(fruitKey);
                  setIsPressed(false);
                }}
                type="button"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-105 ring-2 ring-orange-400/50'
                    : 'bg-orange-50/70 text-slate-700 border-orange-200/70 hover:bg-orange-100 hover:text-slate-900'
                }`}
              >
                <span className="text-lg">{f.emoji}</span>
                <span>{f.name}</span>
              </button>
            );
          })}
        </div>

        {/* Real Product Photo In-Action Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gradient-to-b from-slate-50/80 to-orange-50/40 rounded-2xl p-6 sm:p-8 border border-orange-100 relative z-10">
          
          {/* Left: Authentic Handheld Photo Preview & Interactive Squeeze */}
          <div className="md:col-span-7 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden border-2 border-orange-300 shadow-xl bg-slate-900 group">
              <AnimatePresence mode="wait">
                {!isPressed ? (
                  <motion.div
                    key="unpressed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={PRODUCT_IMAGES.hero}
                      alt="Handheld Manual Fruit Press ready to squeeze"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/90 text-white text-[11px] font-bold border border-white/20">
                      📸 Handheld Press: Ready for {current.name} {current.emoji}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs">
                      <p className="font-bold text-amber-300">Place {current.name} in the handheld press</p>
                      <p className="text-[11px] text-slate-300 mt-0.5">Click the orange button below to squeeze and extract fresh juice</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="pressed"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={current.actionImg}
                      alt={current.actionTitle}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Active Extraction Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Juice Flowing (98% Yield)
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-white text-xs">
                      <p className="font-black text-amber-300 uppercase tracking-wide">{current.actionTitle}</p>
                      <p className="text-[11px] text-slate-200 mt-0.5">
                        Pure natural juice without sticky hands, seeds, or electric power.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Handheld Squeeze Trigger Buttons */}
            <div className="mt-6 flex flex-wrap gap-3 items-center justify-center">
              {!isPressed ? (
                <button
                  onClick={handlePress}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm shadow-button-glow transition-all active:scale-95 cursor-pointer"
                >
                  <Hand className="w-4 h-4" />
                  <span>Squeeze Handheld Press ({current.name})</span>
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Reset & Squeeze Another Fruit</span>
                </button>
              )}
            </div>
          </div>

          {/* Real Extraction Stats & Comparison */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-orange-200/80 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                <span>EXTRACTION EFFICIENCY</span>
                <span className="text-orange-600 font-extrabold text-sm">{isPressed ? '98% Maximum Yield' : 'Ready to Squeeze'}</span>
              </div>
              
              {/* Progress visualizer */}
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                <motion.div
                  animate={{ width: isPressed ? '98%' : '20%' }}
                  transition={{ duration: 0.6 }}
                  className={`h-full rounded-full bg-gradient-to-r ${current.juiceColor}`}
                />
              </div>

              <p className="text-xs text-slate-600 mt-2 font-medium">
                {isPressed ? current.yieldText : 'Press the handheld handles to extract pure seed-free fresh juice.'}
              </p>
            </div>

            {/* Core Advantages */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-orange-50/80 border border-orange-200/60 text-xs font-bold text-slate-800">
                <ZapOff className="w-4 h-4 text-orange-600 shrink-0" />
                <span>No electricity required — squeeze anywhere</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-orange-50/80 border border-orange-200/60 text-xs font-bold text-slate-800">
                <Battery className="w-4 h-4 text-orange-600 shrink-0" />
                <span>No batteries or recharging needed</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-orange-50/80 border border-orange-200/60 text-xs font-bold text-slate-800">
                <Wrench className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Compact handheld design — easy rinse clean</span>
              </div>
            </div>

            {/* Quick conversion CTA */}
            <div className="pt-2">
              <button
                onClick={onOrderClick}
                type="button"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
              >
                Order Now — 1 Unit: ₦25K • 2 Units: ₦45K (Free Delivery)
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
