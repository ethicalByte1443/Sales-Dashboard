import {
  BarChart,
  Bar,
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

// Mock project data
const projectsData = [
  { id: "P001", name: "Website Redesign", progress: 80, manager: "Alice", priority: "High" },
  { id: "P002", name: "Mobile App Launch", progress: 55, manager: "Bob", priority: "Medium" },
  { id: "P003", name: "Marketing Campaign", progress: 40, manager: "Charlie", priority: "Low" },
  { id: "P004", name: "Backend Optimization", progress: 90, manager: "Diana", priority: "High" },
  { id: "P005", name: "Customer Survey", progress: 30, manager: "Eve", priority: "Medium" },
];

// Pie chart for priority distribution
const priorityData = [
  { name: "High", value: 2 },
  { name: "Medium", value: 2 },
  { name: "Low", value: 1 },
];

const COLORS = ["#f43f5e", "#fbbf24", "#3b82f6"]; // Red, Yellow, Blue

export function Projects() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-600">Projects Overview</h2>
        </div>

        {/* Grid Layout: Table + Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table */}
          <div className="col-span-2 bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Active Projects
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      ID
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Project Name
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Progress (%)
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Manager
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Priority
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {projectsData.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-gray-700">{project.id}</td>
                      <td className="px-4 py-2 text-gray-700">{project.name}</td>
                      <td className="px-4 py-2 font-semibold text-green-600">{project.progress}%</td>
                      <td className="px-4 py-2 text-gray-500">{project.manager}</td>
                      <td
                        className={`px-4 py-2 font-medium ${
                          project.priority === "High" ? "text-red-500" :
                          project.priority === "Medium" ? "text-yellow-500" :
                          "text-blue-500"
                        }`}
                      >
                        {project.priority}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Project Progress
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={projectsData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="name" type="category" stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="progress" fill="#10b981" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Priority Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={priorityData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {priorityData.map((entry, index) => (
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
