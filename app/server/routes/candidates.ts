import { Router } from 'express';
import { db } from '../db';
import { candidates } from '../schema';
import { uploadResume } from '../middleware/upload';

const router = Router();

router.post('/', (req, res) => {
  uploadResume(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const { fullName, email, phone, linkedinUrl, college, graduationYear, degreeBranch, referralSource } = req.body;

      if (!fullName || !email || !phone || !linkedinUrl) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      if (!req.file) {
        return res.status(400).json({ error: 'Resume PDF is required' });
      }

      const resumePath = `/uploads/${req.file.filename}`;

      const [result] = await db.insert(candidates).values({
        fullName,
        email,
        phone,
        linkedinUrl,
        resumePath,
        college: college || null,
        graduationYear: graduationYear || null,
        degreeBranch: degreeBranch || null,
        referralSource: referralSource || null,
      }).returning();

      // Candidate form: save to DB only (no email)
      res.status(201).json({ success: true, id: result.id });
    } catch (e: any) {
      if (e.code === '23505') {
        return res.status(409).json({ error: 'Email already registered' });
      }
      console.error('Candidate creation error:', e);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

export default router;
