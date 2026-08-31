import { Router } from 'express';
import { createDonation, getDonations, downloadDonationReceiptPDF } from '../controllers/donations.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', createDonation);
router.get('/', authenticate, authorize(['ADMIN', 'TREASURER']), getDonations);
router.get('/:id/receipt', downloadDonationReceiptPDF);

export default router;
