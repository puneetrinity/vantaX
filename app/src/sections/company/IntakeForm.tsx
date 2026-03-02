import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import FadeInOnScroll from '../../components/motion/FadeInOnScroll';
import FormField from '../../components/form/FormField';
import FormSection from '../../components/form/FormSection';
import RadioGroup from '../../components/form/RadioGroup';
import CheckboxGroup from '../../components/form/CheckboxGroup';
import SubmitButton from '../../components/form/SubmitButton';
import { submitCompany } from '../../lib/api';
import {
  INDUSTRY_OPTIONS,
  COMPANY_STAGE_OPTIONS,
  DELIVERABLE_OPTIONS,
  DIFFICULTY_OPTIONS,
  HIRING_INTENT_OPTIONS,
  SKILLS_OPTIONS,
  CONFIRMATION_ITEMS,
} from '../../lib/constants';

export default function IntakeForm() {
  const [form, setForm] = useState<Record<string, string>>({
    companyName: '', websiteUrl: '', industry: '', companyStage: '',
    contactName: '', contactRole: '', contactEmail: '', contactPhone: '',
    problemTitle: '', businessContext: '', coreTask: '',
    preferredStack: '', toolRestrictions: '', difficultyLevel: '',
    nominateJury: '', juryName: '', juryDesignation: '', customEvalCriteria: '',
    hiringIntent: '', approxOpenings: '',
  });
  const [expectedDeliverables, setExpectedDeliverables] = useState<string[]>([]);
  const [skillsLookingFor, setSkillsLookingFor] = useState<string[]>([]);
  const [confirmations, setConfirmations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const setRadio = (key: string) => (value: string) =>
    setForm({ ...form, [key]: value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.companyName || !form.websiteUrl || !form.contactName || !form.contactEmail || !form.problemTitle || !form.businessContext || !form.coreTask) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      await submitCompany({
        ...form,
        expectedDeliverables,
        skillsLookingFor,
        confirmations,
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="intake" className="py-20 px-4 max-w-2xl mx-auto">
        <FadeInOnScroll>
          <div className="bg-card border border-border p-12 text-center">
            <CheckCircle2 size={48} className="text-success mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">
              <span className="text-purple-500">{'// '}</span>Submission Received!
            </h2>
            <p className="text-text-muted text-[13px] mb-6">
              Thank you, {form.contactName}. We've received your problem statement for "{form.problemTitle}".
              Check your email for confirmation. Our team will review and confirm your participation within 3 business days.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/" className="text-[13px] text-gold-500 hover:text-gold-400 transition-colors">Back to home &rarr;</Link>
              <Link to="/what-is-vantax" className="text-[13px] text-text-muted hover:text-text-primary transition-colors">Learn more about VantaX &rarr;</Link>
            </div>
          </div>
        </FadeInOnScroll>
      </section>
    );
  }

  return (
    <section id="intake" className="py-20 px-4 max-w-2xl mx-auto">
      <FadeInOnScroll>
        <div className="bg-card border border-border p-8 sm:p-10">
          <h2 className="text-xl font-bold mb-1">
            <span className="text-purple-500">{'$ '}</span>Submit Your Problem Statement
          </h2>
          <p className="text-text-muted text-[13px] mb-8">
            Submit your real-world problem. We'll put it in front of India's sharpest early-career builders.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Section 1 */}
            <FormSection title="Section 1: Company Information">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Company Name" required value={form.companyName} onChange={set('companyName')} placeholder="Your company name" />
                <FormField label="Website URL" required value={form.websiteUrl} onChange={set('websiteUrl')} placeholder="https://..." />
              </div>
              <RadioGroup label="Industry" options={INDUSTRY_OPTIONS} value={form.industry} onChange={setRadio('industry')} />
              <RadioGroup label="Company Stage" options={COMPANY_STAGE_OPTIONS} value={form.companyStage} onChange={setRadio('companyStage')} />
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Primary Contact Name" required value={form.contactName} onChange={set('contactName')} placeholder="Your name" />
                <FormField label="Designation / Role" value={form.contactRole} onChange={set('contactRole')} placeholder="e.g. CTO, Hiring Manager" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Work Email" required type="email" value={form.contactEmail} onChange={set('contactEmail')} placeholder="you@company.com" />
                <FormField label="Contact Number" value={form.contactPhone} onChange={set('contactPhone')} placeholder="+91 ..." />
              </div>
            </FormSection>

            {/* Section 2 */}
            <FormSection title="Section 2: Problem Statement Details" description="Your problem must be solvable by one person within 2 hours. Think 'scoped sprint' — not 'full product build.'">
              <FormField label="Problem Title" required value={form.problemTitle} onChange={set('problemTitle')} placeholder='e.g. "Build a candidate ranking engine for tech hiring"' />
              <FormField label="Business Context (150–300 words)" required textarea value={form.businessContext} onChange={set('businessContext')} placeholder="Describe the real-world situation this problem comes from..." />
              <FormField label="Core Task for Participants" required textarea value={form.coreTask} onChange={set('coreTask')} placeholder="Clearly define what participants must do..." />
              <CheckboxGroup label="Expected Deliverables" options={DELIVERABLE_OPTIONS} selected={expectedDeliverables} onChange={setExpectedDeliverables} />
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Preferred Language/Stack" value={form.preferredStack} onChange={set('preferredStack')} placeholder="e.g. Python, Node.js, any" />
                <FormField label="Tool Restrictions (if any)" value={form.toolRestrictions} onChange={set('toolRestrictions')} placeholder="e.g. No external APIs" />
              </div>
              <RadioGroup label="Difficulty Level" options={DIFFICULTY_OPTIONS} value={form.difficultyLevel} onChange={setRadio('difficultyLevel')} />
            </FormSection>

            {/* Section 3 */}
            <FormSection title="Section 3: Evaluation & Jury">
              <RadioGroup label="Would you like to nominate a Jury Member?" options={['Yes', 'No', 'Maybe — tell me more']} value={form.nominateJury} onChange={setRadio('nominateJury')} />
              {form.nominateJury === 'Yes' && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Jury Member Name" value={form.juryName} onChange={set('juryName')} placeholder="Name" />
                  <FormField label="Jury Member Designation" value={form.juryDesignation} onChange={set('juryDesignation')} placeholder="Title / Role" />
                </div>
              )}
              <FormField label="Custom Evaluation Criteria (Optional)" textarea value={form.customEvalCriteria} onChange={set('customEvalCriteria')} placeholder="List any specific evaluation focus beyond our standard rubric..." />
            </FormSection>

            {/* Section 4 */}
            <FormSection title="Section 4: Hiring Intent" description="VantaX is a hiring-first assessment. We encourage companies to offer interview opportunities.">
              <RadioGroup label="Are you open to offering interviews to shortlisted candidates?" options={HIRING_INTENT_OPTIONS} value={form.hiringIntent} onChange={setRadio('hiringIntent')} />
              <FormField label="Approximate Openings" value={form.approxOpenings} onChange={set('approxOpenings')} placeholder="e.g. 2–5 interns, 1–2 entry-level" />
              <CheckboxGroup label="Skills You're Looking For" options={SKILLS_OPTIONS} selected={skillsLookingFor} onChange={setSkillsLookingFor} />
            </FormSection>

            {/* Section 5 */}
            <FormSection title="Section 5: Confirmation">
              <CheckboxGroup label="By submitting, you confirm:" options={CONFIRMATION_ITEMS} selected={confirmations} onChange={setConfirmations} required />
            </FormSection>

            {error && (
              <div className="bg-pink/10 border border-pink/30 p-3 text-[13px] text-pink">{error}</div>
            )}

            <SubmitButton loading={loading}>Submit Problem Statement</SubmitButton>
          </form>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
