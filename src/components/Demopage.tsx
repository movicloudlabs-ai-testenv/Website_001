import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send, ArrowRight, Zap, Shield, BarChart3, PlayCircle, Calendar, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
// Footer removed

import { useLocation, Link } from 'react-router-dom';
import { getAssetPath } from '@/lib/utils';

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

    const socialLinks = [
        { name: "LinkedIn", url: "https://www.linkedin.com/company/movicloud-labs-pvt-ltd/", icon: "/assets/icons/linkedin.webp" },
        { name: "X", url: "https://x.com/movicloudlabs?s=11", icon: "/assets/icons/x.webp" },
        { name: "Facebook", url: "https://www.facebook.com/share/1FutXy6hCH/?mibextid=wwXIfr", icon: "/assets/icons/facebook.webp" },
        { name: "Instagram", url: "https://www.instagram.com/movicloudlabs?igsh=MWY4YnVxMXNhdmQwbg%3D%3D&utm_source=qr", icon: "/assets/icons/instagram.webp?v=2" },
        { name: "WhatsApp", url: "https://wa.me/919600701007", icon: "/assets/icons/whatsapp.webp" },
    ];

    return (
        <div className="flex flex-col h-screen bg-blue-50 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
            <Navigation />

            {/* Spacer for Fixed Navigation (h-16 = 4rem = 64px) */}
            <div className="h-16 flex-shrink-0" />

            {/* Hero Section - Ultra Compact */}
            <section className="relative pt-1 pb-1 flex-shrink-0 z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-blue-50/20 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[8px] font-bold uppercase tracking-wider mb-0.5">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                            </span>
                            Live Product Tour
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-0.5 tracking-tight font-display">
                            See MoviCloud Labs in Action
                        </h1>
                        <p className="text-[10px] text-slate-600 leading-snug font-sans max-w-lg mx-auto">
                            {productFromNav ? (
                                <>Get a personalized look at <strong className="text-blue-600">{productFromNav}</strong>. Discover how our AI workflows can help.</>
                            ) : (
                                "Book a personalized demo to see how our intelligent enterprise solutions can transform your business."
                            )}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Wrapper - Flex Grow to take available space */}
            <div className="flex-grow flex flex-col min-h-0 relative z-10">
                {/* Split Content - Compacted Grid */}
                <section className="flex-grow min-h-0 flex flex-col">
                    <div className="container mx-auto px-6 flex-grow flex flex-col min-h-0">
                        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-start h-full pb-1">

                            {/* Left Column: Value Proposition & Steps */}
                            <div className="lg:col-span-5 flex flex-col h-full justify-center space-y-2 py-1">

                                {/* What to Expect */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mb-2"
                                >
                                    <h3 className="text-[11px] font-bold text-slate-900 mb-2 font-display">What to expect?</h3>
                                    <div className="space-y-1.5">
                                        {demoSteps.map((step, index) => (
                                            <div key={index} className="flex gap-2 relative">
                                                {index !== demoSteps.length - 1 && (
                                                    <div className="absolute left-3 top-5 bottom-[-6px] w-0.5 bg-slate-100" />
                                                )}
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm z-10">
                                                    <step.icon className="w-3 h-3" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 mb-0.5 font-heading text-[10px] leading-tight">{step.title}</h4>
                                                    <p className="text-[9px] text-slate-600 leading-tight font-sans text-opacity-90">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Trusted By - Compacted */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="pt-2 border-t border-slate-200"
                                >
                                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1 font-sans">Trusted by  Enterprises</p>
                                    <div className="grid grid-cols-3 gap-x-2 gap-y-1 opacity-50 grayscale">
                                        <div className="h-3 flex items-center font-bold text-slate-800 text-[9px]">Acme</div>
                                        <div className="h-3 flex items-center font-bold text-slate-800 text-[9px]">Global</div>
                                        <div className="h-3 flex items-center font-bold text-slate-800 text-[9px]">Nebula</div>
                                        <div className="h-3 flex items-center font-bold text-slate-800 text-[9px]">Fox</div>
                                        <div className="h-3 flex items-center font-bold text-slate-800 text-[9px]">Circle</div>
                                        <div className="h-3 flex items-center font-bold text-slate-800 text-[9px]">Trio</div>
                                    </div>
                                </motion.div>

                                {/* Video - Compacted */}
                                <div className="mt-2 p-1.5 bg-slate-900 rounded-lg text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1 bg-white/10 rounded-md">
                                            <PlayCircle className="w-3 h-3 text-blue-400" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold font-heading text-[10px] mb-0 leading-none">Not ready to book?</h4>
                                            <p className="text-[8px] text-slate-400 font-sans leading-tight mt-0.5">Watch a 2-min tour.</p>
                                        </div>
                                        <button className="text-[9px] font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors whitespace-nowrap">
                                            Video <ArrowRight className="w-2.5 h-2.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Demo Form - Ultra Compact */}
                            <div className="lg:col-span-7 h-full overflow-hidden flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="bg-white rounded-lg shadow-sm shadow-blue-200/30 border border-blue-100 p-3 max-h-full overflow-y-auto custom-scrollbar"
                                >
                                    {submitted ? (
                                        <div className="text-center py-4">
                                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1 font-display">You're all set!</h3>
                                            <p className="text-slate-600 text-[10px] mb-3 font-sans max-w-xs mx-auto">
                                                We've received your request. Check your email.
                                            </p>
                                            <Link
                                                to="/"
                                                className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors font-sans shadow-sm text-[10px]"
                                            >
                                                Return Home
                                            </Link>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mb-1.5 text-center md:text-left">
                                                <h2 className="text-xs font-bold text-slate-900 mb-0 font-display">Schedule demo</h2>
                                                <p className="text-slate-600 text-[9px] font-sans">Fill out the form below.</p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-1">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="space-y-0.5">
                                                        <label htmlFor="firstName" className="text-[8px] font-bold text-slate-700 font-sans uppercase tracking-wide">First Name</label>
                                                        <input
                                                            type="text"
                                                            id="firstName"
                                                            name="firstName"
                                                            required
                                                            value={formData.firstName}
                                                            onChange={handleInputChange}
                                                            className="w-full px-2 py-0.5 rounded border border-slate-200 focus:border-blue-500 outline-none text-[10px] font-sans"
                                                            placeholder="Jane"
                                                        />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <label htmlFor="lastName" className="text-[8px] font-bold text-slate-700 font-sans uppercase tracking-wide">Last Name</label>
                                                        <input
                                                            type="text"
                                                            id="lastName"
                                                            name="lastName"
                                                            required
                                                            value={formData.lastName}
                                                            onChange={handleInputChange}
                                                            className="w-full px-2 py-0.5 rounded border border-slate-200 focus:border-blue-500 outline-none text-[10px] font-sans"
                                                            placeholder="Doe"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-0.5">
                                                    <label htmlFor="email" className="text-[8px] font-bold text-slate-700 font-sans uppercase tracking-wide">Work Email</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full px-2 py-0.5 rounded border border-slate-200 focus:border-blue-500 outline-none text-[10px] font-sans"
                                                        placeholder="jane@company.com"
                                                    />
                                                </div>

                                                <div className="grid grid-cols-2 gap-2">
                                                    <div className="space-y-0.5">
                                                        <label htmlFor="company" className="text-[8px] font-bold text-slate-700 font-sans uppercase tracking-wide">Company</label>
                                                        <input
                                                            type="text"
                                                            id="company"
                                                            name="company"
                                                            required
                                                            value={formData.company}
                                                            onChange={handleInputChange}
                                                            className="w-full px-2 py-0.5 rounded border border-slate-200 focus:border-blue-500 outline-none text-[10px] font-sans"
                                                            placeholder="Acme Inc."
                                                        />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <label htmlFor="employees" className="text-[8px] font-bold text-slate-700 font-sans uppercase tracking-wide">Size</label>
                                                        <select
                                                            id="employees"
                                                            name="employees"
                                                            value={formData.employees}
                                                            onChange={handleInputChange}
                                                            className="w-full px-2 py-0.5 rounded border border-slate-200 focus:border-blue-500 outline-none text-[10px] font-sans"
                                                        >
                                                            <option value="1-50">1-50</option>
                                                            <option value="51-200">51-200</option>
                                                            <option value="201-500">201-500</option>
                                                            <option value="501-1000">501-1k</option>
                                                            <option value="1000+">1k+</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="space-y-0.5">
                                                    <label htmlFor="message" className="text-[8px] font-bold text-slate-700 font-sans uppercase tracking-wide">Interests</label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={2}
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        className="w-full px-2 py-0.5 rounded border border-slate-200 focus:border-blue-500 outline-none resize-none text-[10px] font-sans"
                                                        placeholder="I'm interested in..."
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-sm transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-1 disabled:opacity-70 disabled:cursor-not-allowed text-[10px] font-sans uppercase tracking-wide"
                                                >
                                                    {isSubmitting ? (
                                                        <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    ) : (
                                                        <>
                                                            Book <ArrowRight className="w-3 h-3" />
                                                        </>
                                                    )}
                                                </button>

                                                <div className="flex items-center justify-center gap-2 mt-1 pt-1 border-t border-slate-100">
                                                    <div className="flex items-center gap-1 text-[8px] text-slate-500 font-medium">
                                                        <Shield className="w-2 h-2" /> SSL Secure
                                                    </div>
                                                    <div className="flex items-center gap-1 text-[8px] text-slate-500 font-medium">
                                                        <CheckCircle2 className="w-2 h-2" /> No Credit Card
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
            </div>

            {/* Inline Compact Footer */}
            <div className="flex-shrink-0 bg-white border-t border-slate-100 py-1.5 z-20">
                <div className="container mx-auto px-6 flex flex-row items-center justify-between">
                    <p className="text-[10px] text-slate-400 font-medium flex items-center gap-2">
                        <span>&copy; 2025 MoviCloud Labs.</span>
                        <span className="text-slate-200">|</span>
                        <a 
                            href={getAssetPath("/privacy-policy.pdf")} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-blue-600 transition-colors font-semibold"
                        >
                            Privacy Policy
                        </a>
                    </p>
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-60 hover:opacity-100 hover:scale-110 transition-all"
                            >
                                <img
                                    src={social.icon}
                                    alt={social.name}
                                    className="w-3 h-3 object-contain"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoPage;

