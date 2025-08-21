import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

export function Live() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg p-8 text-center shadow">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Live Streaming
        </h1>
        <p className="text-gray-600 mb-6">
          Start your live streaming session
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium">
          Go Live
        </button>
      </div>
    </div>
  );
}
