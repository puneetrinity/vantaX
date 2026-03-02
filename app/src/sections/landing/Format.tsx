import SectionHeader from '../../components/ui/SectionHeader';
import FormatItem from '../../components/ui/FormatItem';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { FORMAT_ITEMS } from '../../lib/constants';

export default function Format() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="Challenge Format"
        title="Clean signal. Zero noise."
        lead="Every design decision exists to produce a clear, comparable hiring signal."
      />

      <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {FORMAT_ITEMS.map((item) => (
          <StaggerItem key={item.title} className="h-full">
            <FormatItem {...item} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
