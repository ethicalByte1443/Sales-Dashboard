import { CheckCircle, Upload, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    id: 1,
    title: "Certification",
    description: "Complete your business verification",
    icon: CheckCircle,
    status: "completed" as const,
    variant: "green" as const,
  },
  {
    id: 2,
    title: "Upload a product",
    description: "Add your first product to the catalog",
    icon: Upload,
    status: "in-progress" as const,
    variant: "blue" as const,
  },
  {
    id: 3,
    title: "Open for sale",
    description: "Start selling and accept orders",
    icon: ShoppingBag,
    status: "pending" as const,
    variant: "purple" as const,
  },
];

const statusConfig = {
  completed: { label: "Completed", className: "bg-status-green text-status-green-foreground" },
  "in-progress": { label: "In Progress", className: "bg-status-blue text-status-blue-foreground" },
  pending: { label: "Pending", className: "bg-status-purple text-status-purple-foreground" },
};

export function StatusSteps() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-foreground mb-4">Getting Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <Card key={step.id} className="transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                  step.variant === "green" ? "bg-status-green text-status-green-foreground" :
                  step.variant === "blue" ? "bg-status-blue text-status-blue-foreground" :
                  "bg-status-purple text-status-purple-foreground"
                }`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <Badge className={statusConfig[step.status].className}>
                      {statusConfig[step.status].label}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={step.status === "completed"}
                  >
                    {step.status === "completed" ? "Done" : "Continue"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}