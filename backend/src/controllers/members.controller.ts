import { Request, Response } from 'express';
import { prisma } from '../prisma.js';
import { generateMemberCardPDF } from '../services/pdf.service.js';

export const getMembers = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;

    const whereCondition = status ? { status: String(status) } : {};

    const members = await prisma.memberProfile.findMany({
      where: whereCondition,
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            role: true,
            avatar: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json(members);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des membres: ' + error.message });
  }
};

export const updateMemberStatus = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const { status } = req.body;

    if (!['PENDING', 'APPROVED', 'REJECTED'].includes(status)) {
      return res.status(400).json({ message: 'Statut invalide.' });
    }

    const updatedMember = await prisma.memberProfile.update({
      where: { id },
      data: { status },
      include: { user: true },
    });

    res.json({
      message: `Statut du membre mis à jour avec succès (${status}).`,
      member: updatedMember,
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur mise à jour statut: ' + error.message });
  }
};

export const downloadMemberCardPDF = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const member = await prisma.memberProfile.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!member) {
      return res.status(404).json({ message: 'Membre non trouvé.' });
    }

    const pdfBuffer = await generateMemberCardPDF(member);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=carte_membre_ajtes_${member.id}.pdf`);
    res.send(pdfBuffer);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur de génération de la carte PDF: ' + error.message });
  }
};
