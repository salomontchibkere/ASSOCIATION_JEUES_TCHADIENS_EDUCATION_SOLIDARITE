import { Request, Response } from 'express';
import { prisma } from '../prisma.js';
import { AuthRequest } from '../middlewares/auth.middleware.js';

export const getNews = async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query;

    const whereCondition: any = { published: true };
    if (category) whereCondition.category = String(category);

    let newsList = await prisma.news.findMany({
      where: whereCondition,
      orderBy: { createdAt: 'desc' },
    });

    if (search) {
      const q = String(search).toLowerCase();
      newsList = newsList.filter(
        (n) => n.titleFr.toLowerCase().includes(q) || n.contentFr.toLowerCase().includes(q)
      );
    }

    res.json(newsList);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des actualités: ' + error.message });
  }
};

export const getNewsById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const news = await prisma.news.findUnique({
      where: { id },
    });

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

    const newArticle = await prisma.news.create({
      data: {
        titleFr,
        titleEn,
        titleAr,
        contentFr,
        contentEn,
        contentAr,
        category: category || 'ACTUALITE',
        image,
        published: true,
        authorId: req.user?.id || null,
      },
    });

    res.status(201).json(newArticle);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'actualité: ' + error.message });
  }
};

export const deleteNews = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    await prisma.news.delete({
      where: { id },
    });
    res.json({ message: 'Actualité supprimée avec succès.' });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur suppression actualité: ' + error.message });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { eventDate: 'asc' },
    });
    res.json(events);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des événements: ' + error.message });
  }
};
