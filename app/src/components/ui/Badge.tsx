import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  pulse?: boolean;
}

export default function Badge({ children, pulse = false }: Props) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-purple-500/30 bg-purple-500/[0.05] text-[12px] text-purple-400 font-medium tracking-wider uppercase">
      {pulse && (
        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" style={{ animation: 'pulse-dot 2s infinite' }} />
      )}
      {children}
    </span>
  );
}
