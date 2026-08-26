import type { Request, Response, NextFunction } from 'express';

// In-memory rate limiting store for IP addresses
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const ipStore = new Map<string, RateLimitRecord>();

/**
 * Middleware de limitation de débit (Rate Limiting)
 * Protège les routes sensibles (connexion, inscription, formulaires) contre le brute-force.
 */
export const createRateLimiter = (options: { windowMs: number; max: number; message: string }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || req.socket.remoteAddress || '127.0.0.1';
    const now = Date.now();

    let record = ipStore.get(ip);

    if (!record || now > record.resetTime) {
      record = {
        count: 1,
        resetTime: now + options.windowMs
      };
      ipStore.set(ip, record);
      return next();
    }

    record.count += 1;

    if (record.count > options.max) {
      const retryAfter = Math.ceil((record.resetTime - now) / 1000);
      res.setHeader('Retry-After', retryAfter);
      return res.status(429).json({
        success: false,
        error: options.message,
        retryAfterSeconds: retryAfter
      });
    }

    next();
  };
};

// Limiteur spécifique pour la connexion & authentification (Max 15 requêtes / 15 minutes)
export const authRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: 'Trop de tentatives de connexion depuis cette adresse IP. Veuillez réessayer dans 15 minutes.'
});
