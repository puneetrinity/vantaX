import { Bot, FileText } from 'lucide-react';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import SectionHeader from '../../components/ui/SectionHeader';

export default function WhyAI() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader
        label="Why AI"
        title="Why AI-assisted assessment creation matters."
        lead="Most teams know the role they need to hire for, but not how to design a strong assessment. VantaX creates the first draft from your hiring context so your team starts from review, not from scratch."
      />

      <FadeInOnScroll>
        <div className="grid sm:grid-cols-2 gap-px">
          <div className="bg-card border border-border p-8">
            <Bot size={24} className="text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-text-primary">Less assessment design work</h3>
            <p className="mt-3 text-[16px] text-text-muted">
              Your team provides the hiring context. VantaX generates the structure, round progression,
              and draft tasks.
            </p>
          </div>
          <div className="bg-card border border-border p-8">
            <FileText size={24} className="text-gold-500 mb-4" />
            <h3 className="text-xl font-bold text-text-primary">Better starting point</h3>
            <p className="mt-3 text-[16px] text-text-muted">
              You review and refine a concrete draft instead of writing an assessment from a blank
              page.
            </p>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
