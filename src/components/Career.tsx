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
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-sky-100 selection:text-sky-900 scroll-smooth">
      <Navigation />
      {/* Hero Section - consistent Light Theme */}
      <section className="relative pt-20 pb-10 lg:pt-20 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100/40 via-slate-50/20 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                We are hiring
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-display">
                Join the <span className="text-sky-600">MoviCloud Labs</span> team
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans max-w-2xl mb-8">
                We’re redefining what products can be, turning advanced analytics and AI into seamless, impactful experiences for every user.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-start">
                <a href="#vacancies">
                  <Button className="h-12 px-8 bg-sky-600 hover:bg-sky-700 text-white text-base font-bold rounded-lg shadow-lg shadow-sky-600/20 transition-all transform hover:scale-105">
                    View Open Roles
                  </Button>
                </a>
                <a href="#vacancies">
                  <Button
                    variant="outline"
                    className="h-12 px-8 border-slate-200 text-slate-700 hover:bg-slate-50 text-base font-medium rounded-lg"
                  >
                    Our Culture
                  </Button>
                </a>
              </div>
            </motion.div>
            {/* Right Column: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:flex justify-end items-start"
            >
              <div className="w-full max-w-lg">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <img
                    src="/career/hero.webp"
                    alt="MoviCloud Labs Office"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>



          </div>
        </div>
      </section>



      {/* Culture / Perks Section - Consistent Cards */}
      <section id="culture" className="py-8 lg:py-10 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1.5 font-display">
              Why Join MoviCloud Labs?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-sans">
              We foster an environment where creativity thrives and every voice is heard.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
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



      {/* Vacancies Section - Light Theme with Sky Accents */}
      <section id="vacancies" className="py-12 lg:py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-1.5 font-display">Open Positions</h2>
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
                className="bg-white border border-slate-200 rounded-xl p-8 hover:border-sky-500 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-50 rounded-lg text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">{category.title}</h3>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 group-hover:bg-sky-50 group-hover:text-sky-700 transition-colors">
                    {category.count} Openings
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  {category.roles.map((role, rIndex) => (
                    <div key={rIndex} className="flex items-center justify-between text-sm text-slate-500 hover:text-sky-600 transition-colors group/role">
                      <span className="font-medium">{role}</span>

                    </div>
                  ))}
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
