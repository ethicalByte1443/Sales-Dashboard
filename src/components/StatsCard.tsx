import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  variant?: "red" | "blue" | "green" | "purple" | "pink" | "orange";
}

const variantClasses = {
  red: "bg-status-red text-status-red-foreground",
  blue: "bg-status-blue text-status-blue-foreground",
  green: "bg-status-green text-status-green-foreground",
  purple: "bg-status-purple text-status-purple-foreground",
  pink: "bg-status-pink text-status-pink-foreground",
  orange: "bg-status-orange text-status-orange-foreground",
};

export function StatsCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  variant = "blue" 
}: StatsCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {change && (
              <p className="text-sm text-muted-foreground mt-1">{change}</p>
            )}
          </div>
          <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center", variantClasses[variant])}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}