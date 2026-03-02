import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { HOW_IT_WORKS } from '../../lib/constants';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader
        label="Process"
        title="From problem statement to talent pipeline."
        lead="Skills-first hiring — implemented, not just talked about."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-px">
        {HOW_IT_WORKS.map((item) => (
          <StaggerItem key={item.step}>
            <Card>
              <div className="text-2xl font-bold text-purple-500/20 mb-3">{item.step}</div>
              <h3 className="text-[14px] font-bold mb-2">{item.title}</h3>
              <p className="text-[13px] text-text-secondary">{item.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
