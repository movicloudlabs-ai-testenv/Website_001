import React, { useEffect, useState } from 'react';
import { motion, Variants, Transition, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Check, Package, LineChart, Zap, Globe, RefreshCw, Truck, TrendingUp } from 'lucide-react';
import Navigation from '../../components/Navigation';
import DemoCTA from '../../components/DemoCTA';
import { Footer } from '../../components/Footer';
import ec1 from '../../assets/EC1.webp';
import ec2 from '../../assets/EC 2.webp';
import ec3 from '../../assets/EC 3.webp';
import ec4 from '../../assets/EC 4.webp';
import { useNavigate } from 'react-router-dom';
import StampBadge from '../../components/StampBadge';
import img1 from '../../assets/ecommerce/img1.webp';
import img2 from '../../assets/ecommerce/img2.webp';
import img3 from '../../assets/ecommerce/img3.webp';
import img4 from '../../assets/ecommerce/img4.webp';
import img5 from '../../assets/ecommerce/img5.webp';
import img6 from '../../assets/ecommerce/img6.webp';

const heroImages = [ec1, ec2, ec3, ec4];

const itemTransition: Transition = {
  type: "spring",
  stiffness: 50,
  damping: 20
};

const buttonTransition: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 20
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: itemTransition
  }
};

const buttonHoverVariants: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 8px 25px -5px rgba(20, 184, 166, 0.15), 0 4px 10px -4px rgba(20, 184, 166, 0.1)"
  },
  hover: {
    scale: 1.08,
    boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.35), 0 12px 24px -8px rgba(20, 184, 166, 0.2)",
    transition: buttonTransition
  },
  tap: {
    scale: 0.92,
    boxShadow: "0 4px 12px -2px rgba(20, 184, 166, 0.2)",
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 40
    }
  }
};

const secondaryButtonVariants: Variants = {
  rest: {
    scale: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#0f766e",
    borderColor: "rgba(20, 184, 166, 0.3)",
    boxShadow: "0 8px 25px -5px rgba(20, 184, 166, 0.1), 0 4px 10px -4px rgba(20, 184, 166, 0.05)"
  },
  hover: {
    scale: 1.08,
    backgroundColor: "rgba(20, 184, 166, 0.1)",
    color: "#115e59",
    borderColor: "rgba(20, 184, 166, 0.5)",
    boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.25), 0 12px 24px -8px rgba(20, 184, 166, 0.15)",
    transition: buttonTransition
  },
  tap: {
    scale: 0.92,
    backgroundColor: "rgba(20, 184, 166, 0.08)",
    boxShadow: "0 4px 12px -2px rgba(20, 184, 166, 0.2)",
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 40
    }
  }
};

