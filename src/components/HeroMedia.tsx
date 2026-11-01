import React, { useState, useEffect, useRef } from 'react';
import { ProofPlaceholder } from './ProofPlaceholder';

const EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

interface SlideItem {
  id: number;
  label: string;
  filename: string;
  src: string | null;
}

export const HeroMedia: React.FC<{ initialSrc?: string }> = ({
  initialSrc = '/assets/aistudio/_____4_848a8764.jpg',
}) => {
  const [slides, setSlides] = useState<SlideItem[]>([
    { id: 1, label: 'HERO 1 · 4:5', filename: '_____4_848a8764.jpg', src: initialSrc },
    { id: 2, label: 'HERO 2 · 4:5', filename: 'hero2.png', src: null },
    { id: 3, label: 'HERO 3 · 4:5', filename: 'hero3.png', src: null },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Probe available hero images from /hero1, /hero2, /hero3 with extensions
  useEffect(() => {
    let isMounted = true;

    const probeImage = (name: string): Promise<string | null> => {
      return new Promise((resolve) => {
        let extIndex = 0;
        const tryNext = () => {
          if (extIndex >= EXTENSIONS.length) {
            resolve(null);
            return;
          }
          const testSrc = `/${name}${EXTENSIONS[extIndex]}`;
          const img = new Image();
          img.onload = () => resolve(testSrc);
          img.onerror = () => {
            extIndex++;
            tryNext();
          };
          img.src = testSrc;
        };
        tryNext();
      });
    };

    Promise.all([
      probeImage('hero1'),
      probeImage('hero2'),
      probeImage('hero3'),
    ]).then(([s1, s2, s3]) => {
      if (!isMounted) return;
      setSlides([
        {
          id: 1,
          label: 'HERO 1 · 4:5',
          filename: '영상사진4',
          src: initialSrc || s1 || '/hero1.jpg',
        },
        {
          id: 2,
          label: 'HERO 2 · 4:5',
          filename: s2 ? s2.slice(1) : 'hero2.png',
          src: s2,
        },
        {
          id: 3,
          label: 'HERO 3 · 4:5',
          filename: s3 ? s3.slice(1) : 'hero3.png',
          src: s3,
        },
      ]);
    });

    return () => {
      isMounted = false;
    };
  }, [initialSrc]);

  const activeSlides = slides.filter((s) => s.src !== null);
  const hasImages = activeSlides.length > 0;

  // 5s slide timer with 1.2s crossfade transition and zoom 1.00 -> 1.06
  useEffect(() => {
    if (!hasImages) return;

    setProgress(0);
    setIsZoomed(false);

    // Small delay to trigger smooth scale-up after mount/switch
    const zoomStartTimer = setTimeout(() => {
      setIsZoomed(true);
    }, 50);

    const DURATION = 5000;
    const STEP = 50;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (STEP / DURATION) * 100;
        return next >= 100 ? 100 : next;
      });
    }, STEP);

    timerRef.current = setInterval(() => {
      if (activeSlides.length > 1) {
        setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
      }
      setProgress(0);
      setIsZoomed(false);
      setTimeout(() => setIsZoomed(true), 50);
    }, DURATION);

    return () => {
      clearTimeout(zoomStartTimer);
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [hasImages, activeSlides.length, currentIndex]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
    setIsZoomed(false);
    setTimeout(() => setIsZoomed(true), 50);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Media Viewport (4:5 Aspect Ratio) */}
      <div className="relative w-full aspect-[4/5] max-h-[820px] rounded-[4px] overflow-hidden bg-[#F3EFE6] shadow-xs">
        {hasImages ? (
          activeSlides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.src!}
                  alt={`팡마니 1500 미니 두부 프로틴 랩 콘셉트 이미지 ${slide.id}`}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out will-change-transform ${
                    isActive && isZoomed ? 'scale-[1.06]' : 'scale-100'
                  }`}
                />
              </div>
            );
          })
        ) : (
          /* Placeholder Proof Sheet when no files are uploaded */
          <ProofPlaceholder
            label="HERO 1 · 4:5"
            filename="hero1.png"
            aspectRatio="4:5"
            className="h-full"
          />
        )}
      </div>

      {/* Progress Bars (진행 막대 - 사진이 있으면 표시) */}
      {hasImages && (
        <div className="w-full flex gap-2 mt-4 px-1" role="tablist" aria-label="히어로 이미지 슬라이드">
          {activeSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className="flex-1 h-1.5 bg-[#111E2E]/15 rounded-full overflow-hidden cursor-pointer p-0 border-0 focus-visible:outline-2 focus-visible:outline-[#287A4C]"
              aria-label={`이미지 ${idx + 1} 보기`}
              aria-selected={idx === currentIndex}
              role="tab"
            >
              <div
                className="h-full bg-[#287A4C] transition-all duration-75"
                style={{
                  width:
                    idx === currentIndex
                      ? `${progress}%`
                      : idx < currentIndex
                      ? '100%'
                      : '0%',
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Caption note */}
      <p className="mt-3 text-center text-[13px] text-[#536479]">
        AI 생성 콘셉트 이미지 · 실제 제품 사진이 아닙니다
      </p>
    </div>
  );
};
