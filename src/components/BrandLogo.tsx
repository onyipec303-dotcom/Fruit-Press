import React from 'react';
import { STORE_CONFIG } from '../config';
import { Citrus } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const iconSizes = {
    sm: 'w-8 h-8 text-base',
    md: 'w-11 h-11 text-lg',
    lg: 'w-14 h-14 text-xl',
  };

  const titleSizes = {
    sm: 'text-sm font-black',
    md: 'text-base sm:text-lg font-black',
    lg: 'text-xl sm:text-2xl font-black',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Pure Vector Brand Emblem */}
      <div className={`${iconSizes[size]} rounded-xl overflow-hidden bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 shrink-0 border border-orange-300/40 p-1.5`}>
        <Citrus className="w-full h-full stroke-[2.2]" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${titleSizes[size]} tracking-tight text-[#2D241E] uppercase leading-tight font-heading`}>
            {STORE_CONFIG.businessName}
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500" />
        </div>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] font-bold text-orange-600 tracking-wider uppercase">
            Official Fruit Press Store
          </span>
        )}
      </div>
    </div>
  );
};
