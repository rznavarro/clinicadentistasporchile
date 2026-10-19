import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  fallbackClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Dentistas por Chile',
  className = '',
  fallbackText,
  fallbackClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-[#EEF5FF] to-[#DCE9FA] text-[#243E85] flex flex-col items-center justify-center p-4 text-center rounded-2xl border border-[#D0E2FA] ${fallbackClassName || className}`}
        role="img"
        aria-label={alt}
      >
        <ShieldCheck className="w-8 h-8 text-[#1D4ED8] mb-2 opacity-80" />
        <span className="text-xs font-medium text-[#243E85] tracking-tight">
          {fallbackText || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
