import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ----------------------------- ITEM COMPONENT ----------------------------- */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          to={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-slate-50 hover:shadow-sm group border border-transparent hover:border-slate-100",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3 mb-2">
            {icon && (
              <div className="text-[#2C6BED] bg-blue-50 p-2 rounded-lg group-hover:bg-[#2C6BED] group-hover:text-white transition-colors duration-300">
                {icon}
              </div>
            )}
            <div className="text-base font-bold font-heading leading-none text-[#0E224B] group-hover:text-[#2C6BED] transition-colors">
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
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-heading text-base")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-heading text-base">Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[1200px] p-0 overflow-hidden rounded-xl bg-white shadow-xl">
                      {/* MAIN GRID */}
                      <ul className="grid grid-cols-4 gap-4 p-6 list-none m-0">
                        <ListItem
                          href="/products/hospital"
                          title="Hospital Management"
                          icon={<Stethoscope className="w-5 h-5 group-hover:animate-wiggle" />}
                        >
                          Comprehensive healthcare platform optimizing patient care, staff scheduling, and resource allocation with predictive AI analytics.
                        </ListItem>
                        <ListItem
                          href="/products/transport"
                          title="Transport Management"
                          icon={<Truck className="w-5 h-5 group-hover:animate-slide-right" />}
                        >
                          Advanced fleet operations with real-time GPS tracking, route optimization, and predictive maintenance for logistics.
                        </ListItem>
                        <ListItem
                          href="/products/office"
                          title="Office / Work Management"
                          icon={<Briefcase className="w-5 h-5 group-hover:animate-pulse-scale" />}
                        >
                          Streamline team collaboration with intelligent task tracking, automated workflows, and productivity insights for modern workplaces.
                        </ListItem>
                        <ListItem
                          href="/products/school"
                          title="School & Alumni"
                          icon={<GraduationCap className="w-5 h-5 group-hover:animate-tada" />}
                        >
                          Integrated educational management system connecting students, faculty, and alumni with seamless records and communication.
                        </ListItem>
                        <ListItem
                          href="/products/ecommerce"
                          title="E-commerce Inventory"
                          icon={<ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />}
                        >
                          Smart inventory control system with demand forecasting, automated restocking, and multi-channel sales integration.
                        </ListItem>
                        <ListItem
                          href="/products/hotel"
                          title="Hotel & Hospitality"
                          icon={<Hotel className="w-5 h-5 group-hover:animate-pulse-scale" />}
                        >
                          Elevate guest experiences with a unified platform for booking management, housekeeping, and personalized concierge services.
                        </ListItem>
                        <ListItem
                          href="/products/survey"
                          title="Survey System"
                          icon={<ClipboardList className="w-5 h-5 group-hover:animate-wiggle" />}
                        >
                          Gather actionable insights with AI-powered surveys featuring sentiment analysis and real-time data visualization tools.
                        </ListItem>
                        <ListItem
                          href="/products/marketing"
                          title="Marketing Suite"
                          icon={<Megaphone className="w-5 h-5 group-hover:animate-tada" />}
                        >
                          Drive growth with an all-in-one marketing toolkit for SEO, content automation, social media, and campaign performance tracking.
                        </ListItem>
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
                  <NavigationMenuContent>
                    <div className="w-[900px] p-0 overflow-hidden rounded-xl bg-white shadow-xl">
                      {/* MAIN GRID */}
                      <ul className="grid grid-cols-3 gap-4 p-6 list-none m-0">
                        <ListItem
                          title="Web Development"
                          href="#"
                          icon={<Code className="w-5 h-5 group-hover:animate-pulse-scale" />}
                        >
                          Build scalable, high-performance web applications with modern frameworks like React, Next.js, and Node.js tailored to your business goals.
                        </ListItem>
                        <ListItem
                          title="Mobile Development"
                          href="#"
                          icon={<Smartphone className="w-5 h-5 group-hover:animate-wiggle" />}
                        >
                          Create seamless, native-like experiences for iOS and Android using cross-platform technologies like Flutter and React Native.
                        </ListItem>
                        <ListItem
                          title="Cloud Solutions"
                          href="#"
                          icon={<Cloud className="w-5 h-5 group-hover:animate-slide-right" />}
                        >
                          Secure, scalable cloud infrastructure design and migration services on AWS, Azure, and Google Cloud Platform for optimal performance.
                        </ListItem>
                        <ListItem
                          title="Security Solutions"
                          href="#"
                          icon={<ShieldCheck className="w-5 h-5 group-hover:animate-tada" />}
                        >
                          Comprehensive cybersecurity audits, penetration testing, and real-time threat monitoring to protect your enterprise assets.
                        </ListItem>
                        <ListItem
                          title="Maintenance"
                          href="#"
                          icon={<Wrench className="w-5 h-5 group-hover:animate-wiggle" />}
                        >
                          Proactive system maintenance, 24/7 support, and performance optimization to ensure your applications run smoothly.
                        </ListItem>
                        <ListItem
                          title="AI & Automation"
                          href="#"
                          icon={<Cpu className="w-5 h-5 group-hover:animate-pulse-scale" />}
                        >
                          Leverage machine learning and intelligent automation to streamline workflows, reduce costs, and drive data-driven decision making.
                        </ListItem>
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
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-heading text-base")}>
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

      {/* ---------------------- MOBILE MENU ---------------------- */}
      {
        isOpen && (
          <div className="md:hidden pb-4 space-y-4 bg-background animate-fade-in px-4 border-t">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-primary">
              Home
            </Link>
            <Link to="/products" onClick={() => setIsOpen(false)} className="block py-2 hover:text-primary">
              Industries
            </Link>
            <Link to="/career" onClick={() => setIsOpen(false)} className="block py-2 hover:text-primary">
              Career
            </Link>
            <div className="flex items-center space-x-2 ml-4">
              <Link to="/contact">
                <Button className="bg-gradient-primary font-heading text-base">
                  Contact Us
                </Button>
              </Link>
            </div>

          </div>
        )
      }
    </nav >
  );
};

export default Navigation;
