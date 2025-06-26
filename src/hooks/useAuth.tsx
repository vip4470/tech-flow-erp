
import { createContext, useContext, useState, ReactNode } from 'react';
import { User, ROLES } from '@/types/roles';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  hasPermission: (module: string, action: string) => boolean;
  switchRole: (roleId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const MOCK_USERS: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "admin@techcorp.com",
    role: ROLES[0] // Admin
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "manager@techcorp.com",
    role: ROLES[1] // Manager
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "sales@techcorp.com",
    role: ROLES[2] // Sales
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "hr@techcorp.com",
    role: ROLES[3] // HR
  },
  {
    id: "5",
    name: "David Brown",
    email: "employee@techcorp.com",
    role: ROLES[4] // Employee
  }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(MOCK_USERS[0]); // Default to admin for demo

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, this would call an API
    const foundUser = MOCK_USERS.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const hasPermission = (module: string, action: string): boolean => {
    if (!user) return false;
    const permission = user.role.permissions.find(p => p.module === module);
    return permission ? permission.actions.includes(action) : false;
  };

  const switchRole = (roleId: string) => {
    const role = ROLES.find(r => r.id === roleId);
    if (role && user) {
      setUser({ ...user, role });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, hasPermission, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
