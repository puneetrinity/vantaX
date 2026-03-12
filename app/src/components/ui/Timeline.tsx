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
          <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] py-4 border-b border-border/50 border-dashed hover:bg-card-hover transition-colors gap-0.5 sm:gap-0">
            <div className="text-[16px] text-purple-500 font-medium">{item.date}</div>
            <div>
              <h4 className="font-bold text-[16px]">{item.title}</h4>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
