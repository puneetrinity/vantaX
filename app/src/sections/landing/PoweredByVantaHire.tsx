import { CheckCircle2 } from 'lucide-react';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import { POWERED_BY_POINTS } from '../../lib/constants';

export default function PoweredByVantaHire() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <FadeInOnScroll>
        <div className="bg-card border border-border-subtle rounded-2xl p-8 sm:p-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/brand/vantax-logo.png" alt="VantaHire" width={40} height={40} loading="lazy" decoding="async" className="h-10 w-auto rounded" />
            <span className="text-2xl font-bold gradient-text-mixed">Powered by VantaHire</span>
          </div>

          <p className="text-text-secondary text-[15px] leading-relaxed max-w-xl mx-auto mb-8">
            VantaHire is building the infrastructure for skills-first talent discovery in India.
            VantaX is our first execution-scored assessment — designed to create a verified, performance-ranked
            early-career talent pool connected directly to companies ready to hire.
          </p>

          <ul className="flex flex-col gap-3 max-w-md mx-auto mb-8 text-left">
            {POWERED_BY_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-[15px] text-text-secondary">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-text-muted italic">
            Human decisions, AI acceleration.
          </p>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
