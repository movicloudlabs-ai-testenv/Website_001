import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Menu,
  X,
  Code,
  Smartphone,
  Cloud,
  ShieldCheck,
  Wrench,
  Cpu,
  Stethoscope,
  Truck,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  Hotel,
  ClipboardList,
  Megaphone,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------- ITEM COMPONENT ----------------------------- */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode; active?: boolean }
>(({ className, title, children, icon, href, active, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          to={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-200 border border-transparent",
            active
              ? "bg-blue-50 border-blue-100 shadow-sm"
              : "hover:bg-slate-50 hover:shadow-sm hover:border-slate-100",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3 mb-2">
            {icon && (
              <div
                className={cn(
                  "p-2 rounded-lg transition-colors duration-300",
                  active
                    ? "bg-[#2C6BED] text-white"
                    : "text-[#2C6BED] bg-blue-50 group-hover:bg-[#2C6BED] group-hover:text-white"
                )}
              >
                {icon}
              </div>
            )}
            <div
              className={cn(
                "text-base font-bold font-heading leading-none transition-colors",
                active ? "text-[#2C6BED]" : "text-[#0E224B] group-hover:text-[#2C6BED]"
              )}
            >
              {title}
            </div>
          </div>
          <p className="line-clamp-3 text-xs leading-relaxed text-slate-500 font-medium pl-[3.25rem]">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

/* ----------------------------- MAIN NAVIGATION ----------------------------- */

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const pathname = location.pathname;

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const isActive = (path: string) => pathname === path;

  const industries = [
    { title: "Hospital Management", href: "/products/hospital", icon: <Stethoscope className="w-4 h-4" /> },
    { title: "Transport Management", href: "/products/transport", icon: <Truck className="w-4 h-4" /> },
    { title: "Office / Work Management", href: "/products/office", icon: <Briefcase className="w-4 h-4" /> },
    { title: "School & Alumni", href: "/products/school", icon: <GraduationCap className="w-4 h-4" /> },
    { title: "E-commerce Inventory", href: "/products/ecommerce", icon: <ShoppingCart className="w-4 h-4" /> },
    { title: "Hotel & Hospitality", href: "/products/hotel", icon: <Hotel className="w-4 h-4" /> },
    { title: "Survey System", href: "/products/survey", icon: <ClipboardList className="w-4 h-4" /> },
    { title: "Marketing Suite", href: "/products/marketing", icon: <Megaphone className="w-4 h-4" /> },
  ];

  const services = [
    { title: "Web Development", href: "#", icon: <Code className="w-4 h-4" /> },
    { title: "Mobile Development", href: "#", icon: <Smartphone className="w-4 h-4" /> },
    { title: "Cloud Solutions", href: "#", icon: <Cloud className="w-4 h-4" /> },
    { title: "Security Solutions", href: "#", icon: <ShieldCheck className="w-4 h-4" /> },
    { title: "Maintenance", href: "#", icon: <Wrench className="w-4 h-4" /> },
    { title: "AI & Automation", href: "#", icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/logo1.jpg" className="w-full h-full object-contain" alt="MoviCloud Logo" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold font-heading text-lg leading-none">MoviCloud Labs</span>
              <span className="text-xs text-muted-foreground">Intelligent Applications</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>

                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-heading text-base",
                        isActive("/") && "bg-accent text-accent-foreground"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "font-heading text-base",
                      industries.some(i => isActive(i.href)) && "bg-accent text-accent-foreground"
                    )}
                  >
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!mt-0 !pt-0 rounded-none">
                    <div className="w-screen max-w-none p-0 overflow-hidden bg-white shadow-xl rounded-b-xl !mt-0">
                      {/* MAIN GRID */}
                      <ul className="grid grid-cols-4 gap-4 p-6 list-none m-0">
                        {industries.map((item, idx) => (
                          <ListItem
                            key={idx}
                            href={item.href}
                            title={item.title}
                            icon={item.icon}
                            active={isActive(item.href)}
                          >
                            {/* Description placeholder - ideally this comes from the data object */}
                            Comprehensive solution for {item.title.toLowerCase()}.
                          </ListItem>
                        ))}
                      </ul>

                      {/* BOTTOM DARK SECTION */}
                      <div className="grid grid-cols-2 gap-6 bg-[#0E224B] p-6 text-white">
                        <div className="space-y-2">
                          <h4 className="font-semibold font-heading text-sm flex items-center gap-2">
                            <Cloud className="w-4 h-4 text-[#2C6BED]" />
                            MoviCloud Platform
                          </h4>
                          <p className="text-xs text-gray-300 leading-relaxed">
                            AI-powered business applications for modern enterprises. Building intelligent solutions for Analytics, AI, and Data Engineering.
                          </p>
                        </div>
                        <Link
                          to="/contact"
                          className="group flex flex-col justify-center rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Get Started</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                          <p className="mt-1 text-xs text-gray-400">
                            Book a demo or contact our sales team.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-heading text-base">Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="!mt-0 !pt-0 rounded-none">
                    <div className="w-screen max-w-none p-0 overflow-hidden bg-white shadow-xl rounded-b-xl !mt-0">
                      {/* MAIN GRID */}
                      <ul className="grid grid-cols-3 gap-4 p-6 list-none m-0">
                        {services.map((item, idx) => (
                          <ListItem
                            key={idx}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                            active={isActive(item.href)}
                          >
                            Professional {item.title.toLowerCase()} services.
                          </ListItem>
                        ))}
                      </ul>

                      {/* BOTTOM DARK SECTION */}
                      <div className="grid grid-cols-2 gap-6 bg-[#0E224B] p-6 text-white">
                        <div className="space-y-2">
                          <h4 className="font-semibold font-heading text-sm flex items-center gap-2">
                            <Wrench className="w-4 h-4 text-[#2C6BED]" />
                            MoviCloud Services
                          </h4>
                          <p className="text-xs text-gray-300 leading-relaxed">
                            End-to-end technical services to support your digital transformation journey. From development to security and maintenance.
                          </p>
                        </div>
                        <Link
                          to="/contact"
                          className="group flex flex-col justify-center rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Get a Quote</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                          <p className="mt-1 text-xs text-gray-400">
                            Discuss your project with our experts.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/career">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-heading text-base",
                        isActive("/career") && "bg-accent text-accent-foreground"
                      )}
                    >
                      Career
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/contact">
              <Button className="bg-gradient-primary font-heading text-base">Contact Us</Button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ---------------------- MOBILE MENU OVERLAY & SIDEBAR ---------------------- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-[40] md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 left-0 h-[calc(100dvh-4rem)] w-[85%] max-w-sm bg-white/95 backdrop-blur-xl z-[50] shadow-2xl md:hidden flex flex-col border-r border-slate-100"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.98)" }}
            >
              {/* Scrollable Content */}
              <div className="grow overflow-y-auto py-6 px-4 space-y-2">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="space-y-2"
                >
                  <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
                    <Link
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-3.5 rounded-xl font-heading font-semibold text-lg transition-colors group",
                        isActive("/")
                          ? "bg-blue-50 text-blue-600"
                          : "hover:bg-blue-50/50 text-slate-800"
                      )}
                    >
                      Home
                      <ArrowRight
                        className={cn(
                          "w-4 h-4 transition-colors",
                          isActive("/") ? "text-blue-600" : "text-slate-300 group-hover:text-blue-500"
                        )}
                      />
                    </Link>
                  </motion.div>

                  {/* Industries Accordion */}
                  <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="space-y-1">
                    <button
                      onClick={() => toggleSubmenu("industries")}
                      className={cn(
                        "w-full flex items-center justify-between p-3.5 rounded-xl font-heading font-semibold text-lg transition-colors",
                        openSubmenu === "industries" || industries.some(i => isActive(i.href))
                          ? "bg-slate-50 text-blue-600"
                          : "text-slate-800 hover:bg-slate-50"
                      )}
                    >
                      <span>Industries</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          openSubmenu === "industries" ? "rotate-180 text-blue-500" : "text-slate-400"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openSubmenu === "industries" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pr-2 pb-2 pt-1 space-y-1">
                            {industries.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "flex items-center gap-3 p-2.5 rounded-lg transition-colors",
                                  isActive(item.href)
                                    ? "bg-blue-50 text-blue-700"
                                    : "hover:bg-blue-50 text-slate-600 hover:text-blue-700"
                                )}
                              >
                                <div
                                  className={cn(
                                    "p-1.5 rounded-md shrink-0",
                                    isActive(item.href) ? "text-blue-600 bg-white" : "text-blue-500 bg-blue-50"
                                  )}
                                >
                                  {item.icon}
                                </div>
                                <span className="text-sm font-medium leading-tight">{item.title}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Services Accordion */}
                  <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }} className="space-y-1">
                    <button
                      onClick={() => toggleSubmenu("services")}
                      className={cn(
                        "w-full flex items-center justify-between p-3.5 rounded-xl font-heading font-semibold text-lg transition-colors",
                        openSubmenu === "services"
                          ? "bg-slate-50 text-blue-600"
                          : "text-slate-800 hover:bg-slate-50"
                      )}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          openSubmenu === "services" ? "rotate-180 text-blue-500" : "text-slate-400"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openSubmenu === "services" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pr-2 pb-2 pt-1 space-y-1">
                            {services.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "flex items-center gap-3 p-2.5 rounded-lg transition-colors",
                                  isActive(item.href)
                                    ? "bg-blue-50 text-blue-700"
                                    : "hover:bg-blue-50 text-slate-600 hover:text-blue-700"
                                )}
                              >
                                <div
                                  className={cn(
                                    "p-1.5 rounded-md shrink-0",
                                    isActive(item.href) ? "text-blue-600 bg-white" : "text-blue-500 bg-blue-50"
                                  )}
                                >
                                  {item.icon}
                                </div>
                                <span className="text-sm font-medium leading-tight">{item.title}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div variants={{ hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } }}>
                    <Link
                      to="/career"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-3.5 rounded-xl font-heading font-semibold text-lg transition-colors group",
                        isActive("/career")
                          ? "bg-blue-50 text-blue-600"
                          : "hover:bg-blue-50/50 text-slate-800"
                      )}
                    >
                      Career
                      <ArrowRight
                        className={cn(
                          "w-4 h-4 transition-colors",
                          isActive("/career") ? "text-blue-600" : "text-slate-300 group-hover:text-blue-500"
                        )}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="flex-none p-5 border-t border-slate-100/50 bg-slate-50/50 backdrop-blur-sm">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#2C6BED] hover:bg-[#2356bd] text-white font-heading text-base py-6 shadow-lg shadow-blue-500/20 rounded-xl transition-all active:scale-[0.98]">
                    Contact Us
                  </Button>
                </Link>
                <p className="text-center text-xs text-slate-400 mt-4 font-medium">
                  © 2025 MoviCloud Labs
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav >
  );
};

export default Navigation;
