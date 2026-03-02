import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src="/brand/vantax-logo.png" alt="VantaX" width={36} height={36} loading="lazy" decoding="async" className="h-9 w-auto rounded" />
          <span className="text-xl font-bold gradient-text-mixed">VantaX</span>
        </div>
        <p className="text-text-muted italic text-sm mb-4">Human decisions, AI acceleration.</p>
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm text-text-secondary">
          <Link to="/what-is-vantax" className="hover:text-text-primary transition-colors">What Is VantaX</Link>
          <Link to="/companies" className="hover:text-text-primary transition-colors">Companies</Link>
          <Link to="/jury" className="hover:text-text-primary transition-colors">Jury</Link>
          <a href="mailto:hello@vantahire.com" className="hover:text-gold-400 transition-colors">hello@vantahire.com</a>
        </div>
        <p className="text-text-muted text-xs">
          Bangalore, India &middot; &copy; {new Date().getFullYear()} VantaHire. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
