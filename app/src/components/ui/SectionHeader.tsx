interface Props {
  label: string;
  title: string;
  lead?: string;
}

export default function SectionHeader({ label, title, lead }: Props) {
  return (
    <div className="mb-12">
      <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-400 mb-3">{label}</p>
      <h2 className="text-3xl sm:text-[40px] font-bold leading-tight mb-4">{title}</h2>
      {lead && <p className="text-lg text-text-secondary font-light max-w-2xl">{lead}</p>}
    </div>
  );
}
