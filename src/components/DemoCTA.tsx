import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const DemoCTA = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#0E224B] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 max-w-3xl mx-auto space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-white leading-tight">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
                            Experience the power of MoviCloud's intelligent solutions. Book a personalized demo and see how we can help you achieve your goals.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link to="/demo">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-900/20 group"
                                >
                                    Get a Free Demo
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
                                >
                                    Contact Sales
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DemoCTA;
