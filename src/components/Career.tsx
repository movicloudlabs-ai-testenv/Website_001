import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Users,
  Lightbulb,
  Handshake,
  UserCheck,
  CheckSquare,
  ArrowRight,
  Globe,
  Briefcase,
  Heart,
  Zap,
  Award,
  Sparkles,
  Rocket
} from "lucide-react";

const CareerPage: React.FC = () => {
  const perks = [
    {
      title: "Collaborative Culture",
      desc: "Work with passionate individuals who challenge and support each other to achieve greatness.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Innovation First",
      desc: "We encourage bold ideas and provide the resources to turn them into reality.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      title: "Competitive Compensation",
      desc: "Top-tier salary packages, equity options, and comprehensive benefits for you and your family.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Growth & Development",
      desc: "Continuous learning opportunities, mentorship programs, and career advancement paths.",
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  const stats = [
    { value: "100+", label: "Global Employees" },
    { value: "12+", label: "Years of Excellence" },
    { value: "5", label: "Global Offices" },
    { value: "1k+", label: "Projects Delivered" },
  ];

  const categories = [
    {
      title: "Engineering",
      count: 12,
      roles: ["Senior Full Stack Engineer", "DevOps Specialist", "AI/ML Researcher"],
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Product & Design",
      count: 8,
      roles: ["Product Manager", "Senior UI/UX Designer", "Product Designer"],
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Sales & Marketing",
      count: 6,
      roles: ["Enterprise Account Executive", "Growth Marketing Manager", "Content Strategist"],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Operations",
      count: 4,
      roles: ["HR Business Partner", "Office Manager", "Finance Analyst"],
      icon: <Users className="w-5 h-5" />
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navigation />

      {/* Hero Section - Consistent Light Theme */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
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
              We are hiring
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight font-display">
              Join the <span className="text-teal-600">MoviCloud</span> Team
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto mb-10">
              Be part of a visionary team dedicated to redefining enterprise intelligence. We build technology that matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#vacancies">
                <Button className="h-12 px-8 bg-teal-600 hover:bg-teal-700 text-white text-base font-bold rounded-lg shadow-lg shadow-teal-600/20 transition-all transform hover:scale-105">
                  View Open Roles
                </Button>
              </a>
              <a href="#culture">
                <Button variant="outline" className="h-12 px-8 border-slate-200 text-slate-700 hover:bg-slate-50 text-base font-medium rounded-lg">
                  Our Culture
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Clean & Minimal */}
      <section className="py-12 border-y border-slate-200 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1 font-display">{stat.value}</div>
                <div className="text-xs font-bold text-teal-600 uppercase tracking-wider font-sans">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture / Perks Section - Consistent Cards */}
      <section id="culture" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Why Join MoviCloud?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-sans">
              We foster an environment where creativity thrives and every voice is heard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">{perk.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  {perk.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid - Clean Layout */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-4 space-y-6">
              <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                <img src="/career/office1.png" alt="Office Life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="rounded-2xl overflow-hidden h-96 shadow-xl">
                <img src="/career/hero.png" alt="Team Collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 space-y-6">
              <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                <img src="/career/office2.png" alt="Meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies Section - Light Theme with Teal Accents */}
      <section id="vacancies" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Open Positions</h2>
              <p className="text-slate-600 max-w-xl font-sans">
                Ready to make an impact? Explore our current openings.
              </p>
            </div>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-white font-sans">
              View All Positions
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-50 rounded-lg text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">{category.title}</h3>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                    {category.count} Openings
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {category.roles.map((role, rIndex) => (
                    <div key={rIndex} className="flex items-center justify-between text-sm text-slate-500 hover:text-teal-600 transition-colors group/role">
                      <span className="font-medium">{role}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover/role:opacity-100 -translate-x-2 group-hover/role:translate-x-0 transition-all text-teal-600" />
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <span className="text-teal-600 text-sm font-bold group-hover:text-teal-700 flex items-center gap-2 transition-colors">
                    View Department <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
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

export default CareerPage;
