import { Request, Response } from 'express';
import { prisma } from '../prisma.js';
import { sendDonationReceiptEmail } from '../services/email.service.js';
import { generateDonationReceiptPDF } from '../services/pdf.service.js';

export const createDonation = async (req: Request, res: Response) => {
  try {
    const { donorName, donorEmail, donorPhone, amount, paymentMethod, notes } = req.body;

    if (!donorName || !donorEmail || !amount) {
      return res.status(400).json({ message: 'Veuillez remplir le nom, l\'email et le montant du don.' });
    }

    const transactionRef = 'DON-' + Math.floor(100000 + Math.random() * 900000);

    const newDonation = await prisma.donation.create({
      data: {
        donorName,
        donorEmail,
        donorPhone,
        amount: parseFloat(amount),
        currency: 'XAF',
        paymentMethod: paymentMethod || 'AIRTEL_MONEY',
        status: 'SUCCESS',
        transactionRef,
        notes,
      },
    });

    // Trigger donation receipt email asynchronously (non-blocking)
    sendDonationReceiptEmail(
      newDonation.donorEmail,
      newDonation.donorName,
      newDonation.amount,
      newDonation.transactionRef,
      newDonation.paymentMethod
    ).catch(err => {
      console.error('Erreur lors de l\'envoi du reçu de don par email:', err);
    });

    res.status(201).json({
      message: 'Merci pour votre généreux soutien envers la jeunesse tchadienne !',
      donation: newDonation,
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors du traitement du don: ' + error.message });
  }
};

export const getDonations = async (req: Request, res: Response) => {
  try {
    const donations = await prisma.donation.findMany({
      orderBy: { createdAt: 'desc' },
    });

    const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);

    res.json({
      totalAmount,
      count: donations.length,
      donations,
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des dons: ' + error.message });
  }
};

export const downloadDonationReceiptPDF = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const donation = await prisma.donation.findFirst({
      where: {
        OR: [
          { id },
          { transactionRef: id },
        ],
      },
    });

    if (!donation) {
      return res.status(404).json({ message: 'Don non trouvé.' });
    }

    const pdfBuffer = await generateDonationReceiptPDF(donation);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=recu_don_ajtes_${donation.transactionRef}.pdf`);
    res.send(pdfBuffer);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur de génération du reçu PDF: ' + error.message });
  }
};
