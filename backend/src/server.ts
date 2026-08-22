import app from './app.js';
import { seedInitialData } from './seed.js';

const PORT = process.env.PORT || 5000;

async function startServer() {
  await seedInitialData();

  app.listen(PORT, () => {
    console.log(`🚀 Serveur Backend AJTES démarré avec succès sur le port ${PORT}`);
    console.log(`📡 URL API: http://localhost:${PORT}/api`);
  });
}

startServer();
