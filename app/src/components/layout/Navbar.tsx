import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/what-is-vantax', label: 'What Is VantaX' },
  { to: '/companies', label: 'Companies' },
  { to: '/jury', label: 'Jury' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border shadow-lg shadow-glow/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/brand/vantax-logo.png" alt="VantaX" width={40} height={40} fetchPriority="high" decoding="async" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 rounded-md" />
          <span className="text-xl font-bold gradient-text-mixed hidden sm:inline">VantaX</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-text-primary ${
                location.pathname === l.to ? 'text-text-primary' : 'text-text-secondary'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#register"
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-bg shadow-lg shadow-glow-gold transition-transform hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-text-secondary" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`block py-3 text-sm font-medium border-b border-border ${
                location.pathname === l.to ? 'text-text-primary' : 'text-text-secondary'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#register"
            className="block mt-3 text-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-bg"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}
