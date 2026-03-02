import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  pulse?: boolean;
}

export default function Badge({ children, pulse = false }: Props) {
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/[0.08] text-sm text-purple-400 font-medium tracking-wide">
      {pulse && (
        <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" style={{ animation: 'pulse-dot 2s infinite' }} />
      )}
      {children}
    </span>
  );
}
