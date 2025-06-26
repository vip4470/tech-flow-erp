
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
  ChevronLeft
} from "lucide-react";

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home, color: "text-blue-600" },
  { id: "crm", label: "CRM", icon: Users, color: "text-green-600" },
  { id: "hr", label: "HR Management", icon: UserCheck, color: "text-purple-600" },
  { id: "projects", label: "Projects", icon: FolderOpen, color: "text-orange-600" },
  { id: "sales", label: "Sales", icon: TrendingUp, color: "text-red-600" },
];

export const Sidebar = ({ activeModule, setActiveModule, isOpen, onToggle }: SidebarProps) => {
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
            <span className="font-bold text-gray-800">TechCorp ERP</span>
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
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start hover:bg-gray-100 transition-colors",
                isActive && "bg-blue-50 border-r-2 border-blue-600",
                !isOpen && "justify-center px-2"
              )}
              onClick={() => setActiveModule(item.id)}
            >
              <IconComponent className={cn("h-5 w-5", item.color, !isOpen && "mx-auto")} />
              {isOpen && <span className="ml-3 font-medium">{item.label}</span>}
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-gray-200 space-y-1">
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
