import React, { useEffect, useState, useRef } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'section-hero', label: '① 히어로' },
  { id: 'section-history', label: '② 개발 히스토리' },
  { id: 'section-marketing', label: '③ 마케팅' },
  { id: 'section-proposal', label: '④ 제품 개발 제안서' },
];

export const TopBar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('section-hero');
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for sticky header
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update sliding indicator line position
  useEffect(() => {
    if (!navContainerRef.current) return;
    const activeButton = navContainerRef.current.querySelector<HTMLElement>(
      `[data-nav-id="${activeId}"]`
    );
    if (activeButton) {
      setIndicatorStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeId]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70; // Header height offset
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#FAF7F0]/85 backdrop-blur-md border-b border-[#111E2E]/10 transition-colors">
      <div className="max-w-[1240px] h-full mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between gap-4">
        {/* Left: Product Proposal Brand Mark (Hidden below 1100px) */}
        <div className="hidden min-[1101px]:flex items-center shrink-0">
          <span className="font-heading text-[17px] text-[#111E2E] tracking-tight">
            팡마니 신제품 제안 · 팡마니 1500 미니 두부 프로틴 랩
          </span>
        </div>

        {/* Right Shortcuts: Scrollable row on mobile (<767px), animated underline */}
        <nav
          ref={navContainerRef}
          className="relative flex items-center gap-1 sm:gap-4 overflow-x-auto no-scrollbar whitespace-nowrap w-full min-[1101px]:w-auto py-2"
          aria-label="페이지 바로가기"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                data-nav-id={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-[14px] sm:text-[15px] font-medium transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#287A4C] rounded-[2px] ${
                  isActive ? 'text-[#287A4C] font-semibold' : 'text-[#111E2E]/75 hover:text-[#111E2E]'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </button>
            );
          })}

          {/* Sliding indicator line */}
          <div
            className="absolute bottom-0 h-[2px] bg-[#287A4C] transition-all duration-300 ease-out pointer-events-none"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
            aria-hidden="true"
          />
        </nav>
      </div>
    </header>
  );
};
