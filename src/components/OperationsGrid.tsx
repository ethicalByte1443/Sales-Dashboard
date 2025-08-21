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

const operations = [
  // Top row
  {
    title: "Small telecast live",
    description: "Live sales in WeChat",
    icon: Radio,
    iconBg: "bg-pink-500",
  },
  {
    title: "Mini Program Store", 
    description: "WeChat Mini Program Store",
    icon: Smartphone,
    iconBg: "bg-green-500", 
  },
  {
    title: "Distribution market",
    description: "One-click promotion",
    icon: Share2,
    iconBg: "bg-blue-500",
  },
  {
    title: "Coupon",
    description: "Store marketing essentials", 
    icon: Ticket,
    iconBg: "bg-red-500",
  },
  // Bottom row
  {
    title: "Store construction",
    description: "Can be customized",
    icon: Hammer, 
    iconBg: "bg-blue-500",
  },
  {
    title: "Promoting ads",
    description: "WeChat billion-level exposure",
    icon: Megaphone,
    iconBg: "bg-red-500",
  },
  {
    title: "Promotion rebate", 
    description: "Help you sell goods",
    icon: Gift,
    iconBg: "bg-pink-500",
  },
  {
    title: "Asset Management",
    description: "Income and withdrawal",
    icon: PiggyBank,
    iconBg: "bg-green-500",
  },
];

export function OperationsGrid() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Operations Assistant</h2>
        <button className="text-sm text-red-500 hover:text-red-600">More</button>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {operations.map((operation, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-sm transition-shadow">
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 ${operation.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <operation.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 mb-1">{operation.title}</h3>
                <p className="text-xs text-gray-500">{operation.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}