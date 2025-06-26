import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Search, 
  Plus, 
  Menu,
  ChevronDown,
  LogOut,
  User,
  Settings as SettingsIcon
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { ROLES } from "@/types/roles";
import { useState } from "react";

interface HeaderProps {
  activeModule: string;
  onSidebarToggle: () => void;
}

const getModuleTitle = (module: string) => {
  const titles = {
    dashboard: "Dashboard Overview",
    crm: "Customer Relationship Management",
    hr: "Human Resources",
    projects: "Project Management",
    sales: "Sales Pipeline"
  };
  return titles[module as keyof typeof titles] || "Dashboard";
};

export const Header = ({ activeModule, onSidebarToggle }: HeaderProps) => {
  const { user, hasPermission, logout, switchRole } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  const handleQuickAdd = (type: string) => {
    console.log(`Adding new ${type}`);
    // Implement quick add functionality based on type
  };

  const handleNotificationClick = () => {
    console.log("Opening notifications");
    // Implement notification handling
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement search functionality
  };

  const getRoleColor = (roleId: string) => {
    const colors: Record<string, string> = {
      admin: "bg-red-100 text-red-800",
      manager: "bg-blue-100 text-blue-800",
      sales: "bg-green-100 text-green-800",
      hr: "bg-purple-100 text-purple-800",
      employee: "bg-gray-100 text-gray-800"
    };
    return colors[roleId] || "bg-gray-100 text-gray-800";
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onSidebarToggle}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {getModuleTitle(activeModule)}
            </h1>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-500">
                Manage your business operations efficiently
              </p>
              {user && (
                <Badge className={getRoleColor(user.role.id)}>
                  {user.role.name}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64 focus:w-80 transition-all duration-200"
            />
          </form>

          {/* Quick Actions */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Quick Add
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {hasPermission("crm", "write") && (
                <DropdownMenuItem onClick={() => handleQuickAdd("lead")}>
                  New Lead
                </DropdownMenuItem>
              )}
              {hasPermission("hr", "write") && (
                <DropdownMenuItem onClick={() => handleQuickAdd("employee")}>
                  New Employee
                </DropdownMenuItem>
              )}
              {hasPermission("projects", "write") && (
                <DropdownMenuItem onClick={() => handleQuickAdd("project")}>
                  New Project
                </DropdownMenuItem>
              )}
              {hasPermission("sales", "write") && (
                <DropdownMenuItem onClick={() => handleQuickAdd("sale")}>
                  New Sale
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative"
            onClick={handleNotificationClick}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>
                    {user?.name.split(' ').map(n => n[0]).join('') || 'U'}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden md:block font-medium">
                  {user?.name || 'User'}
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div>
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              {/* Role Switching (Admin only) */}
              {user?.role.id === "admin" && (
                <>
                  <DropdownMenuLabel>Switch Role (Demo)</DropdownMenuLabel>
                  {ROLES.map((role) => (
                    <DropdownMenuItem 
                      key={role.id}
                      onClick={() => switchRole(role.id)}
                      className={user.role.id === role.id ? "bg-blue-50" : ""}
                    >
                      {role.name}
                      {user.role.id === role.id && <span className="ml-auto">•</span>}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                </>
              )}
              
              <DropdownMenuItem>
                <User className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout} className="text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
