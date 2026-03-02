import nodemailer from 'nodemailer';

function escapeHtml(str: string | null | undefined): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export { escapeHtml };

export interface EmailService {
  sendEmail(opts: { to: string; subject: string; text?: string; html?: string }): Promise<boolean>;
}

class SMTPEmailService implements EmailService {
  private transporter: nodemailer.Transporter;
  private fromEmail: string;
  private fromName: string;

  constructor(opts: {
    host: string;
    port: number;
    secure: boolean;
    auth: { user: string; pass: string };
    fromEmail: string;
    fromName: string;
  }) {
    this.transporter = nodemailer.createTransport({
      host: opts.host,
      port: opts.port,
      secure: opts.secure,
      auth: opts.auth,
    });
    this.fromEmail = opts.fromEmail;
    this.fromName = opts.fromName;
  }

  async sendEmail(opts: { to: string; subject: string; text?: string; html?: string }): Promise<boolean> {
    try {
      const info = await this.transporter.sendMail({
        from: `"${this.fromName}" <${this.fromEmail}>`,
        to: opts.to,
        subject: opts.subject,
        text: opts.text,
        html: opts.html,
      });
      console.log('Email sent:', info.messageId);
      return true;
    } catch (e) {
      console.error('Email send error:', e);
      return false;
    }
  }
}

class TestEmailService implements EmailService {
  private transporter: nodemailer.Transporter | null = null;

  private async ensureTransporter() {
    if (this.transporter) return;
    const testAccount = await nodemailer.createTestAccount();
    console.log('Ethereal test account:', testAccount.user);
    this.transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });
  }

  async sendEmail(opts: { to: string; subject: string; text?: string; html?: string }): Promise<boolean> {
    try {
      await this.ensureTransporter();
      const info = await this.transporter!.sendMail({
        from: '"VantaX" <no-reply@vantahire.com>',
        to: opts.to,
        subject: opts.subject,
        text: opts.text,
        html: opts.html,
      });
      console.log('Ethereal preview:', nodemailer.getTestMessageUrl(info));
      return true;
    } catch (e) {
      console.error('Ethereal error:', e);
      return false;
    }
  }
}

let instance: EmailService | null = null;

export async function getEmailService(): Promise<EmailService | null> {
  if (instance) return instance;

  const provider = (process.env.EMAIL_PROVIDER || '').toLowerCase();
  const isProduction = process.env.NODE_ENV === 'production';
  const fromEmail = process.env.SEND_FROM_EMAIL;
  const fromName = process.env.SEND_FROM_NAME || 'VantaX';

  if (provider === 'brevo' && fromEmail && process.env.BREVO_SMTP_PASSWORD) {
    const port = parseInt(process.env.BREVO_SMTP_PORT || '587', 10);
    instance = new SMTPEmailService({
      host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
      port,
      secure: port === 465,
      auth: {
        user: process.env.BREVO_SMTP_USER || 'apikey',
        pass: process.env.BREVO_SMTP_PASSWORD,
      },
      fromEmail,
      fromName,
    });
    console.log('Using Brevo SMTP');
    return instance;
  }

  if (isProduction) {
    console.error('No email provider configured in production');
    return null;
  }

  console.log('Using Ethereal test email (no real delivery)');
  instance = new TestEmailService();
  return instance;
}
