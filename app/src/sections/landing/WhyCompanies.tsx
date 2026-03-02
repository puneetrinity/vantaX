import { Filter, Brain, MapPin, PhoneOff, ClipboardCheck, Zap, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { WHY_COMPANIES_PARTICIPATE } from '../../lib/constants';

const iconMap: Record<string, LucideIcon> = { Filter, Brain, MapPin, PhoneOff, ClipboardCheck, Zap };

export default function WhyCompanies() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader
        label="Why Participate"
        title="Why companies participate in VantaX."
        lead="Skip the resume pile. Access execution-ranked, pre-filtered talent with a transparent audit trail — in 7 days."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
        {WHY_COMPANIES_PARTICIPATE.map((item) => {
          const Icon = iconMap[item.icon] || Circle;
          return (
            <StaggerItem key={item.title}>
              <Card className="h-full">
                <div className="w-8 h-8 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold-500" />
                </div>
                <h3 className="text-[14px] font-bold mb-2">{item.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed">{item.description}</p>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
