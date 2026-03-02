import type { ReactNode } from 'react';

export default function GradientText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`text-gold-500 ${className}`}>{children}</span>;
}
