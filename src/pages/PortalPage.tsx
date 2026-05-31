import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Utensils, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight, 
  Truck, 
  Briefcase, 
  GraduationCap, 
  Hotel, 
  ShieldCheck, 
  Settings, 
  LogOut 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const PortalPage = () => {
  const navigate = useNavigate();

  const activeNodes = [
    {
      id: "hms",
      title: "Hospital Management System",
      description: "Complete clinical and administrative solution. Coordinate patient EMR, appointments, doctor schedules, pharmacy prescriptions, and AI clinical insights from a unified dashboard.",
      url: "https://testenv-hms-1.onrender.com/",
      icon: <Building2 className="w-6 h-6 text-[#0077B6]" />,
      badge: "Active Production Node",
      color: "border-[#B0E0E6] hover:border-[#00CED1]",
      bg: "bg-[#E0F7FA]/10"
    },
    {
      id: "rms",
      title: "Restaurant Management System",
      description: "Streamline dining room and kitchen workflows. Optimize table booking, digital menu configurations, recipe costs, food inventory tracking, and POS analytics in real time.",
      url: "https://rms-1-ln74.onrender.com/",
      icon: <Utensils className="w-6 h-6 text-[#99CC00]" />,
      badge: "Active Production Node",
      color: "border-slate-200 hover:border-[#99CC00]",
      bg: "bg-emerald-50/10"
    }
  ];

  const pitchProducts = [
    {
      title: "Transport Management",
      description: "Optimize fleet operations with real-time GPS tracking, intelligent route optimization, and AI predictive maintenance.",
      icon: <Truck className="w-5 h-5 text-slate-500" />
    },
    {
      title: "Office/Work Management",
      description: "Boost team efficiency with integrated agile task boards, seamless collaboration hubs, and performance metrics.",
      icon: <Briefcase className="w-5 h-5 text-slate-500" />
    },
    {
      title: "School & Alumni",
      description: "Manage courses, attendance, grades, billing, and alumni networking from a consolidated portal.",
      icon: <GraduationCap className="w-5 h-5 text-slate-500" />
    },
    {
      title: "Hotel & Hospitality",
      description: "Coordinate room bookings, guest services, housekeeping assignments, and dynamic room revenue optimization.",
      icon: <Hotel className="w-5 h-5 text-slate-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#00CED1]/20 selection:text-[#001F3F] flex flex-col">
      <SEO
        title="Client Portal | MoviCloud Labs"
        description="Access and manage your active enterprise system nodes."
        canonical="/portal"
      />
      
      <Navigation />

      {/* Spacer for navbar */}
      <div className="h-16 flex-shrink-0" />

      {/* Portal Header/Hero */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#E0F7FA]/40 via-[#B0E0E6]/10 to-transparent border-b border-slate-100 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,#B0E0E6_1px,transparent_1px),linear-gradient(to_bottom,#B0E0E6_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-7xl mx-auto">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F7FA] border border-[#B0E0E6]/30 text-[#0077B6] text-xs font-bold uppercase tracking-wider">
                Enterprise Dashboard
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#001F3F] font-heading tracking-tight">
                Welcome back, <span className="bg-gradient-primary bg-clip-text text-transparent">movi</span>
              </h1>
              <p className="text-slate-600 text-sm md:text-base font-medium max-w-xl">
                Securely manage, monitor, and coordinate your active production nodes across our cloud ecosystem.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => navigate("/login")}
                className="border-slate-200 text-slate-600 hover:bg-slate-100 rounded-xl flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspace */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT SECTION: Active Systems (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#001F3F] font-heading mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#99CC00] animate-pulse" />
                  Active System Nodes
                </h2>
                <p className="text-slate-500 text-xs font-medium">Click "Go" to access the production environments of your active subscriptions.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {activeNodes.map((node) => (
                  <motion.div
                    key={node.id}
                    whileHover={{ y: -3 }}
                    className={`bg-white border ${node.color} rounded-2xl p-6 shadow-sm transition-all duration-300 ${node.bg} relative overflow-hidden group`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="p-3.5 bg-white border border-[#B0E0E6]/50 rounded-xl shadow-sm text-slate-800 shrink-0">
                          {node.icon}
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-bold text-[#001F3F] font-heading group-hover:text-[#0077B6] transition-colors">
                              {node.title}
                            </h3>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] font-bold">
                              <CheckCircle2 className="w-3 h-3" />
                              {node.badge}
                            </span>
                          </div>
                          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                            {node.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        SSL Secured Node
                      </div>
                      
                      <div className="flex gap-2.5">
                        <a
                          href={node.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-[#001F3F] rounded-xl transition-colors flex items-center justify-center shadow-sm"
                          title="Open in new window"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <Button
                          onClick={() => window.location.href = node.url}
                          className="bg-gradient-primary hover:opacity-95 text-white font-bold px-8 py-5 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#00CED1]/15 group transition-all active:scale-[0.98] font-heading text-sm"
                        >
                          Go <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT SECTION: Pitch Solutions (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-[#B0E0E6]/50 rounded-2xl p-6 shadow-sm space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00CED1]/5 rounded-full blur-xl pointer-events-none" />
                
                <div>
                  <h3 className="text-base font-bold text-[#001F3F] font-heading">Expand Your Workspace</h3>
                  <p className="text-slate-500 text-[11px] font-medium leading-relaxed mt-1">
                    Unlock additional specialized management systems to fully digitize and automate your business operations.
                  </p>
                </div>

                <div className="space-y-4">
                  {pitchProducts.map((product, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 bg-slate-50/50 border border-slate-100 hover:border-[#B0E0E6]/50 hover:bg-white rounded-xl transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex gap-3">
                        <div className="p-2 bg-white border border-slate-200/50 rounded-lg text-slate-400 group-hover:text-[#0077B6] group-hover:border-[#B0E0E6]/50 transition-colors shrink-0">
                          {product.icon}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-[#001F3F] text-xs font-heading flex items-center gap-1 group-hover:text-[#0077B6]">
                            {product.title}
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </h4>
                          <p className="text-slate-500 text-[10px] leading-relaxed font-medium">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => navigate("/contact")}
                  className="w-full bg-[#001F3F] hover:bg-[#001429] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-1.5 shadow transition-all active:scale-[0.98] font-heading text-xs uppercase tracking-wide"
                >
                  Contact Sales for Integration
                </Button>
              </div>

              {/* Security info card */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-sm border border-slate-800 flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-[#00CED1]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs">Compliance Protected</h4>
                  <p className="text-[10px] text-slate-400">All data nodes feature HIPAA compliant protocols and end-to-end 256-bit encryption.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortalPage;
