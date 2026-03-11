import { Building2, Layers, Bot, Target, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { WHAT_IS_CARDS } from '../../lib/constants';

const iconMap: Record<string, LucideIcon> = { Building2, Layers, Bot, Target };

const colorMap: Record<string, string> = {
  primary: 'bg-purple-500/10 text-purple-400',
  pink: 'bg-pink/10 text-pink',
  accent: 'bg-gold-500/10 text-gold-400',
  success: 'bg-success/10 text-success',
};

export default function WhatIs() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="What Is VantaX"
        title="A structured hiring audition — built to replace resume filtering."
        lead="VantaX replaces the broken resume-to-interview pipeline. Real companies post real problems. You solve them individually — 3 challenges, 2 hours each, AI tools encouraged. Your college brand won't matter here. Your execution will."
      />

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {WHAT_IS_CARDS.map((card) => {
          const Icon = iconMap[card.icon] || Circle;
          return (
            <StaggerItem key={card.title}>
              <Card>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorMap[card.color]}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
