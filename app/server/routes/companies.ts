import { Router } from 'express';
import { db } from '../db';
import { companies } from '../schema';
import { getEmailService } from '../emailService';
import { companyNotificationEmail, companyConfirmationEmail } from '../emailTemplates';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;

    if (!data.companyName || !data.websiteUrl || !data.contactName || !data.contactEmail || !data.problemTitle || !data.businessContext || !data.coreTask) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const [result] = await db.insert(companies).values({
      companyName: data.companyName,
      websiteUrl: data.websiteUrl,
      industry: data.industry || null,
      companyStage: data.companyStage || null,
      contactName: data.contactName,
      contactRole: data.contactRole || null,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone || null,
      problemTitle: data.problemTitle,
      businessContext: data.businessContext,
      coreTask: data.coreTask,
      expectedDeliverables: data.expectedDeliverables ? JSON.stringify(data.expectedDeliverables) : null,
      preferredStack: data.preferredStack || null,
      toolRestrictions: data.toolRestrictions || null,
      difficultyLevel: data.difficultyLevel || null,
      nominateJury: data.nominateJury || null,
      juryName: data.juryName || null,
      juryDesignation: data.juryDesignation || null,
      customEvalCriteria: data.customEvalCriteria || null,
      hiringIntent: data.hiringIntent || null,
      approxOpenings: data.approxOpenings || null,
      skillsLookingFor: data.skillsLookingFor ? JSON.stringify(data.skillsLookingFor) : null,
      confirmations: data.confirmations ? JSON.stringify(data.confirmations) : null,
    }).returning();

    // Send emails
    const emailService = await getEmailService();
    if (emailService) {
      const notificationTo = process.env.NOTIFICATION_EMAIL || 'hello@vantahire.com';
      const notification = companyNotificationEmail(data);
      await emailService.sendEmail({ to: notificationTo, ...notification });

      const confirmation = companyConfirmationEmail(data);
      await emailService.sendEmail({ to: data.contactEmail, ...confirmation });
    }

    res.status(201).json({ success: true, id: result.id });
  } catch (e) {
    console.error('Company creation error:', e);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
