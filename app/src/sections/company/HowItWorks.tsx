import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { HOW_IT_WORKS } from '../../lib/constants';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="How It Works"
        title="From problem statement to talent pipeline."
        lead="Skills-first hiring — implemented, not just talked about."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {HOW_IT_WORKS.map((item) => (
          <StaggerItem key={item.step}>
            <Card>
              <div className="font-mono text-3xl font-bold text-gold-500/30 mb-3">{item.step}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
