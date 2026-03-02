import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import candidatesRouter from './routes/candidates';
import companiesRouter from './routes/companies';
import juryRouter from './routes/jury';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

app.use('/api/candidates', candidatesRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/jury', juryRouter);

// Cashfree payment stubs
app.post('/api/payment/create-order', async (_req, res) => {
  if (process.env.ENABLE_PAYMENT !== 'true') {
    return res.status(503).json({ error: 'Payment not enabled' });
  }
  // TODO: Integrate Cashfree SDK
  res.json({ message: 'Cashfree create-order stub', orderId: null });
});

app.post('/api/payment/verify', async (_req, res) => {
  if (process.env.ENABLE_PAYMENT !== 'true') {
    return res.status(503).json({ error: 'Payment not enabled' });
  }
  // TODO: Verify Cashfree payment signature
  res.json({ message: 'Cashfree verify stub', verified: false });
});

// Serve Vite build in production
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  // SPA fallback: serve index.html for non-API routes
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`VantaX server running on port ${PORT}`);
});
