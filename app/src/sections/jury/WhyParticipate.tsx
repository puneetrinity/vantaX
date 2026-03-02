import { Award } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { JURY_BENEFITS } from '../../lib/constants';

export default function WhyParticipate() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="Why Participate"
        title="What's in it for you."
        lead="In a market where 83% of engineering graduates don't receive a single offer, the signal problem is real. VantaX creates that signal. As jury, you interpret it."
      />

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {JURY_BENEFITS.map((b, i) => (
          <StaggerItem key={i}>
            <div className="flex items-start gap-4 bg-card border border-border rounded-xl px-6 py-5 hover:border-border-hover transition-colors h-full">
              <Award size={20} className="text-gold-400 mt-0.5 flex-shrink-0" />
              <p className="text-[15px] text-text-secondary">{b}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
