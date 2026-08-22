import { Request, Response } from 'express';
import { db, News } from '../db.js';
import { AuthRequest } from '../middlewares/auth.middleware.js';
import { cryptoUUID } from '../utils/uuid.js';

export const getNews = async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query;

    let newsList = db.news.filter((n) => n.published);

    if (category) {
      newsList = newsList.filter((n) => n.category === String(category));
    }

    if (search) {
      const q = String(search).toLowerCase();
      newsList = newsList.filter(
        (n) => n.titleFr.toLowerCase().includes(q) || n.contentFr.toLowerCase().includes(q)
      );
    }

    newsList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    res.json(newsList);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des actualités: ' + error.message });
  }
};

export const getNewsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const news = db.news.find((n) => n.id === id);

    if (!news) {
      return res.status(404).json({ message: 'Actualité introuvable.' });
    }

    res.json(news);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur: ' + error.message });
  }
};

export const createNews = async (req: AuthRequest, res: Response) => {
  try {
    const { titleFr, titleEn, titleAr, contentFr, contentEn, contentAr, category, image } = req.body;

    if (!titleFr || !contentFr) {
      return res.status(400).json({ message: 'Le titre et le contenu en français sont obligatoires.' });
    }

    const now = new Date().toISOString();
    const newArticle: News = {
      id: cryptoUUID(),
      titleFr,
      titleEn,
      titleAr,
      contentFr,
      contentEn,
      contentAr,
      category: category || 'ACTUALITE',
      image,
      published: true,
      authorId: req.user?.id,
      createdAt: now,
      updatedAt: now,
    };

    db.news.push(newArticle);
    db.saveDb();

    res.status(201).json(newArticle);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'actualité: ' + error.message });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = [...db.events];
    events.sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime());
    res.json(events);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des événements: ' + error.message });
  }
};
