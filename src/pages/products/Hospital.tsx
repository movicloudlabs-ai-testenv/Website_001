import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Activity, Heart, Stethoscope, ArrowRight, Play, ShieldPlus } from "lucide-react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion"; // Ensure Transition is imported
import hospitalImg from "@/assets/hospital-dashboard.jpg";

// Particle system component for Hospital
const HospitalParticlesBackground = () => {
    const canvasRef = useRef(null);

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
            x;
            y;
            size;
            speedX;
            speedY;
            color;
            opacity;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 200}, ${Math.random() * 100 + 200}, ${Math.random() * 0.3 + 0.1})`;
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

        const particles = [];
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
            gradient.addColorStop(0, 'rgba(239, 246, 255, 0.8)');
            gradient.addColorStop(0.5, 'rgba(219, 234, 254, 0.6)');
            gradient.addColorStop(1, 'rgba(191, 219, 254, 0.4)');

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

// Framer Motion Variant Definitions (TypeScript fix applied)
const itemTransition: Transition = {
    type: "spring" as const,
    stiffness: 80,
    damping: 15,
    mass: 1.2
};

const buttonTransition: Transition = {
    type: "spring" as const,
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
        boxShadow: "0 8px 25px -5px rgba(59, 130, 246, 0.15), 0 4px 10px -4px rgba(37, 99, 235, 0.1)"
    },
    hover: {
        scale: 1.08,
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.35), 0 12px 24px -8px rgba(37, 99, 235, 0.2)",
        transition: buttonTransition
    },
    tap: {
        scale: 0.92,
        boxShadow: "0 4px 12px -2px rgba(59, 130, 246, 0.2)",
        transition: {
            type: "spring" as const,
            stiffness: 700,
            damping: 40
        } as Transition
    }
};

const secondaryButtonVariants: Variants = {
    rest: {
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "#1d4ed8",
        borderColor: "rgba(59, 130, 246, 0.3)",
        boxShadow: "0 8px 25px -5px rgba(59, 130, 246, 0.1), 0 4px 10px -4px rgba(37, 99, 235, 0.05)"
    },
    hover: {
        scale: 1.08,
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        color: "#1e40af",
        borderColor: "rgba(59, 130, 246, 0.5)",
        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 12px 24px -8px rgba(37, 99, 235, 0.15)",
        transition: buttonTransition
    },
    tap: {
        scale: 0.92,
        backgroundColor: "rgba(59, 130, 246, 0.08)",
        boxShadow: "0 4px 12px -2px rgba(59, 130, 246, 0.2)",
        transition: {
            type: "spring" as const,
            stiffness: 700,
            damping: 40
        } as Transition
    }
};

// End Framer Motion Variant Definitions
// ----------------------------------------------------

const Hospital = () => {
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
                        className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background overflow-hidden">
            <HospitalParticlesBackground />

            {/* Background Animations and Blurs */}
            <div className="fixed inset-0 -z-5 overflow-hidden">
                <div className="absolute top-1/4 -left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 -right-10 w-64 h-64 md:w-96 md:h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse-slower"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-indigo-300/5 rounded-full blur-3xl animate-pulse-medium"></div>

                <motion.div
                    className="absolute top-20 right-20 w-4 h-4 bg-blue-400/40 rounded-full"
                    animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-40 left-20 w-6 h-6 bg-cyan-400/30 rounded-full"
                    animate={{ y: [0, 40, 0], x: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
            {/* End Background Animations */}

            <Navigation />

            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-indigo-500/10"></div>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
                                className="relative inline-flex items-center justify-center mb-2"
                                variants={itemVariants}
                                initial={{ scale: 0, rotate: -20, opacity: 0 }}
                                animate={{ scale: [0, 1.4, 0.92, 1], rotate: [-20, 4, -2, 0], opacity: 1 }}
                                transition={{ duration: 0.75, ease: "easeOut", times: [0, 0.45, 0.75, 1] }}
                            >
                                {/* STAMP */}
                                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center rounded-full border-4 border-blue-600 text-blue-700 bg-white/60 backdrop-blur-xl shadow-2xl rotate-[-8deg]">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-blue-500 flex items-center justify-center bg-white/80">
                                        <Activity className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <p className="absolute top-1 w-full text-center text-[8px] sm:text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                                        MOVICLOUD SOLUTION
                                    </p>
                                </div>
                                {/* punch ripple */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-4 border-blue-300/30"
                                    initial={{ scale: 0.2, opacity: 0 }}
                                    animate={{ scale: [0.2, 1.6, 1.1], opacity: [0.8, 0.4, 0] }}
                                    transition={{ duration: 0.45, delay: 0.1 }}
                                />
                            </motion.div>

                            <motion.h1
                                className="text-6xl md:text-8xl font-black text-slate-800 leading-tight"
                                variants={itemVariants}
                            >
                                Hospital{" "}
                                <motion.span
                                    className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent"
                                    animate={{ backgroundPosition: ["0%", "100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                                    style={{ backgroundSize: "200% 100%" }}
                                >
                                    Management
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                className="text-2xl md:text-3xl text-slate-600 leading-relaxed font-light"
                                variants={itemVariants}
                            >
                                Elevate patient care with <span className="font-semibold text-blue-500">AI-driven diagnostics</span>, streamlined administration, and integrated health records.
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
                                    <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl">
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
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent"
                                            animate={{ x: [-100, 100] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
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
                            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <motion.img
                                src={hospitalImg}
                                alt="Hospital Dashboard"
                                className="rounded-3xl shadow-2xl border border-blue-200/50 backdrop-blur-sm"
                                whileHover={{ boxShadow: "0 35px 60px -15px rgba(59, 130, 246, 0.3)", transition: { type: "spring", stiffness: 400 } }}
                            />

                            <motion.div
                                className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-blue-200"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-2">
                                    <ShieldPlus className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm font-semibold text-blue-600">HIPAA Compliant</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-cyan-200"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="flex items-center gap-2">
                                    <Heart className="w-4 h-4 text-rose-500" />
                                    <span className="text-sm font-semibold text-rose-600">Patient Centric</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            {/* End Hero Section */}

            <main className="pt-20 pb-16 relative z-10">
                {/* AI-Powered Healthcare Section (Flip Cards) */}
                <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
                    <motion.h2
                        className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    >
                        AI-Powered Healthcare
                    </motion.h2>

                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                            {/* 1. Pharmacy Flip Card (Corrected) 💊 */}
                            <div className="group flip-card w-full h-[420px] **[perspective:1000px]**">
                                <div className="flip-inner w-full h-full relative **transition-transform duration-1000** **[transform-style:preserve-3d]** **group-hover:[transform:rotateY(180deg)]**">

                                    {/* FRONT */}
                                    <div className="flip-front absolute w-full h-full rounded-3xl shadow-2xl bg-white overflow-hidden **[backface-visibility:hidden]**">
                                        <img 
                                            src="https://images.unsplash.com/photo-1580281658629-81a6502edc31"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40"></div>
                                        <div className="absolute bottom-4 left-4 text-3xl font-bold text-white drop-shadow-xl">
                                            Pharmacy
                                        </div>
                                    </div>

                                    {/* BACK */}
                                    <div className="flip-back absolute w-full h-full rounded-3xl shadow-2xl bg-blue-50 p-10 flex flex-col justify-center **[transform:rotateY(180deg)]** **[backface-visibility:hidden]**">
                                        <h3 className="text-3xl font-bold text-blue-700 mb-6">Pharmacy Features</h3>
                                        <ul className="text-slate-700 space-y-4 text-xl">
                                            <li>• Stock Management</li>
                                            <li>• Batch & Expiry Alerts</li>
                                            <li>• Auto Medicine Refill</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Laboratory Flip Card (Corrected) 🔬 */}
                            <div className="group flip-card w-full h-[420px] **[perspective:1000px]**">
                                <div className="flip-inner w-full h-full relative **transition-transform duration-1000** **[transform-style:preserve-3d]** **group-hover:[transform:rotateY(180deg)]**">

                                    <div className="flip-front absolute w-full h-full rounded-3xl shadow-2xl bg-white overflow-hidden **[backface-visibility:hidden]**">
                                        <img 
                                            src="https://images.unsplash.com/photo-1581090464777-8d45a7bb86f2"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40"></div>
                                        <div className="absolute bottom-4 left-4 text-3xl font-bold text-white drop-shadow-xl">
                                            Laboratory
                                        </div>
                                    </div>

                                    <div className="flip-back absolute w-full h-full rounded-3xl shadow-2xl bg-green-50 p-10 flex flex-col justify-center **[transform:rotateY(180deg)]** **[backface-visibility:hidden]**">
                                        <h3 className="text-3xl font-bold text-green-700 mb-6">Lab Features</h3>
                                        <ul className="text-slate-700 space-y-4 text-xl">
                                            <li>• Auto Test Reports</li>
                                            <li>• Sample Tracking</li>
                                            <li>• Analyzer Integration</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            {/* 3. OPD Flip Card (Corrected) 🩺 */}
                            <div className="group flip-card w-full h-[420px] **[perspective:1000px]**">
                                <div className="flip-inner w-full h-full relative **transition-transform duration-1000** **[transform-style:preserve-3d]** **group-hover:[transform:rotateY(180deg)]**">

                                    <div className="flip-front absolute w-full h-full rounded-3xl shadow-2xl bg-white overflow-hidden **[backface-visibility:hidden]**">
                                        <img 
                                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a2"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/40"></div>
                                        <div className="absolute bottom-4 left-4 text-3xl font-bold text-white drop-shadow-xl">
                                            OPD System
                                        </div>
                                    </div>

                                    <div className="flip-back absolute w-full h-full rounded-3xl shadow-2xl bg-purple-50 p-10 flex flex-col justify-center **[transform:rotateY(180deg)]** **[backface-visibility:hidden]**">
                                        <h3 className="text-3xl font-bold text-purple-700 mb-6">OPD Features</h3>
                                        <ul className="text-slate-700 space-y-4 text-xl">
                                            <li>• Appointment Booking</li>
                                            <li>• Queue Management</li>
                                            <li>• Visit History</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Flip Card Section */}
                
                <section className="container mx-auto px-4 mb-24">
                    <motion.h2
                        className="text-5xl font-black text-center mb-20 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
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
                                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 35px 60px -15px rgba(239, 68, 68, 0.25)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-pink-400"></div>

                                <h3 className="text-3xl font-bold mb-8 text-red-500 flex items-center gap-4">
                                    <motion.div whileHover={{ rotate: 180, scale: 1.2 }} transition={{ type: "spring", stiffness: 500 }} >
                                        <X className="w-8 h-8" />
                                    </motion.div>
                                    Legacy Systems
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "Fragmented patient records",
                                        "Manual appointment scheduling",
                                        "Delayed communication",
                                        "Limited data security"
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start gap-4 text-slate-600 text-lg"
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.15, type: "spring" }}
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
                                className="bg-gradient-to-br from-blue-500/15 to-cyan-500/10 backdrop-blur-lg rounded-3xl p-10 border border-blue-300 shadow-2xl relative overflow-hidden"
                                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 35px 60px -15px rgba(59, 130, 246, 0.35)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <motion.div
                                    className="absolute top-0 right-0 w-40 h-40 bg-blue-400/20 rounded-full -translate-y-20 translate-x-20 blur-3xl"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>

                                <h3 className="text-3xl font-bold mb-8 text-blue-600 flex items-center gap-4 relative z-10">
                                    <motion.div whileHover={{ scale: 1.3, rotate: 360 }} transition={{ type: "spring", stiffness: 500 }} >
                                        <Check className="w-8 h-8" />
                                    </motion.div>
                                    MoviCloud Hospital
                                </h3>
                                <ul className="space-y-5 relative z-10">
                                    {[
                                        "Unified electronic health records",
                                        "AI-powered scheduling & alerts",
                                        "Secure, real-time messaging",
                                        "Advanced data encryption"
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start gap-4 text-slate-700 text-lg font-medium"
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.15, type: "spring" }}
                                            viewport={{ once: true }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <Check className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
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
                        className="bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-xl rounded-3xl p-16 text-center border border-blue-300/50 shadow-2xl max-w-6xl mx-auto relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400"
                            animate={{ scaleX: [0, 1, 0], transformOrigin: ["0%", "50%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>

                        <motion.h2
                            className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            Modernize Your Healthcare Facility
                        </motion.h2>

                        <motion.p
                            className="text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            Join top hospitals using MoviCloud to enhance patient care, streamline operations, and ensure compliance with the latest healthcare standards.
                        </motion.p>

                        <motion.div
                            variants={buttonHoverVariants}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-black text-xl px-14 py-8 rounded-2xl shadow-2xl">
                                <motion.span
                                    whileHover={{ scale: 1.1, x: 5 }}
                                    transition={{ type: "spring", stiffness: 500 }}
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

export default Hospital;