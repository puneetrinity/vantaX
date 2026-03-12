import { Github, FileText, Bot, Scale, ExternalLink, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { SUBMISSION_FORMAT } from '../../lib/constants';

const iconMap: Record<string, LucideIcon> = { Github, FileText, Bot, Scale, ExternalLink };

export default function SubmissionFormat() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader
        label="Submission"
        title="What you'll submit for each challenge."
        lead="Every submission follows a structured format — so evaluation is consistent and your reasoning is visible."
      />

      <StaggerContainer className="flex flex-col gap-px">
        {SUBMISSION_FORMAT.map((item, i) => {
          const Icon = iconMap[item.icon] || Circle;
          return (
            <StaggerItem key={item.text}>
              <div className="flex items-center gap-4 bg-card border border-border px-5 py-4 terminal-border-left hover:border-border-hover hover:bg-card-hover transition-all group">
                <span className="text-[16px] text-text-muted w-6 text-right">{String(i + 1).padStart(2, '0')}</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icon size={18} className="text-purple-400" />
                </div>
                <p className="text-[16px] text-text-secondary group-hover:text-text-primary transition-colors">{item.text}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
