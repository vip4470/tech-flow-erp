
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { CRMModule } from "@/components/modules/CRMModule";
import { HRModule } from "@/components/modules/HRModule";
import { ProjectModule } from "@/components/modules/ProjectModule";
import { SalesModule } from "@/components/modules/SalesModule";

const Index = () => {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderActiveModule = () => {
    switch (activeModule) {
      case "crm":
        return <CRMModule />;
      case "hr":
        return <HRModule />;
      case "projects":
        return <ProjectModule />;
      case "sales":
        return <SalesModule />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeModule={activeModule} 
        setActiveModule={setActiveModule}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex-1 flex flex-col">
        <Header 
          activeModule={activeModule}
          onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="flex-1 overflow-auto p-6">
          {renderActiveModule()}
        </main>
      </div>
    </div>
  );
};

export default Index;
