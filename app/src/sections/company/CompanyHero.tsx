import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

export default function CompanyHero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute top-[20%] right-[-20%] w-[60%] h-[60%] bg-[radial-gradient(ellipse,rgba(124,58,237,0.06)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-3xl"
      >
        <p className="text-[12px] font-bold uppercase tracking-wider text-purple-400 mb-6">
          <span className="text-text-muted">{'// '}</span>For Companies
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
          Stop screening <span className="text-gold-500">500 resumes.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[14px] text-text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Watch candidates solve your actual problem instead. Submit a real business challenge —
          get ranked, rubric-scored submissions and direct access to top performers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          <a href="#intake">
            <Button className="animate-glow-pulse">Submit a Problem</Button>
          </a>
          <a href="#how-it-works">
            <Button variant="outline">Learn How It Works</Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
