import React, { useState } from 'react';
import { STORE_CONFIG } from '../config';
import businessLogo from '../assets/images/user/business_logo.png';
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
  const [imageError, setImageError] = useState(false);

  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const titleSizes = {
    sm: 'text-sm font-black',
    md: 'text-base sm:text-lg font-black',
    lg: 'text-xl sm:text-2xl font-black',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Logo Graphic */}
      <div className={`${iconSizes[size]} rounded-2xl overflow-hidden bg-white flex items-center justify-center shadow-md shadow-orange-500/10 shrink-0 border border-orange-200/80 p-1`}>
        {!imageError ? (
          <img
            src={businessLogo}
            alt={STORE_CONFIG.businessName}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-contain rounded-xl"
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white p-1">
            <Citrus className="w-full h-full stroke-[2.2]" />
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
