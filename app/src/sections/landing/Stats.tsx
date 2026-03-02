import StatCard from '../../components/ui/StatCard';
import { STATS } from '../../lib/constants';

export default function Stats() {
  return (
    <div className="flex flex-wrap justify-center gap-12 px-4 py-12 border-y border-border bg-card/50">
      {STATS.map((s) => (
        <StatCard key={s.label} value={s.value} label={s.label} />
      ))}
    </div>
  );
}
