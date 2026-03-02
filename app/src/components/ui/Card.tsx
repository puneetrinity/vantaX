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
      className={`bg-card border border-border rounded-xl p-8 relative overflow-hidden transition-all duration-300 ${
        hover
          ? 'hover:border-border-hover hover:bg-card-hover hover:shadow-lg hover:shadow-glow hover:-translate-y-1 group'
          : ''
      } ${neonBorder ? 'animate-neon-border' : ''} ${className}`}
    >
      {hover && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      {children}
    </div>
  );
}
