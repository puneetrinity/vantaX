import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Upload, CheckCircle2 } from 'lucide-react';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import FormField from '../../components/form/FormField';
import FormSection from '../../components/form/FormSection';
import SubmitButton from '../../components/form/SubmitButton';
import { submitCandidate } from '../../lib/api';

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    college: '',
    graduationYear: '',
    degreeBranch: '',
    referralSource: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.fullName || !form.email || !form.phone || !form.linkedinUrl) {
      setError('Please fill in all required fields');
      return;
    }
    if (!resume) {
      setError('Please upload your resume (PDF)');
      return;
    }

    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => { if (v) fd.append(k, v); });
      fd.append('resume', resume);
      await submitCandidate(fd);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="register" className="py-20 px-4 max-w-2xl mx-auto">
        <FadeInOnScroll>
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <CheckCircle2 size={56} className="text-success mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Registration Complete!</h2>
            <p className="text-text-secondary mb-6">
              Thank you, {form.fullName}. We've received your application. Check your email for confirmation. We'll be in touch as VantaX 2026 approaches.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/what-is-vantax" className="text-sm text-gold-400 hover:text-gold-500 transition-colors">Learn more about VantaX &rarr;</Link>
            </div>
          </div>
        </FadeInOnScroll>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 px-4 max-w-2xl mx-auto">
      <FadeInOnScroll>
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold mb-1">Apply for VantaX 2026</h2>
          <p className="text-text-secondary text-sm mb-2">Seats capped per problem. Once full, registration closes.</p>
          <p className="text-gold-400 text-sm font-semibold mb-8">₹199 — Access all 3 challenges + structured hiring exposure</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <FormSection title="Basic Information">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Full Name" required value={form.fullName} onChange={set('fullName')} placeholder="Your full name" />
                <FormField label="Email" required type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Phone" required value={form.phone} onChange={set('phone')} placeholder="+91 98765 43210" />
                <FormField label="LinkedIn URL" required value={form.linkedinUrl} onChange={set('linkedinUrl')} placeholder="https://linkedin.com/in/..." />
              </div>

              {/* Resume upload */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Resume (PDF) <span className="text-gold-400">*</span>
                </label>
                <p className="text-xs text-text-muted mb-1.5">For reference only — your execution in the challenges is what gets evaluated.</p>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setResume(e.target.files?.[0] || null)}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className={`w-full flex items-center justify-center gap-3 px-4 py-4 rounded-lg border-2 border-dashed transition-colors text-sm ${
                    resume
                      ? 'border-success/40 bg-success/5 text-success'
                      : 'border-border text-text-muted hover:border-gold-500 hover:text-gold-400'
                  }`}
                >
                  <Upload size={18} />
                  {resume ? resume.name : 'Click to upload resume (PDF, max 5MB)'}
                </button>
              </div>
            </FormSection>

            <FormSection title="Optional Details" description="Help us understand your background better">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="College / University" value={form.college} onChange={set('college')} placeholder="Your institution" />
                <FormField label="Graduation Year" value={form.graduationYear} onChange={set('graduationYear')} placeholder="e.g. 2026" />
              </div>
              <FormField label="Degree / Branch" value={form.degreeBranch} onChange={set('degreeBranch')} placeholder="e.g. B.Tech CSE" />
              <FormField label="How did you hear about VantaX?" value={form.referralSource} onChange={set('referralSource')} placeholder="LinkedIn, friend, college, etc." />
            </FormSection>

            {error && (
              <div className="bg-pink/10 border border-pink/30 rounded-lg p-3 text-sm text-pink">{error}</div>
            )}

            <SubmitButton loading={loading}>Apply for VantaX 2026</SubmitButton>
          </form>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
