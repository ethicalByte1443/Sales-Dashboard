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

// Mock data for assets
const assetsData = [
  { id: 1, name: "Laptop", value: 1200, category: "Electronics" },
  { id: 2, name: "Office Chair", value: 300, category: "Furniture" },
  { id: 3, name: "Projector", value: 800, category: "Electronics" },
  { id: 4, name: "Desk", value: 500, category: "Furniture" },
  { id: 5, name: "Printer", value: 400, category: "Electronics" },
];

const pieData = [
  { name: "Electronics", value: 3 },
  { name: "Furniture", value: 2 },
];

const COLORS = ["#ec4899", "#3b82f6"]; // Pink, Blue

export function Assets() {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-pink-500">Asset Management</h2>
        </div>

        {/* Grid Layout: Table + Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table */}
          <div className="col-span-2 bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Assets List
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-pink-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      ID
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Name
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Value ($)
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Category
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {assetsData.map((asset) => (
                    <tr key={asset.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-gray-700">{asset.id}</td>
                      <td className="px-4 py-2 text-gray-700">{asset.name}</td>
                      <td className="px-4 py-2 font-semibold text-pink-500">{asset.value}</td>
                      <td className="px-4 py-2 text-gray-500">{asset.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Line Chart */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Asset Value Trend
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={assetsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
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
              Asset Category Distribution
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
    </div>
  );
}
