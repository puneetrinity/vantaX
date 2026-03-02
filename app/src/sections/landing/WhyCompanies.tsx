import { Filter, Brain, MapPin, PhoneOff, ClipboardCheck, Zap, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { WHY_COMPANIES_PARTICIPATE } from '../../lib/constants';

const iconMap: Record<string, LucideIcon> = { Filter, Brain, MapPin, PhoneOff, ClipboardCheck, Zap };

const colorCycle = [
  'bg-purple-500/10 text-purple-400',
  'bg-gold-500/10 text-gold-400',
  'bg-pink/10 text-pink',
  'bg-success/10 text-success',
  'bg-blue/10 text-blue',
  'bg-purple-500/10 text-purple-400',
];

export default function WhyCompanies() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="Why Participate"
        title="Why companies participate in VantaX."
        lead="Skip the resume pile. Access execution-ranked, pre-filtered talent with a transparent audit trail — in 7 days."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_COMPANIES_PARTICIPATE.map((item, i) => {
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
    </section>
  );
}
