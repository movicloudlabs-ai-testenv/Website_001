import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Building2, Globe, CheckCircle2, Send } from 'lucide-react';
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
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-sky-100 selection:text-sky-900">
            <Navigation />

            {/* Hero Section - Compacted */}
            <section className="relative pt-20 pb-8 lg:pt-32 lg:pb-12 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100/40 via-slate-50/20 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight font-display">
                            Get in touch with our team
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-sans">
                            Whether you have questions about our enterprise solutions, need a demo, or require technical support, we're here to help you scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Grid - Compacted */}
            <section className="pb-16">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

                        {/* Left Column: Contact Options */}
                        <div className="lg:col-span-5 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-2 font-sans">Contact Sales</h3>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-display">Ready to transform your business?</h2>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed font-sans">
                                    Speak with our enterprise experts to discover how MoviCloud can optimize your operations with AI-driven analytics.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-sky-50 rounded-lg text-sky-600">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 text-sm font-heading">Sales Inquiry</h4>
                                            <p className="text-slate-500 text-xs mb-0.5 font-sans">For enterprise plans and custom solutions.</p>
                                            <a href="mailto:sales@movicloud.com" className="text-sky-600 text-sm font-medium hover:text-sky-700 hover:underline font-sans">sales@movicloud.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                            <Building2 className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 text-sm font-heading">Partnership</h4>
                                            <p className="text-slate-500 text-xs mb-0.5 font-sans">Explore partnership opportunities.</p>
                                            <a href="mailto:partners@movicloud.com" className="text-blue-600 text-sm font-medium hover:text-blue-700 hover:underline font-sans">partners@movicloud.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 text-sm font-heading">Media & Press</h4>
                                            <p className="text-slate-500 text-xs mb-0.5 font-sans">Get the latest news and assets.</p>
                                            <a href="mailto:press@movicloud.com" className="text-purple-600 text-sm font-medium hover:text-purple-700 hover:underline font-sans">press@movicloud.com</a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Trust Badge */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="p-5 bg-slate-100 rounded-xl border border-slate-200"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                                    <span className="font-semibold text-slate-900 text-sm font-heading">Trusted by Industry Leaders</span>
                                </div>
                                <p className="text-xs text-slate-600 font-sans">
                                    Join 500+ enterprises optimizing their workflow with MoviCloud.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Column: Contact Form - Compacted */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8"
                            >
                                {submitted ? (
                                    <div className="text-center py-16">
                                        <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Message Sent!</h3>
                                        <p className="text-slate-600 text-sm font-sans">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-6 text-sky-600 font-medium hover:underline text-sm font-sans"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label htmlFor="firstName" className="text-xs font-semibold text-slate-700 font-sans">First Name</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-sm font-sans"
                                                    placeholder="Jane"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label htmlFor="lastName" className="text-xs font-semibold text-slate-700 font-sans">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-sm font-sans"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="email" className="text-xs font-semibold text-slate-700 font-sans">Work Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-sm font-sans"
                                                placeholder="jane@company.com"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label htmlFor="company" className="text-xs font-semibold text-slate-700 font-sans">Company Name</label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    required
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-sm font-sans"
                                                    placeholder="Acme Inc."
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label htmlFor="phone" className="text-xs font-semibold text-slate-700 font-sans">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all text-sm font-sans"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="type" className="text-xs font-semibold text-slate-700 font-sans">Inquiry Type</label>
                                            <select
                                                id="type"
                                                name="type"
                                                value={formData.type}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all appearance-none text-sm font-sans"
                                            >
                                                <option value="sales">Sales Inquiry</option>
                                                <option value="support">Product Support</option>
                                                <option value="partnership">Partnership</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label htmlFor="message" className="text-xs font-semibold text-slate-700 font-sans">How can we help?</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={3}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none text-sm font-sans"
                                                placeholder="Tell us about your project needs..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg shadow-lg shadow-sky-600/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm font-sans"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Offices Section - Compacted */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold mb-3 font-display">Global Presence</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm font-sans">
                            With offices in key technology hubs around the world, we are positioned to support your global operations 24/7.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {offices.map((office, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-5 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-sky-500/50 transition-colors group"
                            >
                                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-all">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold mb-1 font-heading">{office.city}</h3>
                                <p className="text-sky-400 text-xs font-medium mb-3 font-sans">{office.country}</p>
                                <div className="space-y-1.5 text-slate-400 text-xs font-sans">
                                    <p>{office.address}</p>
                                    <p>{office.phone}</p>
                                    <p>{office.email}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;
