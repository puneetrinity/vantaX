import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: ReactNode;
}

const styles = {
  primary:
    'bg-gradient-to-r from-gold-500 to-gold-600 text-bg shadow-lg shadow-glow-gold hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(245,158,11,0.4)]',
  outline:
    'border border-border-subtle text-text-primary hover:border-purple-500 hover:bg-card',
  ghost:
    'text-text-secondary hover:text-gold-400 hover:bg-card',
};

export default function Button({ variant = 'primary', className = '', children, ...props }: Props) {
  return (
    <button
      className={`px-7 py-3.5 rounded-lg font-semibold text-[15px] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
