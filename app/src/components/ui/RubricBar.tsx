interface Props {
  weight: number;
  label: string;
  description: string;
}

export default function RubricBar({ weight, label, description }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 bg-card border border-border px-5 py-4 terminal-border-left hover:border-border-hover transition-all">
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="text-2xl font-bold text-gold-500 w-[60px] shrink-0">{weight}%</div>
        <h4 className="font-bold text-[16px] sm:w-[220px] sm:shrink-0">{label}</h4>
      </div>
      <span className="text-text-secondary text-[16px] sm:ml-0 ml-[72px]">{description}</span>
    </div>
  );
}
