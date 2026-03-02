import { Github, FileText, Bot, Scale, ExternalLink, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { SUBMISSION_FORMAT } from '../../lib/constants';

const iconMap: Record<string, LucideIcon> = { Github, FileText, Bot, Scale, ExternalLink };

export default function SubmissionFormat() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <SectionHeader
        label="Submission Format"
        title="What you'll submit for each challenge."
        lead="Every submission follows a structured format — so evaluation is consistent and your reasoning is visible."
      />

      <StaggerContainer className="flex flex-col gap-4">
        {SUBMISSION_FORMAT.map((item, i) => {
          const Icon = iconMap[item.icon] || Circle;
          return (
            <StaggerItem key={item.text}>
              <div className="flex items-center gap-5 bg-card border border-border rounded-xl px-6 py-5 hover:border-border-hover transition-colors group">
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-mono font-bold text-text-muted w-6 text-right">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Icon size={20} className="text-purple-400" />
                  </div>
                </div>
                <p className="text-[15px] text-text-secondary group-hover:text-text-primary transition-colors">{item.text}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
