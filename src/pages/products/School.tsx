import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, GraduationCap, BookOpen, Users, ArrowRight, Play, Shield } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import schoolImg from "@/assets/school-dashboard.jpg";

const features = [
  {
    icon: <GraduationCap className="w-12 h-12 text-orange-400 mb-4" />,
    title: "Student Performance",
    desc: "AI analyzes learning patterns to identify at-risk students and suggest personalized interventions."
  },
  {
    icon: <BookOpen className="w-12 h-12 text-yellow-400 mb-4" />,
    title: "Curriculum Management",
    desc: "Streamline lesson planning and resource allocation with intelligent scheduling tools."
  },
  {
    icon: <Users className="w-12 h-12 text-orange-400 mb-4" />,
    title: "Parent Engagement",
    desc: "Automated communication tools keep parents informed about their child's progress and school events."
  }
];

// Particle system component for School
const SchoolParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(${Math.random() * 100 + 200}, ${Math.random() * 100 + 100}, ${Math.random() * 50}, ${Math.random() * 0.3 + 0.1})`;
        this.opacity = Math.random() * 0.6 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(255, 247, 237, 0.8)');
      gradient.addColorStop(0.5, 'rgba(254, 243, 199, 0.6)');
      gradient.addColorStop(1, 'rgba(253, 230, 138, 0.4)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
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
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      mass: 1.2
    }
  }
};

const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25
    }
  },
  hover: {
    scale: 1.08,
    y: -15,
    rotateX: 3,
    rotateY: 2,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 30
    }
  },
  tap: {
    scale: 0.95,
    y: -5,
    transition: {
      type: "spring" as const,
      stiffness: 600,
      damping: 35
    }
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
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 20
    }
  },
  tap: {
    scale: 0.92,
    boxShadow: "0 4px 12px -2px rgba(249, 115, 22, 0.2)",
    transition: {
      type: "spring" as const,
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
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 20
    }
  },
  tap: {
    scale: 0.92,
    backgroundColor: "rgba(249, 115, 22, 0.08)",
    boxShadow: "0 4px 12px -2px rgba(249, 115, 22, 0.2)",
    transition: {
      type: "spring" as const,
      stiffness: 700,
      damping: 40
    }
  }
};

const School = () => {
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
    <div className="min-h-screen bg-background overflow-hidden">
      <SchoolParticlesBackground />

      <div className="fixed inset-0 -z-5 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -right-20 w-64 h-64 md:w-80 md:h-80 bg-yellow-300/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 md:w-64 md:h-64 bg-amber-300/15 rounded-full blur-3xl animate-pulse-medium"></div>

        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-orange-400/40 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-6 h-6 bg-yellow-400/30 rounded-full"
          animate={{
            y: [0, 40, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <Navigation />

      <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/5 to-amber-500/10"></div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            x: [-100, 100],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-4 py-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-8">
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-orange-500/15 backdrop-blur-md rounded-2xl border border-orange-500/30"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(249, 115, 22, 0.2)",
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <GraduationCap className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-sm text-orange-600 font-semibold tracking-wide">Smart Education Management</span>
              </motion.div>

              <motion.h1
                className="text-6xl md:text-8xl font-black text-slate-800 leading-tight"
                variants={itemVariants}
              >
                School{" "}
                <motion.span
                  className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Management
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-light"
                variants={itemVariants}
              >
                Empower educators and students with <span className="font-semibold text-orange-500">AI-driven learning analytics</span>, streamlined administration, and enhanced parent engagement.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                variants={itemVariants}
              >
                <motion.div
                  variants={buttonHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl">
                    <span className="mr-3">Request a Demo</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>

                <motion.div
                  variants={secondaryButtonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button size="lg" variant="outline" className="border-2 font-bold text-lg px-10 py-7 rounded-2xl backdrop-blur-md relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/20 to-transparent"
                      animate={{
                        x: [-100, 100],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 2
                      }}
                    />
                    <Play className="w-5 h-5 mr-3" />
                    <span className="relative z-10">View Case Studies</span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.img
                src={schoolImg}
                alt="School Dashboard"
                className="rounded-3xl shadow-2xl border border-orange-200/50 backdrop-blur-sm"
                whileHover={{
                  boxShadow: "0 35px 60px -15px rgba(249, 115, 22, 0.3)",
                  transition: { type: "spring", stiffness: 400 }
                }}
              />

              <motion.div
                className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-orange-200"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-semibold text-orange-600">Secure Data</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-yellow-200"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-yellow-600">Better Engagement</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </section>

      <main className="pt-20 pb-16 relative z-10">
        <section className="py-24 bg-gradient-to-br from-orange-500/5 via-yellow-500/5 to-amber-500/5">
          <motion.h2
            className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-slate-800 via-orange-700 to-slate-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            AI-Powered Education
          </motion.h2>

          <motion.div
            className="relative w-full flex justify-center items-center h-96 mb-12"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {features.map((feature, idx) => {
                const isActive = idx === activeIndex;
                const distance = 320;
                const xOffset = hovered ? (idx - 1) * distance : 0;
                const zIndex = isActive ? 50 : 10 + idx;

                return (
                  <motion.div
                    key={idx}
                    className="absolute w-full max-w-sm h-[420px] bg-white/95 backdrop-blur-lg rounded-3xl p-10 border border-orange-100/60 shadow-2xl cursor-pointer flex flex-col items-center justify-center relative overflow-hidden"
                    variants={cardHoverVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    animate={{
                      x: xOffset,
                      scale: isActive ? 1.08 : 1,
                      y: isActive ? -20 : 0,
                    }}
                    transition={{
                      type: "spring" as const,
                      stiffness: 200,
                      damping: 25,
                      duration: 0.8
                    }}
                    style={{
                      zIndex,
                      boxShadow: isActive
                        ? "0 35px 60px -15px rgba(249, 115, 22, 0.4), 0 20px 40px -20px rgba(234, 179, 8, 0.3)"
                        : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-yellow-50/30"
                      whileHover={{ opacity: 1 }}
                      initial={{ opacity: 0.5 }}
                    />

                    <motion.div
                      className="relative z-10"
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                        transition: {
                          type: "spring" as const,
                          stiffness: 500,
                          duration: 0.6
                        }
                      }}
                    >
                      {feature.icon}
                    </motion.div>

                    <motion.h3
                      className="text-3xl font-bold mb-6 text-slate-800 text-center relative z-10"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      className="text-slate-600 text-center leading-relaxed text-xl font-light relative z-10"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {feature.desc}
                    </motion.p>

                    <motion.div
                      className={`absolute bottom-6 w-3 h-3 rounded-full ${isActive ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : 'bg-slate-300'
                        }`}
                      animate={{
                        scale: isActive ? [1, 1.8, 1] : 1,
                        boxShadow: isActive ?
                          "0 0 20px rgba(249, 115, 22, 0.5)" :
                          "none"
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

        <section className="container mx-auto px-4 mb-24">
          <motion.h2
            className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-slate-800 via-orange-700 to-slate-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Traditional vs. MoviCloud
          </motion.h2>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <motion.div
                className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 border border-red-200 shadow-2xl relative overflow-hidden"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 35px 60px -15px rgba(239, 68, 68, 0.25)"
                }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-pink-400"></div>

                <h3 className="text-3xl font-bold mb-8 text-red-500 flex items-center gap-4">
                  <motion.div
                    whileHover={{
                      rotate: 180,
                      scale: 1.2
                    }}
                    transition={{ type: "spring" as const, stiffness: 500 }}
                  >
                    <X className="w-8 h-8" />
                  </motion.div>
                  Legacy Systems
                </h3>
                <ul className="space-y-5">
                  {[
                    "Paper-based record keeping",
                    "Disconnected communication channels",
                    "Manual grading and reporting",
                    "Limited visibility into student progress"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4 text-slate-600 text-lg"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15, type: "spring" as const }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <X className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-orange-500/15 to-yellow-500/10 backdrop-blur-lg rounded-3xl p-10 border border-orange-300 shadow-2xl relative overflow-hidden"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 35px 60px -15px rgba(249, 115, 22, 0.35)"
                }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-orange-400/20 rounded-full -translate-y-20 translate-x-20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-400"></div>

                <h3 className="text-3xl font-bold mb-8 text-orange-600 flex items-center gap-4 relative z-10">
                  <motion.div
                    whileHover={{
                      scale: 1.3,
                      rotate: 360
                    }}
                    transition={{ type: "spring" as const, stiffness: 500 }}
                  >
                    <Check className="w-8 h-8" />
                  </motion.div>
                  MoviCloud School
                </h3>
                <ul className="space-y-5 relative z-10">
                  {[
                    "Digital student records & portfolios",
                    "Unified parent-teacher communication",
                    "AI-assisted grading & insights",
                    "Real-time performance tracking"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4 text-slate-700 text-lg font-medium"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15, type: "spring" as const }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <Check className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="py-24 container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-br from-orange-500/20 via-yellow-500/15 to-amber-500/10 backdrop-blur-xl rounded-3xl p-16 text-center border border-orange-300/50 shadow-2xl max-w-6xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400"
              animate={{
                scaleX: [0, 1, 0],
                transformOrigin: ["0%", "50%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>

            <motion.h2
              className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-slate-800 via-orange-700 to-slate-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              viewport={{ once: true }}
            >
              Transform Your School Today
            </motion.h2>

            <motion.p
              className="text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              Join leading educational institutions using MoviCloud to improve student outcomes, streamline operations, and foster a better learning environment.
            </motion.p>

            <motion.div
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xl px-14 py-8 rounded-2xl shadow-2xl">
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    x: 5
                  }}
                  transition={{ type: "spring" as const, stiffness: 500 }}
                  className="flex items-center"
                >
                  Request a Demo
                  <ArrowRight className="w-6 h-6 ml-3" />
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

export default School;