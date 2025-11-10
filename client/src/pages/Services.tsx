import { motion } from "framer-motion";
import { Link } from "wouter";
import ServiceCard from "@/components/ServiceCard";
import { Building2, Home, TrendingUp, Users, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import commercialImage from "@assets/generated_images/Commercial_property_image_04183835.png";
import residentialImage from "@assets/generated_images/Residential_property_image_1ee9a9fa.png";

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Invest Property",
      description: "Strategic investment opportunities with high ROI potential. Our expert team provides comprehensive market analysis, risk assessment, and portfolio management to maximize your returns.",
    },
    {
      icon: Building2,
      title: "Commercial Property",
      description: "Premium commercial real estate solutions including office spaces, retail centers, and business parks. Strategic locations with modern amenities designed for business growth.",
    },
    {
      icon: Home,
      title: "Residential Property",
      description: "Elegant residential properties from luxury apartments to spacious villas. Designed for comfort, sustainable living, and long-term value in prime Chennai locations.",
    },
    {
      icon: Users,
      title: "Tenant Property",
      description: "Comprehensive tenant management services ensuring seamless operations, timely maintenance, and exceptional satisfaction for both property owners and tenants.",
    },
    {
      icon: Palette,
      title: "Design Services",
      description: "Innovative architectural and interior design solutions that transform spaces into functional, aesthetically stunning environments that reflect your vision.",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-20" data-testid="section-services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient" data-testid="text-services-heading">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="text-services-description">
              Comprehensive property management solutions designed to meet your unique needs
              and exceed your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30" data-testid="section-featured-properties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient" data-testid="text-featured-heading">
              Featured Properties
            </h2>
            <p className="text-xl text-muted-foreground">Explore our premium property portfolio</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group overflow-hidden rounded-md"
              data-testid="featured-commercial"
            >
              <img
                src={commercialImage}
                alt="Commercial Property"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Premium Commercial Spaces</h3>
                  <p className="text-gray-200">Modern office solutions in prime locations</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group overflow-hidden rounded-md"
              data-testid="featured-residential"
            >
              <img
                src={residentialImage}
                alt="Residential Property"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Luxury Residences</h3>
                  <p className="text-gray-200">Elegant homes designed for modern living</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 text-center p-12 glassmorphism rounded-md border border-primary/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="cta-industrial-properties"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
              Looking for Industrial Properties?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Explore our exclusive selection of industrial properties for sale in Chennai.
              Find the perfect location for your manufacturing, warehouse, or logistics needs.
            </p>
            <Link href="/industrial-properties">
              <Button size="lg" className="gap-2 glow-blue hover:glow-blue-strong" data-testid="button-browse-industrial">
                Browse Industrial Properties
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
