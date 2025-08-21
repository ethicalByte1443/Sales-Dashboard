import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Live } from "./pages/Live";
import NotFound from "./pages/NotFound";
import { Shop } from "./pages/Shop";
import { Commodity } from "./pages/Commodity";
import { Order } from "./pages/Order";
import { Data } from "./pages/Data";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/commodity" element={<Commodity />} />
          <Route path="/order" element={<Order />} />
          <Route path="/data" element={<Data />} />
          <Route path="/assets" element={<div>Assets Page</div>} />
          <Route path="/application" element={<div>Application Page</div>} />
          <Route path="/setup" element={<div>Setup Page</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
