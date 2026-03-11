interface Props {
  weight: number;
  label: string;
  description: string;
}

export default function RubricBar({ weight, label, description }: Props) {
  return (
    <div className="flex items-center gap-5 bg-card border border-border px-5 py-4 terminal-border-left hover:border-border-hover transition-all">
      <div className="text-2xl font-bold text-gold-500 w-[60px] shrink-0">{weight}%</div>
      <h4 className="font-bold text-[16px] w-[220px] shrink-0">{label}</h4>
      <span className="text-text-secondary text-[16px]">{description}</span>
    </div>
  );
}
