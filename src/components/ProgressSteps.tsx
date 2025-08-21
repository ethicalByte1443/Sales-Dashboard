import { CheckCircle, Upload, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    title: "1. Certification",
    description: "Upload qualification information",
    icon: CheckCircle,
    bgColor: "bg-pink-500",
    shadow: "shadow-[0_4px_20px_rgba(236,72,153,0.4)]", // pink shadow
    iconColor: "text-white",
    buttonColor: "bg-white text-pink-500 hover:bg-gray-100",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "2. Upload a product",
    description: "Fill in product information",
    icon: Upload,
    bgColor: "bg-blue-500",
    shadow: "shadow-[0_4px_20px_rgba(59,130,246,0.4)]", // blue shadow
    iconColor: "text-white",
    buttonColor: "bg-white text-blue-500 hover:bg-gray-100",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "3. Open for sale",
    description: "Choose to open any sales channel",
    icon: ShoppingBag,
    bgColor: "bg-purple-500",
    shadow: "shadow-[0_4px_20px_rgba(168,85,247,0.4)]", // purple shadow
    iconColor: "text-white",
    buttonColor: "bg-white text-purple-500 hover:bg-gray-100",
    textColor: "text-white",
  },
];

export function ProgressSteps() {
  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow">
      {/* Flex row: Left text + Right steps */}
      <div className="flex justify-between items-center">
        
        {/* Left Side Text */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500 mb-1">
            Well begun is half done
          </h2>
          <p className="text-sm text-gray-500">
            Complete the following steps to sell
          </p>
        </div>

        {/* Right Side Steps */}
        <div className="grid grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${step.bgColor} ${step.shadow} rounded-xl p-6 h-38 flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between">
                <h3 className={`font-medium ${step.textColor}`}>
                  {step.title}
                </h3>
                <Button
                  size="sm"
                  className={`${step.buttonColor} px-4 py-1 h-7 text-xs`}
                >
                  GO
                </Button>
              </div>
              <p className={`text-sm ${step.textColor}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
