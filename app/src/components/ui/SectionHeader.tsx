interface Props {
  label: string;
  title: string;
  lead?: string;
}

export default function SectionHeader({ label, title, lead }: Props) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-purple-500 text-[13px]">const</span>
        <span className="text-[13px] font-bold text-gold-500 uppercase tracking-wider">{label}</span>
        <span className="text-text-muted text-[13px]">=</span>
        <span className="text-text-muted text-[13px]">{'{'}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-3 pl-4 border-l-2 border-purple-500/20">{title}</h2>
      {lead && <p className="text-[14px] text-text-secondary leading-relaxed max-w-2xl pl-4">{lead}</p>}
    </div>
  );
}
