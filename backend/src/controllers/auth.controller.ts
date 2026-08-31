import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma.js';
import { AuthRequest } from '../middlewares/auth.middleware.js';
import { sendWelcomeEmail, sendLoginNotificationEmail } from '../services/email.service.js';

const JWT_SECRET = process.env.JWT_SECRET || 'ajtes_secret_key_2026_salomon_secure_token';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, fullName, phone, profession, city, country } = req.body;

    if (!email || !password || !fullName) {
      return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires (email, mot de passe, nom).' });
    }

    const cleanEmail = email.toLowerCase().trim();

    const existingUser = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé par un autre compte.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: cleanEmail,
        password: hashedPassword,
        fullName,
        phone,
        role: 'MEMBER',
        memberProfile: {
          create: {
            profession,
            city,
            country: country || 'Tchad',
            status: 'PENDING',
          },
        },
      },
      include: {
        memberProfile: true,
      },
    });

    // Trigger welcome email asynchronously (non-blocking)
    sendWelcomeEmail(newUser.email, newUser.fullName).catch(err => {
      console.error('Erreur lors de l\'envoi de l\'email de bienvenue:', err);
    });

    const token = jwt.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, JWT_SECRET, {
      expiresIn: '7d',
    });

    const isProduction = process.env.NODE_ENV === 'production';
    res.cookie('ajtes_token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'strict' : 'lax',
      maxAge: 7 * 24 * 3600 * 1000,
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

    const cleanEmail = email.toLowerCase().trim();
    const user = await prisma.user.findUnique({
      where: { email: cleanEmail },
      include: { memberProfile: true },
    });

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

    const isProduction = process.env.NODE_ENV === 'production';
    res.cookie('ajtes_token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'strict' : 'lax',
      maxAge: 7 * 24 * 3600 * 1000,
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

export const logout = async (req: Request, res: Response) => {
  try {
    const isProduction = process.env.NODE_ENV === 'production';
    res.clearCookie('ajtes_token', {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'strict' : 'lax',
    });
    res.json({ message: 'Déconnexion réussie !' });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la déconnexion: ' + error.message });
  }
};

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Non authentifié.' });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: { memberProfile: true },
    });

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    const { password: _, ...userWithoutPassword } = user;

    res.json({ user: userWithoutPassword });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération du profil: ' + error.message });
  }
};
