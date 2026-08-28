import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Citrus, MoveDown, GlassWater } from 'lucide-react';

interface ProcessSectionProps {
  onOrderClick: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOrderClick }) => {
  const steps = [
    {
      step: '01',
      title: 'Place the fruit.',
      description: 'Cut your orange, lemon, or lime in half and place it face-down directly into the heavy-duty strainer basket.',
      icon: Citrus,
      color: 'bg-amber-500 text-white',
    },
    {
      step: '02',
      title: 'Pull the handle.',
      description: 'Grip the ergonomic mechanical lever and pull down smoothly. Let the leverage provide effortless pressing force.',
      icon: MoveDown,
      color: 'bg-orange-600 text-white',
    },
    {
      step: '03',
      title: 'Collect your juice.',
      description: 'Pure, fresh, seed-free juice streams straight through the V-spout into your glass. Ready to serve instantly.',
      icon: GlassWater,
      color: 'bg-emerald-600 text-white',
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Elevated Container */}
      <div className="rounded-3xl bg-white border-2 border-orange-200/80 p-6 sm:p-10 lg:p-12 shadow-elevated-card relative overflow-hidden">
        
        {/* Background glow accent */}
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-orange-100/40 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header with Verbatim copy */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>EFFORTLESS JUICING EXPERIENCE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            🍹 FROM FRUIT TO FRESH JUICE—WITHOUT THE HASSLE
          </h2>

          <div className="mt-4 text-slate-700 text-base sm:text-lg space-y-2 leading-relaxed">
            <p>
              Imagine having oranges ready for juice and knowing you don't need to wrestle with every fruit using your hands.
            </p>
          </div>
        </div>

        {/* 3 Step Visual Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative rounded-2xl bg-gradient-to-b from-orange-50/60 to-white border border-orange-200/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      STEP {item.step}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-orange-100 text-[11px] font-bold text-slate-400">
                  {index < 2 ? 'Next step →' : 'Done & Ready to Drink!'}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verbatim Closing Summary Box */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border border-orange-200 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-lg sm:text-xl font-black text-slate-900">
            It's that simple.
          </p>
          <p className="text-slate-700 text-sm sm:text-base font-medium">
            And because it doesn't depend on electricity, you can use it whenever you need it.
          </p>
        </div>

        {/* Centered CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={onOrderClick}
            type="button"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-base tracking-wide shadow-button-glow transition-all active:scale-95 cursor-pointer"
          >
            <span>👉 ORDER NOW — FREE DELIVERY</span>
          </button>
        </div>

      </div>

    </section>
  );
};
