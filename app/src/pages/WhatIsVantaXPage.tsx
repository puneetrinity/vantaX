import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Layers, Bot, Target, FileX2, Binary, Presentation, Users, CheckCircle2, Star, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';
import Badge from '../components/ui/Badge';
import GradientText from '../components/ui/GradientText';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import StaggerContainer from '../components/motion/StaggerContainer';
import StaggerItem from '../components/motion/StaggerItem';
import FadeInOnScroll from '../components/motion/FadeInOnScroll';
import Comparison from '../sections/landing/Comparison';
import Integrity from '../sections/landing/Integrity';
import FAQ from '../sections/landing/FAQ';
import { WHAT_IS_CARDS, WHY_VANTAX_EXISTS } from '../lib/constants';

const cardIconMap: Record<string, LucideIcon> = { Building2, Layers, Bot, Target };
const existsIconMap: Record<string, LucideIcon> = { FileX2, Binary, Presentation, Users, Bot };

const colorMap: Record<string, string> = {
  primary: 'bg-purple-500/10 text-purple-400',
  pink: 'bg-pink/10 text-pink',
  accent: 'bg-gold-500/10 text-gold-400',
  success: 'bg-success/10 text-success',
};

const WHO_SHOULD_APPLY = [
  'Final-year engineering students (2026/2027 batch)',
  'Recent graduates (0–2 years experience)',
  'Early-career builders looking for internship or entry-level roles',
  'Anyone who can think clearly and execute under constraint',
];

export default function WhatIsVantaXPage() {
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
    <>
      <SEO
        title="What Is VantaX? — A Structured Hiring Audition | VantaX 2026"
        description="VantaX replaces the broken resume-to-interview pipeline. Real companies post real problems. You solve them individually — 3 challenges, 2 hours each, AI tools encouraged."
        path="/what-is-vantax"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'What Is VantaX', path: '/what-is-vantax' },
        ]}
      />
      {/* Hero */}
      <section
        ref={heroRef}
        className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-vanta-dark to-[#0f172a]"
      >
        <div className="hero-glow" />

        {/* Mouse-tracking radial gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(139,92,246,0.15) 0%, rgba(245,158,11,0.08) 35%, transparent 65%)`,
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-gold-400/30 rounded-full animate-float-slow blur-[2px]" />
        <div className="absolute top-[30%] right-[12%] w-2 h-2 bg-purple-400/40 rounded-full animate-float blur-[1px]" />
        <div className="absolute bottom-[22%] left-[20%] w-2.5 h-2.5 bg-gold-500/20 rounded-full animate-float-fast blur-[2px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <Badge>Understanding VantaX</Badge>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            A Structured <GradientText className="glow-text-gold">Hiring Audition</GradientText>
            <br />
            <span className="text-text-secondary text-3xl sm:text-4xl md:text-5xl font-bold">
              Built to Replace Resume Filtering
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg sm:text-xl text-text-secondary font-light max-w-2xl mx-auto"
          >
            VantaX replaces the broken resume-to-interview pipeline. Real companies post real problems.
            You solve them individually — 3 challenges, 2 hours each, AI tools encouraged.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-xl sm:text-2xl font-bold gradient-text-mixed"
          >
            Your college brand won't matter here. Your execution will.
          </motion.p>
        </motion.div>
      </section>

      {/* What Is VantaX — cards */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <SectionHeader
          label="How It Works"
          title="Four pillars that make VantaX different."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WHAT_IS_CARDS.map((card) => {
            const Icon = cardIconMap[card.icon] || Circle;
            return (
              <StaggerItem key={card.title}>
                <Card>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorMap[card.color]}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-[15px] text-text-secondary leading-relaxed">{card.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Why VantaX Exists */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <SectionHeader
          label="Why VantaX Exists"
          title="The hiring system is broken. We're replacing it."
        />

        <StaggerContainer className="flex flex-col gap-4 mb-10">
          {WHY_VANTAX_EXISTS.map((item) => {
            const Icon = existsIconMap[item.icon] || Circle;
            return (
              <StaggerItem key={item.text}>
                <div className="flex items-center gap-4 bg-card border border-border rounded-xl px-6 py-4 hover:border-border-hover transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-pink/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-pink" />
                  </div>
                  <p className="text-[15px] text-text-secondary leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <StaggerContainer>
          <StaggerItem>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold gradient-text-mixed">
                VantaX is built for the AI-native generation.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* VantaX vs Hackathons */}
      <Comparison />

      {/* Integrity & Fair Evaluation */}
      <Integrity />

      {/* Who Should Apply */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <SectionHeader
          label="Who Should Apply"
          title="Built for early-career builders who are tired of sending resumes into the void."
        />

        <FadeInOnScroll>
          <div className="bg-card border border-border rounded-xl p-8">
            <ul className="space-y-4">
              {WHO_SHOULD_APPLY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-gold-400 mt-0.5 shrink-0" />
                  <span className="text-[15px] text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-text-secondary text-[15px] leading-relaxed">
                <span className="text-text-primary font-semibold">85% of employers globally</span> now use skills-based hiring.
                {' '}<span className="text-text-primary font-semibold">64.8%</span> apply it specifically to entry-level roles.
                VantaX is designed to put you in front of those employers — through your work, not your resume.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Long-term Vision */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <FadeInOnScroll>
          <div className="bg-gradient-to-br from-card to-vanta-dark border border-border-subtle rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-400 mb-4">The Vision</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              VantaX isn't just an event. It's a <GradientText className="glow-text-gold">movement.</GradientText>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8 text-left">
              {[
                'Annual national assessment',
                'Ranked performance leaderboard',
                'Top 100 VantaX Performers list',
                'Verified Builder Badge on LinkedIn',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Star size={16} className="text-gold-400 shrink-0" />
                  <span className="text-[15px] text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-gold-400 mb-8">
              Top performers earn the VantaX Verified Builder Badge.
            </p>
            <a href="/#register">
              <Button className="animate-glow-pulse">Apply for VantaX 2026</Button>
            </a>
          </div>
        </FadeInOnScroll>
      </section>
    </>
  );
}
