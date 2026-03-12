import * as Icons from 'lucide-react';

interface Props {
  icon: string;
  title: string;
  description: string;
}

export default function FormatItem({ icon, title, description }: Props) {
  const Icon = (Icons as any)[icon] || Icons.Circle;
  return (
    <div className="bg-card border border-border p-5 text-center hover:border-border-hover hover:bg-card-hover transition-all h-full flex flex-col items-center terminal-border-left">
      <div className="mb-3">
        <Icon size={24} className="text-gold-500" />
      </div>
      <h4 className="font-bold text-[16px] mb-1">{title}</h4>
      <p className="text-[16px] text-text-muted mt-auto">{description}</p>
    </div>
  );
}
