import { Request, Response } from 'express';
import { db, Project } from '../db.js';
import { cryptoUUID } from '../utils/uuid.js';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const { status, year } = req.query;

    let projects = [...db.projects];
    if (status) {
      projects = projects.filter((p) => p.status === String(status));
    }
    if (year) {
      projects = projects.filter((p) => p.year === Number(year));
    }

    projects.sort((a, b) => b.year - a.year);

    res.json(projects);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des projets: ' + error.message });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = db.projects.find((p) => p.id === id);

    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé.' });
    }

    res.json(project);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur: ' + error.message });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const {
      titleFr, titleEn, titleAr,
      summaryFr, summaryEn, summaryAr,
      descriptionFr, descriptionEn, descriptionAr,
      status, budget, year, location, image
    } = req.body;

    if (!titleFr || !summaryFr || !descriptionFr || !year || !location) {
      return res.status(400).json({ message: 'Veuillez remplir les informations obligatoires du projet.' });
    }

    const now = new Date().toISOString();
    const newProject: Project = {
      id: cryptoUUID(),
      titleFr, titleEn, titleAr,
      summaryFr, summaryEn, summaryAr,
      descriptionFr, descriptionEn, descriptionAr,
      status: status || 'COMPLETED',
      budget: budget ? parseFloat(budget) : undefined,
      year: parseInt(year, 10),
      location,
      image,
      createdAt: now,
      updatedAt: now,
    };

    db.projects.push(newProject);
    db.saveDb();

    res.status(201).json(newProject);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur création projet: ' + error.message });
  }
};
