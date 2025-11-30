import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TransformCTA = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-white">
            {/* Light Theme Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00A4C7]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#39D98A]/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.webp')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A4C7]/10 border border-[#00A4C7]/20 text-[#008ba8] text-sm font-bold uppercase tracking-widest mb-4"
                    >
                        <Sparkles className="w-4 h-4 text-[#00A4C7]" />
                        <span>Enterprise-Grade Solutions</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[#0C2340] font-inter tracking-tight leading-tight"
                    >
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4C7] to-[#39D98A]">Transform</span> Your Business?
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-inter"
                    >
                        Discover how our intelligent applications can drive your business forward with AI-powered insights and automation.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                    >
                        <Link to="/products">
                            <Button
                                size="lg"
                                className="bg-[#00A4C7] hover:bg-[#0090AF] text-white text-lg px-8 py-6 h-auto rounded-full shadow-lg shadow-[#00A4C7]/20 border-0 font-inter"
                            >
                                Explore Products
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>

                        <Link to="/contact">
                            <Button
                                size="lg"
                                className="bg-[#0C2340] hover:bg-[#071729] text-white text-lg px-8 py-6 h-auto rounded-full shadow-lg shadow-[#0C2340]/20 border-0 font-inter"
                            >
                                Talk to an Expert
                            </Button>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
