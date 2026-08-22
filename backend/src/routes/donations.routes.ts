import { Router } from 'express';
import { createDonation, getDonations } from '../controllers/donations.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', createDonation);
router.get('/', authenticate, authorize(['ADMIN', 'TREASURER']), getDonations);

export default router;
