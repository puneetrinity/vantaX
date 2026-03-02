import { ClipboardCheck } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { JURY_ROLES } from '../../lib/constants';

export default function YourRole() {
  return (
    <section id="your-role" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="Your Role"
        title="What you'll do as a Jury Member."
        lead="All evaluation is focused, time-efficient, and structured. No ambiguity, no guesswork."
      />

      <StaggerContainer className="space-y-3">
        {JURY_ROLES.map((role, i) => (
          <StaggerItem key={i}>
            <div className="flex items-start gap-4 bg-card border border-border rounded-xl px-6 py-4">
              <ClipboardCheck size={20} className="text-gold-400 mt-0.5 flex-shrink-0" />
              <p className="text-[15px] text-text-secondary">{role}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
