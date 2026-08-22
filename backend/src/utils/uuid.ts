import crypto from 'crypto';

export const cryptoUUID = (): string => {
  return crypto.randomUUID();
};
