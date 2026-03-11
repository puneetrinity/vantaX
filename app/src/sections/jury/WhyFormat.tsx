import { Check } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import { JURY_WHY_FORMAT } from '../../lib/constants';

export default function WhyFormat() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader
        label="Format"
        title="Not vibes. Not demos. Structured execution."
        lead="VantaX is different from every hackathon or coding test you've judged before."
      />

      <FadeInOnScroll>
        <div className="bg-card border border-border p-8">
          <ul className="space-y-4">
            {JURY_WHY_FORMAT.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] text-text-secondary">
                <Check size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
