import type { ReactNode } from 'react';

interface Props {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function FormSection({ title, description, children }: Props) {
  return (
    <div className="space-y-5">
      <div className="border-b border-border pb-3">
        <h3 className="font-semibold text-lg text-gold-400">{title}</h3>
        {description && <p className="text-sm text-text-muted mt-1">{description}</p>}
      </div>
      {children}
    </div>
  );
}
