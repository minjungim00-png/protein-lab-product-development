import React, { useState, useEffect } from 'react';
import { ProofPlaceholder } from './ProofPlaceholder';

const EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

interface CardMediaProps {
  cardIndex: 1 | 2 | 3;
  stepName: '관심' | '관계' | '전환';
  initialSrc?: string;
  altText?: string;
}

export const CardMedia: React.FC<CardMediaProps> = ({
  cardIndex,
  stepName,
  initialSrc,
  altText,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(initialSrc || null);
  const baseName = `card${cardIndex}`;

  useEffect(() => {
    if (initialSrc) {
      setImageSrc(initialSrc);
      return;
    }

    let isMounted = true;
    let extIndex = 0;

    const tryNext = () => {
      if (extIndex >= EXTENSIONS.length) {
        if (isMounted) setImageSrc(null);
        return;
      }
      const testSrc = `/${baseName}${EXTENSIONS[extIndex]}`;
      const img = new Image();
      img.onload = () => {
        if (isMounted) setImageSrc(testSrc);
      };
      img.onerror = () => {
        extIndex++;
        tryNext();
      };
      img.src = testSrc;
    };

    tryNext();

    return () => {
      isMounted = false;
    };
  }, [baseName, initialSrc]);

  const label = `CARD ${cardIndex} · ${stepName} · 4:5`;
  const filename = `${baseName}.png`;

  return (
    <div className="w-full transition-transform duration-200 hover:-translate-y-1 focus-within:-translate-y-1">
      {imageSrc ? (
        <div className="relative w-full aspect-[4/5] rounded-[4px] bg-[#F3EFE6] overflow-hidden border border-[#111E2E]/10 flex items-center justify-center p-2">
          <img
            src={imageSrc}
            alt={altText || `마케팅 ${stepName} 단계 카드 ${cardIndex}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
            onError={() => {
              if (initialSrc) {
                // If initialSrc fails, attempt standard fallback to /card{index}
                setImageSrc(`/${baseName}.jpg`);
              } else {
                setImageSrc(null);
              }
            }}
          />
        </div>
      ) : (
        <ProofPlaceholder
          label={label}
          filename={filename}
          aspectRatio="4:5"
        />
      )}
    </div>
  );
};
