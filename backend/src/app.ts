import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/index.js';
import { errorHandler } from './middlewares/error.middleware.js';

dotenv.config();

const app = express();

const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';
app.use(cors({
  origin: corsOrigin,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route de santé API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    message: 'API AJTES Backend en fonctionnement',
    timestamp: new Date().toISOString(),
  });
});

// Enregistrement des routes API
app.use('/api', apiRoutes);

// Middleware d'erreur global
app.use(errorHandler);

export default app;
