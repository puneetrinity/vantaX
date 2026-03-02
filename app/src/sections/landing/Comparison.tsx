import SectionHeader from '../../components/ui/SectionHeader';
import ComparisonTable from '../../components/ui/ComparisonTable';
import { COMPARISON_DATA } from '../../lib/constants';

export default function Comparison() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="Why VantaX"
        title="Hackathons were built for spectacle. VantaX is built for hiring."
      />
      <ComparisonTable data={COMPARISON_DATA} />
    </section>
  );
}
