import React from 'react';

export type StatusType = '사실' | '가설' | '미확인' | '확인 필요' | '가정' | '학생 판단';

interface StatusChipProps {
  status: StatusType | string;
  className?: string;
}

export const StatusChip: React.FC<StatusChipProps> = ({ status, className = '' }) => {
  const trimmed = status.trim().replace(/^\[|\]$/g, '');

  let styleClasses = '';
  switch (trimmed) {
    case '사실':
      // 강조색 채움
      styleClasses = 'bg-[#287A4C] text-white border border-[#287A4C] font-semibold';
      break;
    case '가설':
      // 강조색 테두리
      styleClasses = 'border border-[#287A4C] text-[#287A4C] bg-transparent font-medium';
      break;
    case '미확인':
    case '확인 필요':
      // 회색 점선 테두리
      styleClasses = 'border border-dashed border-[#536479] text-[#536479] bg-transparent font-normal';
      break;
    case '가정':
      // 글색 테두리
      styleClasses = 'border border-[#111E2E] text-[#111E2E] bg-transparent font-medium';
      break;
    case '학생 판단':
      // 글색 채움
      styleClasses = 'bg-[#111E2E] text-[#FAF7F0] border border-[#111E2E] font-semibold';
      break;
    default:
      styleClasses = 'border border-[#536479] text-[#536479] bg-transparent';
  }

  return (
    <span
      className={`inline-flex items-center justify-center px-2 h-[22px] text-[12px] rounded-[4px] leading-none shrink-0 tracking-tight whitespace-nowrap select-none ${styleClasses} ${className}`}
      role="status"
    >
      [{trimmed}]
    </span>
  );
};
