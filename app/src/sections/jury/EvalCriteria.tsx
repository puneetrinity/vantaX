import SectionHeader from '../../components/ui/SectionHeader';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import { RUBRIC_DATA } from '../../lib/constants';

export default function EvalCriteria() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader
        label="Criteria"
        title="What you'll evaluate against."
        lead="A standardized evaluation sheet will be provided. You score on the rubric — not on style preferences. Your expertise ensures top performers are identified fairly."
      />

      <FadeInOnScroll>
        <div className="overflow-x-auto border border-border">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-500/5">
                <th className="px-5 py-3 text-left text-[16px] font-bold uppercase tracking-wider text-text-muted">Criteria</th>
                <th className="px-5 py-3 text-left text-[16px] font-bold uppercase tracking-wider text-gold-500">Weight</th>
                <th className="px-5 py-3 text-left text-[16px] font-bold uppercase tracking-wider text-text-muted">What You're Looking For</th>
              </tr>
            </thead>
            <tbody>
              {RUBRIC_DATA.map((r) => (
                <tr key={r.label} className="border-t border-border hover:bg-card-hover transition-colors">
                  <td className="px-5 py-3 text-[16px] text-text-primary font-medium">{r.label}</td>
                  <td className="px-5 py-3 text-[16px] text-gold-500 font-bold">{r.weight}%</td>
                  <td className="px-5 py-3 text-[16px] text-text-secondary">{r.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
