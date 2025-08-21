import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

const commodities = [
  { id: 1, name: "Wheat", category: "Grains", price: "$250/ton", availability: "High", trend: "up" },
  { id: 2, name: "Rice", category: "Grains", price: "$300/ton", availability: "Medium", trend: "down" },
  { id: 3, name: "Crude Oil", category: "Energy", price: "$78/barrel", availability: "Low", trend: "up" },
  { id: 4, name: "Gold", category: "Metals", price: "$1900/oz", availability: "High", trend: "down" },
];

export function Commodity() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <Navigation />

      <main className="ml-48 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-pink-500">Commodity Dashboard</h2>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-pink-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Availability</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {commodities.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-800 font-medium">{item.name}</td>
                    <td className="px-6 py-4 text-gray-500">{item.category}</td>
                    <td className="px-6 py-4 text-gray-700">{item.price}</td>
                    <td
                      className={`px-6 py-4 font-medium ${
                        item.availability === "High"
                          ? "text-green-500"
                          : item.availability === "Medium"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.availability}
                    </td>
                    <td
                      className={`px-6 py-4 font-bold ${
                        item.trend === "up" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.trend === "up" ? "↑ Rising" : "↓ Falling"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
