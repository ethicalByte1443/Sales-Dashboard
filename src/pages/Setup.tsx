import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock data for site setup modules
const modulesData = [
  { id: 1, module: "Authentication", status: "Completed", usage: 95 },
  { id: 2, module: "Payment Gateway", status: "In Progress", usage: 60 },
  { id: 3, module: "Notifications", status: "Pending", usage: 20 },
  { id: 4, module: "Analytics", status: "Completed", usage: 85 },
  { id: 5, module: "User Profiles", status: "In Progress", usage: 50 },
];

const COLORS = {
  Completed: "text-green-500",
  "In Progress": "text-yellow-500",
  Pending: "text-red-500",
};

export function Setup() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-600">Site Setup Overview</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table */}
          <div className="col-span-2 bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Modules Status</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Module</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Usage (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {modulesData.map((mod) => (
                    <tr key={mod.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-gray-700">{mod.id}</td>
                      <td className="px-4 py-2 text-gray-700">{mod.module}</td>
                      <td className={`px-4 py-2 font-medium ${COLORS[mod.status]}`}>{mod.status}</td>
                      <td className="px-4 py-2 font-semibold text-indigo-600">{mod.usage}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Module Usage</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={modulesData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="module" type="category" stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="usage" fill="#6366f1" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
