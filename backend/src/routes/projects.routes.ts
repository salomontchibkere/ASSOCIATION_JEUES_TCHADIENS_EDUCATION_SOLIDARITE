import { Router } from 'express';
import { getProjects, getProjectById, createProject, updateProject, deleteProject } from '../controllers/projects.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', authenticate, authorize(['ADMIN', 'PROJECT_MANAGER']), createProject);
router.put('/:id', authenticate, authorize(['ADMIN', 'PROJECT_MANAGER']), updateProject);
router.delete('/:id', authenticate, authorize(['ADMIN']), deleteProject);

export default router;
