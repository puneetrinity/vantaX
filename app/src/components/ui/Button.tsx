import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: ReactNode;
}

const styles = {
  primary:
    'bg-gold-500 text-bg hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]',
  outline:
    'border border-purple-500/30 text-purple-400 hover:border-purple-500 hover:bg-purple-500/10',
  ghost:
    'text-text-muted hover:text-gold-500',
};

export default function Button({ variant = 'primary', className = '', children, ...props }: Props) {
  return (
    <button
      className={`px-6 py-3 font-bold text-[13px] uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
