import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    // ✅ Wrap the entire footer inside the section
    <section id="contact">
      <footer className="bg-card border-t border-border mt-12 md:mt-24">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo1.jpg"
                    alt="MoviCloud Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-none">MoviCloud Labs</span>
                  <span className="text-xs text-muted-foreground">Intelligent Applications</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Building intelligent applications that transform businesses through AI and advanced analytics.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/products/hospital" className="hover:text-primary transition-colors">Hospital Management</Link></li>
                <li><Link to="/products/transport" className="hover:text-primary transition-colors">Transport Management</Link></li>
                <li><Link to="/products/office" className="hover:text-primary transition-colors">Office Management</Link></li>
                <li><Link to="/products/school" className="hover:text-primary transition-colors">School Administration</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
                <li><Link to="/career" className="hover:text-primary transition-colors">Careers</Link></li>
                {/* ✅ Link updated to point to contact page */}
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 mt-0.5 text-primary" />
                  <span>info@movicloud.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 mt-0.5 text-primary" />
                  <span>+91 XXX XXX XXXX</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                  <span>India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} MoviCloud Labs Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};
