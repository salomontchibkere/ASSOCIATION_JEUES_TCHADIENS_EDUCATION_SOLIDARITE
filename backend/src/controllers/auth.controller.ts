import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db, User, MemberProfile } from '../db.js';
import { AuthRequest } from '../middlewares/auth.middleware.js';
import { cryptoUUID } from '../utils/uuid.js';
import { sendWelcomeEmail, sendLoginNotificationEmail } from '../services/email.service.js';

const JWT_SECRET = process.env.JWT_SECRET || 'ajtes_secret_key_2026_salomon_secure_token';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, fullName, phone, profession, city, country } = req.body;

    if (!email || !password || !fullName) {
      return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires (email, mot de passe, nom).' });
    }

    const existingUser = db.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé par un autre compte.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = cryptoUUID();
    const profileId = cryptoUUID();
    const now = new Date().toISOString();

    const newProfile: MemberProfile = {
      id: profileId,
      userId,
      profession,
      city,
      country: country || 'Tchad',
      status: 'PENDING',
      createdAt: now,
      updatedAt: now,
    };

    const newUser: User = {
      id: userId,
      email: email.toLowerCase(),
      password: hashedPassword,
      fullName,
      phone,
      role: 'MEMBER',
      isActive: true,
      createdAt: now,
      updatedAt: now,
      memberProfile: newProfile,
    };

    db.users.push(newUser);
    db.memberProfiles.push(newProfile);
    db.saveDb();

    // Trigger welcome email asynchronously (non-blocking)
    sendWelcomeEmail(newUser.email, newUser.fullName).catch(err => {
      console.error('Erreur lors de l\'envoi de l\'email de bienvenue:', err);
    });

    const token = jwt.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, JWT_SECRET, {
      expiresIn: '7d',
    });

    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      message: 'Compte créé avec succès ! Demande d\'adhésion en cours de validation.',
      token,
      user: userWithoutPassword,
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de l\'inscription: ' + error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Veuillez fournir un email et un mot de passe.' });
    }

    const user = db.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: '7d',
    });

    // Trigger login notification email asynchronously
    sendLoginNotificationEmail(user.email, user.fullName).catch(err => {
      console.error('Erreur lors de l\'envoi de la notification de connexion:', err);
    });

    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Connexion réussie !',
      token,
      user: userWithoutPassword,
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur de connexion: ' + error.message });
  }
};

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Non authentifié.' });
    }

    const user = db.users.find((u) => u.id === req.user?.id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    const { password: _, ...userWithoutPassword } = user;

    res.json({ user: userWithoutPassword });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération du profil: ' + error.message });
  }
};
