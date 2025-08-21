import { NavLink } from "react-router-dom";
import { 
  Home, 
  Radio, 
  Store, 
  TrendingUp, 
  ShoppingCart, 
  BarChart3, 
  Wallet, 
  Grid3X3, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Radio, label: "Live", href: "/live" },
  { icon: Store, label: "Shop", href: "/shop" },
  { icon: TrendingUp, label: "Commodity", href: "/commodity" },
  { icon: ShoppingCart, label: "Order", href: "/order" },
  { icon: BarChart3, label: "Data", href: "/data" },
  { icon: Wallet, label: "Assets", href: "/assets" },
  { icon: Grid3X3, label: "Application", href: "/application" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-card border-r border-border">
      <div className="flex h-full flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">MoneyWeaver</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 pb-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}