import { useState, useEffect, useRef, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
      rafRef.current = 0;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onMouseMove]);

  return (
    <div ref={containerRef} className="min-h-screen bg-bg relative">
      {/* Global mouse-tracking glow */}
      <div
        className="fixed inset-0 pointer-events-none z-[2] transition-[background] duration-150"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(245,158,11,0.07), rgba(139,92,246,0.04) 40%, transparent 70%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div className="grid-pattern" />

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Parallax gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
            top: '5%',
            left: '-8%',
            transform: `translateY(${scrollY * 0.08}px)`,
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)',
            top: '40%',
            right: '-5%',
            transform: `translateY(${scrollY * -0.12}px)`,
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
            bottom: '10%',
            left: '20%',
            transform: `translateY(${scrollY * 0.06}px)`,
            filter: 'blur(40px)',
          }}
        />
      </div>

      <Navbar />
      <main className="pt-16 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
