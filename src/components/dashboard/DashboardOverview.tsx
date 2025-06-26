
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  DollarSign, 
  FolderOpen, 
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export const DashboardOverview = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$124,562",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Leads",
      value: "127",
      change: "+8.2%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Projects",
      value: "23",
      change: "+5.1%",
      icon: FolderOpen,
      color: "text-orange-600"
    },
    {
      title: "Team Members",
      value: "45",
      change: "+2.3%",
      icon: Users,
      color: "text-purple-600"
    }
  ];

  const recentActivities = [
    { title: "New lead added: Tech Solutions Inc", time: "2 hours ago", type: "lead" },
    { title: "Project 'Website Redesign' completed", time: "4 hours ago", type: "project" },
    { title: "Employee Sarah Johnson joined", time: "1 day ago", type: "hr" },
    { title: "Deal closed: $15,000 with ClientCorp", time: "2 days ago", type: "sale" }
  ];

  const projects = [
    { name: "Website Redesign", progress: 85, deadline: "Dec 15", status: "On Track" },
    { name: "Mobile App Development", progress: 60, deadline: "Jan 20", status: "In Progress" },
    { name: "Database Migration", progress: 95, deadline: "Dec 10", status: "Nearly Complete" },
    { name: "Marketing Campaign", progress: 40, deadline: "Dec 30", status: "Behind" }
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-green-600 font-medium">{metric.change}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${metric.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-gray-600" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0">
                  {activity.type === "lead" && <Users className="h-4 w-4 text-blue-600 mt-1" />}
                  {activity.type === "project" && <FolderOpen className="h-4 w-4 text-orange-600 mt-1" />}
                  {activity.type === "hr" && <Users className="h-4 w-4 text-purple-600 mt-1" />}
                  {activity.type === "sale" && <DollarSign className="h-4 w-4 text-green-600 mt-1" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Activities
            </Button>
          </CardContent>
        </Card>

        {/* Project Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FolderOpen className="h-5 w-5 mr-2 text-gray-600" />
              Project Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">{project.name}</h4>
                  <div className="flex items-center space-x-2">
                    {project.status === "On Track" && <CheckCircle className="h-4 w-4 text-green-500" />}
                    {project.status === "Behind" && <AlertCircle className="h-4 w-4 text-red-500" />}
                    {project.status === "In Progress" && <Clock className="h-4 w-4 text-blue-500" />}
                    {project.status === "Nearly Complete" && <CheckCircle className="h-4 w-4 text-green-500" />}
                    <span className="text-xs text-gray-500">{project.deadline}</span>
                  </div>
                </div>
                <Progress value={project.progress} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{project.status}</span>
                  <span>{project.progress}%</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Projects
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
              <Users className="h-6 w-6" />
              <span>Add Lead</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
              <Users className="h-6 w-6" />
              <span>New Employee</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-orange-600 hover:bg-orange-700">
              <FolderOpen className="h-6 w-6" />
              <span>Create Project</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-green-600 hover:bg-green-700">
              <TrendingUp className="h-6 w-6" />
              <span>Record Sale</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
