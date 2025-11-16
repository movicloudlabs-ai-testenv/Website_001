import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const cards = [
    {
      icon: <Zap className="w-8 h-8 text-primary mb-2 mx-auto" />,
      title: "AI-Powered",
      description: "Advanced analytics and intelligent automation",
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary mb-2 mx-auto" />,
      title: "Enterprise-Grade",
      description: "Secure, scalable, and reliable solutions",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary mb-2 mx-auto" />,
      title: "Results-Driven",
      description: "Measurable impact on business outcomes",
    },
  ];

  return (
    <>
      {/* 🧠 HERO SECTION */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden pt-20 bg-background">
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>

        {/* LEFT TEXT */}
        <div className="relative md:w-1/2 flex flex-col justify-center px-6 md:px-16 z-20 text-center md:text-left space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Intelligent Enterprise Solutions
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            MoviCloud Labs delivers cutting-edge mobile and web applications powered by advanced
            AI and analytics, transforming how businesses operate and grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 pt-4">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-gradient-primary text-lg px-8 shadow-glow hover:scale-105 transition-transform"
              >
                Explore Our Products
                <ArrowRight className="ml-2" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              Get a Demo
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative md:w-1/2 flex justify-end z-10 px-6 md:px-16 pointer-events-none">
          <img
            src="/Hero.jpg"
            alt="Hero"
            className="w-full max-w-lg md:max-w-xl object-contain mix-blend-lighten opacity-90 animate-fade-in"
          />
        </div>
      </section>

      {/* 🔵 DIVIDER LINE */}
      <div className="w-full h-[1px] bg-blue-400/40 mt-2 mb-4"></div>

      {/* 🌟 PRODUCT SHOWCASE + LAUNCHING 2026 */}
      <section className="relative w-full pt-2 pb-8 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Product Showcase: <span className="text-primary">Launching 2026</span>
            </h2>

            {/* ICON GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">

              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/products/hospital.jpg" className="w-16 h-16 rounded-full" />
                <p className="text-sm font-medium">Hospital Management</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/products/transport.jpg" className="w-16 h-16 rounded-full" />
                <p className="text-sm font-medium">Transport Management</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/products/office.jpg" className="w-16 h-16 rounded-full" />
                <p className="text-sm font-medium">Office / Work Management</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/products/school.jpg" className="w-16 h-16 rounded-full" />
                <p className="text-sm font-medium">School & Alumni</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/products/ecommerce.jpg" className="w-16 h-16 rounded-full" />
                <p className="text-sm font-medium">E-commerce Inventory</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/products/hotel.jpg" className="w-16 h-16 rounded-full" />
                <p className="text-sm font-medium">Hotel & Hospitality</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/products/survey.jpg" className="w-16 h-16 rounded-full" />
                <p className="text-sm font-medium">Survey System</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/products/marketing.jpg" className="w-16 h-16 rounded-full" />
                <p className="text-sm font-medium">Marketing Suite</p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — LAUNCHING 2026 */}
          <div className="relative flex items-center justify-center">
            <img
              src="/launch-bg.png"
              alt="Launching 2026"
              className="w-[380px] h-[380px] object-contain opacity-90"
            />
          </div>

        </div>
      </section>

      {/* 🔵 SECOND DIVIDER */}
      <div className="w-full h-[1px] bg-blue-400/40 mt-6 mb-8"></div>

      {/* 🎴 FEATURE CARDS SECTION */}
      <section className="relative z-10 bg-background pt-16 pb-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

          {cards.map((card, index) => (
            <div key={index} className="flip-card w-full h-64">
              <div className="flip-inner w-full h-full">

                {/* Front */}
                <div className="flip-front bg-card rounded-2xl shadow-md flex items-center justify-center border border-border">
                  <img src="/logo1.jpg" className="w-28 h-28 object-contain" />
                </div>

                {/* Back */}
                <div className="flip-back bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border border-border">
                  {card.icon}
                  <h3 className="text-xl font-semibold mt-2">{card.title}</h3>
                  <p className="text-muted-foreground mt-2 px-4">{card.description}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
};
