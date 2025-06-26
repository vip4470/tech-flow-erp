
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  TrendingUp, 
  DollarSign,
  Target,
  Award,
  Calendar
} from "lucide-react";

export const SalesModule = () => {
  const deals = [
    {
      id: 1,
      company: "TechStart Solutions",
      value: 45000,
      stage: "Proposal",
      probability: 75,
      closeDate: "Dec 20, 2024",
      contact: "Sarah Wilson",
      source: "Referral"
    },
    {
      id: 2,
      company: "Digital Marketing Pro",
      value: 32000,
      stage: "Negotiation",
      probability: 60,
      closeDate: "Jan 15, 2025",
      contact: "Mike Johnson",
      source: "Website"
    },
    {
      id: 3,
      company: "Cloud Computing Corp",
      value: 78000,
      stage: "Qualification",
      probability: 40,
      closeDate: "Feb 10, 2025",
      contact: "Lisa Chen",
      source: "Cold Call"
    },
    {
      id: 4,
      company: "Mobile App Startup",
      value: 25000,
      stage: "Closed Won",
      probability: 100,
      closeDate: "Nov 30, 2024",
      contact: "David Brown",
      source: "LinkedIn"
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Qualification": return "bg-blue-100 text-blue-800";
      case "Proposal": return "bg-orange-100 text-orange-800";
      case "Negotiation": return "bg-yellow-100 text-yellow-800";
      case "Closed Won": return "bg-green-100 text-green-800";
      case "Closed Lost": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const pipeline = [
    { stage: "Qualification", count: 15, value: 180000 },
    { stage: "Proposal", count: 8, value: 120000 },
    { stage: "Negotiation", count: 5, value: 85000 },
    { stage: "Closed Won", count: 12, value: 240000 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sales Pipeline</h2>
          <p className="text-gray-600">Track and manage your sales opportunities</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          New Deal
        </Button>
      </div>

      {/* Sales Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 rounded">
                <DollarSign className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">$625K</div>
                <div className="text-sm text-gray-600">Pipeline Value</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded">
                <Target className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">40</div>
                <div className="text-sm text-gray-600">Active Deals</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-orange-100 rounded">
                <TrendingUp className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">68%</div>
                <div className="text-sm text-gray-600">Win Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-purple-100 rounded">
                <Award className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">$240K</div>
                <div className="text-sm text-gray-600">Closed Won</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pipeline Overview */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Pipeline Stages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pipeline.map((stage, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{stage.stage}</span>
                  <span className="text-gray-600">{stage.count} deals</span>
                </div>
                <div className="text-lg font-bold text-green-600">
                  ${stage.value.toLocaleString()}
                </div>
                <Progress value={(stage.count / 15) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Active Deals */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deals.map((deal) => (
                <div key={deal.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{deal.company}</h3>
                      <p className="text-sm text-gray-600">{deal.contact}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        ${deal.value.toLocaleString()}
                      </div>
                      <Badge className={getStageColor(deal.stage)}>
                        {deal.stage}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Close Probability</span>
                      <span>{deal.probability}%</span>
                    </div>
                    <Progress value={deal.probability} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {deal.closeDate}
                    </div>
                    <span>Source: {deal.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
