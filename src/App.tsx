import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Products from "./pages/Products";

// Product Sub-Pages
import Hospital from "./pages/products/Hospital";
import Transport from "./pages/products/Transport";
import Office from "./pages/products/Office";
import School from "./pages/products/School";
import Ecommerce from "./pages/products/Ecommerce";
import Hotel from "./pages/products/Hotel";
import Survey from "./pages/products/Survey";
import Marketing from "./pages/products/Marketing";

// New Pages
import ContactUs from "./pages/ContactUsPage";
import CareerPage from "./components/Career";
// ✅ Your new Career Page

import NotFound from "./pages/NotFound";

// Query Client
const queryClient = new QueryClient();

// temp fix
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <HashRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Product Pages */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/hospital" element={<Hospital />} />
          <Route path="/products/transport" element={<Transport />} />
          <Route path="/products/office" element={<Office />} />
          <Route path="/products/school" element={<School />} />
          <Route path="/products/ecommerce" element={<Ecommerce />} />
          <Route path="/products/hotel" element={<Hotel />} />
          <Route path="/products/survey" element={<Survey />} />
          <Route path="/products/marketing" element={<Marketing />} />

          {/* New Pages */}
          <Route path="/career" element={<CareerPage />} />  {/* ✅ Added */}
          <Route path="/contact" element={<ContactUs />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
