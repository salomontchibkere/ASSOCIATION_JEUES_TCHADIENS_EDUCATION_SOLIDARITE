import { Router } from 'express';
import authRoutes from './auth.routes.js';
import newsRoutes from './news.routes.js';
import projectsRoutes from './projects.routes.js';
import donationsRoutes from './donations.routes.js';
import membersRoutes from './members.routes.js';
import contactRoutes from './contact.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/news', newsRoutes);
router.use('/projects', projectsRoutes);
router.use('/donations', donationsRoutes);
router.use('/members', membersRoutes);
router.use('/contact', contactRoutes);

export default router;
