import SectionHeader from '../../components/ui/SectionHeader';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { FORMAT_ITEMS } from '../../lib/constants';

export default function Format() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader
        label="Format"
        title="Clean signal. Zero noise."
        lead="Every design decision exists to produce a clear, comparable hiring signal."
      />

      <StaggerContainer className="flex flex-col gap-px">
        {FORMAT_ITEMS.map((item, i) => (
          <StaggerItem key={item.title}>
            <div className="grid grid-cols-[48px_180px_1fr] sm:grid-cols-[48px_200px_1fr] px-4 py-4 bg-card border border-border terminal-border-left hover:border-border-hover hover:bg-card-hover transition-all items-start">
              <span className="text-text-muted text-[16px]">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-gold-500 text-[16px] font-bold">{item.title}</span>
              <span className="text-text-muted text-[16px]">{item.description}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
