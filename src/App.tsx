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
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Assets } from "./pages/Assets";
import { Projects } from "./pages/Projects";
import { Setup } from "./pages/Setup";

const queryClient = new QueryClient();

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-blue-50">
    {/* Fixed Header */}
    <Header />

    {/* Fixed Navigation */}
    <Navigation />

    {/* Page Content */}
    <main className="pt-16 pl-48 p-6">
      {children}
    </main>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout>
                <Home />
              </AppLayout>
            }
          />
          <Route
            path="/live"
            element={
              <AppLayout>
                <Live />
              </AppLayout>
            }
          />
          <Route
            path="/shop"
            element={
              <AppLayout>
                <Shop />
              </AppLayout>
            }
          />
          <Route
            path="/commodity"
            element={
              <AppLayout>
                <Commodity />
              </AppLayout>
            }
          />
          <Route
            path="/order"
            element={
              <AppLayout>
                <Order />
              </AppLayout>
            }
          />
          <Route
            path="/data"
            element={
              <AppLayout>
                <Data />
              </AppLayout>
            }
          />
          <Route
            path="/assets"
            element={
              <AppLayout>
                <Assets/>
              </AppLayout>
            }
          />
          <Route
            path="/application"
            element={
              <AppLayout>
                <Projects />
              </AppLayout>
            }
          />
          <Route
            path="/setup"
            element={
              <AppLayout>
                <Setup />
              </AppLayout>
            }
          />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
