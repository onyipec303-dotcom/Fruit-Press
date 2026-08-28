import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, CheckCircle2, ZapOff, Battery, Wrench } from 'lucide-react';
import { FruitOption } from '../types';

interface InteractiveLeverSimulatorProps {
  onOrderClick: () => void;
}

export const InteractiveLeverSimulator: React.FC<InteractiveLeverSimulatorProps> = ({ onOrderClick }) => {
  const [selectedFruit, setSelectedFruit] = useState<FruitOption>('orange');
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [pressCount, setPressCount] = useState<number>(0);

  const fruitData = {
    orange: {
      name: 'Fresh Orange',
      emoji: '🍊',
      color: '#F97316',
      juiceColor: 'from-amber-400 via-orange-500 to-orange-600',
      bgGlow: 'bg-orange-500/10',
      tag: 'Rich in Vitamin C',
      yieldText: '100% Pure Orange Juice Extracted'
    },
    lemon: {
      name: 'Fresh Lemon',
      emoji: '🍋',
      color: '#EAB308',
      juiceColor: 'from-yellow-300 via-yellow-400 to-amber-500',
      bgGlow: 'bg-yellow-500/10',
      tag: 'Zesty & Refreshing',
      yieldText: 'Maximum Lemon Juice Yield'
    },
    lime: {
      name: 'Fresh Lime',
      emoji: '🍏',
      color: '#84CC16',
      juiceColor: 'from-lime-300 via-lime-400 to-emerald-500',
      bgGlow: 'bg-lime-500/10',
      tag: 'Crisp & Tangy',
      yieldText: 'Effortless Seed-Free Lime Extraction'
    }
  };

  const handlePress = () => {
    setIsPressed(true);
    setPressCount(prev => prev + 1);
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

        {/* Section Header with Verbatim copy context */}
        <div className="text-center relative z-10 max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-300/60 text-orange-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Interactive Experience • Test The Lever</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            See How Easily The Lever Does The Hard Work
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Select a fruit, pull the heavy-duty lever, and watch fresh juice extract smoothly without straining your hands.
          </p>
        </div>

        {/* Interactive Fruit Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4 mb-8 relative z-10">
          {(['orange', 'lemon', 'lime'] as FruitOption[]).map((fruitKey) => {
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

        {/* The Interactive Machine & Glass Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gradient-to-b from-slate-50/80 to-orange-50/40 rounded-2xl p-6 sm:p-8 border border-orange-100 relative z-10">
          
          {/* Visual Press Illustration & Mechanics */}
          <div className="md:col-span-7 flex flex-col items-center justify-center min-h-[300px] relative">
            
            {/* The Mechanical Juicer Unit Vector Representation */}
            <div className="relative w-72 h-72 flex items-center justify-center">
              
              {/* Stand / Solid Base */}
              <div className="absolute bottom-6 w-44 h-5 rounded-full bg-slate-400 border border-slate-500 shadow-inner flex items-center justify-center">
                <div className="w-32 h-1.5 bg-slate-300 rounded-full" />
              </div>

              {/* Vertical Solid Aluminum Upright Column */}
              <div className="absolute bottom-10 left-16 w-5 h-44 rounded-md bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 border border-slate-400 shadow-md" />

              {/* Heavy Duty Pivot & Joint */}
              <div className="absolute top-16 left-15 w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-500 border-2 border-slate-600 z-30 shadow-md flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>

              {/* Juicer Basket & V-Shaped Pouring Spout */}
              <div className="absolute bottom-11 right-12 w-28 h-24 rounded-b-3xl bg-gradient-to-r from-slate-200 via-slate-50 to-slate-300 border-2 border-slate-400 shadow-lg flex flex-col items-center justify-between p-2 z-10">
                
                {/* Detachable Strainer mesh line */}
                <div className="w-full h-1.5 bg-slate-300/80 rounded-full border-t border-slate-400/60" />
                
                {/* Fruit Inside Basket */}
                <motion.div
                  animate={{
                    scaleY: isPressed ? 0.35 : 1,
                    scaleX: isPressed ? 1.25 : 1,
                    y: isPressed ? 8 : 0,
                  }}
                  transition={{ type: 'spring', damping: 15, stiffness: 120 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-sm relative overflow-hidden"
                  style={{
                    backgroundColor: current.color,
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full transform -translate-x-2 -translate-y-2" />
                  <span className="relative z-10">{current.emoji}</span>
                </motion.div>

                {/* V-Spout */}
                <div className="w-4 h-3 bg-slate-300 rounded-b-sm border border-slate-400 -mb-2 shadow-xs" />
              </div>

              {/* Mechanical Lever Handle with animated pull down */}
              <motion.div
                animate={{
                  rotate: isPressed ? 42 : -28,
                }}
                transition={{ type: 'spring', damping: 14, stiffness: 100 }}
                style={{ originX: '15%', originY: '50%' }}
                className="absolute top-17 left-16 w-48 h-5 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-full border-2 border-slate-500 shadow-xl z-20 flex items-center justify-end pr-1 cursor-grab active:cursor-grabbing"
              >
                {/* Ergonomic Textured Rubber Handle Grip */}
                <div className="w-14 h-7 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center shadow-md">
                  <div className="flex gap-1">
                    <span className="w-0.5 h-4 bg-slate-600 rounded-full" />
                    <span className="w-0.5 h-4 bg-slate-600 rounded-full" />
                    <span className="w-0.5 h-4 bg-slate-600 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Streaming Fresh Juice & Droplets when pressed */}
              <AnimatePresence>
                {isPressed && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 right-24 z-20 flex flex-col items-center pointer-events-none"
                  >
                    {/* Continuous Streaming Stream */}
                    <div 
                      className={`w-2 h-14 bg-gradient-to-b ${current.juiceColor} rounded-full animate-pulse shadow-sm`} 
                    />
                    {/* Drips */}
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1 animate-juice-drip" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Juice Collection Glass */}
              <div className="absolute -bottom-2 right-18 w-16 h-20 rounded-b-xl border-2 border-slate-300/80 bg-white/40 backdrop-blur-xs flex flex-col justify-end p-1 overflow-hidden shadow-md">
                <motion.div
                  animate={{
                    height: isPressed ? '75%' : '15%',
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`w-full rounded-b-lg bg-gradient-to-t ${current.juiceColor} opacity-90 relative`}
                >
                  {/* Froth bubbles */}
                  {isPressed && (
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-white/40 rounded-full animate-pulse" />
                  )}
                </motion.div>
              </div>

            </div>

            {/* Lever Pull Trigger Buttons */}
            <div className="mt-6 flex flex-wrap gap-3 items-center justify-center">
              {!isPressed ? (
                <button
                  onClick={handlePress}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm shadow-button-glow transition-all active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Pull Lever to Press ({current.name})</span>
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Reset & Try Another Fruit</span>
                </button>
              )}
            </div>
          </div>

          {/* Real Extraction Stats & Comparison */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-orange-200/80 shadow-xs">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                <span>EXTRACTION EFFICIENCY</span>
                <span className="text-orange-600 font-extrabold text-sm">{isPressed ? '98% Maximum Yield' : 'Ready to Press'}</span>
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
                {isPressed ? current.yieldText : 'Press down the lever to see effortless seed-free juice extraction.'}
              </p>
            </div>

            {/* Verbatim Three Core Mechanical Advantages */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-orange-50/80 border border-orange-200/60 text-xs font-bold text-slate-800">
                <ZapOff className="w-4 h-4 text-orange-600 shrink-0" />
                <span>No electricity required — works anywhere</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-orange-50/80 border border-orange-200/60 text-xs font-bold text-slate-800">
                <Battery className="w-4 h-4 text-orange-600 shrink-0" />
                <span>No batteries or recharging needed</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-orange-50/80 border border-orange-200/60 text-xs font-bold text-slate-800">
                <Wrench className="w-4 h-4 text-orange-600 shrink-0" />
                <span>No complicated setup — pure lever physics</span>
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
