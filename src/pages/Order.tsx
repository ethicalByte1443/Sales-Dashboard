import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

const orders = [
  { id: "ORD001", customer: "Alice Johnson", items: 3, amount: "$120", status: "Pending", date: "2025-08-15" },
  { id: "ORD002", customer: "Bob Smith", items: 5, amount: "$320", status: "Shipped", date: "2025-08-16" },
  { id: "ORD003", customer: "Charlie Davis", items: 2, amount: "$75", status: "Delivered", date: "2025-08-17" },
  { id: "ORD004", customer: "Diana Ross", items: 1, amount: "$50", status: "Cancelled", date: "2025-08-18" },
];

export function Order() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <Navigation />

      <main className="ml-48 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-pink-500">Order Management</h2>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-pink-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Items</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-800 font-medium">{order.id}</td>
                    <td className="px-6 py-4 text-gray-500">{order.customer}</td>
                    <td className="px-6 py-4 text-gray-500">{order.items}</td>
                    <td className="px-6 py-4 text-gray-700">{order.amount}</td>
                    <td
                      className={`px-6 py-4 font-medium 
                        ${order.status === "Pending" ? "text-yellow-500" : ""} 
                        ${order.status === "Shipped" ? "text-blue-500" : ""} 
                        ${order.status === "Delivered" ? "text-green-500" : ""} 
                        ${order.status === "Cancelled" ? "text-red-500" : ""}`}
                    >
                      {order.status}
                    </td>
                    <td className="px-6 py-4 text-gray-500">{order.date}</td>
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
