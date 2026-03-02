import { motion } from 'framer-motion';
import { Building2, Layers, Bot, Target, FileX2, Binary, Presentation, Users, CheckCircle2, Star, Circle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import StaggerContainer from '../components/motion/StaggerContainer';
import StaggerItem from '../components/motion/StaggerItem';
import FadeInOnScroll from '../components/motion/FadeInOnScroll';
import Comparison from '../sections/landing/Comparison';
import Integrity from '../sections/landing/Integrity';
import FAQ from '../sections/landing/FAQ';
import { WHAT_IS_CARDS, WHY_VANTAX_EXISTS } from '../lib/constants';

const cardIconMap: Record<string, LucideIcon> = { Building2, Layers, Bot, Target };
const existsIconMap: Record<string, LucideIcon> = { FileX2, Binary, Presentation, Users, Bot };

const WHO_SHOULD_APPLY = [
  'Final-year engineering students (2026/2027 batch)',
  'Recent graduates (0–2 years experience)',
  'Early-career builders looking for internship or entry-level roles',
  'Anyone who can think clearly and execute under constraint',
];

export default function WhatIsVantaXPage() {
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
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute top-[20%] left-[-20%] w-[60%] h-[60%] bg-[radial-gradient(ellipse,rgba(124,58,237,0.06)_0%,transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl"
        >
          <p className="text-[12px] font-bold uppercase tracking-wider text-purple-400 mb-6">
            <span className="text-text-muted">{'// '}</span>Understanding VantaX
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
            A Structured <span className="text-gold-500">Hiring Audition</span>
            <br />
            <span className="text-text-muted text-2xl sm:text-3xl">
              Built to Replace Resume Filtering
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[14px] text-text-secondary max-w-2xl mx-auto"
          >
            VantaX replaces the broken resume-to-interview pipeline. Real companies post real problems.
            You solve them individually — 3 challenges, 2 hours each, AI tools encouraged.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-[15px] font-bold text-gold-500"
          >
            Your college brand won't matter here. Your execution will.
          </motion.p>
        </motion.div>
      </section>

      {/* What Is VantaX — cards */}
      <section className="py-20 px-4 max-w-[1000px] mx-auto">
        <SectionHeader
          label="How It Works"
          title="Four pillars that make VantaX different."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-px">
          {WHAT_IS_CARDS.map((card) => {
            const Icon = cardIconMap[card.icon] || Circle;
            return (
              <StaggerItem key={card.title}>
                <Card>
                  <div className="w-8 h-8 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-purple-400" />
                  </div>
                  <h3 className="text-[15px] font-bold mb-2">{card.title}</h3>
                  <p className="text-[13px] text-text-secondary leading-relaxed">{card.description}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Why VantaX Exists */}
      <section className="py-20 px-4 max-w-[1000px] mx-auto">
        <SectionHeader
          label="Why It Exists"
          title="The hiring system is broken. We're replacing it."
        />

        <StaggerContainer className="flex flex-col gap-px mb-10">
          {WHY_VANTAX_EXISTS.map((item) => {
            const Icon = existsIconMap[item.icon] || Circle;
            return (
              <StaggerItem key={item.text}>
                <div className="flex items-center gap-4 bg-card border border-border px-5 py-4 terminal-border-left hover:border-border-hover transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-pink" />
                  </div>
                  <p className="text-[13px] text-text-secondary leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <StaggerContainer>
          <StaggerItem>
            <div className="text-center">
              <p className="text-[15px] font-bold text-gold-500">
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
      <section className="py-20 px-4 max-w-[1000px] mx-auto">
        <SectionHeader
          label="Who Should Apply"
          title="Built for early-career builders who are tired of sending resumes into the void."
        />

        <FadeInOnScroll>
          <div className="bg-card border border-border p-8">
            <ul className="space-y-4">
              {WHO_SHOULD_APPLY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-[13px] text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border/50 border-dashed">
              <p className="text-text-secondary text-[13px] leading-relaxed">
                <span className="text-text-primary font-bold">85% of employers globally</span> now use skills-based hiring.
                {' '}<span className="text-text-primary font-bold">64.8%</span> apply it specifically to entry-level roles.
                VantaX is designed to put you in front of those employers — through your work, not your resume.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Long-term Vision */}
      <section className="py-20 px-4 max-w-[1000px] mx-auto">
        <FadeInOnScroll>
          <div className="bg-card border border-border p-8 sm:p-12 text-center">
            <p className="text-[12px] font-bold uppercase tracking-wider text-gold-500 mb-4">
              <span className="text-purple-500">{'// '}</span>The Vision
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              VantaX isn't just an event. It's a <span className="text-gold-500">movement.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8 text-left">
              {[
                'Annual national assessment',
                'Ranked performance leaderboard',
                'Top 100 VantaX Performers list',
                'Verified Builder Badge on LinkedIn',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Star size={14} className="text-gold-500 shrink-0" />
                  <span className="text-[13px] text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[14px] font-bold text-gold-500 mb-8">
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
