import React, { useEffect, useState } from 'react';
import { motion, Variants, Transition, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Check, GraduationCap, BookOpen, Users, Clock, CreditCard, Library, Shield } from 'lucide-react';
import Navigation from '../../components/Navigation';
import DemoCTA from '../../components/DemoCTA';
import { Footer } from '../../components/Footer';
import schoolDashboard from '../../assets/school-dashboard.jpg';
import { useNavigate } from 'react-router-dom';

const heroImages = [schoolDashboard, schoolDashboard, schoolDashboard, schoolDashboard];

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
    boxShadow: "0 8px 25px -5px rgba(249, 115, 22, 0.15), 0 4px 10px -4px rgba(234, 179, 8, 0.1)"
  },
  hover: {
    scale: 1.08,
    boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.35), 0 12px 24px -8px rgba(234, 179, 8, 0.2)",
    transition: buttonTransition
  },
  tap: {
    scale: 0.92,
    boxShadow: "0 4px 12px -2px rgba(249, 115, 22, 0.2)",
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
    color: "#c2410c",
    borderColor: "rgba(249, 115, 22, 0.3)",
    boxShadow: "0 8px 25px -5px rgba(249, 115, 22, 0.1), 0 4px 10px -4px rgba(234, 179, 8, 0.05)"
  },
  hover: {
    scale: 1.08,
    backgroundColor: "rgba(249, 115, 22, 0.1)",
    color: "#9a3412",
    borderColor: "rgba(249, 115, 22, 0.5)",
    boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.25), 0 12px 24px -8px rgba(234, 179, 8, 0.15)",
    transition: buttonTransition
  },
  tap: {
    scale: 0.92,
    backgroundColor: "rgba(249, 115, 22, 0.08)",
    boxShadow: "0 4px 12px -2px rgba(249, 115, 22, 0.2)",
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 40
    }
  }
};

