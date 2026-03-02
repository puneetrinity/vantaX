import SectionHeader from '../../components/ui/SectionHeader';
import { RUBRIC_DATA } from '../../lib/constants';

export default function EvalFramework() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="Evaluation Framework"
        title="How we score your candidates."
        lead="All submissions are scored across a transparent, standardized rubric — so you can trust the results and compare candidates objectively."
      />

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-vanta-dark">
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-text-secondary">Criteria</th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gold-400">Weight</th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-text-secondary">What It Measures</th>
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
    </section>
  );
}
