import type { ReactNode } from 'react';

interface Props {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function FormSection({ title, description, children }: Props) {
  return (
    <div className="space-y-5">
      <div className="border-b border-border/50 border-dashed pb-3">
        <h3 className="font-bold text-[16px] text-gold-500">
          <span className="text-purple-500 mr-2">//</span>{title}
        </h3>
        {description && <p className="text-[16px] text-text-muted mt-1">{description}</p>}
      </div>
      {children}
    </div>
  );
}
