import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Smartphone, Cloud, ShieldCheck, Wrench, Cpu } from "lucide-react";

/* ----------------------------- ITEM COMPONENT ----------------------------- */
const Item = ({ name, desc, link }: { name: string; desc: string; link: string }) => (
  <div className="cursor-pointer group">
    <h4 className="text-sm font-semibold !text-[#2C6BED] group-hover:!text-[#0E224B] transition-colors">
      <Link to={link}>{name}</Link>
    </h4>
    <p className="text-xs text-gray-600 leading-relaxed mt-1">{desc}</p>
  </div>
);

/* ----------------------------- SOLUTION COMPONENT ----------------------------- */
const Solution = ({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start space-x-3 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
    <div className="w-11 h-11 bg-gray-200 rounded-md flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-xs text-gray-600">{desc}</p>
    </div>
  </div>
);

/* ----------------------------- MAIN NAVIGATION ----------------------------- */

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  /* PRODUCT DROPDOWN STATE */
  const [productsOpen, setProductsOpen] = useState(false);

  /* SOLUTIONS DROPDOWN STATE */
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const solutionRef = useRef<HTMLDivElement | null>(null);

  /* CLOSE PANELS ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        solutionRef.current &&
        !solutionRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
        setSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/logo1.jpg" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">MoviCloud Labs</span>
              <span className="text-xs text-muted-foreground">Intelligent Applications</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">

            <Link to="/" className="hover:text-primary">Home</Link>

            {/* PRODUCTS BUTTON */}
            <button
              onClick={() => {
                setProductsOpen(!productsOpen);
                setSolutionsOpen(false);
              }}
              className="hover:text-primary flex items-center space-x-1"
            >
              <span>Products</span>
              <svg
                className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* SOLUTIONS BUTTON */}
            <div ref={solutionRef} className="relative">
              <button
                onClick={() => {
                  setSolutionsOpen(!solutionsOpen);
                  setProductsOpen(false);
                }}
                className="hover:text-primary flex items-center space-x-1"
              >
                <span>Solutions</span>
                <svg
                  className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link to="/career" className="hover:text-primary">Career</Link>

            <Button variant="outline" size="sm">Get a Demo</Button>

            <Link to="/contact">
              <Button size="sm" className="bg-gradient-primary">Contact Us</Button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* ---------------------- PRODUCTS MEGA PANEL ---------------------- */}
      {productsOpen && (
        <div
          ref={panelRef}
          className="absolute left-0 w-full z-40"
          style={{ top: "64px" }}
        >
          <div className="w-full bg-[#F7FAFC] border-t border-gray-200">

            {/* FULL SCREEN HEIGHT - NAVBAR */}
            <div className="h-[calc(100vh-64px)] overflow-y-auto">
              <div className="mx-auto max-w-7xl px-10 py-14">

                <div className="grid grid-cols-12 gap-10 items-start">

                  {/* LEFT BOX */}
                  <div className="col-span-3 pr-10 border-r border-gray-200">
                    <h3 className="text-lg font-bold text-[#0E224B] mb-3">MoviCloud Platform</h3>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      AI-powered business applications for modern enterprises.
                    </p>

                    <Link to="/products" className="text-sm underline text-[#2C6BED]">
                      View all products →
                    </Link>

                    {/* THIN LINE */}
                    <div className="border-b border-gray-200 my-5" />

                    {/* NEW TITLE */}
                    <h4 className="text-sm font-semibold text-[#0E224B] mb-2">
                      Building Intelligent Enterprise Solutions
                    </h4>

                    {/* THIN LINE */}
                    <div className="border-b border-gray-200 my-4" />

                    {/* CATEGORIES */}
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>Analytics</li>
                      <li>AI</li>
                      <li>Data Engineering</li>
                      <li>Applications & Collaboration</li>
                    </ul>
                  </div>

                  {/* MIDDLE PRODUCTS */}
                  <div className="col-span-6 px-8">
                    <div className="grid grid-cols-2 gap-y-8 gap-x-12">

                      <Item
                        name="Hospital Management"
                        desc="Transform healthcare delivery with AI-powered patient management."
                        link="/products/hospital"
                      />

                      <Item
                        name="Transport Management"
                        desc="Optimize fleet operations with GPS tracking, route planning, and predictive AI."
                        link="/products/transport"
                      />

                      <Item
                        name="Office / Work Management"
                        desc="Empower teams with intelligent task management and collaboration tools."
                        link="/products/office"
                      />

                      <Item
                        name="School & Alumni"
                        desc="Educational management system with analytics, records, and alumni networking."
                        link="/products/school"
                      />

                    </div>
                  </div>

                  {/* RIGHT PRODUCTS */}
                  <div className="col-span-3 pl-8 space-y-8">

                    <Item
                      name="E-commerce Inventory"
                      desc="AI-powered inventory tracking, demand forecasting, and automated stock control."
                      link="/products/Ecommerce"
                    />

                    <Item
                      name="Hotel & Hospitality"
                      desc="Complete hospitality platform with bookings, guest services, and analytics."
                      link="/products/Hotel"
                    />

                    <Item
                      name="Survey System"
                      desc="AI-enabled feedback collection with sentiment analysis and insights."
                      link="/products/survey"
                    />

                    <Item
                      name="Marketing Suite"
                      desc="AI-powered SEO, social media management, content creation & campaign analytics."
                      link="/products/Marketing"
                    />

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* ---------------------- SOLUTIONS MEGA PANEL (YOUR ORIGINAL) ---------------------- */}
      {solutionsOpen && (
        <div
          ref={solutionRef}
          className="absolute left-0 w-full z-40"
          style={{ top: "64px" }}
        >
          <div className="w-full bg-white border-t border-gray-200 shadow-xl">
            <div className="mx-auto max-w-7xl px-10 py-10 grid grid-cols-12 gap-10">

              {/* PRODUCTS LIST */}
              <div className="col-span-4 border-r pr-10">
                <h3 className="text-xs font-semibold text-[#2C6BED] uppercase tracking-wide mb-4">
                  Products
                </h3>
                <ul className="space-y-4 text-sm">
                  <li>Hospital Management</li>
                  <li>Transport Management</li>
                  <li>Office / Work Management</li>
                  <li>School & Alumni</li>
                  <li>E-commerce Inventory</li>
                  <li>Hotel & Hospitality</li>
                  <li>Survey System</li>
                  <li>Marketing Suite</li>
                </ul>
              </div>

              {/* ENABLEMENT SOLUTIONS */}
              <div className="col-span-4">
                <h3 className="text-xs font-semibold text-[#2C6BED] uppercase tracking-wide mb-4">
                  Enablement Solutions
                </h3>

                <Solution
                  icon={<Code className="w-6 h-6 text-[#2C6BED]" />}
                  title="Web Development"
                  desc="Custom full-stack solutions"
                />

                <Solution
                  icon={<Smartphone className="w-6 h-6 text-[#2C6BED]" />}
                  title="Mobile Development"
                  desc="Cross-platform mobile apps"
                />

                <Solution
                  icon={<Cloud className="w-6 h-6 text-[#2C6BED]" />}
                  title="Cloud Solutions"
                  desc="Infrastructure & deployments"
                />
              </div>

              {/* PLATFORM SOLUTIONS */}
              <div className="col-span-4">
                <h3 className="text-xs font-semibold text-[#2C6BED] uppercase tracking-wide mb-4">
                  Platform Solutions
                </h3>

                <Solution
                  icon={<ShieldCheck className="w-6 h-6 text-[#2C6BED]" />}
                  title="Security Solutions"
                  desc="End-to-end protection"
                />

                <Solution
                  icon={<Wrench className="w-6 h-6 text-[#2C6BED]" />}
                  title="Maintenance & Support"
                  desc="Ongoing tech help"
                />

                <Solution
                  icon={<Cpu className="w-6 h-6 text-[#2C6BED]" />}
                  title="AI & Automation"
                  desc="Smart workflow intelligence"
                />

              </div>

            </div>
          </div>
        </div>
      )}

      {/* ---------------------- MOBILE MENU ---------------------- */}
      {isOpen && (
        <div className="md:hidden pb-4 space-y-4 bg-background animate-fade-in">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-primary">
            Home
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="block hover:text-primary">
            Products
          </Link>
          <Button variant="outline" size="sm" className="w-full">Get a Demo</Button>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button size="sm" className="bg-gradient-primary">Contact Us</Button>
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navigation;
