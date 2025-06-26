
export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
}

export interface Permission {
  module: string;
  actions: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export const ROLES: Role[] = [
  {
    id: "admin",
    name: "Admin",
    description: "Full system access",
    permissions: [
      { module: "dashboard", actions: ["read", "write", "delete"] },
      { module: "crm", actions: ["read", "write", "delete"] },
      { module: "hr", actions: ["read", "write", "delete"] },
      { module: "projects", actions: ["read", "write", "delete"] },
      { module: "sales", actions: ["read", "write", "delete"] },
      { module: "settings", actions: ["read", "write", "delete"] }
    ]
  },
  {
    id: "manager",
    name: "Manager",
    description: "Projects & Tasks management",
    permissions: [
      { module: "dashboard", actions: ["read"] },
      { module: "projects", actions: ["read", "write"] },
      { module: "sales", actions: ["read"] },
      { module: "hr", actions: ["read"] }
    ]
  },
  {
    id: "sales",
    name: "Sales",
    description: "CRM access only",
    permissions: [
      { module: "dashboard", actions: ["read"] },
      { module: "crm", actions: ["read", "write"] },
      { module: "sales", actions: ["read", "write"] }
    ]
  },
  {
    id: "hr",
    name: "HR",
    description: "Employee management only",
    permissions: [
      { module: "dashboard", actions: ["read"] },
      { module: "hr", actions: ["read", "write"] }
    ]
  },
  {
    id: "employee",
    name: "Employee",
    description: "Read-only assigned tasks",
    permissions: [
      { module: "dashboard", actions: ["read"] },
      { module: "projects", actions: ["read"] }
    ]
  }
];
