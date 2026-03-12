import StatCard from '../../components/ui/StatCard';
import { STATS } from '../../lib/constants';

export default function Stats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 border-y border-border">
      {STATS.map((s, i) => {
        const isLeftCol = i % 2 === 0;
        const isTopRow = i < 2;
        return (
          <div
            key={s.label}
            className={[
              'py-8 px-4 text-center',
              isLeftCol ? 'border-r border-border' : '',
              isTopRow ? 'border-b border-border sm:border-b-0' : '',
              !isLeftCol && isTopRow ? 'sm:border-r sm:border-border' : '',
            ].join(' ')}
          >
            <StatCard value={s.value} label={s.label} />
          </div>
        );
      })}
    </div>
  );
}
