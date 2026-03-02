import SectionHeader from '../../components/ui/SectionHeader';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import { RUBRIC_DATA } from '../../lib/constants';

export default function EvalCriteria() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="Evaluation Criteria"
        title="What you'll evaluate against."
        lead="A standardized evaluation sheet will be provided. You score on the rubric — not on style preferences. Your expertise ensures top performers are identified fairly."
      />

      <FadeInOnScroll>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-vanta-dark">
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-text-secondary">Criteria</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gold-400">Weight</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-text-secondary">What You're Looking For</th>
              </tr>
            </thead>
            <tbody>
              {RUBRIC_DATA.map((r) => (
                <tr key={r.label} className="border-t border-border">
                  <td className="px-6 py-4 text-[15px] bg-card text-text-primary font-medium">{r.label}</td>
                  <td className="px-6 py-4 text-[15px] bg-card text-gold-400 font-mono font-bold">{r.weight}%</td>
                  <td className="px-6 py-4 text-[15px] bg-card text-text-secondary">{r.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
