import SEO from '../components/SEO';
import FadeInOnScroll from '../components/motion/FadeInOnScroll';

const sections = [
  {
    title: 'Registration Fee',
    content: 'VantaX 2026 registration costs ₹199 + GST. This one-time fee covers access to all 3 assessment challenges (April 25, 27, and 29, 2026). Payment is processed securely via Cashfree.',
  },
  {
    title: 'Cancellation and Refund',
    items: [
      { subtitle: 'Before the event', text: 'You may request a full refund up to 48 hours before the event launch date (April 23, 2026). Contact us at hello@vantahire.com with your registered email address.' },
      { subtitle: 'After the event starts', text: 'Once the first challenge window opens (April 25, 2026), no refunds will be issued regardless of whether you attempt any challenges.' },
      { subtitle: 'Non-participation', text: 'If you register but do not attempt any challenges, you are not eligible for a refund after the event starts. Registration secures your slot — usage is your choice.' },
    ],
  },
  {
    title: 'Technical Failure Refunds',
    content: 'If a platform-wide technical failure prevents you from submitting during a challenge window, VantaX will either extend the deadline or issue a proportional refund at our discretion. Individual connectivity or device issues are not grounds for a refund.',
  },
  {
    title: 'Disqualification',
    content: 'If you are disqualified for integrity violations (plagiarism, collaboration during timed challenges, or misrepresentation), no refund will be issued.',
  },
  {
    title: 'How Refunds Are Processed',
    list: [
      'Refunds are processed via Cashfree to the original payment method',
      'Processing time: 5–7 business days after approval',
      'GST paid is non-refundable as per Indian tax regulations',
      'You will receive email confirmation when the refund is initiated',
    ],
  },
  {
    title: 'How to Request a Refund',
    content: 'Send an email to hello@vantahire.com with the subject line "VantaX Refund Request" and include:\n\n• Your registered name and email address\n• Transaction ID or payment confirmation\n• Reason for refund\n\nWe will respond within 2 business days.',
  },
  {
    title: 'Contact',
    content: 'For refund-related queries:\n\nEmail: hello@vantahire.com\nSubject: VantaX Refund Request',
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <SEO
        title="Refund Policy | VantaX 2026"
        description="VantaX refund and cancellation policy for the ₹199 registration fee. Full refund available up to 48 hours before event launch."
        path="/refund"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Refund Policy', path: '/refund' },
        ]}
      />

      <section className="py-24 px-4 max-w-[800px] mx-auto">
        <FadeInOnScroll>
          <p className="text-[16px] font-bold uppercase tracking-wider text-purple-400 mb-4">
            <span className="text-text-muted">{'// '}</span>Refund Policy
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Cancellation and refunds.</h1>
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
