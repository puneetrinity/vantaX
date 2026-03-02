import { escapeHtml } from './emailService';

const baseStyles = `
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #0D0D1A; color: #fff; margin: 0; padding: 0; }
  .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
  .header { text-align: center; margin-bottom: 32px; }
  .header h1 { color: #A78BFA; font-size: 24px; margin: 0; }
  .header p { color: #71717A; font-size: 14px; margin-top: 4px; }
  .card { background: #141428; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px; margin-bottom: 16px; }
  .label { color: #71717A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
  .value { color: #fff; font-size: 15px; margin-bottom: 12px; }
  .footer { text-align: center; color: #71717A; font-size: 13px; margin-top: 32px; }
  .accent { color: #FBBF24; }
  .primary { color: #A78BFA; }
`;

function wrap(title: string, subtitle: string, body: string): string {
  return `<!DOCTYPE html><html><head><style>${baseStyles}</style></head><body>
<div class="container">
  <div class="header"><h1>${title}</h1><p>${subtitle}</p></div>
  ${body}
  <div class="footer">VantaHire &middot; Human decisions, AI acceleration.<br/>Bangalore, India &middot; hello@vantahire.com</div>
</div></body></html>`;
}

function field(label: string, value: string | null | undefined): string {
  if (!value) return '';
  return `<div class="label">${label}</div><div class="value">${escapeHtml(value)}</div>`;
}

export function companyNotificationEmail(data: Record<string, any>): { subject: string; html: string } {
  const body = `
    <div class="card">
      <h3 style="color:#A78BFA;margin-top:0;">Company Details</h3>
      ${field('Company', data.companyName)}
      ${field('Website', data.websiteUrl)}
      ${field('Industry', data.industry)}
      ${field('Stage', data.companyStage)}
      ${field('Contact', data.contactName)}
      ${field('Role', data.contactRole)}
      ${field('Email', data.contactEmail)}
      ${field('Phone', data.contactPhone)}
    </div>
    <div class="card">
      <h3 style="color:#FF5BA8;margin-top:0;">Problem Statement</h3>
      ${field('Title', data.problemTitle)}
      ${field('Business Context', data.businessContext)}
      ${field('Core Task', data.coreTask)}
      ${field('Expected Deliverables', data.expectedDeliverables)}
      ${field('Preferred Stack', data.preferredStack)}
      ${field('Tool Restrictions', data.toolRestrictions)}
      ${field('Difficulty Level', data.difficultyLevel)}
    </div>
    <div class="card">
      <h3 style="color:#FBBF24;margin-top:0;">Jury & Hiring</h3>
      ${field('Nominate Jury?', data.nominateJury)}
      ${field('Jury Name', data.juryName)}
      ${field('Jury Designation', data.juryDesignation)}
      ${field('Custom Eval Criteria', data.customEvalCriteria)}
      ${field('Hiring Intent', data.hiringIntent)}
      ${field('Approx Openings', data.approxOpenings)}
      ${field('Skills', data.skillsLookingFor)}
    </div>`;

  return {
    subject: `[VantaX] New Company Submission: ${data.companyName}`,
    html: wrap('VantaX Company Submission', 'New problem statement received', body),
  };
}

export function companyConfirmationEmail(data: Record<string, any>): { subject: string; html: string } {
  const body = `
    <div class="card">
      <p style="color:#A1A1AA;">Hi ${escapeHtml(data.contactName)},</p>
      <p style="color:#fff;">Thank you for submitting a problem statement to <span class="primary">VantaX 2026</span>.</p>
      <p style="color:#A1A1AA;">We've received your submission for <span class="accent">"${escapeHtml(data.problemTitle)}"</span> from <strong>${escapeHtml(data.companyName)}</strong>.</p>
      <p style="color:#A1A1AA;">Our team will review your problem statement for scope alignment and confirm your participation within 3 business days.</p>
      <p style="color:#A1A1AA;margin-top:16px;">If you have questions, reply to this email or reach out at hello@vantahire.com.</p>
    </div>`;

  return {
    subject: `VantaX 2026 — Submission Received: ${data.problemTitle}`,
    html: wrap('Submission Received', `VantaX 2026 — ${data.companyName}`, body),
  };
}

export function juryNotificationEmail(data: Record<string, any>): { subject: string; html: string } {
  const body = `
    <div class="card">
      <h3 style="color:#A78BFA;margin-top:0;">Jury Member Details</h3>
      ${field('Name', data.fullName)}
      ${field('Email', data.email)}
      ${field('LinkedIn', data.linkedinUrl)}
      ${field('Current Role', data.currentRole)}
      ${field('Company', data.company)}
      ${field('Domain Expertise', data.domainExpertise)}
      ${field('Experience', data.yearsExperience)}
      ${field('Availability', data.availability)}
      ${field('Motivation', data.motivation)}
    </div>`;

  return {
    subject: `[VantaX] New Jury Application: ${data.fullName}`,
    html: wrap('VantaX Jury Application', 'New jury member signup', body),
  };
}

export function juryConfirmationEmail(data: Record<string, any>): { subject: string; html: string } {
  const body = `
    <div class="card">
      <p style="color:#A1A1AA;">Hi ${escapeHtml(data.fullName)},</p>
      <p style="color:#fff;">Thank you for expressing interest in serving as a <span class="primary">VantaX 2026 Jury Member</span>.</p>
      <p style="color:#A1A1AA;">We've received your application. Our team will coordinate next steps and provide evaluation guidelines before the assessment window.</p>
      <p style="color:#A1A1AA;margin-top:16px;">If you have questions, reply to this email or reach out at hello@vantahire.com.</p>
    </div>`;

  return {
    subject: 'VantaX 2026 — Jury Application Received',
    html: wrap('Application Received', 'VantaX 2026 Jury Panel', body),
  };
}
