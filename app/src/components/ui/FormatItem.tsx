import * as Icons from 'lucide-react';

interface Props {
  icon: string;
  title: string;
  description: string;
}

export default function FormatItem({ icon, title, description }: Props) {
  const Icon = (Icons as any)[icon] || Icons.Circle;
  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-border-hover transition-colors h-full flex flex-col items-center">
      <div className="mb-3">
        <Icon size={28} className="text-gold-400" />
      </div>
      <h4 className="font-semibold text-base mb-1">{title}</h4>
      <p className="text-[13px] text-text-muted mt-auto">{description}</p>
    </div>
  );
}
