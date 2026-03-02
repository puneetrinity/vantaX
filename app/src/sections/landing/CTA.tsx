import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import GradientText from '../../components/ui/GradientText';

export default function CTA() {
  return (
    <section className="py-24 px-4 text-center relative bg-gradient-to-b from-bg via-vanta-dark to-bg overflow-hidden">
      {/* Decorative floating orbs */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-purple-500/10 rounded-full animate-float-slow blur-[40px]" />
      <div className="absolute bottom-[10%] right-[5%] w-40 h-40 bg-gold-500/10 rounded-full animate-float blur-[50px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          <GradientText className="glow-text-gold">Ready to Replace Your Resume?</GradientText>
        </h2>
        <p className="text-lg text-text-secondary max-w-lg mx-auto mb-2">
          Build. Submit. Get seen.
        </p>
        <p className="text-sm text-text-muted mb-3">
          3 challenges. 2 hours each. ₹199 for the entire event.
        </p>
        <p className="text-sm text-gold-400 font-medium mb-8">
          Top performers earn the VantaX Verified Builder Badge.
        </p>
        <a href="#register">
          <Button className="animate-glow-pulse">Apply for VantaX 2026</Button>
        </a>
      </motion.div>
    </section>
  );
}
