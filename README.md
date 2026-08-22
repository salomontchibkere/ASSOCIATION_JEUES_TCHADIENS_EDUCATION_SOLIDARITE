# 🌍 Platforme Officielle AJTES Tchad
> **Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES)**
> Documentation complète d'architecture, d'installation, de fonctionnement et de déploiement.

---

## 📋 Table des Matières
1. [Présentation du Projet](#1-présentation-du-projet)
2. [Architecture Technique](#2-architecture-technique)
3. [Structure du Projet](#3-structure-du-projet)
4. [Base de Données & Modèles Prisma](#4-base-de-données--modèles-prisma)
5. [Spécification des APIs REST Backend](#5-spécification-des-apis-rest-backend)
6. [Guide de Démarrage Rapide](#6-guide-de-démarrage-rapide)
7. [Sécurité et Rôles Utilisateurs](#7-sécurité-et-rôles-utilisateurs)
8. [Script de Lancement Rapide](#8-script-de-lancement-rapide)

---

## 1. Présentation du Projet

L'**AJTES Tchad** (Association des Jeunes Tchadiens pour l’Éducation et la Solidarité) est une organisation caritative et éducative engagée pour le développement communautaire, la scolarisation et la solidarité sociale au Tchad.

La plateforme web AJTES est une application web complète comprenant :
- Un **Portail Web Public** hautement professionnel, multilingue (Français, Anglais, Arabe), présentant les actions, projets et opportunités de dons.
- Un **Espace Membre Adhérent** sécurisé permettant aux jeunes d'adhérer et de suivre leurs contributions.
- Un **Panneau de Contrôle Administrateur** restreint permettant la gestion des membres, la validation des dons, et la publication d'actualités/projets.
- Un **Backend RESTful robuste** s'appuyant sur SQLite via **Prisma ORM** et **Express.js**.

---

## 2. Architecture Technique

### 🎨 Frontend
- **Framework** : React 19 + TypeScript + Vite 8
- **Styling** : CSS Vanilla moderne avec Variables CSS, Glassmorphism, animations fluides et thèmes adaptatifs.
- **Multilingue (i18n)** : `react-i18next` avec support dynamique **Français (FR)**, **Anglais (EN)** et **Arabe (AR)**.
- **Composants d'icônes** : `lucide-react`.

### ⚙️ Backend
- **Serveur API** : Node.js + Express.js + TypeScript
- **ORM & Base de données** : Prisma ORM 5.22 + SQLite (`dev.db`)
- **Authentification** : JWT (JSON Web Token) avec hachage de mot de passe `bcryptjs`
- **Validation des données** : Zod
- **Gestion des Uploads & Mails** : `multer` (fichiers/médias) & `nodemailer` (SMTP)

---

## 3. Structure du Projet

```
ASSOCIATION/
├── README.md                                  # Documentation officielle du dépôt GitHub
├── DOCUMENTATION_COMPLETE_PROJET_AJTES_2026.pdf # Documentation PDF complète institutionnelle
├── CAHIER DES CHARGES.pdf                      # Cahier des charges officiel
├── Images/                                    # Stockage des 35 photos HD d'origine
├── videos/                                    # Stockage des 8 vidéos MP4 d'origine
├── LOGO/                                      # Logos originaux de l'AJTES Tchad
├── backend/                                   # Application API REST Backend (Express + Prisma + SQLite)
│   ├── prisma/
│   │   ├── schema.prisma                      # Schéma de base de données Prisma
│   │   └── seed.ts                            # Seeding de la base de données
│   ├── src/
│   │   ├── app.ts                             # Configuration Express API
│   │   ├── server.ts                          # Point d'entrée HTTP (Port 5000)
│   │   ├── controllers/                       # Contrôleurs métier (auth, members, projects, etc.)
│   │   ├── middlewares/                       # Middlewares (auth JWT, rôles, erreurs)
│   │   ├── routes/                            # Définition des routes de l'API
│   │   └── services/                          # Logique métier et requêtes Prisma
│   └── package.json
├── frontend/                                  # Application Web Client React (React 19 + TypeScript + Vite)
│   ├── index.html
│   ├── src/
│   │   ├── main.tsx                           # Point d'entrée React
│   │   ├── App.tsx                            # Structure principale & Routeur
│   │   ├── components/                        # Composants UI (layout, home, gallery, admin, etc.)
│   │   ├── context/                           # AuthContext, DataContext, LanguageContext
│   │   └── data/                              # Données dynamiques / mockData.ts (35 photos + 8 vidéos)
│   └── package.json
└── doc/                                       # Statuts et Règlements intérieurs officiels AJTES
```

---

## 4. Base de Données & Modèles Prisma

Le schéma Prisma (`backend/prisma/schema.prisma`) modélise les entités principales suivantes :

| Entité | Rôle / Description |
| :--- | :--- |
| **`User`** | Utilisateurs du système (Emails uniques, mot de passe haché, rôles : `ADMIN`, `MEMBER`, `TREASURER`). |
| **`MemberProfile`** | Profil d'adhérent (Profession, Ville, Statut d'approbation : `PENDING`, `APPROVED`, `REJECTED`). |
| **`News`** | Actualités et communiqués de presse multilingues (FR/EN/AR). |
| **`Event`** | Événements et campagnes sur le terrain. |
| **`Project`** | Projets communautaires (Budget, Année, Localisation, Avancement). |
| **`Donation`** | Dons enregistrés (Airtel Money, Moov Africa, Carte, Espèces) avec référence de transaction. |
| **`ContactMessage`** | Messages envoyés via le formulaire de contact du site (`association.ajtes.@gmail.com`). |
| **`Committee`** | Comités d'action de l'AJTES (Éducation, Santé, Environnement, Droits des Jeunes). |

---

## 5. Spécification des APIs REST Backend

L'API s'exécute sur `http://localhost:5000/api`.

### 🔑 Authentification (`/api/auth`)
- `POST /api/auth/register` : Inscription d'un nouveau membre.
- `POST /api/auth/login` : Connexion (Retourne un Token JWT et le profil utilisateur).
- `GET /api/auth/me` : Obtenir les informations du compte connecté.

### 👤 Membres & Adhésions (`/api/members`)
- `GET /api/members` : Obtenir la liste des membres (Administrateurs uniquement).
- `PUT /api/members/:id/status` : Approuver ou rejeter une demande d'adhésion (`APPROVED` / `REJECTED`).

### 🚀 Projets & Action Sociale (`/api/projects`)
- `GET /api/projects` : Lister tous les projets de l'association.
- `POST /api/projects` : Créer un nouveau projet (Admin).
- `DELETE /api/projects/:id` : Supprimer un projet (Admin).

### 📰 Actualités & Événements (`/api/news`)
- `GET /api/news` : Récupérer toutes les actualités publiées.
- `POST /api/news` : Publier un nouvel article/événement (Admin).

### 💳 Dons & Solidarité (`/api/donations`)
- `POST /api/donations` : Enregistrer un don (Airtel Money, Moov Africa, etc.).
- `GET /api/donations` : Consulter les dons reçus (Réservé au bureau / trésorier).

---

## 6. Guide de Démarrage Rapide

### Prérequis
- **Node.js** v18.0.0 ou plus récent
- **npm** v9.0.0 ou plus récent

### 1️⃣ Initialisation du Backend
```bash
cd backend
npm install

# Synchroniser la base de données SQLite
npm run prisma:push

# Alimenter la base avec les données de démarrage (Admin, Projets, etc.)
npm run prisma:seed

# Lancer le serveur backend en mode développement (Port 5000)
npm run dev
```

### 2️⃣ Initialisation du Frontend
```bash
cd frontend
npm install

# Lancer le serveur de développement (Port 5173)
npm run dev
```

---

## 7. Sécurité et Rôles Utilisateurs

1. **Visiteurs Publics** :
   - Naviguent librement sur le site, lisent les projets, actualités et remplissent le formulaire de don ou de contact.
   - **Important** : Aucun bouton d'administration n'est affiché dans la barre de navigation publique.

2. **Membres Adhérents (`MEMBER`)** :
   - Accèdent à leur espace membre personnel, statut de cotisation et attestation d'adhésion.

3. **Administrateurs (`ADMIN` / `SUPER_ADMIN`)** :
   - Accès au panneau d'administration via la connexion sécurisée (`contact@ajtes.td` / `association.ajtes.@gmail.com`).
   - Gestion globale du site, validation des adhésions et suivi des dons.

---

*Documentation technique développée par **Salomon** pour l'**AJTES Tchad** (Contact : `association.ajtes.@gmail.com`) — 2026.*
