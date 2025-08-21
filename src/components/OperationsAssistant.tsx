import { 
  Radio, 
  Smartphone, 
  Share2, 
  Ticket, 
  Hammer, 
  Megaphone, 
  Gift, 
  PiggyBank 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const operations = [
  {
    id: 1,
    title: "Small Telecast Live",
    description: "Start live streaming to engage customers",
    icon: Radio,
    variant: "red" as const,
  },
  {
    id: 2,
    title: "Mini Program Store",
    description: "Create a mini app store experience",
    icon: Smartphone,
    variant: "blue" as const,
  },
  {
    id: 3,
    title: "Distribution Market",
    description: "Expand through distribution networks",
    icon: Share2,
    variant: "green" as const,
  },
  {
    id: 4,
    title: "Coupon",
    description: "Create and manage discount coupons",
    icon: Ticket,
    variant: "purple" as const,
  },
  {
    id: 5,
    title: "Store Construction",
    description: "Build and customize your storefront",
    icon: Hammer,
    variant: "pink" as const,
  },
  {
    id: 6,
    title: "Promoting Ads",
    description: "Launch targeted advertising campaigns",
    icon: Megaphone,
    variant: "orange" as const,
  },
  {
    id: 7,
    title: "Promotion Rebate",
    description: "Set up cashback and rebate programs",
    icon: Gift,
    variant: "blue" as const,
  },
  {
    id: 8,
    title: "Asset Management",
    description: "Manage your digital and physical assets",
    icon: PiggyBank,
    variant: "green" as const,
  },
];

export function OperationsAssistant() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-foreground mb-4">Operations Assistant</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {operations.map((operation) => (
          <Card key={operation.id} className="transition-all hover:shadow-lg cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className={`h-16 w-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                operation.variant === "red" ? "bg-status-red text-status-red-foreground" :
                operation.variant === "blue" ? "bg-status-blue text-status-blue-foreground" :
                operation.variant === "green" ? "bg-status-green text-status-green-foreground" :
                operation.variant === "purple" ? "bg-status-purple text-status-purple-foreground" :
                operation.variant === "pink" ? "bg-status-pink text-status-pink-foreground" :
                "bg-status-orange text-status-orange-foreground"
              }`}>
                <operation.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {operation.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{operation.description}</p>
              <Button variant="outline" size="sm" className="w-full">
                Configure
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}