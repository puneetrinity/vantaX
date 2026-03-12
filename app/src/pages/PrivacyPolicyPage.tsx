import SEO from '../components/SEO';
import FadeInOnScroll from '../components/motion/FadeInOnScroll';

const sections = [
  {
    title: 'Introduction',
    content: `VantaHire, a brand of Airevolabs LLP ("we," "our," or "us"), operates the VantaX assessment platform at vantax.vantahire.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use VantaX.\n\nBy registering for or participating in VantaX, you agree to the collection and use of information in accordance with this policy.`,
  },
  {
    title: 'Information We Collect',
    items: [
      { subtitle: 'Personal Information', text: 'When you register or participate, we collect: name, email address, phone number, LinkedIn profile URL, GitHub profile URL, college name, year of graduation, and resume/CV (PDF upload).' },
      { subtitle: 'Assessment Data', text: 'Challenge submissions, code files, architecture explanations, AI usage disclosures, trade-off documentation, and demo links submitted during timed assessment windows.' },
      { subtitle: 'Payment Information', text: 'Registration fee payments are processed through Cashfree. We do not store your card details — Cashfree handles payment data in compliance with PCI-DSS standards.' },
      { subtitle: 'Automatically Collected', text: 'IP address, browser type, device information, usage patterns, and session data for platform security and analytics.' },
    ],
  },
  {
    title: 'How We Use Your Information',
    list: [
      'Processing your VantaX registration and payment',
      'Administering timed assessment challenges',
      'AI pre-scoring and plagiarism detection on submissions',
      'Human jury evaluation and moderation of shortlisted submissions',
      'Sharing shortlisted profiles with partner companies for hiring',
      'Communicating event updates, results, and opportunities',
      'Improving our platform and assessment methodology',
      'Complying with legal obligations',
    ],
  },
  {
    title: 'Data Sharing and Disclosure',
    items: [
      { subtitle: 'With Partner Companies', text: 'If you are shortlisted, your profile (name, scores, submissions, resume, GitHub, LinkedIn) is shared with partner companies who posted problems. Non-shortlisted candidate data is not shared with companies.' },
      { subtitle: 'With Jury Members', text: 'Jury members reviewing your submission see your anonymized work. Identifying information is shared only after the shortlisting decision.' },
      { subtitle: 'Payment Processor', text: 'Cashfree processes your payment. Their privacy policy governs payment data handling.' },
      { subtitle: 'Legal Requirements', text: 'We may disclose information if required by law, court order, or to protect our rights, property, or safety.' },
      { subtitle: 'We Do Not Sell Your Data', text: 'We do not sell, rent, or trade your personal information to third parties for marketing purposes.' },
    ],
  },
  {
    title: 'Data Security',
    content: 'We implement industry-standard security measures including encrypted data transmission (HTTPS/TLS), secure authentication, access controls, and regular security audits. Assessment submissions are stored securely and access is restricted to authorized evaluators.\n\nHowever, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.',
  },
  {
    title: 'Your Rights',
    list: [
      'Access: Request a copy of your personal data',
      'Rectification: Correct inaccurate or incomplete information',
      'Deletion: Request deletion of your account and associated data',
      'Portability: Receive your data in a structured, machine-readable format',
      'Objection: Object to certain types of data processing',
      'Withdrawal: Withdraw consent for optional data processing',
    ],
    footer: 'To exercise these rights, contact us at privacy@vantahire.com.',
  },
  {
    title: 'Data Retention',
    list: [
      'Active registrations: Data retained through the VantaX event cycle and results period',
      'Assessment submissions: Retained for 1 year after the event for company hiring processes',
      'Shortlisted profiles: Retained for up to 2 years for ongoing hiring pipeline',
      'Payment records: Retained as required by Indian tax and financial regulations',
    ],
  },
  {
    title: "Children's Privacy",
    content: 'VantaX is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a minor, we will take steps to delete such information.',
  },
  {
    title: 'Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time. We will notify registered participants of significant changes via email and update the "Last Updated" date on this page.',
  },
  {
    title: 'Contact Us',
    content: 'If you have questions about this Privacy Policy or our data practices:\n\nAirevolabs LLP\nEmail: privacy@vantahire.com\nWebsite: airevolabs.com',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | VantaX 2026"
        description="How VantaX collects, uses, and protects your personal information during the structured hiring audition."
        path="/privacy"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ]}
      />

      <section className="py-24 px-4 max-w-[800px] mx-auto">
        <FadeInOnScroll>
          <p className="text-[16px] font-bold uppercase tracking-wider text-purple-400 mb-4">
            <span className="text-text-muted">{'// '}</span>Privacy Policy
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">How we handle your data.</h1>
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

                {section.footer && (
                  <p className="text-[16px] text-text-muted mt-4">{section.footer}</p>
                )}
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
