import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  weight: number;
  label: string;
  description: string;
}

export default function RubricBar({ weight, label, description }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const maxWeight = 25;
  const percent = (weight / maxWeight) * 100;

  return (
    <div
      ref={ref}
      className="flex items-center gap-5 bg-card border border-border px-5 py-4 flex-wrap sm:flex-nowrap terminal-border-left hover:border-border-hover transition-all"
    >
      <div className="text-2xl font-bold text-gold-500 min-w-[60px]">{weight}%</div>
      <div className="flex-shrink-0 min-w-[140px]">
        <h4 className="font-bold text-[14px]">{label}</h4>
        <p className="text-[12px] text-text-muted mt-0.5">{description}</p>
      </div>
      <div className="flex-1 h-1 bg-white/5 overflow-hidden w-full sm:w-auto">
        <motion.div
          className="h-full bg-purple-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
