import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Building2, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      title: "Property Management",
      icon: Building2,
      description:
        "We provide end-to-end property management solutions, including maintenance, operations, tenant coordination, and asset optimization, ensuring your properties are managed efficiently and professionally.",
    },
    {
      title: "Project Management",
      icon: Settings,
      description:
        "Our expert team oversees interior and civil projects from planning to execution, coordinating vendors, managing timelines, and ensuring quality, so your projects are delivered on time and within budget.",
    },
    {
      title: "Manpower Management",
      icon: Users,
      description:
        "We deliver comprehensive manpower solutions across industries, including recruitment, workforce allocation, training, and on-site supervision, enabling businesses to scale efficiently with skilled personnel.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ✅ HERO SECTION */}
      <HeroSection
        stats={[
          { label: "Projects Completed", value: "20+" },
          { label: "Happy Clients", value: "20+" },
          { label: "Years of Experience", value: "2+" },
        ]}
      />

      {/* ✅ SERVICES SECTION */}
      <section className="py-24 relative" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4 text-gradient"
              data-testid="text-services-heading"
            >
              Our Services
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-services-description"
            >
              Comprehensive management solutions tailored to your business needs across Property, Project, and Manpower domains.
            </p>
          </motion.div>

          {/* ✅ Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                  hideLearnMore={true} // ✅ Learn More removed
                />
              </motion.div>
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
              <Button
                size="lg"
                className="glow-blue hover:glow-blue-strong"
                data-testid="button-view-all-services"
              >
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ✅ CTA SECTION */}
      <section className="py-24 bg-card/30" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 text-gradient"
              data-testid="text-cta-heading"
            >
              Ready to Transform Your Experience?
            </h2>
            <p
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              data-testid="text-cta-description"
            >
              Let’s discuss how we can help you achieve your management goals across Project, Property, and Manpower domains.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="glow-blue hover:glow-blue-strong"
                data-testid="button-get-started"
              >
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
