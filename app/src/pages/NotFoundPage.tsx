import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | VantaX 2026"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-8xl font-extrabold gradient-text-mixed mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">Page not found</h1>
        <p className="text-text-secondary mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-bg shadow-lg shadow-glow-gold transition-transform hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </section>
    </>
  );
}
