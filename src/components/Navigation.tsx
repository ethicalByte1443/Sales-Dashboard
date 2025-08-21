import { NavLink } from "react-router-dom";
import { 
  Home, 
  Radio, 
  Store, 
  Package, 
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
  { icon: Package, label: "Commodity", href: "/commodity" },
  { icon: ShoppingCart, label: "Order", href: "/order" },
  { icon: BarChart3, label: "Data", href: "/data" },
  { icon: Wallet, label: "Assets", href: "/assets" },
  { icon: Grid3X3, label: "Application", href: "/application" },
  { icon: Settings, label: "Set up", href: "/setup" },
];

export function Navigation() {
  return (
    <aside className="w-48 bg-white-50 border-r border-gray-100 h-screen fixed left-0 top-16">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-red-50 text-red-600 border-r-2 border-red-500"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )
            }
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}