import { Router } from 'express';
import { getMembers, updateMemberStatus } from '../controllers/members.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', authenticate, authorize(['ADMIN', 'PROJECT_MANAGER']), getMembers);
router.patch('/:id/status', authenticate, authorize(['ADMIN']), updateMemberStatus);

export default router;
