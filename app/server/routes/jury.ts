import { Router } from 'express';
import { db } from '../db';
import { juryMembers } from '../schema';
import { getEmailService } from '../emailService';
import { juryNotificationEmail, juryConfirmationEmail } from '../emailTemplates';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;

    if (!data.fullName || !data.email || !data.linkedinUrl) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const [result] = await db.insert(juryMembers).values({
      fullName: data.fullName,
      email: data.email,
      linkedinUrl: data.linkedinUrl,
      currentRole: data.currentRole || null,
      company: data.company || null,
      domainExpertise: data.domainExpertise ? JSON.stringify(data.domainExpertise) : null,
      yearsExperience: data.yearsExperience || null,
      availability: data.availability || null,
      motivation: data.motivation || null,
    }).returning();

    // Send emails
    const emailService = await getEmailService();
    if (emailService) {
      const notificationTo = process.env.NOTIFICATION_EMAIL || 'hello@vantahire.com';
      const notification = juryNotificationEmail(data);
      await emailService.sendEmail({ to: notificationTo, ...notification });

      const confirmation = juryConfirmationEmail(data);
      await emailService.sendEmail({ to: data.email, ...confirmation });
    }

    res.status(201).json({ success: true, id: result.id });
  } catch (e) {
    console.error('Jury creation error:', e);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
