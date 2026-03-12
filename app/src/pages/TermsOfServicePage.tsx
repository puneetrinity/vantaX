import SEO from '../components/SEO';
import FadeInOnScroll from '../components/motion/FadeInOnScroll';

const sections = [
  {
    title: 'Agreement to Terms',
    content: `These Terms of Service ("Terms") govern your access to and use of VantaX, a structured hiring audition platform operated by Airevolabs LLP ("VantaHire," "we," "us," or "our") at vantax.vantahire.com.\n\nBy registering for or participating in VantaX, you agree to be bound by these Terms. If you do not agree, you may not use our services. We reserve the right to modify these Terms at any time. Continued use after changes constitutes acceptance.`,
  },
  {
    title: 'Eligibility',
    list: [
      'You must be at least 18 years of age',
      'You must provide accurate and complete registration information',
      'You must maintain the security of your account credentials',
      'You are responsible for all activities under your account',
    ],
  },
  {
    title: 'VantaX Event Participation',
    items: [
      { subtitle: 'Registration', text: 'Registration requires payment of ₹199 + GST via Cashfree. This grants access to all 3 assessment challenges in the VantaX 2026 event (April 25–29, 2026).' },
      { subtitle: 'Assessment Rules', text: 'Each challenge has a 2-hour timed window. Submissions auto-lock at the deadline. You may use any programming language, framework, or AI tool. Your timer runs continuously once started — no pauses.' },
      { subtitle: 'AI Tools', text: 'AI tools (ChatGPT, Copilot, Claude, etc.) are explicitly permitted and encouraged. You must disclose which AI tools you used and how, as part of your submission. VantaX evaluates judgment and execution, not tool avoidance.' },
      { subtitle: 'Integrity', text: 'Submissions must be your own individual work. Collaboration with other participants during a timed challenge is prohibited. Plagiarism detection and AI-pattern analysis are applied to all submissions. Violations result in disqualification without refund.' },
    ],
  },
  {
    title: 'Content and Intellectual Property',
    items: [
      { subtitle: 'Your Submissions', text: 'You retain ownership of code, documentation, and other content you submit. By submitting, you grant VantaHire a non-exclusive, royalty-free license to use your submissions for evaluation, display in anonymized form to jury members, and inclusion in aggregate reporting.' },
      { subtitle: 'Company Problems', text: 'Challenge problems are sourced from partner companies and are proprietary. You may not distribute, publish, or share problem statements outside of your submission.' },
      { subtitle: 'Results and Rankings', text: 'VantaX may publicly display leaderboards, top performer lists, and aggregate statistics. Individual scores are shared with partner companies only for shortlisted candidates.' },
      { subtitle: 'Platform IP', text: "VantaX's platform, branding, assessment methodology, and scoring systems are owned by Airevolabs LLP and protected by intellectual property laws." },
    ],
  },
  {
    title: 'Payment',
    list: [
      'Registration fee: ₹199 + GST (one-time payment for all 3 challenges)',
      'Payments are processed securely via Cashfree (UPI, credit/debit cards, net banking)',
      'See our Refund Policy for cancellation and refund terms',
      'VantaHire does not store your payment card details',
    ],
  },
  {
    title: 'Disclaimers and Limitations',
    items: [
      { subtitle: 'No Employment Guarantee', text: 'Registration and participation in VantaX do not guarantee employment, interviews, or shortlisting. VantaX facilitates introductions between top performers and partner companies.' },
      { subtitle: 'Platform Availability', text: 'VantaX is provided "as is." We do not guarantee uninterrupted or error-free service. In case of platform-wide technical failures, we will extend deadlines or offer alternative accommodations at our discretion.' },
      { subtitle: 'Limitation of Liability', text: 'To the maximum extent permitted by law, Airevolabs LLP shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of VantaX.' },
    ],
  },
  {
    title: 'Account Termination',
    content: 'We reserve the right to suspend or terminate your account for violation of these Terms, fraudulent activity, integrity violations, or any conduct that undermines the fairness of the assessment process.',
  },
  {
    title: 'Governing Law',
    content: 'These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of VantaX shall be resolved through binding arbitration in Bangalore, Karnataka, in accordance with Indian arbitration laws.',
  },
  {
    title: 'Contact',
    content: 'If you have questions about these Terms:\n\nAirevolabs LLP\nEmail: legal@vantahire.com\nWebsite: airevolabs.com',
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <SEO
        title="Terms of Service | VantaX 2026"
        description="Terms and conditions for participating in VantaX, India's structured hiring audition platform by VantaHire."
        path="/terms"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms' },
        ]}
      />

      <section className="py-24 px-4 max-w-[800px] mx-auto">
        <FadeInOnScroll>
          <p className="text-[16px] font-bold uppercase tracking-wider text-purple-400 mb-4">
            <span className="text-text-muted">{'// '}</span>Terms of Service
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Rules of engagement.</h1>
          <p className="text-text-muted text-[16px] mb-12">Last Updated: March 2026</p>
        </FadeInOnScroll>

        <div className="flex flex-col gap-6">
          {sections.map((section) => (
            <FadeInOnScroll key={section.title}>
              <div className="bg-card border border-border p-6 sm:p-8 terminal-border-left">
                <h2 className="text-[16px] font-bold text-gold-500 mb-4">{section.title}</h2>

                {section.content && (
                  <div className="text-[16px] text-text-secondary leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                )}

                {section.items && (
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div key={item.subtitle}>
                        <h3 className="text-[16px] font-bold text-text-primary mb-1">{item.subtitle}</h3>
                        <p className="text-[16px] text-text-secondary leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[16px] text-text-secondary">
                        <span className="text-purple-500 mt-0.5 shrink-0">&gt;</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
