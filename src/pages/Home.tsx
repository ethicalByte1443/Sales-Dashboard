import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { ProgressSteps } from "@/components/ProgressSteps";
import { DataCards } from "@/components/DataCards";
import { OperationsGrid } from "@/components/OperationsGrid";
import DashboardSection from "@/components/DataCardsandoperationsGrid";
export function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <Navigation />
      
      <main className="ml-48 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          <ProgressSteps />
          <DashboardSection/>
          {/* <DataCards />
          <OperationsGrid /> */}
        </div>
      </main>
    </div>
  );
}