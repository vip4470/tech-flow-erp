
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ROLES, Role, Permission } from "@/types/roles";
import { useAuth } from "@/hooks/useAuth";
import { Shield, Users, Settings } from "lucide-react";

export const RolePermissionManager = () => {
  const { user, hasPermission } = useAuth();
  const [selectedRole, setSelectedRole] = useState<Role>(ROLES[0]);

  if (!hasPermission("settings", "read")) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Access denied. Admin privileges required.</p>
      </div>
    );
  }

  const modules = ["dashboard", "crm", "hr", "projects", "sales"];
  const actions = ["read", "write", "delete"];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Shield className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold">Role Permission Manager</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Roles List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Roles</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {ROLES.map((role) => (
              <Button
                key={role.id}
                variant={selectedRole.id === role.id ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setSelectedRole(role)}
              >
                <div className="text-left">
                  <div className="font-medium">{role.name}</div>
                  <div className="text-sm text-gray-500">{role.description}</div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Permission Matrix */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Permissions for {selectedRole.name}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {modules.map((module) => {
                const permission = selectedRole.permissions.find(p => p.module === module);
                return (
                  <div key={module} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium capitalize">{module}</h4>
                      <Badge variant={permission ? "default" : "secondary"}>
                        {permission ? "Enabled" : "No Access"}
                      </Badge>
                    </div>
                    
                    {permission && (
                      <div className="grid grid-cols-3 gap-4">
                        {actions.map((action) => (
                          <div key={action} className="flex items-center space-x-2">
                            <Switch
                              id={`${module}-${action}`}
                              checked={permission.actions.includes(action)}
                              disabled={!hasPermission("settings", "write")}
                            />
                            <Label htmlFor={`${module}-${action}`} className="capitalize">
                              {action}
                            </Label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
