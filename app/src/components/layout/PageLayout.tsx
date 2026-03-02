import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout() {
  return (
    <div className="min-h-screen bg-bg relative">
      {/* Scanline overlay */}
      <div className="scanline-overlay" />

      {/* Subtle grid pattern */}
      <div className="grid-pattern" />

      {/* Radial purple vignette */}
      <div className="radial-vignette" />

      <Navbar />
      <main className="pt-14 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
