import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
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

// Mock data for table & charts
const salesData = [
  { id: 1, month: "Jan", sales: 4000, category: "Electronics" },
  { id: 2, month: "Feb", sales: 3000, category: "Clothing" },
  { id: 3, month: "Mar", sales: 5000, category: "Electronics" },
  { id: 4, month: "Apr", sales: 2000, category: "Furniture" },
  { id: 5, month: "May", sales: 6000, category: "Clothing" },
  { id: 6, month: "Jun", sales: 7000, category: "Electronics" },
];

const pieData = [
  { name: "Electronics", value: 45 },
  { name: "Clothing", value: 30 },
  { name: "Furniture", value: 25 },
];

const COLORS = ["#ec4899", "#3b82f6", "#10b981"]; // Pink, Blue, Green

export function Data() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <Navigation />

      <main className="ml-48 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-pink-500">Data Insights</h2>
          </div>

          {/* Grid Layout: Table + Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Table */}
            <div className="col-span-2 bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Sales Data
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-pink-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        ID
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        Month
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        Sales
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {salesData.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-gray-700">{row.id}</td>
                        <td className="px-4 py-2 text-gray-700">{row.month}</td>
                        <td className="px-4 py-2 font-semibold text-pink-500">
                          ${row.sales}
                        </td>
                        <td className="px-4 py-2 text-gray-500">
                          {row.category}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

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
      </main>
    </div>
  );
}
