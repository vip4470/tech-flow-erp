
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Plus, 
  Calendar, 
  Users, 
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

export const ProjectModule = () => {
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of the company website with new branding",
      progress: 85,
      status: "In Progress",
      priority: "High",
      deadline: "Dec 15, 2024",
      teamSize: 5,
      manager: "Sarah Johnson",
      tasks: { completed: 17, total: 20 }
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Native mobile app for iOS and Android platforms",
      progress: 60,
      status: "In Progress",
      priority: "Medium",
      deadline: "Jan 20, 2025",
      teamSize: 8,
      manager: "Mike Chen",
      tasks: { completed: 12, total: 20 }
    },
    {
      id: 3,
      name: "Database Migration",
      description: "Migrate legacy database to cloud infrastructure",
      progress: 95,
      status: "Nearly Complete",
      priority: "High",
      deadline: "Dec 10, 2024",
      teamSize: 3,
      manager: "Alex Rodriguez",
      tasks: { completed: 19, total: 20 }
    },
    {
      id: 4,
      name: "Marketing Campaign",
      description: "Q1 2025 product launch marketing campaign",
      progress: 40,
      status: "Behind Schedule",
      priority: "Medium",
      deadline: "Dec 30, 2024",
      teamSize: 6,
      manager: "Emily Davis",
      tasks: { completed: 8, total: 20 }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Nearly Complete": return "bg-green-100 text-green-800";
      case "Behind Schedule": return "bg-red-100 text-red-800";
      case "Completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Project Dashboard</h2>
          <p className="text-gray-600">Track and manage all your projects</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-sm text-gray-600">Active Projects</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 rounded">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">8</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-red-100 rounded">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Behind Schedule</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-purple-100 rounded">
                <Users className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">34</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                </div>
                <div className="flex space-x-2">
                  <Badge className={getPriorityColor(project.priority)}>
                    {project.priority}
                  </Badge>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{project.deadline}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{project.teamSize} members</span>
                </div>
              </div>

              {/* Manager and Tasks */}
              <div className="flex justify-between items-center pt-2 border-t">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs bg-orange-100 text-orange-600">
                      {project.manager.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-600">{project.manager}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 inline mr-1" />
                  {project.tasks.completed}/{project.tasks.total} tasks
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
