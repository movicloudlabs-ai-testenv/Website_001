import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Hero = () => {

  /*
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
  ];*/
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-inter font-bold leading-[1.15] tracking-tight text-[#0C2340] text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block">Building</span>

              <span
                className="block font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #00A4C7, #39D98A)",
                }}
              >
                Intelligent Enterprise Solutions
              </span>

              <span className="block text-[#21C4A3] text-2xl md:text-3xl font-semibold mt-2">
                Powered by Advanced AI Analytics
              </span>
            </motion.h1>

            {/* PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-inter text-lg md:text-xl text-[#6B7280] max-w-xl leading-relaxed"
            >
              Building Intelligent Enterprise Solutions Powered by Advanced Analytics and AI
              MoviCloud Labs is your trusted partner for next-generation digital transformation. We design secure, scalable, and custom cloud environments that drive innovation and efficiency. Leveraging deep expertise in predictive analytics and AI, we build smart, cloud-native enterprise platforms that intelligently optimize operations and accelerate business performance.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-row gap-4 pt-2"
            >
              <Link to="/products">
                <Button
                  size="lg"
                  className="font-inter text-lg px-8 rounded-full bg-[#00A4C7] hover:bg-[#0090AF] text-white shadow"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>

              {/* changed: wrap button with Link -> /demo */}
              <Link to="/demo">
                <Button
                  size="lg"
                  className="font-inter text-lg px-8 rounded-full bg-[#0C2340] hover:bg-[#071729] text-white shadow"
                >
                  Book a Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0], // Floating effect
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/Hero2.png"
              className="w-full max-w-3xl"
              alt="Hero"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-blue-400/40 mt-6 mb-8"></div>

      {/* Product Showcase */}
      <section className="relative w-full pt-2 pb-8 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Product Showcase: <span className="text-primary">Launching 2026</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                "hospital",
                "transport",
                "office",
                "school",
                "ecommerce",
                "hotel",
                "survey",
                "marketing",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <img
                    src={`/icons/products/${item}.jpg`}
                    className="w-16 h-16 rounded-full"
                  />
                  <p className="text-sm font-medium capitalize">
                    {item.replace("-", " ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, rotate: -15 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            <img
              src="/launch-bg.png"
              alt="Launching 2026"
              className="w-full max-w-[380px] h-auto object-contain opacity-90"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-blue-400/40 mt-6 mb-8"></div>

    </>
  );
};
