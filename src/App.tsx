import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Products from "./pages/Products";
import Hospital from "./pages/products/Hospital";
import Transport from "./pages/products/Transport";
import Office from "./pages/products/Office";
import School from "./pages/products/School";
import Ecommerce from "./pages/products/Ecommerce";
import Hotel from "./pages/products/Hotel";
import Survey from "./pages/products/Survey";
import Marketing from "./pages/products/Marketing";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/contactUs";// ✅ NEW PAGE

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* ✅ Home */}
          <Route path="/" element={<Index />} />

          {/* ✅ Product Pages */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/hospital" element={<Hospital />} />
          <Route path="/products/transport" element={<Transport />} />
          <Route path="/products/office" element={<Office />} />
          <Route path="/products/school" element={<School />} />
          <Route path="/products/ecommerce" element={<Ecommerce />} />
          <Route path="/products/hotel" element={<Hotel />} />
          <Route path="/products/survey" element={<Survey />} />
          <Route path="/products/marketing" element={<Marketing />} />

          {/* ✅ Contact Page */}
          <Route path="/contact" element={<ContactUs />} />

          {/* ✅ 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
