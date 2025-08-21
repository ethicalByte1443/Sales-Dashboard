import { 
  DollarSign, 
  FileText, 
  Users, 
  Clock, 
  Eye, 
  Heart, 
  TrendingUp, 
  Package, 
  Radio, 
  Smartphone, 
  Share2, 
  Ticket, 
  Hammer, 
  Megaphone, 
  Gift, 
  PiggyBank 
} from "lucide-react";

const statsData = [
  {
    title: "Payment amount",
    value: "8,992",
    subtitle: "Yesterday 8638",
    icon: DollarSign,
    bgColor: "bg-pink-100",
    iconBg: "bg-pink-500",
  },
  {
    title: "Payment order", 
    value: "793",
    subtitle: "Yesterday 753",
    icon: FileText,
    bgColor: "bg-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    title: "Paying customer",
    value: "280", 
    subtitle: "Yesterday 320",
    icon: Users,
    bgColor: "bg-purple-100", 
    iconBg: "bg-purple-500",
  },
  {
    title: "Pending orders",
    value: "480",
    subtitle: "Yesterday 470", 
    icon: Clock,
    bgColor: "bg-green-100",
    iconBg: "bg-green-500",
  },
  {
    title: "Live stream viewers",
    value: "23,466",
    subtitle: "Yesterday 22089",
    icon: Eye,
    bgColor: "bg-gray-50",
    iconBg: "bg-gray-400",
  },
  {
    title: "New attention", 
    value: "4,890",
    subtitle: "Yesterday 3890",
    icon: Heart,
    bgColor: "bg-gray-50", 
    iconBg: "bg-gray-400",
  },
  {
    title: "Cumulative attention",
    value: "135,743",
    subtitle: "Yesterday 130493",
    icon: TrendingUp, 
    bgColor: "bg-gray-50",
    iconBg: "bg-gray-400",
  },
  {
    title: "Number of orders",
    value: "5,249",
    subtitle: "Yesterday 4887",
    icon: Package,
    bgColor: "bg-gray-50", 
    iconBg: "bg-gray-400",
  },
];

const operations = [
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

export default function DashboardSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Data Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Today's data</h2>
          <button className="text-sm text-red-500 hover:text-red-600">More</button>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-lg p-4 relative`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <p className="text-xs text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
                </div>
                <div className={`w-10 h-10 ${stat.iconBg} rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operations Section */}
      <div>
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
    </div>
  );
}
