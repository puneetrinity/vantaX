import StaggerContainer from '../motion/StaggerContainer';
import StaggerItem from '../motion/StaggerItem';

interface Item {
  date: string;
  title: string;
  description: string;
}

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <StaggerContainer className="relative pl-10" staggerDelay={0.12}>
      {/* Vertical line */}
      <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-gold-500 to-purple-400 rounded-full" />

      {items.map((item, i) => (
        <StaggerItem key={i}>
          <div className="relative pl-7 py-5">
            {/* Dot */}
            <div className="absolute -left-[32px] top-[26px] w-3 h-3 rounded-full bg-gold-400 border-[3px] border-bg shadow-[0_0_12px_rgba(245,158,11,0.4)]" />
            <div className="font-mono text-[13px] text-gold-400 mb-1">{item.date}</div>
            <h4 className="font-semibold text-base">{item.title}</h4>
            <p className="text-sm text-text-muted">{item.description}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
