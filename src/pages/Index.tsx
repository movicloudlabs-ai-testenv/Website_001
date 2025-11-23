import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProcessFlow } from "@/components/ProcessFlow";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />

      <ProcessFlow />

      {/* Divider */}
      <div className="w-full h-[1px] bg-blue-400/40 my-12"></div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover how our intelligent applications can drive your business forward with AI-powered insights and automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/products">
                <Button size="lg" className="bg-gradient-primary text-lg px-8 shadow-glow">
                  Explore Products
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
