import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProcessFlow } from "@/components/ProcessFlow";
import { TransformCTA } from "@/components/TransformCTA";
/* import { MissionVision } from "@/components/MissionVision"; */
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { organizationSchema, websiteSchema, createBreadcrumbSchema } from "@/lib/schema";

const Index = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, breadcrumbSchema]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="MoviCloud Labs - AI-Powered Enterprise Solutions | Cloud & Mobile Apps"
        description="Transform your business with MoviCloud Labs' intelligent enterprise solutions. Expert in AI-powered hospital, transport, hotel, ecommerce, and school management systems. Advanced analytics and cloud-native platforms."
        canonical="/"
        keywords="AI enterprise solutions, hospital management system, transport management software, hotel management, ecommerce inventory, school administration, cloud-native applications, business automation, AI analytics, MoviCloud Labs"
        jsonLd={combinedSchema}
      />
      <Navigation />
      <Hero />

      <ProcessFlow />

      {/* Divider between Development → Mission/Vision */}
      <div className="w-full h-[1px] bg-blue-400/40 my-12"></div>

      {/* MissionVision section was here */}

      <TransformCTA />

      <Footer />
    </div>
  );
};

export default Index;
