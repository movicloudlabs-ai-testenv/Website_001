import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send, ArrowRight, Zap, Shield, BarChart3, PlayCircle, Calendar, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLocation, Link } from 'react-router-dom';

const DemoPage = () => {
    const location = useLocation();
    const productFromNav = (location.state as any)?.product ?? "";

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        jobTitle: "",
        employees: "1-50",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const demoSteps = [
        {
            icon: Calendar,
            title: "Book a Time",
            description: "Select a time that works for your schedule."
        },
        {
            icon: Users,
            title: "Personalized Walkthrough",
            description: "One of our specialists will show you features relevant to your needs."
        },
        {
            icon: Zap,
            title: "Start Your Trial",
            description: "Get full access to the platform with a guided onboarding plan."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/40 via-slate-50/20 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            Live Product Tour
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-display">
                            See MoviCloud in Action
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
                            {productFromNav ? (
                                <>Get a personalized look at <strong className="text-teal-600">{productFromNav}</strong>. Discover how our AI-driven platform can streamline your specific workflows.</>
                            ) : (
                                "Book a personalized demo to see how our intelligent enterprise solutions can transform your business operations with predictive analytics and automation."
                            )}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="pb-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                        {/* Left Column: Value Proposition & Steps */}
                        <div className="lg:col-span-5 space-y-12">

                            {/* What to Expect */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-lg font-bold text-slate-900 mb-6 font-display">What to expect?</h3>
                                <div className="space-y-8">
                                    {demoSteps.map((step, index) => (
                                        <div key={index} className="flex gap-4 relative">
                                            {index !== demoSteps.length - 1 && (
                                                <div className="absolute left-5 top-10 bottom-[-20px] w-0.5 bg-slate-200" />
                                            )}
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-teal-100 flex items-center justify-center text-teal-600 shadow-sm z-10">
                                                <step.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1 font-heading text-base">{step.title}</h4>
                                                <p className="text-sm text-slate-600 leading-relaxed font-sans">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Social Proof / Trusted By */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="pt-8 border-t border-slate-200"
                            >
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 font-sans">Trusted by 500+ Enterprises</p>
                                <div className="grid grid-cols-3 gap-6 opacity-60 grayscale">
                                    {/* Placeholder Logos using text for now */}
                                    <div className="h-8 flex items-center font-bold text-slate-800 text-lg">Acme Corp</div>
                                    <div className="h-8 flex items-center font-bold text-slate-800 text-lg">GlobalTech</div>
                                    <div className="h-8 flex items-center font-bold text-slate-800 text-lg">Nebula</div>
                                    <div className="h-8 flex items-center font-bold text-slate-800 text-lg">FoxRun</div>
                                    <div className="h-8 flex items-center font-bold text-slate-800 text-lg">Circle</div>
                                    <div className="h-8 flex items-center font-bold text-slate-800 text-lg">Trio</div>
                                </div>
                            </motion.div>

                            {/* Video Alternative */}
                            <div className="p-6 bg-slate-900 rounded-2xl text-white">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg">
                                        <PlayCircle className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold font-heading mb-1">Not ready to book?</h4>
                                        <p className="text-sm text-slate-400 mb-3 font-sans">Watch a 2-minute product tour instead.</p>
                                        <button className="text-sm font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 transition-colors">
                                            Watch Video <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Demo Form */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-10 sticky top-24"
                            >
                                {submitted ? (
                                    <div className="text-center py-20">
                                        <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">You're all set!</h3>
                                        <p className="text-slate-600 text-lg mb-8 font-sans max-w-md mx-auto">
                                            We've received your request. Check your email for a calendar link to book your preferred time slot.
                                        </p>
                                        <Link
                                            to="/"
                                            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors font-sans shadow-lg shadow-teal-600/20"
                                        >
                                            Return to Home
                                        </Link>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-slate-900 mb-2 font-display">Schedule your demo</h2>
                                            <p className="text-slate-600 text-sm font-sans">Fill out the form below and we'll be in touch shortly.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <label htmlFor="firstName" className="text-xs font-bold text-slate-700 font-sans uppercase tracking-wide">First Name</label>
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        name="firstName"
                                                        required
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm font-sans"
                                                        placeholder="Jane"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="lastName" className="text-xs font-bold text-slate-700 font-sans uppercase tracking-wide">Last Name</label>
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        name="lastName"
                                                        required
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm font-sans"
                                                        placeholder="Doe"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label htmlFor="email" className="text-xs font-bold text-slate-700 font-sans uppercase tracking-wide">Work Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm font-sans"
                                                    placeholder="jane@company.com"
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <label htmlFor="company" className="text-xs font-bold text-slate-700 font-sans uppercase tracking-wide">Company</label>
                                                    <input
                                                        type="text"
                                                        id="company"
                                                        name="company"
                                                        required
                                                        value={formData.company}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-sm font-sans"
                                                        placeholder="Acme Inc."
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label htmlFor="employees" className="text-xs font-bold text-slate-700 font-sans uppercase tracking-wide">Company Size</label>
                                                    <select
                                                        id="employees"
                                                        name="employees"
                                                        value={formData.employees}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all appearance-none text-sm font-sans"
                                                    >
                                                        <option value="1-50">1-50 employees</option>
                                                        <option value="51-200">51-200 employees</option>
                                                        <option value="201-500">201-500 employees</option>
                                                        <option value="501-1000">501-1000 employees</option>
                                                        <option value="1000+">1000+ employees</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label htmlFor="message" className="text-xs font-bold text-slate-700 font-sans uppercase tracking-wide">Specific Interests (Optional)</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={3}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none text-sm font-sans"
                                                    placeholder="I'm interested in..."
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-base font-sans"
                                            >
                                                {isSubmitting ? (
                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        Book My Demo
                                                        <ArrowRight className="w-5 h-5" />
                                                    </>
                                                )}
                                            </button>

                                            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-slate-100">
                                                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                                                    <Shield className="w-3 h-3" /> SSL Secure
                                                </div>
                                                <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                                                    <CheckCircle2 className="w-3 h-3" /> No Credit Card
                                                </div>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DemoPage;
