import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";

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
import ContactUs from "./pages/ContactUsPage";
import CareerPage from "./components/Career";
import DemoPage from "./components/Demopage";



import NotFound from "./pages/NotFound";

// Query Client
const queryClient = new QueryClient();



const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />
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
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/demo" element={<DemoPage />} />


          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