const Ecommerce = () => {
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-teal-50/50">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center pt-16 pb-12 lg:pt-12">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Gradient Mesh */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-teal-200/40 via-teal-50/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-200/40 via-emerald-50/20 to-transparent" />

          {/* Subtle Overlay Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.webp')] mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8 relative z-30"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Stamp + Header Flex Container */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-12">
                {/* MoviCloud Logo Stamp */}
                <StampBadge />

                {/* Header Text */}
                <div className="text-center sm:text-left py-4 relative z-20">
                  <h1 className="font-display text-5xl sm:text-6xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight pb-2">
                    <span className="whitespace-nowrap">E-Commerce</span>{" "}
                    <motion.span
                      animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear"
                      }}
                      className="pb-2 inline-block"
                      style={{
                        backgroundImage: "linear-gradient(110deg, #0f766e 45%, #2dd4bf 50%, #0f766e 55%)",
                        backgroundSize: "250% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Inventory
                    </motion.span>
                  </h1>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-slate-600 max-w-lg leading-relaxed font-medium"
              >
                Advanced inventory tracking with AI-powered demand forecasting, automated stock replenishment, and real-time analytics. Scale your business with confidence.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button
                  type="button"
                  onClick={() => navigate('/demo', { state: { product: 'E-Commerce' } })}
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center gap-2 px-8 py-4 bg-teal-500 text-white rounded-xl font-semibold shadow-lg shadow-teal-500/20"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  variants={secondaryButtonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50"
                >
                  <Play className="w-5 h-5 fill-current" />
                  View Pricing
                </motion.button>
                <motion.div variants={itemVariants} className="pt-8 flex items-center gap-6 text-slate-500">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-teal-500" />
                    <span className="text-sm font-medium">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-teal-500" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}

            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative w-full max-w-2xl">
                {/* Main Image Container */}
                <div
                  className="relative rounded-3xl shadow-2xl shadow-teal-900/10 border-4 border-white aspect-[4/3] w-full p-3 bg-white"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden isolation-isolate transform-gpu">
                    <AnimatePresence mode="sync">
                      <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt={`E-Commerce Dashboard Interface ${currentImageIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          scale: isHovered ? 1.25 : 1.1
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          opacity: { duration: 1.8, ease: "easeInOut" },
                          scale: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
                        }}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: 'center' }}
                      />
                    </AnimatePresence>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent pointer-events-none z-10" />
                  </div>
                </div>

                {/* Floating Badge 1 - Revenue */}
                <motion.div
                  className="absolute -top-6 -left-6 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="p-2.5 bg-teal-100 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Revenue</p>
                    <p className="text-sm font-bold text-slate-900">+45% Boost</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2 - Accuracy */}
                <motion.div
                  className="absolute -bottom-8 -right-4 md:-right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 z-20"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="p-2.5 bg-cyan-100 rounded-xl">
                    <Zap className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Accuracy</p>
                    <p className="text-sm font-bold text-slate-900">92% Precision</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section (Frame 2) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Inventory Control</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From warehouse to doorstep, manage every aspect of your e-commerce logistics in one place.</p>
          </div>

          {/* Expanding Cards Container */}
          <div className="flex flex-col lg:flex-row gap-2 h-[800px] lg:h-[500px] w-full max-w-7xl mx-auto">
            {[
              {
                title: "Product & Order Management",
                icon: <Package className="w-8 h-8" />,
                desc: "Manage catalogs, inventory, orders, returns, and fulfillment seamlessly.",
                color: "from-teal-600 via-emerald-700 to-slate-900",
                img: img1
              },
              {
                title: "Payment & Checkout Engine",
                icon: <LineChart className="w-8 h-8" />,
                desc: "Fast, secure checkout with multi-payment support and improved conversion rates.",
                color: "from-cyan-500 via-teal-600 to-slate-900",
                img: img2
              },
              {
                title: "Sales & Conversion Analytics",
                icon: <Zap className="w-8 h-8" />,
                desc: "Real-time insights on product performance, funnel metrics, and revenue breakdown.",
                color: "from-emerald-500 via-green-600 to-slate-900",
                img: img3
              },
              {
                title: "Inventory Forecasting & Demand Trends",
                icon: <Globe className="w-8 h-8" />,
                desc: "Predict stock levels and avoid overstock or stockouts using advanced analytics.",
                color: "from-blue-500 via-cyan-600 to-slate-900",
                img: img4
              },
              {
                title: "AI Product Recommendations",
                icon: <RefreshCw className="w-8 h-8" />,
                desc: "Boost sales with personalized recommendations powered by user behavior and browsing history.",
                color: "from-teal-500 via-cyan-600 to-slate-900",
                img: img5
              },
              {
                title: "AI Fraud Detection",
                icon: <Truck className="w-8 h-8" />,
                desc: "Machine learning flags suspicious orders and payment anomalies instantly.",
                color: "from-slate-600 via-slate-800 to-black",
                img: img6
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="relative flex-1 hover:flex-[4] transition-all duration-500 ease-in-out group overflow-hidden rounded-2xl cursor-pointer border border-slate-200 hover:border-teal-400/50 shadow-sm hover:shadow-teal-900/20"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-90 group-hover:opacity-80 transition-opacity duration-500`} />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                  {/* Collapsed State: Rotated Text */}
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 delay-100 group-hover:delay-0">
                    <div className="transform -rotate-90 whitespace-nowrap lg:rotate-[-90deg] rotate-0">
                      <span className="text-xl font-bold tracking-widest uppercase opacity-90 drop-shadow-md">{feature.title}</span>
                    </div>
                  </div>

                  {/* Expanded State: Full Content */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-0 group-hover:delay-200 flex flex-col items-center text-center">
                    <div className="p-4 bg-white/20 backdrop-blur-md rounded-full mb-4 border border-white/30 shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tight drop-shadow-lg">{feature.title}</h3>
                    <p className="text-teal-50 max-w-xs leading-relaxed drop-shadow-md font-medium">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoCTA />
      <Footer />
    </div>
  );
};

export default Ecommerce;