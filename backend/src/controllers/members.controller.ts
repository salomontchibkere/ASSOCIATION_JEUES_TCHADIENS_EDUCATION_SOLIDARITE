import { Request, Response } from 'express';
import { db } from '../db.js';

export const getMembers = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;

    let profiles = [...db.memberProfiles];
    if (status) {
      profiles = profiles.filter((p) => p.status === String(status));
    }

    const members = profiles.map((profile) => {
      const user = db.users.find((u) => u.id === profile.userId);
      return {
        ...profile,
        user: user
          ? {
              id: user.id,
              fullName: user.fullName,
              email: user.email,
              phone: user.phone,
              role: user.role,
              avatar: user.avatar,
            }
          : null,
      };
    });

    res.json(members);
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur lors de la récupération des membres: ' + error.message });
  }
};

export const updateMemberStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['PENDING', 'APPROVED', 'REJECTED'].includes(status)) {
      return res.status(400).json({ message: 'Statut invalide.' });
    }

    const profileIndex = db.memberProfiles.findIndex((p) => p.id === id);
    if (profileIndex === -1) {
      return res.status(404).json({ message: 'Profil membre non trouvé.' });
    }

    db.memberProfiles[profileIndex].status = status as 'PENDING' | 'APPROVED' | 'REJECTED';
    db.memberProfiles[profileIndex].updatedAt = new Date().toISOString();
    db.saveDb();

    res.json({
      message: `Statut du membre mis à jour avec succès (${status}).`,
      member: db.memberProfiles[profileIndex],
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Erreur mise à jour statut: ' + error.message });
  }
};
