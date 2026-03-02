import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  value: string;
  label: string;
}

function parseStatValue(val: string) {
  const num = parseFloat(val.replace(/[^0-9.]/g, ''));
  const suffix = val.replace(/[0-9.]/g, '');
  return { num, suffix };
}

export default function StatCard({ value, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);
  const { num, suffix } = parseStatValue(value);

  useEffect(() => {
    if (!inView || isNaN(num)) return;

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (num - start) * eased;

      if (num % 1 !== 0) {
        setDisplay(current.toFixed(1) + suffix);
      } else {
        setDisplay(Math.round(current) + suffix);
      }

      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, num, suffix]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl font-bold leading-none text-gold-500">{display}</div>
      <div className="text-[12px] text-text-muted mt-1.5 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}
