import { Router } from 'express';
import { getProjects, getProjectById, createProject } from '../controllers/projects.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', authenticate, authorize(['ADMIN', 'PROJECT_MANAGER']), createProject);

export default router;
