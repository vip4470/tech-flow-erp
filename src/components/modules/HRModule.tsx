
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Plus, 
  Users, 
  Calendar,
  Clock,
  Award
} from "lucide-react";

export const HRModule = () => {
  const employees = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Developer",
      department: "Engineering",
      email: "sarah.johnson@company.com",
      status: "Active",
      joinDate: "Jan 15, 2022",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Mike Chen",
      position: "Product Manager",
      department: "Product",
      email: "mike.chen@company.com",
      status: "Active",
      joinDate: "Mar 8, 2021",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Davis",
      position: "UI/UX Designer",
      department: "Design",
      email: "emily.davis@company.com",
      status: "On Leave",
      joinDate: "Jun 20, 2022",
      avatar: "ED"
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      position: "Marketing Specialist",
      department: "Marketing",
      email: "alex.rodriguez@company.com",
      status: "Active",
      joinDate: "Sep 12, 2023",
      avatar: "AR"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "On Leave": return "bg-yellow-100 text-yellow-800";
      case "Inactive": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search employees..." className="pl-10" />
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Employee
        </Button>
      </div>

      {/* HR Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-purple-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">45</div>
                <div className="text-sm text-gray-600">Total Employees</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">8</div>
                <div className="text-sm text-gray-600">On Leave</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-orange-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">New Hires</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Promotions</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Employee Directory */}
      <Card>
        <CardHeader>
          <CardTitle>Employee Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {employees.map((employee) => (
              <Card key={employee.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-purple-100 text-purple-600">
                        {employee.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                      <p className="text-sm text-gray-600">{employee.position}</p>
                      <p className="text-xs text-gray-500">{employee.department}</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between items-center">
                      <Badge className={getStatusColor(employee.status)}>
                        {employee.status}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        Joined {employee.joinDate}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{employee.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick HR Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Leave Management</h3>
            <p className="text-sm text-gray-600 mt-1">Manage employee leave requests</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Performance Review</h3>
            <p className="text-sm text-gray-600 mt-1">Conduct employee evaluations</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-900">Recruitment</h3>
            <p className="text-sm text-gray-600 mt-1">Manage hiring process</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
