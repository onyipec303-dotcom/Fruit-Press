import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, CheckCircle2, ZapOff, Battery, Wrench, Hand, Droplets, Gauge } from 'lucide-react';

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
      juiceHex: '#F97316',
      actionTitle: 'Squeezing Sweet Orange Juice by Hand',
      yieldText: '100% Pure Vitamin C Orange Juice Extracted'
    },
    lemon: {
      name: 'Fresh Lemon & Lime',
      emoji: '🍋',
      color: '#EAB308',
      juiceColor: 'from-yellow-300 via-yellow-400 to-amber-500',
      juiceHex: '#EAB308',
      actionTitle: 'Squeezing Lemons & Limes (Seed-Free)',
      yieldText: 'Maximum Seed-Free Lemonade & Lime Juice'
    },
    watermelon: {
      name: 'Watermelon & Grapes',
      emoji: '🍉',
      color: '#F43F5E',
      juiceColor: 'from-rose-400 via-red-500 to-pink-600',
      juiceHex: '#F43F5E',
      actionTitle: 'Squeezing Watermelon & Soft Fruits',
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

        {/* Interactive Mechanics Simulation Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gradient-to-b from-slate-50/80 to-orange-50/40 rounded-2xl p-6 sm:p-8 border border-orange-100 relative z-10">
          
          {/* Left: Animated Vector Press Simulator */}
          <div className="md:col-span-7 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden border-2 border-orange-300 shadow-xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 flex flex-col items-center justify-between text-white group">
              
              {/* Header inside simulation */}
              <div className="w-full flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold border border-white/20">
                  {isPressed ? '⚡ 5x Mechanical Pressure Applied' : `Fruit Loaded: ${current.name}`}
                </span>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${isPressed ? 'bg-emerald-500 text-white' : 'bg-orange-500 text-white'}`}>
                  {isPressed ? 'Juicing Active' : 'Ready'}
                </span>
              </div>

              {/* Central Dynamic Press & Juice Extraction Rig */}
              <div className="relative w-full h-44 flex items-center justify-center my-2">
                
                {/* Mechanical Press Visual Rig */}
                <div className="relative flex flex-col items-center">
                  
                  {/* Top Pressing Lever Arm */}
                  <motion.div
                    animate={{
                      y: isPressed ? 28 : 0,
                      rotate: isPressed ? 4 : -8
                    }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="w-32 sm:w-40 h-7 rounded-xl bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 border-2 border-slate-500 shadow-lg flex items-center justify-between px-3 text-slate-800 font-black text-[10px] tracking-wider uppercase z-20"
                  >
                    <span>Lever Handle</span>
                    <span className="text-orange-600 font-bold">5x Ratio</span>
                  </motion.div>

                  {/* Juicing Bowl & Fruit Chamber */}
                  <div className="relative w-28 sm:w-32 h-20 rounded-b-3xl border-3 border-t-0 border-slate-300 bg-slate-800/80 mt-1 flex flex-col items-center justify-center overflow-hidden shadow-inner z-10">
                    {/* Squeezed Fruit Animation */}
                    <motion.div
                      animate={{
                        scaleY: isPressed ? 0.35 : 1,
                        scaleX: isPressed ? 1.2 : 1,
                        y: isPressed ? 8 : 0
                      }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="text-4xl select-none"
                    >
                      {current.emoji}
                    </motion.div>

                    {/* V-Spout at bottom */}
                    <div className="absolute bottom-0 w-4 h-3 bg-slate-400 clip-path-triangle" />
                  </div>

                  {/* Flowing Juice Stream */}
                  <AnimatePresence>
                    {isPressed && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 42, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-2 rounded-full mt-0.5"
                        style={{ backgroundColor: current.juiceHex }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Juice Collection Glass at bottom */}
                  <div className="w-16 h-12 rounded-b-xl border-2 border-t-0 border-white/40 bg-white/5 backdrop-blur-xs relative overflow-hidden flex items-end p-0.5 mt-1">
                    <motion.div
                      initial={{ height: '10%' }}
                      animate={{ height: isPressed ? '95%' : '15%' }}
                      transition={{ duration: 0.6 }}
                      className="w-full rounded-b-lg"
                      style={{ backgroundColor: current.juiceHex }}
                    />
                  </div>

                </div>

              </div>

              {/* Dynamic Status Text */}
              <div className="w-full text-center z-10">
                <p className="text-xs font-black text-amber-300">
                  {isPressed ? current.actionTitle : `Place ${current.name} into the press`}
                </p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  {isPressed ? 'Pure juice stream without seeds, skin oils, or sticky fingers.' : 'Click below to squeeze the lever handle and extract fresh juice.'}
                </p>
              </div>

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
