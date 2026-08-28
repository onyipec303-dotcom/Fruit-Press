import React, { useState } from 'react';
import { STORE_CONFIG } from '../config';

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
  const [imageError, setImageError] = useState(false);

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
      {/* Logo Graphic or Image */}
      <div className={`${iconSizes[size]} rounded-xl overflow-hidden bg-white flex items-center justify-center text-orange-600 font-black shadow-md shadow-orange-500/15 shrink-0 border border-orange-200/80 p-0.5`}>
        {!imageError && STORE_CONFIG.businessLogoUrl ? (
          <img
            src={STORE_CONFIG.businessLogoUrl}
            alt={STORE_CONFIG.businessName}
            referrerPolicy="no-referrer"
            onError={() => {
              // Try fallback direct link if not tried yet
              setImageError(true);
            }}
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
            <span className="italic tracking-tighter">PS</span>
          </div>
        )}
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
