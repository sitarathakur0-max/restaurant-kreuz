import React from 'react';

interface SwissCrossProps {
  className?: string;
  size?: number;
  color?: string;
}

export const SwissCross: React.FC<SwissCrossProps> = ({
  className = '',
  size = 20,
  color = 'currentColor'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="9" y="3" width="6" height="18" rx="0.5" fill={color} />
      <rect x="3" y="9" width="18" height="6" rx="0.5" fill={color} />
    </svg>
  );
};

export const EditorialDivider: React.FC<{ label?: string; className?: string }> = ({
  label,
  className = ''
}) => {
  return (
    <div className={`relative flex items-center justify-center my-8 ${className}`}>
      <div className="grow border-t border-[#DFD5C7]" />
      {label ? (
        <div className="mx-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#644430] font-medium">
          <SwissCross size={10} color="#9B2424" />
          <span>{label}</span>
          <SwissCross size={10} color="#9B2424" />
        </div>
      ) : (
        <div className="mx-4 text-[#9B2424]">
          <SwissCross size={12} color="#9B2424" />
        </div>
      )}
      <div className="grow border-t border-[#DFD5C7]" />
    </div>
  );
};

export const SectionBadge: React.FC<{ number: string; title: string }> = ({
  number,
  title
}) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold tracking-widest text-[#9B2424] border border-[#9B2424]/30 bg-[#FCE8E8]/60 uppercase">
        <span className="mr-1 text-[10px]">+</span> {number}
      </div>
      <span className="text-xs uppercase tracking-[0.2em] text-[#644430] font-semibold">
        {title}
      </span>
    </div>
  );
};
