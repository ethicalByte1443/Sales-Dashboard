import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Premium Hoodie", price: "$45", stock: "In Stock" },
  { id: 2, name: "Wireless Headphones", price: "$120", stock: "In Stock" },
  { id: 3, name: "Smartwatch", price: "$199", stock: "Low Stock" },
  { id: 4, name: "Desk Lamp", price: "$30", stock: "Out of Stock" },
];

export function Shop() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Title + Search */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-pink-500">Shop</h2>
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-500 mb-1">{product.price}</p>
            <p
              className={`text-sm mb-3 ${
                product.stock === "Out of Stock"
                  ? "text-red-500"
                  : product.stock === "Low Stock"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {product.stock}
            </p>
            <Button
              className="w-full bg-pink-500 text-white hover:bg-pink-600"
              disabled={product.stock === "Out of Stock"}
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
