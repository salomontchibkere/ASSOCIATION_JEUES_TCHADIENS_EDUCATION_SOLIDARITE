import { Request, Response } from 'express';
import { prisma } from '../prisma.js';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const { status, year } = req.query;

    const whereCondition: any = {};
    if (status) whereCondition.status = String(status);
    if (year) whereCondition.year = Number(year);

    const projects = await prisma.project.findMany({
      where: whereCondition,
      orderBy: { year: 'desc' },
    });

    res.json(projects);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des projets: ' + error.message });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const project = await prisma.project.findUnique({
      where: { id },
    });

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

    const newProject = await prisma.project.create({
      data: {
        titleFr, titleEn, titleAr,
        summaryFr, summaryEn, summaryAr,
        descriptionFr, descriptionEn, descriptionAr,
        status: status || 'COMPLETED',
        budget: budget ? parseFloat(budget) : null,
        year: parseInt(String(year), 10),
        location,
        image,
      },
    });

    res.status(201).json(newProject);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur création projet: ' + error.message });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const data = req.body;

    if (data.year) data.year = parseInt(String(data.year), 10);
    if (data.budget) data.budget = parseFloat(String(data.budget));

    const updatedProject = await prisma.project.update({
      where: { id },
      data,
    });

    res.json(updatedProject);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur mise à jour projet: ' + error.message });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    await prisma.project.delete({
      where: { id },
    });
    res.json({ message: 'Projet supprimé avec succès.' });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur suppression projet: ' + error.message });
  }
};
