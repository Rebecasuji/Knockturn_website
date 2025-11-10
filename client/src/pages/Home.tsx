import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Building2, Home as HomeIcon, TrendingUp, Users, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      icon: TrendingUp,
      title: "Invest Property",
      description: "Strategic investment opportunities with high ROI potential and expert guidance for portfolio growth.",
    },
    {
      icon: Building2,
      title: "Commercial Property",
      description: "Premium commercial real estate solutions with strategic locations and modern amenities for your business.",
    },
    {
      icon: HomeIcon,
      title: "Residential Property",
      description: "Elegant residential properties designed for comfort, luxury, and sustainable living in prime locations.",
    },
    {
      icon: Users,
      title: "Tenant Property",
      description: "Comprehensive tenant management services ensuring seamless property operations and satisfaction.",
    },
    {
      icon: Palette,
      title: "Design Services",
      description: "Innovative design solutions that transform spaces into functional and aesthetically stunning environments.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <section className="py-24 relative" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient" data-testid="text-services-heading">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
              Comprehensive property management solutions tailored to your unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                index={index}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/services">
              <Button size="lg" className="glow-blue hover:glow-blue-strong" data-testid="button-view-all-services">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card/30" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient" data-testid="text-cta-heading">
              Ready to Transform Your Property Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
              Let's discuss how we can help you achieve your property management goals
            </p>
            <Link href="/contact">
              <Button size="lg" className="glow-blue hover:glow-blue-strong" data-testid="button-get-started">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
