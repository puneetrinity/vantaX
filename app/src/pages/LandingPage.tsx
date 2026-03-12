import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../sections/landing/Hero';
import Stats from '../sections/landing/Stats';
import Format from '../sections/landing/Format';
import SubmissionFormat from '../sections/landing/SubmissionFormat';
import Rubric from '../sections/landing/Rubric';
import TimelineSection from '../sections/landing/TimelineSection';
import CTA from '../sections/landing/CTA';
import RegistrationForm from '../sections/landing/RegistrationForm';
import PoweredByVantaHire from '../sections/landing/PoweredByVantaHire';

function WhatIsTeaser() {
  return (
    <section className="py-20 px-4 max-w-[1000px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          to="/what-is-vantax"
          className="block bg-card border border-border p-8 sm:p-10 hover:border-border-hover hover:bg-card-hover transition-all duration-200 group terminal-border-left"
        >
          <p className="text-[16px] font-bold uppercase tracking-wider text-gold-500 mb-3">
            <span className="text-purple-500">{'// '}</span>What Is VantaX
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight">
            A structured hiring audition — built to replace resume filtering for early-career talent.
          </h2>
          <p className="text-text-muted text-[16px] leading-relaxed mb-6 max-w-2xl">
            Resumes don't measure execution. DSA puzzles don't measure real-world thinking. Hackathons reward presentation, not precision.
            VantaX is built for the AI-native generation.
          </p>
          <span className="inline-flex items-center gap-2 text-[16px] font-bold text-gold-500 group-hover:gap-3 transition-all">
            Learn why VantaX exists <ArrowRight size={14} />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <>
      <SEO
        title="VantaX 2026 — 3 Challenges. 2 Hours Each. | India's Hiring Audition"
        description="India's first structured hiring audition. 3 challenges, 2 hours each. Real companies post real problems. You solve them. Top performers get hired. Starts April 2026."
        path="/"
        breadcrumbs={[{ name: 'Home', path: '/' }]}
      />
      <Hero />
      <Stats />
      <WhatIsTeaser />
      <Format />
      <SubmissionFormat />
      <Rubric />
      <TimelineSection />
      <CTA />
      <RegistrationForm />
      <PoweredByVantaHire />
    </>
  );
}
