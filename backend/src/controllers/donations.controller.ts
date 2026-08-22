import { Request, Response } from 'express';
import { db, Donation } from '../db.js';
import { cryptoUUID } from '../utils/uuid.js';
import { sendDonationReceiptEmail } from '../services/email.service.js';

export const createDonation = async (req: Request, res: Response) => {
  try {
    const { donorName, donorEmail, donorPhone, amount, paymentMethod, notes } = req.body;

    if (!donorName || !donorEmail || !amount) {
      return res.status(400).json({ message: 'Veuillez remplir le nom, l\'email et le montant du don.' });
    }

    const newDonation: Donation = {
      id: cryptoUUID(),
      donorName,
      donorEmail,
      donorPhone,
      amount: parseFloat(amount),
      currency: 'XAF',
      paymentMethod: paymentMethod || 'AIRTEL_MONEY',
      status: 'SUCCESS',
      transactionRef: 'DON-' + Math.floor(100000 + Math.random() * 900000),
      notes,
      createdAt: new Date().toISOString(),
    };

    db.donations.push(newDonation);
    db.saveDb();

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
    const donations = [...db.donations];
    donations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

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
