import { Eye, Scale, Zap, Shield, Rocket, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { WHAT_YOU_GAIN } from '../../lib/constants';

const iconMap: Record<string, LucideIcon> = { Eye, Scale, Zap, Shield, Rocket };

export default function WhatYouGain() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader
        label="Benefits"
        title="What you gain."
        lead="Instead of running your own assessment cycle, you get execution-based data on real candidates."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
        {WHAT_YOU_GAIN.map((item) => {
          const Icon = iconMap[item.icon] || Circle;
          return (
            <StaggerItem key={item.title} className="h-full">
              <Card className="h-full">
                <Icon size={20} className="text-gold-500 mb-4" />
                <h3 className="font-bold text-[16px] mb-1">{item.title}</h3>
                <p className="text-[16px] text-text-secondary">{item.description}</p>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <p className="mt-8 text-[16px] text-text-muted text-center italic">
        <span className="text-purple-500">{'// '}</span>
        Companies using execution-based assessments report 35% better retention and significantly faster time-to-productivity.
      </p>
    </section>
  );
}
