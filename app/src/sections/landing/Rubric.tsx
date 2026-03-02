import SectionHeader from '../../components/ui/SectionHeader';
import RubricBar from '../../components/ui/RubricBar';
import StaggerContainer from '../../components/motion/StaggerContainer';
import StaggerItem from '../../components/motion/StaggerItem';
import { RUBRIC_DATA } from '../../lib/constants';

export default function Rubric() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        label="How You'll Be Scored"
        title="Transparent scoring. No guesswork."
        lead="Every submission you make is scored on a standardized rubric — so results are comparable and you know exactly what matters."
      />

      <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.08}>
        {RUBRIC_DATA.map((item) => (
          <StaggerItem key={item.label}>
            <RubricBar {...item} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
