import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { SEO } from "@/components/SEO";
import { createBreadcrumbSchema } from "@/lib/schema";
import hospitalImg from "@/assets/hospital-dashboard.webp";
import transportImg from "@/assets/transport-dashboard.webp";
import officeImg from "@/assets/office-dashboard.webp";
import schoolImg from "@/assets/school-dashboard.webp";
import ecommerceImg from "@/assets/ecommerce-dashboard.webp";
import hotelImg from "@/assets/hotel-dashboard.webp";
import surveyImg from "@/assets/survey-dashboard.webp";
import marketingImg from "@/assets/marketing-dashboard.webp";

const products = [
  {
    title: "Hospital Management System",
    description: "AI-powered healthcare management with patient analytics, appointment scheduling, and intelligent resource allocation.",
    image: hospitalImg,
    link: "/products/hospital",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Transport Management System",
    description: "Smart fleet management with GPS tracking, route optimization, and predictive maintenance analytics.",
    image: transportImg,
    link: "/products/transport",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Office/Work Management",
    description: "Comprehensive workplace productivity suite with task management, collaboration tools, and performance analytics.",
    image: officeImg,
    link: "/products/office",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
  },
  {
    title: "School Administration & Alumni",
    description: "Complete educational management platform with student records, attendance tracking, and alumni networking.",
    image: schoolImg,
    link: "/products/school",
    gradient: "bg-gradient-to-br from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "E-Commerce Inventory Management",
    description: "Advanced inventory tracking with AI-powered demand forecasting and automated stock replenishment.",
    image: ecommerceImg,
    link: "/products/ecommerce",
    gradient: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Hotel & Hospitality Management",
    description: "Luxury hospitality platform with booking management, guest services, and revenue optimization.",
    image: hotelImg,
    link: "/products/hotel",
    gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Survey & Feedback System",
    description: "Intelligent feedback collection with sentiment analysis, real-time analytics, and actionable insights.",
    image: surveyImg,
    link: "/products/survey",
    gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Digital Marketing Suite",
    description: "Complete marketing platform with SEO tools, social media management, content creation, and campaign analytics.",
    image: marketingImg,
    link: "/products/marketing",
    gradient: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
  },
];

const Products = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI-Powered Enterprise Management Systems | MoviCloud Labs Products"
        description="Explore MoviCloud Labs' suite of intelligent enterprise solutions: Hospital Management, Transport Management, Hotel Management, E-commerce Inventory, School Administration, Office Management, Survey Systems, and Digital Marketing platforms with AI analytics."
        canonical="/products"
        keywords="hospital management system, transport management software, hotel management, ecommerce inventory management, school administration software, office management, survey software, digital marketing platform, enterprise solutions"
        jsonLd={breadcrumbSchema}
      />
      <Navigation />

      <main className="pt-20 pb-8 md:pt-24 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Product Site</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading solutions powered by AI and advanced analytics. Each product is designed to transform your business operations and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
