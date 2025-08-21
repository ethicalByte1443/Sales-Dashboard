import { ProgressSteps } from "@/components/ProgressSteps";
import DashboardSection from "@/components/DataCardsandoperationsGrid";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Reusable mock data
const salesData = [
  { id: 1, month: "Jan", sales: 4000 },
  { id: 2, month: "Feb", sales: 3000 },
  { id: 3, month: "Mar", sales: 5000 },
  { id: 4, month: "Apr", sales: 2000 },
  { id: 5, month: "May", sales: 6000 },
  { id: 6, month: "Jun", sales: 7000 },
];

const pieData = [
  { name: "Electronics", value: 45 },
  { name: "Clothing", value: 30 },
  { name: "Furniture", value: 25 },
];

const COLORS = ["#ec4899", "#3b82f6", "#10b981"]; // Pink, Blue, Green

export function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Existing Sections */}
      <ProgressSteps />
      <DashboardSection />

      {/* New Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Monthly Sales Trend
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#ec4899"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Category Distribution
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
