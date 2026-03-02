import { ArrowRight } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import { PROBLEM_TYPES } from '../../lib/constants';

export default function ProblemTypes() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="Problem Types"
        title="What kind of problems should you submit?"
        lead="Your problem should be solvable by one person within 2 hours, test structured thinking and execution, and reflect a real scenario."
      />

      <FadeInOnScroll>
        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="font-semibold text-base text-gold-400 mb-4">Strong problem examples:</h3>
          <ul className="space-y-3">
            {PROBLEM_TYPES.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-text-secondary">
                <ArrowRight size={16} className="text-gold-500 mt-1 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-text-muted italic">
            This is about evaluating capability and judgment — not building finished products.
          </p>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
