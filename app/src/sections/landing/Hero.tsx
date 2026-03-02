import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import GradientText from '../../components/ui/GradientText';

export default function Hero() {
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
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-vanta-dark to-[#0f172a]"
    >
      {/* Static hero glow */}
      <div className="hero-glow" />

      {/* Mouse-tracking radial gradient — large, vivid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(245,158,11,0.15) 0%, rgba(139,92,246,0.08) 35%, transparent 65%)`,
        }}
      />

      {/* Floating decorative orbs */}
      <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-gold-400/30 rounded-full animate-float-slow blur-[2px]" />
      <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-purple-400/40 rounded-full animate-float blur-[1px]" />
      <div className="absolute bottom-[20%] left-[20%] w-2.5 h-2.5 bg-gold-500/20 rounded-full animate-float-fast blur-[2px]" />
      <div className="absolute bottom-[30%] right-[10%] w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-float-slow blur-[1px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <Badge pulse>Event Launches 23 April 2026 &middot; Seats Capped Per Problem</Badge>

        <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.05]">
          <GradientText className="glow-text-gold">3 Challenges.</GradientText>
          <br />
          2 Hours Each.
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg sm:text-xl text-text-secondary font-light max-w-2xl mx-auto"
        >
          India's first structured hiring audition. Real companies post real problems.
          You solve them — individually, under the clock, with AI tools. Top performers get hired.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-sm text-gold-400 font-medium tracking-wide"
        >
          ₹199 &middot; All 3 Challenges &middot; Direct Hiring Pipeline
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <p className="text-text-muted text-sm">Build. Submit. Get seen.</p>
          <a href="#register">
            <Button className="animate-glow-pulse">Apply for VantaX 2026</Button>
          </a>
          <div className="flex gap-6 text-sm text-text-muted">
            <Link to="/companies" className="hover:text-gold-400 transition-colors">Company? Submit a problem &rarr;</Link>
            <Link to="/jury" className="hover:text-gold-400 transition-colors">Expert? Join as jury &rarr;</Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
