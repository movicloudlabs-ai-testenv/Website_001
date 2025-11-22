import { useState, useRef, useEffect } from "react";
import {
  ClipboardList,
  Palette,
  Code,
  TestTube,
  Rocket,
  Settings,
} from "lucide-react";
import { motion, useInView, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";

const steps = [
  {
    icon: ClipboardList,
    step: "STEP 01",
    title: "Requirements Gathering",
    description: "We understand your vision, goals, and technical needs with clarity.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
  },
  {
    icon: Palette,
    step: "STEP 02",
    title: "UI/UX Design",
    description: "We design beautiful and intuitive user experiences.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  },
  {
    icon: Code,
    step: "STEP 03",
    title: "Development",
    description: "We build robust and scalable digital solutions.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    icon: TestTube,
    step: "STEP 04",
    title: "Testing & QA",
    description: "We ensure top-tier quality through rigorous testing.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    gradient: "linear-gradient(135deg, #f59e0b, #ea580c)",
  },
  {
    icon: Rocket,
    step: "STEP 05",
    title: "Phased Deployments",
    description: "We deliver smooth and stable rollouts.",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50",
    gradient: "linear-gradient(135deg, #ef4444, #f43f5e)",
  },
  {
    icon: Settings,
    step: "STEP 06",
    title: "Production & Support",
    description: "We provide continuous monitoring, maintenance, and improvements.",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-50",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
];

// Enhanced animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateX: -15,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      mass: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

const iconVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -180,
    opacity: 0
  },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.1,
    },
  },
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10,
    },
  },
  active: {
    scale: 1.2,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 15,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    transformOrigin: "left center",
  },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  useEffect(() => {
    if (isInView && isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView, isAutoPlaying]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 relative overflow-hidden">
      {/* Enhanced Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{ y: backgroundY, scale }}
      >
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-400 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Animated grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Heading with scroll-triggered animation */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={textVariants}
            className="inline-block mb-4 relative"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="relative px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm border border-primary/20"
            >
              OUR METHODOLOGY
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/5 blur-sm"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent"
          >
            Development Process
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A proven methodology delivering clarity, efficiency & quality through every phase of your project.
          </motion.p>
        </motion.div>

        {/* Enhanced Process Flow */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          {/* Main process container */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => handleStepClick(index)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Enhanced Connecting lines for desktop */}
                {index < steps.length - 1 && (
                  <motion.div
                    variants={lineVariants}
                    className="hidden lg:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-primary/10 to-primary/5 z-0"
                  >
                    <motion.div
                      animate={{
                        scaleX: activeStep >= index ? 1 : 0,
                        background: activeStep >= index ? step.gradient : 'transparent'
                      }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-primary/80 origin-left rounded-full"
                    />
                  </motion.div>
                )}

                {/* Enhanced Step Card */}
                <motion.div
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-500 backdrop-blur-sm ${activeStep === index
                      ? `border-primary/30 shadow-2xl scale-105 ${step.bgColor}`
                      : 'border-white/50 shadow-lg bg-white/80 hover:bg-white hover:shadow-2xl'
                    }`}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  layout
                >
                  {/* Animated gradient border */}
                  <motion.div
                    animate={{
                      opacity: activeStep === index ? 1 : 0,
                      scale: activeStep === index ? 1 : 0.95
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} p-0.5 -z-10`}
                  >
                    <div className="w-full h-full bg-white/95 rounded-3xl backdrop-blur-sm" />
                  </motion.div>

                  {/* Enhanced Icon Container */}
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate={activeStep === index ? "active" : "show"}
                    whileHover="hover"
                    className={`relative w-24 h-24 mx-auto rounded-3xl mb-8 flex items-center justify-center ${activeStep === index
                        ? `bg-gradient-to-br ${step.color} text-white shadow-2xl`
                        : 'bg-white text-primary border-2 border-slate-200/80 shadow-lg'
                      }`}
                  >
                    <step.icon className="w-10 h-10" />

                    {/* Enhanced Pulse animation for active step */}
                    {activeStep === index && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.8, 0, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 rounded-3xl border-2 border-current"
                      />
                    )}

                    {/* Floating particles */}
                    {activeStep === index && (
                      <>
                        <motion.div
                          animate={{
                            x: [0, 10, 0],
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 0.5,
                          }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-current rounded-full"
                        />
                        <motion.div
                          animate={{
                            x: [0, -8, 0],
                            y: [0, 8, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 1,
                          }}
                          className="absolute -bottom-1 -left-1 w-2 h-2 bg-current rounded-full"
                        />
                      </>
                    )}
                  </motion.div>

                  {/* Enhanced Step Number */}
                  <motion.p
                    animate={{
                      color: activeStep === index ? step.color.split(' ')[0].replace('from-', '') : '#64748b',
                      scale: activeStep === index ? 1.05 : 1
                    }}
                    className="text-sm font-bold tracking-wider mb-4 transition-all duration-300"
                  >
                    {step.step}
                  </motion.p>

                  {/* Enhanced Title */}
                  <motion.h3
                    animate={{
                      color: activeStep === index ? '#1e293b' : '#475569',
                    }}
                    className="text-xl font-bold mb-4 transition-colors duration-300 line-clamp-2 h-14"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Enhanced Description */}
                  <motion.p
                    initial={{ opacity: 0.8 }}
                    animate={{
                      opacity: activeStep === index ? 1 : 0.7
                    }}
                    className="text-muted-foreground text-sm leading-relaxed transition-opacity duration-300 line-clamp-3"
                  >
                    {step.description}
                  </motion.p>

                  {/* Enhanced Progress indicator */}
                  <motion.div
                    animate={{
                      width: activeStep >= index ? '100%' : '0%',
                      opacity: activeStep >= index ? 1 : 0.5
                    }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className={`h-1.5 mt-6 rounded-full bg-gradient-to-r ${step.color} shadow-lg`}
                  />
                </motion.div>

                {/* Enhanced Mobile connecting dots */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center items-center py-6">
                    {[0, 1, 2].map((dotIndex) => (
                      <motion.div
                        key={dotIndex}
                        animate={{
                          scale: activeStep === index + dotIndex ? 1.4 : 1,
                          backgroundColor: activeStep >= index + dotIndex ?
                            step.color.split(' ')[0].replace('from-', '') : '#e2e8f0'
                        }}
                        transition={{ duration: 0.4, delay: dotIndex * 0.1 }}
                        className="w-3 h-3 rounded-full mx-2 shadow-lg"
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Enhanced Progress indicator bar */}
          <motion.div
            className="hidden lg:block mt-16 bg-white/50 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-white/20 shadow-lg"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.div
              animate={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
                background: steps[activeStep].gradient
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full shadow-lg relative"
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-white/30"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Current step indicator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.5
            }}
            className="text-center mt-16"
          >
            <motion.div
              className="inline-flex items-center gap-6 px-8 py-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="text-sm font-semibold text-muted-foreground">
                Currently viewing:
              </span>
              <span className="font-bold text-slate-800 text-lg">
                {steps[activeStep].title}
              </span>
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-3 h-3 rounded-full bg-green-500 shadow-lg"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-lg text-sm font-medium text-slate-700"
          >
            {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
