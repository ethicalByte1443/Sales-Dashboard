import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Clock, 
  Eye, 
  Heart, 
  TrendingUp, 
  Package 
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { StatsCard } from "@/components/StatsCard";
import { StatusSteps } from "@/components/StatusSteps";
import { DataVisualization } from "@/components/DataVisualization";
import { OperationsAssistant } from "@/components/OperationsAssistant";

const statsData = [
  {
    title: "Payment Amount",
    value: "¥12,846",
    change: "+12.3% from last month",
    icon: DollarSign,
    variant: "green" as const,
  },
  {
    title: "Orders",
    value: "1,248",
    change: "+8.2% from last month",
    icon: ShoppingCart,
    variant: "blue" as const,
  },
  {
    title: "Paying Customers",
    value: "892",
    change: "+15.1% from last month",
    icon: Users,
    variant: "purple" as const,
  },
  {
    title: "Pending Orders",
    value: "43",
    change: "-2.4% from last month",
    icon: Clock,
    variant: "orange" as const,
  },
  {
    title: "Live Viewers",
    value: "2,146",
    change: "+25.7% from last hour",
    icon: Eye,
    variant: "red" as const,
  },
  {
    title: "New Attention",
    value: "156",
    change: "+18.9% from yesterday",
    icon: Heart,
    variant: "pink" as const,
  },
  {
    title: "Cumulative Attention",
    value: "8,492",
    change: "+5.2% this week",
    icon: TrendingUp,
    variant: "green" as const,
  },
  {
    title: "Number of Products",
    value: "324",
    change: "+3 new products",
    icon: Package,
    variant: "blue" as const,
  },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Sidebar />
      <Navbar />
      
      <main className="ml-64 pt-16">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Welcome back, Shop Owner!
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your store today.
            </p>
          </div>

          <StatusSteps />

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Today's Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <StatsCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={stat.icon}
                  variant={stat.variant}
                />
              ))}
            </div>
          </div>

          <DataVisualization />
          <OperationsAssistant />
        </div>
      </main>
    </div>
  );
}