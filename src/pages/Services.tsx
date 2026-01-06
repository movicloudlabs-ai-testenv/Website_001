import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Code, Smartphone, Cloud, ShieldCheck, Wrench, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "web",
      title: "Web Development",
      icon: <Code className="w-8 h-8" />,
      description: "Custom web applications built with modern technologies and best practices for scalability and performance.",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Integration"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["Native iOS & Android", "React Native", "Flutter", "App Store Deployment"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      icon: <Cloud className="w-8 h-8" />,
      description: "Scalable cloud infrastructure and migration services for modern, distributed applications.",
      features: ["AWS & Azure", "Cloud Migration", "Serverless Architecture", "DevOps Automation"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: "security",
      title: "Security Solutions",
      icon: <ShieldCheck className="w-8 h-8" />,
      description: "Comprehensive security audits, penetration testing, and implementation of robust security measures.",
      features: ["Security Audits", "Penetration Testing", "Data Encryption", "Compliance Management"],
      gradient: "from-red-500 to-orange-500",
    },
    {
      id: "maintenance",
      title: "Maintenance & Support",
      icon: <Wrench className="w-8 h-8" />,
      description: "Ongoing maintenance, updates, and technical support to keep your systems running smoothly.",
      features: ["24/7 Support", "Bug Fixes", "Performance Optimization", "Regular Updates"],
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      id: "ai",
      title: "AI & Automation",
      icon: <Cpu className="w-8 h-8" />,
      description: "Intelligent automation solutions powered by machine learning and artificial intelligence.",
      features: ["Machine Learning", "Process Automation", "Predictive Analytics", "NLP Solutions"],
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs. From development to deployment and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:border-primary/50 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our services can help transform your business
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="shadow-lg">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary border-white">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
