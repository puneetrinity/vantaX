import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import GradientText from '../../components/ui/GradientText';

export default function CompanyHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-vanta-dark to-[#0f172a]"
    >
      <div className="hero-glow" />

      {/* Mouse-tracking radial gradient — large, vivid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(245,158,11,0.15) 0%, rgba(139,92,246,0.08) 35%, transparent 65%)`,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-[20%] left-[8%] w-2.5 h-2.5 bg-gold-400/30 rounded-full animate-float blur-[2px]" />
      <div className="absolute top-[30%] right-[12%] w-2 h-2 bg-purple-400/30 rounded-full animate-float-slow blur-[1px]" />
      <div className="absolute bottom-[25%] right-[20%] w-3 h-3 bg-gold-500/20 rounded-full animate-float-fast blur-[2px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <Badge>For Companies</Badge>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
          Stop screening <GradientText className="glow-text-gold">500 resumes.</GradientText>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-lg sm:text-xl text-text-secondary font-light max-w-2xl mx-auto"
        >
          Watch candidates solve your actual problem instead. Submit a real business challenge —
          get ranked, rubric-scored submissions and direct access to top performers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
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