const School = () => {
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
      <div className="min-h-screen bg-orange-50/50">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center pt-16 pb-12 lg:pt-12">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Gradient Mesh */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-orange-200/40 via-orange-50/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-200/40 via-amber-50/20 to-transparent" />

          {/* Subtle Overlay Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Stamp + Header Flex Container */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-8">
                {/* Orange Rubber Stamp */}
                <div className="relative group">
                  <motion.div
                    initial={{ scale: 2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      mass: 1,
                      delay: 0.2
                    }}
                    className="relative w-40 h-40 flex items-center justify-center"
                  >
                    {/* Ink Splatter Background Effect */}
                    <div className="absolute inset-0 bg-orange-900/5 blur-2xl rounded-full transform scale-90" />

                    {/* Oscillating Container */}
                    <motion.div
                      animate={{ rotate: [-10, 10] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      className="w-full h-full"
                    >
                      <svg viewBox="0 0 200 200" className="w-full h-full text-[#c2410c] opacity-95 mix-blend-multiply">
                        <defs>
                          {/* Refined Grunge Filter - Clearer Text */}
                          <filter id="orange-grunge" x="-20%" y="-20%" width="140%" height="140%">
                            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
                          </filter>
                        </defs>

                        <g filter="url(#orange-grunge)">
                          {/* Outer Double Border */}
                          <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="3" />
                          <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeWidth="1" />

                          {/* Inner Border */}
                          <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1.5" />

                          {/* Text Path - Top (Centered between r=86 and r=62 -> r=74) */}
                          <path id="curve" d="M 26,100 A 74,74 0 1,1 174,100" fill="none" />

                          {/* Text Path - Bottom (Centered at r=74) */}
                          <path id="curve-bottom" d="M 26,100 A 74,74 0 0,0 174,100" fill="none" />

                          <text className="font-black uppercase fill-current font-display tracking-widest" style={{ fontSize: '14px', fontWeight: 900 }}>
                            <textPath href="#curve" startOffset="50%" textAnchor="middle">
                              MoviCloud Labs School
                            </textPath>
                          </text>

                          <text className="font-black uppercase fill-current font-display tracking-[0.3em]" style={{ fontSize: '12px', fontWeight: 900 }}>
                            <textPath href="#curve-bottom" startOffset="50%" textAnchor="middle">
                              ★ OFFICIAL ★
                            </textPath>
                          </text>

                          {/* Center Icon */}
                          <g transform="translate(76, 76) scale(1.5)">
                            <GraduationCap className="w-16 h-16" strokeWidth={2.5} />
                          </g>
                        </g>
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Header Text */}
                <div className="text-center sm:text-left py-4">
                  <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight pb-2">
                    School{" "}
                    <motion.span
                      animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear"
                      }}
                      className="pb-2 inline-block"
                      style={{
                        backgroundImage: "linear-gradient(110deg, #c2410c 45%, #fcd34d 50%, #c2410c 55%)",
                        backgroundSize: "250% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Management
                    </motion.span>
                  </h1>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-slate-600 max-w-lg leading-relaxed font-medium"
              >
                Empower educators and students with AI-driven learning analytics, streamlined administration, and enhanced parent engagement. Create a better learning environment for everyone.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button
                  type="button"
                  onClick={() => navigate('/demo', { state: { product: 'School' } })}
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold shadow-lg shadow-orange-500/20"
                >
                  Request a Demo
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
                  View Case Studies
                </motion.button>
                <motion.div variants={itemVariants} className="pt-8 flex items-center gap-6 text-slate-500">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-medium">Secure Data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-orange-500" />
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
                  className="relative rounded-3xl shadow-2xl shadow-orange-900/10 border-4 border-white aspect-[4/3] w-full p-3 bg-white"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden isolation-isolate transform-gpu">
                    <AnimatePresence mode="sync">
                      <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt={`School Dashboard Interface ${currentImageIndex + 1}`}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent pointer-events-none z-10" />
                  </div>
                </div>

                {/* Floating Badge 1 - Learning */}
                <motion.div
                  className="absolute -top-6 -left-6 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="p-2.5 bg-orange-100 rounded-xl">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Learning</p>
                    <p className="text-sm font-bold text-slate-900">Personalized</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2 - Engagement */}
                <motion.div
                  className="absolute -bottom-8 -right-4 md:-right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 z-20"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="p-2.5 bg-yellow-100 rounded-xl">
                    <Users className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Engagement</p>
                    <p className="text-sm font-bold text-slate-900">Enhanced</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive School Suite</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to run a modern educational institution, integrated into one seamless platform.</p>
          </div>

          {/* Expanding Cards Container */}
          <div className="flex flex-col lg:flex-row gap-2 h-[800px] lg:h-[500px] w-full max-w-7xl mx-auto">
            {[
              {
                title: "Performance",
                icon: <GraduationCap className="w-8 h-8" />,
                desc: "AI-driven student performance analytics.",
                color: "from-orange-600 via-amber-700 to-slate-900",
                img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070"
              },
              {
                title: "Curriculum",
                icon: <BookOpen className="w-8 h-8" />,
                desc: "Streamline lesson planning and resources.",
                color: "from-amber-500 via-yellow-600 to-slate-900",
                img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2022"
              },
              {
                title: "Engagement",
                icon: <Users className="w-8 h-8" />,
                desc: "Automated parent-teacher communication.",
                color: "from-yellow-500 via-orange-600 to-slate-900",
                img: "https://images.unsplash.com/photo-1577896334614-501d260d4ec2?auto=format&fit=crop&q=80&w=2050"
              },
              {
                title: "Attendance",
                icon: <Clock className="w-8 h-8" />,
                desc: "Digital attendance tracking and reporting.",
                color: "from-orange-500 via-red-600 to-slate-900",
                img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=2070"
              },
              {
                title: "Fees",
                icon: <CreditCard className="w-8 h-8" />,
                desc: "Automated fee collection and management.",
                color: "from-amber-600 via-orange-700 to-slate-900",
                img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070"
              },
              {
                title: "Library",
                icon: <Library className="w-8 h-8" />,
                desc: "Digital library management system.",
                color: "from-slate-600 via-slate-800 to-black",
                img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=2070"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="relative flex-1 hover:flex-[4] transition-all duration-500 ease-in-out group overflow-hidden rounded-2xl cursor-pointer border border-slate-200 hover:border-orange-400/50 shadow-sm hover:shadow-orange-900/20"
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
                    <p className="text-orange-50 max-w-xs leading-relaxed drop-shadow-md font-medium">{feature.desc}</p>
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

export default School;