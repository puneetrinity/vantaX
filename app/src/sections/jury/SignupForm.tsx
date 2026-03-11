import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import FormField from '../../components/form/FormField';
import FormSection from '../../components/form/FormSection';
import RadioGroup from '../../components/form/RadioGroup';
import CheckboxGroup from '../../components/form/CheckboxGroup';
import SubmitButton from '../../components/form/SubmitButton';
import { submitJury } from '../../lib/api';
import { DOMAIN_OPTIONS } from '../../lib/constants';

export default function SignupForm() {
  const [form, setForm] = useState<Record<string, string>>({
    fullName: '', email: '', linkedinUrl: '',
    currentRole: '', company: '', yearsExperience: '',
    availability: '', motivation: '',
  });
  const [domainExpertise, setDomainExpertise] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.fullName || !form.email || !form.linkedinUrl) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      await submitJury({ ...form, domainExpertise });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="jury-signup" className="py-20 px-4 max-w-2xl mx-auto">
        <FadeInOnScroll>
          <div className="bg-card border border-border p-12 text-center">
            <CheckCircle2 size={48} className="text-success mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">
              <span className="text-purple-500">{'// '}</span>Application Received!
            </h2>
            <p className="text-text-muted text-[16px] mb-6">
              Thank you, {form.fullName}. Check your email for confirmation. We'll coordinate next steps and provide evaluation guidelines before the assessment window.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/" className="text-[16px] text-gold-500 hover:text-gold-400 transition-colors">Back to home &rarr;</Link>
              <Link to="/what-is-vantax" className="text-[16px] text-text-muted hover:text-text-primary transition-colors">Learn more about VantaX &rarr;</Link>
            </div>
          </div>
        </FadeInOnScroll>
      </section>
    );
  }

  return (
    <section id="jury-signup" className="py-20 px-4 max-w-2xl mx-auto">
      <FadeInOnScroll>
        <div className="bg-card border border-border p-8 sm:p-10">
          <h2 className="text-xl font-bold mb-1">
            <span className="text-purple-500">{'$ '}</span>Express Interest as Jury Member
          </h2>
          <p className="text-text-muted text-[16px] mb-8">
            Share your profile. Our team will coordinate next steps.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <FormSection title="Contact Information">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Full Name" required value={form.fullName} onChange={set('fullName')} placeholder="Your full name" />
                <FormField label="Email" required type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
              </div>
              <FormField label="LinkedIn URL" required value={form.linkedinUrl} onChange={set('linkedinUrl')} placeholder="https://linkedin.com/in/..." />
            </FormSection>

            <FormSection title="Professional Background">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Current Role" value={form.currentRole} onChange={set('currentRole')} placeholder="e.g. CTO, Engineering Manager" />
                <FormField label="Company" value={form.company} onChange={set('company')} placeholder="Your company" />
              </div>
              <CheckboxGroup label="Domain Expertise" options={DOMAIN_OPTIONS} selected={domainExpertise} onChange={setDomainExpertise} />
              <RadioGroup
                label="Years of Experience"
                options={['3–5 years', '5–10 years', '10–15 years', '15+ years']}
                value={form.yearsExperience}
                onChange={(v) => setForm({ ...form, yearsExperience: v })}
              />
            </FormSection>

            <FormSection title="Availability & Motivation">
              <RadioGroup
                label="Availability during evaluation week"
                options={['Fully available', 'Partially available', 'Need specific scheduling']}
                value={form.availability}
                onChange={(v) => setForm({ ...form, availability: v })}
              />
              <FormField
                label="Why are you interested in serving as a jury member? (Optional)"
                textarea
                value={form.motivation}
                onChange={set('motivation')}
                placeholder="Share your motivation..."
              />
            </FormSection>

            {error && (
              <div className="bg-pink/10 border border-pink/30 p-3 text-[16px] text-pink">{error}</div>
            )}

            <SubmitButton loading={loading}>Submit Jury Application</SubmitButton>
          </form>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
