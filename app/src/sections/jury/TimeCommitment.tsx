import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import SectionHeader from '../../components/ui/SectionHeader';

export default function TimeCommitment() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader label="Time Commitment" title="Focused, not burdensome." />

      <FadeInOnScroll>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="font-mono text-4xl font-bold gradient-text-mixed mb-2">60–120</div>
            <p className="text-sm text-text-muted">minutes for evaluation of shortlisted submissions</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="font-mono text-4xl font-bold gradient-text-mixed mb-2">45</div>
            <p className="text-sm text-text-muted">minute optional jury call for live review round</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-text-muted text-center italic">
          Pre-filtering is handled internally. You review only the top tier.
        </p>
      </FadeInOnScroll>
    </section>
  );
}
