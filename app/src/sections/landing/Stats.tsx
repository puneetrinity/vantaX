import StatCard from '../../components/ui/StatCard';
import { STATS } from '../../lib/constants';

export default function Stats() {
  return (
    <div className="flex flex-wrap justify-center border-y border-border">
      {STATS.map((s, i) => (
        <div key={s.label} className={`flex-1 min-w-[140px] py-8 px-4 text-center ${i < STATS.length - 1 ? 'border-r border-border' : ''}`}>
          <StatCard value={s.value} label={s.label} />
        </div>
      ))}
    </div>
  );
}
