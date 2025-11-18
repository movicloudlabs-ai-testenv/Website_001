import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, TrendingUp, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hospitalImg from "@/assets/hospital-dashboard.jpg";

const features = [
  {
    icon: <Sparkles className="w-12 h-12 text-blue-400 mb-4" />,
    title: "Intelligent Scheduling",
    desc: "AI optimizes appointment scheduling, reducing wait times by up to 40% and maximizing resource utilization."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />,
    title: "Predictive Analytics",
    desc: "Machine learning models predict patient admissions, bed requirements, and staff needs with 95% accuracy."
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-400 mb-4" />,
    title: "HIPAA Compliant",
    desc: "Enterprise-grade security with full HIPAA compliance and advanced patient data protection."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  }
};

const cardHoverVariants = {
  rest: {
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  hover: {
    scale: 1.05,
    y: -8,
    rotateX: 2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  },
  tap: {
    scale: 0.98,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  }
};

const buttonHoverVariants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  },
  tap: {
    scale: 0.98,
    boxShadow: "0 2px 4px -1px rgb(0 0 0 / 0.1), 0 1px 2px -2px rgb(0 0 0 / 0.1)"
  }
};

const Hospital = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* CSS-Only Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300/5 rounded-full blur-3xl animate-pulse-medium"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section
        className="relative w-full h-[600px] flex items-center bg-center bg-cover"
        style={{ backgroundImage: `url(${hospitalImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-cyan-600/30 backdrop-blur-[1px]"></div>
        <motion.div 
          className="relative text-left px-12 md:px-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            variants={itemVariants}
          >
            <span className="text-sm text-white font-medium">Healthcare Innovation</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            Hospital Management{" "}
            <motion.span 
              className="text-blue-200 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              System
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl text-white/90 leading-relaxed"
            variants={itemVariants}
          >
            Transform healthcare delivery with AI-powered patient management and predictive analytics.
          </motion.p>
          
          <motion.div 
            className="flex gap-4"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold text-base px-8 py-6 rounded-xl">
                Request a Demo
              </Button>
            </motion.div>
            <motion.div
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 font-semibold text-base px-8 py-6 rounded-xl backdrop-blur-sm">
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <main className="pt-16 pb-12 relative z-10">
        {/* AI Features - Enhanced Animation */}
        <section className="py-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            AI-Powered Features
          </motion.h2>
          
          <motion.div
            className="relative w-full flex justify-center items-center h-80 mb-8"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {features.map((feature, idx) => {
                const isActive = idx === activeIndex;
                const distance = 280;
                const xOffset = hovered ? (idx - 1) * distance : 0;
                const zIndex = isActive ? 50 : 10 + idx;

                return (
                  <motion.div
                    key={idx}
                    className="absolute w-80 h-96 bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50 shadow-2xl cursor-pointer flex flex-col items-center justify-center"
                    variants={cardHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    animate={{
                      x: xOffset,
                      scale: isActive ? 1.05 : 1,
                      y: isActive ? -10 : 0,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20,
                      duration: 0.6
                    }}
                    style={{ 
                      zIndex,
                      boxShadow: isActive 
                        ? "0 25px 50px -12px rgba(59, 130, 246, 0.25)" 
                        : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800 text-center">{feature.title}</h3>
                    <p className="text-slate-600 text-center leading-relaxed text-lg">{feature.desc}</p>
                    
                    {/* Active indicator */}
                    <motion.div
                      className={`absolute bottom-4 w-2 h-2 rounded-full ${
                        isActive ? 'bg-blue-400' : 'bg-slate-300'
                      }`}
                      animate={{
                        scale: isActive ? [1, 1.5, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Comparison Section */}
        <section className="container mx-auto px-4 mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            Why Choose MoviCloud?
          </motion.h2>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Traditional Systems */}
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-red-100 shadow-xl"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-red-500 flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                  Traditional Systems
                </h3>
                <ul className="space-y-4">
                  {[
                    "Manual scheduling and resource allocation",
                    "Limited analytics and reporting",
                    "Reactive rather than predictive",
                    "Disconnected modules and data silos"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3 text-slate-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* MoviCloud HMS */}
              <motion.div 
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 shadow-xl relative overflow-hidden"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
                
                <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Check className="w-6 h-6" />
                  </motion.div>
                  MoviCloud HMS
                </h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    "AI-powered intelligent scheduling",
                    "Advanced predictive analytics",
                    "Proactive insights and recommendations",
                    "Unified platform with seamless integration"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3 text-slate-700"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-indigo-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-blue-200/50 shadow-2xl max-w-5xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            {/* Background animation elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Healthcare?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join leading healthcare providers using MoviCloud HMS to improve patient outcomes and operational efficiency with cutting-edge AI technology.
            </motion.p>
            
            <motion.div
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-10 py-7 rounded-xl shadow-lg">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Schedule a Demo
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hospital;