import { Router } from 'express';
import { submitContact, getMessages, markMessageAsRead } from '../controllers/contact.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', submitContact);
router.get('/', authenticate, authorize(['ADMIN']), getMessages);
router.patch('/:id/read', authenticate, authorize(['ADMIN']), markMessageAsRead);

export default router;
