import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Building2, Globe, CheckCircle2, Send, Briefcase, Megaphone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        type: "sales"
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

    const offices = [
        {
            city: "San Francisco",
            address: "100 Pine Street, Suite 1250",
            country: "United States",
            phone: "+1 (415) 555-0123",
            email: "sf@movicloud.com"
        },
        {
            city: "London",
            address: "30 St Mary Axe",
            country: "United Kingdom",
            phone: "+44 20 7123 4567",
            email: "london@movicloud.com"
        },
        {
            city: "Singapore",
            address: "1 Raffles Place",
            country: "Singapore",
            phone: "+65 6789 0123",
            email: "sg@movicloud.com"
        },
        {
            city: "Bangalore",
            address: "Prestige Tech Park",
            country: "India",
            phone: "+91 80 1234 5678",
            email: "india@movicloud.com"
        }
    ];

    return (
        <div className="h-screen overflow-hidden bg-slate-50 font-sans selection:bg-sky-100 selection:text-sky-900 flex flex-col">
            <Navigation />

            {/* Main Content Container */}
            <div className="flex-1 flex flex-col justify-center pt-16 pb-2 container mx-auto px-6">

                {/* Hero Section - Compacted */}
                <div className="text-center max-w-3xl mx-auto mb-2 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 tracking-tight font-display">
                            Get in touch with our team
                        </h1>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                            Whether you have questions about our enterprise solutions, need a demo, or require technical support, we're here to help you scale.
                        </p>
                    </motion.div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start grow-0">

                    {/* Left Column: Contact Options */}
                    <div className="lg:col-span-5 space-y-4 flex flex-col justify-center h-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-[10px] font-bold text-sky-600 uppercase tracking-wider mb-0.5 font-sans">Contact MoviCloud Labs</h3>
                            <h2 className="text-lg font-bold text-slate-900 mb-2 font-display">Ready to transform your business?</h2>
                            <p className="text-slate-600 mb-3 text-[10px] leading-relaxed font-sans">
                                Speak with our enterprise experts to discover how MoviCloud can optimize your operations with AI-driven analytics.
                            </p>

                            <div className="space-y-2">
                                {/* Career Opportunities */}
                                <div className="flex items-start gap-3">
                                    <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600">
                                        <Briefcase className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm font-heading">Career Opportunities</h4>
                                        <p className="text-slate-500 text-xs mb-0.5 font-sans">For job openings and recruitment inquiries.</p>
                                        <a href="mailto:careers@movicloudlabs.com" className="text-emerald-600 text-xs font-medium hover:text-emerald-700 hover:underline font-sans">careers@movicloudlabs.com</a>
                                    </div>
                                </div>

                                {/* HR & Information */}
                                <div className="flex items-start gap-3">
                                    <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600">
                                        <Building2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm font-heading">HR & Information</h4>
                                        <p className="text-slate-500 text-xs mb-0.5 font-sans">For HR-related queries and general company information.</p>
                                        <a href="mailto:info@movicloudlabs.com" className="text-blue-600 text-xs font-medium hover:text-blue-700 hover:underline font-sans">info@movicloudlabs.com</a>
                                    </div>
                                </div>

                                {/* Sales & Partnerships */}
                                <div className="flex items-start gap-3">
                                    <div className="p-1.5 bg-sky-50 rounded-lg text-sky-600">
                                        <MessageSquare className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm font-heading">Sales & Partnerships</h4>
                                        <p className="text-slate-500 text-xs mb-0.5 font-sans">For enterprise plans, solutions, and partnership requests.</p>
                                        <a href="mailto:sales@movicloudlabs.com" className="text-sky-600 text-xs font-medium hover:text-sky-700 hover:underline font-sans">sales@movicloudlabs.com</a>
                                    </div>
                                </div>

                                {/* Marketing */}
                                <div className="flex items-start gap-3">
                                    <div className="p-1.5 bg-purple-50 rounded-lg text-purple-600">
                                        <Megaphone className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 text-sm font-heading">Marketing</h4>
                                        <p className="text-slate-500 text-xs mb-0.5 font-sans">For brand, campaigns, and promotional collaboration inquiries.</p>
                                        <a href="mailto:marketing@movicloudlabs.com" className="text-purple-600 text-xs font-medium hover:text-purple-700 hover:underline font-sans">marketing@movicloudlabs.com</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="p-2 bg-slate-100 rounded-xl border border-slate-200"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <CheckCircle2 className="w-3 h-3 text-sky-600" />
                                <span className="font-semibold text-slate-900 text-xs font-heading">Trusted by Industry Leaders</span>
                            </div>
                            <p className="text-[10px] text-slate-600 font-sans">
                                Empowering enterprises to optimize and streamline their workflows with MoviCloud Labs.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form - Compacted */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 p-4"
                        >
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Message Sent!</h3>
                                    <p className="text-slate-600 text-sm font-sans">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 text-sky-600 font-medium hover:underline text-sm font-sans"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-2">
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label htmlFor="firstName" className="text-[10px] font-semibold text-slate-700 font-sans uppercase tracking-wide">First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-1 rounded-md bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition-all text-sm font-sans"
                                                placeholder="Jane"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="lastName" className="text-[10px] font-semibold text-slate-700 font-sans uppercase tracking-wide">Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-1 rounded-md bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition-all text-sm font-sans"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="email" className="text-[10px] font-semibold text-slate-700 font-sans uppercase tracking-wide">Work Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-1 rounded-md bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition-all text-sm font-sans"
                                            placeholder="jane@company.com"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label htmlFor="company" className="text-[10px] font-semibold text-slate-700 font-sans uppercase tracking-wide">Company</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                required
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-1 rounded-md bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition-all text-sm font-sans"
                                                placeholder="Acme Inc."
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="phone" className="text-[10px] font-semibold text-slate-700 font-sans uppercase tracking-wide">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-1 rounded-md bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition-all text-sm font-sans"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="type" className="text-[10px] font-semibold text-slate-700 font-sans uppercase tracking-wide">Inquiry Type</label>
                                        <select
                                            id="type"
                                            name="type"
                                            value={formData.type}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-1 rounded-md bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition-all appearance-none text-sm font-sans"
                                        >
                                            <option value="sales">Sales Inquiry</option>
                                            <option value="support">Product Support</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="message" className="text-[10px] font-semibold text-slate-700 font-sans uppercase tracking-wide">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={2}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-1 rounded-md bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none transition-all resize-none text-sm font-sans"
                                            placeholder="Tell us about your project needs..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg shadow-md shadow-sky-600/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm font-sans"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-3.5 h-3.5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Minimal Footer for Single Screen */}
            <div className="py-2 text-center text-[10px] text-slate-400 border-t border-slate-200 bg-white/50">
                © 2025 MoviCloud Labs. All rights reserved.
            </div>
        </div >
    );
};

export default ContactUs;
