import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Eye, 
  EyeOff, 
  Lock, 
  User, 
  ArrowRight, 
  AlertCircle,
  Building2,
  Activity,
  ShieldCheck,
  Cloud,
  LineChart,
  PieChart
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SEO } from "@/components/SEO";
import { getAssetPath } from "@/lib/utils";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate network delay for a premium feel
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (username === "movi" && password === "Movi@2026") {
      setError("");
      navigate("/portal");
    } else {
      setError("Invalid User ID or Password. Please check your credentials.");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#00CED1]/20 selection:text-[#001F3F] flex overflow-hidden relative">
      <SEO
        title="Portal Login | MoviCloud Labs"
        description="Securely access the MoviCloud Platform and management systems."
        canonical="/login"
      />

      {/* Floating Decorative Orbs for background depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00CED1]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#99CC00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-screen relative z-10">
        
        {/* LEFT COLUMN: Premium Tech Banner (Visible only on Desktop) */}
        <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 bg-gradient-to-br from-[#E0F7FA]/50 via-[#B0E0E6]/20 to-white border-r border-[#B0E0E6]/30 flex-col justify-between p-12 relative overflow-hidden">
          
          {/* Animated Matrix/Grid Background */}
          <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,#B0E0E6_1px,transparent_1px),linear-gradient(to_bottom,#B0E0E6_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          {/* Glowing abstract background circle */}
          <div className="absolute top-[30%] left-[30%] w-[300px] h-[300px] bg-gradient-to-tr from-[#00CED1] to-[#0077B6] rounded-full blur-[100px] opacity-10 animate-pulse" />

          {/* Logo / Header */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#B0E0E6] p-2 flex items-center justify-center shadow-sm animate-fade-in">
              <img src={getAssetPath("/logo1.webp")} alt="MoviCloud Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#001F3F] text-xl tracking-tight leading-none">MoviCloud Labs</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5 font-semibold">Intelligent Applications</span>
            </div>
          </div>

          {/* Floating wavy icon cards in the background on the right */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 flex flex-col gap-14 z-10">
            <motion.div 
              animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="p-3 bg-white border border-[#B0E0E6]/40 rounded-xl shadow-md text-[#00CED1] flex items-center justify-center w-12 h-12"
            >
              <LineChart className="w-6 h-6" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="p-3 bg-white border border-[#B0E0E6]/40 rounded-xl shadow-md text-[#0077B6] flex items-center justify-center w-12 h-12"
            >
              <Cloud className="w-6 h-6" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -6, 0], x: [0, -2, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="p-3 bg-white border border-[#B0E0E6]/40 rounded-xl shadow-md text-[#00CED1] flex items-center justify-center w-12 h-12"
            >
              <PieChart className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Core Content Slider/Visuals */}
          <div className="my-auto relative z-10 max-w-lg space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F7FA] border border-[#B0E0E6]/40 text-[#0077B6] text-xs font-bold uppercase tracking-wider">
                Enterprise Hub
              </span>
              <h2 className="text-4xl xl:text-5xl font-bold text-[#001F3F] font-heading leading-tight">
                Empowering Business with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Intelligent Solutions
                </span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-base font-medium">
                Log in to coordinate operations, access AI insights, and manage enterprise systems across our consolidated digital suites.
              </p>
            </motion.div>

            {/* Feature Cards showing premium status */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -4 }}
                className="p-4 bg-white/80 border border-[#B0E0E6]/50 rounded-2xl backdrop-blur-sm shadow-card"
              >
                <div className="p-2 w-8 h-8 rounded-lg bg-[#E0F7FA] flex items-center justify-center text-[#0077B6] mb-3">
                  <Activity className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#001F3F] text-sm mb-1 font-heading">Advanced Analytics</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Real-time operational intelligence and dashboards.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="p-4 bg-white/80 border border-[#B0E0E6]/50 rounded-2xl backdrop-blur-sm shadow-card"
              >
                <div className="p-2 w-8 h-8 rounded-lg bg-[#E0F7FA] flex items-center justify-center text-[#00CED1] mb-3">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#001F3F] text-sm mb-1 font-heading">Unified Platforms</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Seamless management of all hospital & cloud nodes.</p>
              </motion.div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-xs text-slate-400 relative z-10 font-medium">
            &copy; 2026 MoviCloud Labs Pvt Ltd. All rights reserved.
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Card View (Form) */}
        <div className="col-span-1 lg:col-span-6 xl:col-span-5 flex flex-col justify-center items-center p-6 sm:p-12 relative overflow-y-auto bg-slate-50/50">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-white border border-slate-200/80 backdrop-blur-md rounded-3xl p-8 shadow-xl relative"
          >
            {/* Mobile Logo Header */}
            <div className="flex flex-col items-center mb-6 lg:hidden">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#B0E0E6] p-2 flex items-center justify-center mb-3 shadow-sm">
                <img src={getAssetPath("/logo1.webp")} alt="MoviCloud Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="font-bold text-[#001F3F] text-2xl tracking-tight font-heading">MoviCloud Labs</h2>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-semibold">Intelligent Applications</p>
            </div>

            {/* Shield Check Premium Icon at the top of the card */}
            <div className="w-14 h-14 bg-sky-50 text-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-4 border border-sky-100 shadow-sm animate-scale-in">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-[#001F3F] font-heading">Welcome Back</h1>
              <p className="text-slate-500 text-sm mt-1">Enter your credentials to access the secure portal.</p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex gap-3 items-start"
              >
                <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                <span>{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-slate-700 font-medium text-sm">User ID</Label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    type="text"
                    id="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-11 bg-slate-50/50 border-[#B0E0E6] text-[#001F3F] placeholder:text-slate-400 focus-visible:ring-[#00CED1] focus-visible:border-transparent py-5 rounded-xl transition-all"
                    placeholder="e.g. movi"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-slate-700 font-medium text-sm">Password</Label>
                  <button 
                    type="button"
                    className="text-xs text-[#0077B6] hover:text-[#00CED1] font-semibold transition-colors"
                    onClick={() => setError("Please contact your administrator for credentials reset.")}
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 pr-10 bg-slate-50/50 border-[#B0E0E6] text-[#001F3F] placeholder:text-slate-400 focus-visible:ring-[#00CED1] focus-visible:border-transparent py-5 rounded-xl transition-all"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 py-1">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(!!checked)}
                  className="border-slate-300 data-[state=checked]:bg-[#00CED1] data-[state=checked]:border-transparent"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium text-slate-500 cursor-pointer select-none"
                >
                  Remember me on this device
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-primary hover:opacity-95 text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#00CED1]/20 hover:shadow-glow group transition-all duration-300 active:scale-[0.98] font-heading text-base"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>

            {/* OR Separator */}
            <div className="relative my-4 flex items-center justify-center">
              <span className="absolute w-full border-t border-slate-100" />
              <span className="relative bg-white px-3 text-xs uppercase text-slate-400 font-semibold font-sans">OR</span>
            </div>

            {/* Sign in with SSO Action Button */}
            <Button
              type="button"
              variant="outline"
              onClick={() => setError("Single sign-on is not active for this account.")}
              className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold py-6 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <Lock className="w-4 h-4 text-slate-400" />
              Sign in with SSO
            </Button>

            <div className="mt-8 text-center text-xs text-slate-400 font-medium">
              Secure single-sign-on protection for MoviCloud services.
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
