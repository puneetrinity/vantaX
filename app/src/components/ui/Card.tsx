import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  neonBorder?: boolean;
}

export default function Card({ children, className = '', hover = true, neonBorder = false }: Props) {
  return (
    <div
      className={`bg-card border border-border p-6 relative overflow-hidden transition-all duration-200 ${
        hover
          ? 'hover:border-border-hover hover:bg-card-hover terminal-border-left group'
          : ''
      } ${neonBorder ? 'animate-neon-border' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
