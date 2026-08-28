import React from 'react';

interface SectionDividerProps {
  variant?: 'citrus-curve' | 'metallic-glow' | 'subtle-wave' | 'amber-line';
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = 'metallic-glow', 
  className = '' 
}) => {
  if (variant === 'citrus-curve') {
    return (
      <div className={`w-full overflow-hidden leading-none relative ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FAF8F5]"
        >
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'subtle-wave') {
    return (
      <div className={`w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="relative block w-full h-8 text-orange-100/50"
        >
          <path
            d="M0,30 C300,60 600,0 1200,30 L1200,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'amber-line') {
    return (
      <div className={`flex items-center justify-center my-6 max-w-xl mx-auto px-4 ${className}`} aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent flex-1" />
        <div className="mx-3 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-orange-500/80 ring-2 ring-orange-200" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent flex-1" />
      </div>
    );
  }

  // Default: metallic glow divider
  return (
    <div className={`relative py-6 flex items-center justify-center ${className}`} aria-hidden="true">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#FAF8F5]">
            <div className="w-3 h-3 rotate-45 border-2 border-orange-500/50 bg-amber-100" />
          </div>
        </div>
      </div>
    </div>
  );
};
