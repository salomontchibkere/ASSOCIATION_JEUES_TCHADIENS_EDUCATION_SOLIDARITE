import React, { createContext, useContext, useState } from 'react';
import type { User, UserRole } from '../types';
import { initialUsers } from '../data/mockData';

interface AuthContextType {
  currentUser: User | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (email: string, role?: UserRole) => boolean;
  loginAsAdmin: () => boolean;
  logout: () => void;
  register: (userData: Omit<User, 'id' | 'dateJoined'>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default unauthenticated visitor state for clean professional user experience
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const isLoggedIn = !!currentUser;
  const isAdmin = currentUser?.role === 'super_admin' || currentUser?.role === 'admin';

  const login = (email: string, role: UserRole = 'membre'): boolean => {
    const cleanEmail = email.trim().toLowerCase();
    const existing = initialUsers.find(u => u.email.toLowerCase() === cleanEmail);
    if (existing) {
      setCurrentUser(existing);
      return true;
    }

    const isAdminEmail = cleanEmail.includes('admin') || cleanEmail === 'salomon.admin@ajtes.td' || cleanEmail === 'salomontchibkere@gmail.com';
    const effectiveRole: UserRole = isAdminEmail ? 'super_admin' : role;

    const newUser: User = {
      id: `usr-${Date.now()}`,
      name: email.split('@')[0],
      email,
      role: effectiveRole,
      memberType: 'actif',
      membershipStatus: 'actif',
      dateJoined: new Date().toISOString().split('T')[0]
    };
    setCurrentUser(newUser);
    return true;
  };

  const loginAsAdmin = (): boolean => {
    setCurrentUser(initialUsers[0]); // Salomon (Super Admin)
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const register = (userData: Omit<User, 'id' | 'dateJoined'>) => {
    const newUser: User = {
      ...userData,
      id: `usr-${Date.now()}`,
      dateJoined: new Date().toISOString().split('T')[0]
    };
    setCurrentUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ currentUser, isLoggedIn, isAdmin, login, loginAsAdmin, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
