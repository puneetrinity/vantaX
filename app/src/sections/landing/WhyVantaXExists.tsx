import { FileX2, Binary, Presentation, Users, Bot, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { WHY_VANTAX_EXISTS } from '../../lib/constants';

const iconMap: Record<string, LucideIcon> = { FileX2, Binary, Presentation, Users, Bot };

export default function WhyVantaXExists() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <SectionHeader
        label="Why VantaX Exists"
        title="The hiring system is broken. We're replacing it."
      />

      <StaggerContainer className="flex flex-col gap-4 mb-10">
        {WHY_VANTAX_EXISTS.map((item) => {
          const Icon = iconMap[item.icon] || Circle;
          return (
            <StaggerItem key={item.text}>
              <div className="flex items-center gap-4 bg-card border border-border rounded-xl px-6 py-4 hover:border-border-hover transition-colors">
                <div className="w-10 h-10 rounded-lg bg-pink/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-pink" />
                </div>
                <p className="text-[16px] text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <StaggerContainer>
        <StaggerItem>
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold gradient-text-mixed">
              VantaX is built for the AI-native generation.
            </p>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
