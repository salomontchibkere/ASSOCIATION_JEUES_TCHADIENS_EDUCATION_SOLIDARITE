import { Router } from 'express';
import { getNews, getNewsById, createNews, deleteNews, getEvents } from '../controllers/news.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', getNews);
router.get('/events', getEvents);
router.get('/:id', getNewsById);
router.post('/', authenticate, authorize(['ADMIN', 'PROJECT_MANAGER']), createNews);
router.delete('/:id', authenticate, authorize(['ADMIN']), deleteNews);

export default router;
