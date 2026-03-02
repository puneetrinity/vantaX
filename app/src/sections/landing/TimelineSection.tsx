import SectionHeader from '../../components/ui/SectionHeader';
import Timeline from '../../components/ui/Timeline';
import { TIMELINE_DATA } from '../../lib/constants';

export default function TimelineSection() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <SectionHeader label="Timeline" title="From registration to results — one week." />
      <Timeline items={TIMELINE_DATA} />
      <p className="mt-6 text-[12px] text-text-muted italic">
        <span className="text-purple-500">{'// '}</span>
        * Dates are tentative. Final schedule will be announced closer to the event.
      </p>
    </section>
  );
}
