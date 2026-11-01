import React from 'react';

interface ProofPlaceholderProps {
  label: string;
  filename: string;
  aspectRatio?: '4:5' | '16:9';
  isVideo?: boolean;
  className?: string;
}

export const ProofPlaceholder: React.FC<ProofPlaceholderProps> = ({
  label,
  filename,
  aspectRatio = '4:5',
  isVideo = false,
  className = '',
}) => {
  const aspectClass = aspectRatio === '4:5' ? 'aspect-[4/5]' : 'aspect-[16/9]';

  return (
    <div
      className={`relative w-full ${aspectClass} bg-[#F3EFE6] rounded-[4px] p-4 flex flex-col justify-between overflow-hidden select-none border border-dashed border-[#111E2E]/20 ${className}`}
      aria-label={`${label} - ${isVideo ? '영상 자리' : '그림 자리'}`}
    >
      {/* Print Proof Crop Marks (재단 표시) at 4 corners */}
      {/* Top Left */}
      <div className="absolute top-2 left-2 pointer-events-none" aria-hidden="true">
        <div className="w-3.5 h-[1px] bg-[#111E2E]/35"></div>
        <div className="w-[1px] h-3.5 bg-[#111E2E]/35"></div>
      </div>
      {/* Top Right */}
      <div className="absolute top-2 right-2 flex flex-col items-end pointer-events-none" aria-hidden="true">
        <div className="w-3.5 h-[1px] bg-[#111E2E]/35"></div>
        <div className="w-[1px] h-3.5 bg-[#111E2E]/35"></div>
      </div>
      {/* Bottom Left */}
      <div className="absolute bottom-2 left-2 flex flex-col justify-end pointer-events-none" aria-hidden="true">
        <div className="w-[1px] h-3.5 bg-[#111E2E]/35"></div>
        <div className="w-3.5 h-[1px] bg-[#111E2E]/35"></div>
      </div>
      {/* Bottom Right */}
      <div className="absolute bottom-2 right-2 flex flex-col items-end justify-end pointer-events-none" aria-hidden="true">
        <div className="w-[1px] h-3.5 bg-[#111E2E]/35"></div>
        <div className="w-3.5 h-[1px] bg-[#111E2E]/35"></div>
      </div>

      {/* Top Left: Monospace Spec Badge */}
      <div className="z-10 self-start">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#111E2E]/70 bg-[#FAF7F0]/80 px-2 py-0.5 rounded-[2px] border border-[#111E2E]/10">
          {label}
        </span>
      </div>

      {/* Center: Instruction & Target Filename */}
      <div className="my-auto text-center z-10 px-4">
        <p className="text-[15px] font-medium text-[#111E2E]/80 tracking-tight">
          {isVideo ? '영상 자리 · 다음 주에 넣습니다' : '그림 자리 · 다음 주에 넣습니다'}
        </p>
        <p className="mt-1 font-mono text-[12px] text-[#536479] tracking-normal">
          {filename}
        </p>
      </div>

      {/* Bottom info: subtle scale indication */}
      <div className="z-10 text-right">
        <span className="font-mono text-[10px] text-[#536479]/60">
          PROOF SHEET · 1:1 SCALE
        </span>
      </div>
    </div>
  );
};
