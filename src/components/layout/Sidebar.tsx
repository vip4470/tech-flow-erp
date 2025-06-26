import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  UserCheck, 
  FolderOpen, 
  TrendingUp,
  Settings,
  HelpCircle,
  ChevronLeft,
  Shield
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home, color: "text-blue-600", permission: "dashboard" },
  { id: "crm", label: "CRM", icon: Users, color: "text-green-600", permission: "crm" },
  { id: "hr", label: "HR Management", icon: UserCheck, color: "text-purple-600", permission: "hr" },
  { id: "projects", label: "Projects", icon: FolderOpen, color: "text-orange-600", permission: "projects" },
  { id: "sales", label: "Sales", icon: TrendingUp, color: "text-red-600", permission: "sales" },
];

export const Sidebar = ({ activeModule, setActiveModule, isOpen, onToggle }: SidebarProps) => {
  const { user, hasPermission } = useAuth();

  const handleModuleClick = (moduleId: string) => {
    setActiveModule(moduleId);
  };

  return (
    <div className={cn(
      "bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col",
      isOpen ? "w-64" : "w-16"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {isOpen && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ERP</span>
            </div>
            <div>
              <span className="font-bold text-gray-800">TechCorp ERP</span>
              {user && (
                <div className="text-xs text-gray-500">{user.role.name}</div>
              )}
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="hover:bg-gray-100"
        >
          <ChevronLeft className={cn(
            "h-4 w-4 transition-transform duration-200",
            !isOpen && "rotate-180"
          )} />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeModule === item.id;
          const hasAccess = hasPermission(item.permission, "read");
          
          if (!hasAccess) return null;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start hover:bg-gray-100 transition-colors",
                isActive && "bg-blue-50 border-r-2 border-blue-600",
                !isOpen && "justify-center px-2"
              )}
              onClick={() => handleModuleClick(item.id)}
            >
              <IconComponent className={cn("h-5 w-5", item.color, !isOpen && "mx-auto")} />
              {isOpen && <span className="ml-3 font-medium">{item.label}</span>}
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-gray-200 space-y-1">
        {hasPermission("settings", "read") && (
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start hover:bg-gray-100",
              !isOpen && "justify-center px-2",
              activeModule === "settings" && "bg-blue-50"
            )}
            onClick={() => handleModuleClick("settings")}
          >
            <Shield className="h-5 w-5 text-gray-500" />
            {isOpen && <span className="ml-3 font-medium text-gray-600">Role Manager</span>}
          </Button>
        )}
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start hover:bg-gray-100",
            !isOpen && "justify-center px-2"
          )}
        >
          <Settings className="h-5 w-5 text-gray-500" />
          {isOpen && <span className="ml-3 font-medium text-gray-600">Settings</span>}
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start hover:bg-gray-100",
            !isOpen && "justify-center px-2"
          )}
        >
          <HelpCircle className="h-5 w-5 text-gray-500" />
          {isOpen && <span className="ml-3 font-medium text-gray-600">Help</span>}
        </Button>
      </div>
    </div>
  );
};
