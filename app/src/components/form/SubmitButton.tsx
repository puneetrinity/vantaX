import { Loader2 } from 'lucide-react';

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

export default function SubmitButton({ loading, children }: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full px-7 py-4 rounded-lg font-semibold text-[15px] bg-gradient-to-r from-gold-500 to-gold-600 text-bg shadow-lg shadow-glow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(245,158,11,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
    >
      {loading && <Loader2 size={18} className="animate-spin" />}
      {children}
    </button>
  );
}
