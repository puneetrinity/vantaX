import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import SectionHeader from '../../components/ui/SectionHeader';

export default function TimeCommitment() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader label="Time" title="Focused, not burdensome." />

      <FadeInOnScroll>
        <div className="grid sm:grid-cols-2 gap-px">
          <div className="bg-card border border-border p-8 text-center">
            <div className="text-3xl font-bold text-gold-500 mb-2">60–120</div>
            <p className="text-[13px] text-text-muted">minutes for evaluation of shortlisted submissions</p>
          </div>
          <div className="bg-card border border-border p-8 text-center">
            <div className="text-3xl font-bold text-gold-500 mb-2">45</div>
            <p className="text-[13px] text-text-muted">minute optional jury call for live review round</p>
          </div>
        </div>
        <p className="mt-6 text-[12px] text-text-muted text-center italic">
          <span className="text-purple-500">{'// '}</span>
          Pre-filtering is handled internally. You review only the top tier.
        </p>
      </FadeInOnScroll>
    </section>
  );
}
