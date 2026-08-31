import { Request, Response } from 'express';
import { prisma } from '../prisma.js';
import { sendContactAlertEmail } from '../services/email.service.js';

export const submitContact = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Tous les champs obligatoires doivent être renseignés.' });
    }

    const newMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
        isRead: false,
      },
    });

    // Trigger admin contact alert email asynchronously (non-blocking)
    sendContactAlertEmail({ name, email, phone, subject, message }).catch(err => {
      console.error('Erreur lors de l\'envoi de l\'alerte contact au bureau:', err);
    });

    res.status(201).json({
      message: 'Votre message a été bien envoyé à l\'AJTES ! Nous vous répondrons sous peu.',
      contactMessage: newMessage,
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de l\'envoi du message: ' + error.message });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
    });

    res.json(messages);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des messages: ' + error.message });
  }
};

export const markMessageAsRead = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const updatedMessage = await prisma.contactMessage.update({
      where: { id },
      data: { isRead: true },
    });

    res.json(updatedMessage);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur: ' + error.message });
  }
};
