import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Plus, 
  Phone, 
  Mail, 
  MapPin,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";

export const CRMModule = () => {
  const { hasPermission } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  const leads = [
    {
      id: 1,
      name: "TechStart Solutions",
      contact: "Sarah Wilson",
      email: "sarah@techstart.com",
      phone: "+1 (555) 123-4567",
      status: "Hot",
      value: "$45,000",
      location: "San Francisco, CA",
      lastContact: "2 days ago"
    },
    {
      id: 2,
      name: "Digital Marketing Pro",
      contact: "Mike Johnson",
      email: "mike@digitalmarketing.com",
      phone: "+1 (555) 987-6543",
      status: "Warm",
      value: "$32,000",
      location: "New York, NY",
      lastContact: "5 days ago"
    },
    {
      id: 3,
      name: "Cloud Computing Corp",
      contact: "Lisa Chen",
      email: "lisa@cloudcorp.com",
      phone: "+1 (555) 456-7890",
      status: "Cold",
      value: "$78,000",
      location: "Seattle, WA",
      lastContact: "1 week ago"
    },
    {
      id: 4,
      name: "Mobile App Startup",
      contact: "David Brown",
      email: "david@mobileapp.com",
      phone: "+1 (555) 234-5678",
      status: "Hot",
      value: "$25,000",
      location: "Austin, TX",
      lastContact: "1 day ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hot": return "bg-red-100 text-red-800";
      case "Warm": return "bg-orange-100 text-orange-800";
      case "Cold": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleLeadAction = (action: string, leadId: number) => {
    console.log(`${action} lead ${leadId}`);
    // Implement lead action functionality
  };

  const handleAddLead = () => {
    console.log("Adding new lead");
    // Implement add lead functionality
  };

  const handleFilter = () => {
    console.log("Opening filter options");
    // Implement filter functionality
  };

  if (!hasPermission("crm", "read")) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Access denied. CRM permissions required.</p>
      </div>
    );
  }

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" onClick={handleFilter}>
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        {hasPermission("crm", "write") && (
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleAddLead}>
            <Plus className="h-4 w-4 mr-2" />
            Add New Lead
          </Button>
        )}
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">127</div>
            <div className="text-sm text-gray-600">Total Leads</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">23</div>
            <div className="text-sm text-gray-600">Hot Leads</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-600">45</div>
            <div className="text-sm text-gray-600">Warm Leads</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">$180K</div>
            <div className="text-sm text-gray-600">Pipeline Value</div>
          </CardContent>
        </Card>
      </div>

      {/* Leads List */}
      <Card>
        <CardHeader>
          <CardTitle>Active Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <div key={lead.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {lead.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                        <Badge className={getStatusColor(lead.status)}>
                          {lead.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{lead.contact}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {lead.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          {lead.phone}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {lead.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-lg font-semibold text-green-600">{lead.value}</div>
                    <div className="text-sm text-gray-500">Last contact: {lead.lastContact}</div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleLeadAction("view", lead.id)}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        {hasPermission("crm", "write") && (
                          <DropdownMenuItem onClick={() => handleLeadAction("edit", lead.id)}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Lead
                          </DropdownMenuItem>
                        )}
                        {hasPermission("crm", "delete") && (
                          <DropdownMenuItem 
                            onClick={() => handleLeadAction("delete", lead.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Lead
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
