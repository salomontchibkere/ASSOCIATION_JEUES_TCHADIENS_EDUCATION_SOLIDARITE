import { Request, Response } from 'express';
import { db, ContactMessage } from '../db.js';
import { cryptoUUID } from '../utils/uuid.js';
import { sendContactAlertEmail } from '../services/email.service.js';

export const submitContact = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Tous les champs obligatoires doivent être renseignés.' });
    }

    const newMessage: ContactMessage = {
      id: cryptoUUID(),
      name,
      email,
      phone,
      subject,
      message,
      isRead: false,
      createdAt: new Date().toISOString(),
    };

    db.contactMessages.push(newMessage);
    db.saveDb();

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
    const messages = [...db.contactMessages];
    messages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    res.json(messages);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des messages: ' + error.message });
  }
};

export const markMessageAsRead = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const msgIndex = db.contactMessages.findIndex((m) => m.id === id);
    if (msgIndex === -1) {
      return res.status(404).json({ message: 'Message introuvable.' });
    }

    db.contactMessages[msgIndex].isRead = true;
    db.saveDb();

    res.json(db.contactMessages[msgIndex]);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur: ' + error.message });
  }
};
