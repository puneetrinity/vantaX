import { KeyRound, ScanSearch, MessageSquareText, Shuffle, UserCheck, CheckCircle2, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import { INTEGRITY_ITEMS, SCORING_DETAILS } from '../../lib/constants';

const iconMap: Record<string, LucideIcon> = { KeyRound, ScanSearch, MessageSquareText, Shuffle, UserCheck };

const colorCycle = [
  'bg-gold-500/10 text-gold-400',
  'bg-pink/10 text-pink',
  'bg-purple-500/10 text-purple-400',
  'bg-blue/10 text-blue',
  'bg-success/10 text-success',
];

export default function Integrity() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="Integrity & Fair Evaluation"
        title="Rigorous by design. Transparent by default."
        lead="Every submission is evaluated with multi-layer checks — so results are credible, comparable, and fair."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {INTEGRITY_ITEMS.map((item, i) => {
          const Icon = iconMap[item.icon] || Circle;
          return (
            <StaggerItem key={item.title}>
              <Card className="h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorCycle[i]}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">{item.description}</p>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <FadeInOnScroll>
        <div className="bg-card border border-border-subtle rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-gold-400">Scoring Methodology</h3>
          <ul className="space-y-3">
            {SCORING_DETAILS.map((detail) => (
              <li key={detail} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-success mt-0.5 shrink-0" />
                <span className="text-[15px] text-text-secondary">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
