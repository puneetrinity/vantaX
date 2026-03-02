import { Bot, TrendingDown } from 'lucide-react';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import SectionHeader from '../../components/ui/SectionHeader';

export default function WhyAI() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader
        label="AI Policy"
        title={'The question isn\'t "can they code without AI?" anymore.'}
        lead="It's: can they use AI to solve a real problem with judgment and structure?"
      />

      <FadeInOnScroll>
        <div className="grid sm:grid-cols-2 gap-px">
          <div className="bg-card border border-border p-8">
            <Bot size={24} className="text-purple-400 mb-4" />
            <div className="text-3xl font-bold text-gold-500 mb-1">84%</div>
            <p className="text-[13px] text-text-muted">of developers now use AI tools daily</p>
            <p className="text-[12px] text-text-muted mt-2">Stack Overflow 2025</p>
          </div>
          <div className="bg-card border border-border p-8">
            <TrendingDown size={24} className="text-pink mb-4" />
            <div className="text-3xl font-bold text-gold-500 mb-1">25%</div>
            <p className="text-[13px] text-text-muted">YoY decline in entry-level tech hiring</p>
            <p className="text-[12px] text-text-muted mt-2">Stanford 2025</p>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
