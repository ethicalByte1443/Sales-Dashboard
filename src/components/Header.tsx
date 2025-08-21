import { Bell, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="h-16  bg-blue-50 border-b border-gray-100 px-6 flex items-center justify-between">
      {/* Logo and Shop Name */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded transform rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45"></div>
          </div>
          <span className="text-lg font-medium text-gray-900">xiaodianpu</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-gray-900 font-medium">Aoki's shop</span>
          <span className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded">Basic</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
          Notice
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
          Help center
        </Button>
        <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">A</AvatarFallback>
          </Avatar>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
}