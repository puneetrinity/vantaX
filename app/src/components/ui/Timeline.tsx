import StaggerContainer from '../motion/StaggerContainer';
import StaggerItem from '../motion/StaggerItem';

interface Item {
  date: string;
  title: string;
  description: string;
}

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <StaggerContainer className="flex flex-col gap-0" staggerDelay={0.12}>
      {items.map((item, i) => (
        <StaggerItem key={i}>
          <div className="grid grid-cols-[160px_1fr] sm:grid-cols-[180px_1fr] py-4 border-b border-border/50 border-dashed hover:bg-card-hover transition-colors">
            <div className="text-[13px] text-purple-500 font-medium">{item.date}</div>
            <div>
              <h4 className="font-bold text-[14px]">{item.title}</h4>
              <p className="text-[12px] text-text-muted">{item.description}</p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
