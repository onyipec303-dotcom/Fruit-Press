import React from 'react';
import { motion } from 'motion/react';
import { Home, Citrus, GlassWater, UtensilsCrossed, PartyPopper, Store, CheckCircle } from 'lucide-react';

interface AudienceGridProps {
  onOrderClick: () => void;
}

export const AudienceGrid: React.FC<AudienceGridProps> = ({ onOrderClick }) => {
  const audienceItems = [
    {
      title: 'Home kitchens',
      emoji: '🍊',
      icon: Home,
      detail: 'Make quick healthy morning juices for yourself, spouse, and kids with zero power hassles.',
      tag: 'Family Favorite',
    },
    {
      title: 'Fresh juice preparation',
      emoji: '🍋',
      icon: Citrus,
      detail: 'Squeeze lemons, limes, and sweet oranges rapidly for recipes, marinades, and detox drinks.',
      tag: 'Health & Wellness',
    },
    {
      title: 'Juice & drink sellers',
      emoji: '🥤',
      icon: GlassWater,
      detail: 'Serve customers fast on demand without worrying about generator fuel or electricity cuts.',
      tag: 'Fast Customer Service',
    },
    {
      title: 'Restaurants & cafés',
      emoji: '🍽️',
      icon: UtensilsCrossed,
      detail: 'High-leverage bar tool for freshly squeezed citrus mocktails, cocktails, and table service.',
      tag: 'Hospitality Grade',
    },
    {
      title: 'Caterers & events',
      emoji: '🎉',
      icon: PartyPopper,
      detail: 'Compact and fully portable for wedding receptions, parties, outdoor banquets, and pop-ups.',
      tag: '100% Portable',
    },
    {
      title: 'Small beverage businesses',
      emoji: '🏪',
      icon: Store,
      detail: 'Reliable, heavy-duty workhorse that keeps your business running smoothly and profitably.',
      tag: 'Zero Running Cost',
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header with Verbatim copy */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-extrabold uppercase tracking-wider mb-3">
          <span>VERSATILE APPLIANCE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          PERFECT FOR:
        </h2>
        <p className="text-slate-600 text-base mt-2">
          Engineered for both daily domestic convenience and busy commercial beverage prep.
        </p>
      </div>

      {/* Grid of 6 Elevated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {audienceItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-3xl bg-white border-2 border-orange-200/70 p-6 shadow-elevated-card hover:shadow-elevated-hover hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100/80 border border-orange-200 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <span>{item.emoji}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200/60 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Verbatim Item Title */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 flex items-center gap-1.5">
                  <span>{item.title}</span>
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Ready to use</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Centered CTA */}
      <div className="mt-10 text-center">
        <button
          onClick={onOrderClick}
          type="button"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-base tracking-wide shadow-button-glow transition-all active:scale-95 cursor-pointer"
        >
          <span>ORDER FOR YOUR KITCHEN OR BUSINESS</span>
        </button>
      </div>

    </section>
  );
};
