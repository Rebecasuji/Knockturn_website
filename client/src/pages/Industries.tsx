import { motion } from "framer-motion";
import IndustryCard from "@/components/IndustryCard";
import {
  Building2,
  Cpu,
  ShoppingCart,
  Construction,
  Hospital,
  GraduationCap,
  Hotel,
  Factory,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Comprehensive property management solutions for residential, commercial, and investment portfolios with focus on sustainable growth and value creation.",
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Modern office spaces and tech parks designed for innovation, collaboration, and rapid scalability. State-of-the-art infrastructure for tech companies.",
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Prime retail locations with high footfall potential, exceptional visibility, and strategic positioning for maximum business impact and customer reach.",
    },
    {
      icon: Construction,
      title: "Infrastructure",
      description: "Large-scale infrastructure projects with sustainable development practices, quality assurance, and timely delivery for long-term value.",
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description: "Specialized healthcare facility management with compliance standards, patient-centric design, and operational excellence for medical institutions.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Educational institution properties designed for learning excellence, safety, and growth. Campus planning and facility management solutions.",
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Premium hospitality properties and tourism facilities with guest-centric design, operational efficiency, and revenue optimization strategies.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industrial properties and warehouses with strategic logistics access, safety compliance, and scalable infrastructure for manufacturing operations.",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-20" data-testid="section-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient" data-testid="text-industries-heading">
              Industries We Serve
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="text-industries-description">
              Delivering specialized property management solutions across diverse sectors with
              industry-specific expertise and innovative approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                {...industry}
                index={index}
              />
            ))}
          </div>

          <motion.div
            className="text-center p-12 glassmorphism rounded-md border border-primary/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="cta-industry"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Don't See Your Industry?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We work with businesses across all sectors. Contact us to discuss how we can
              provide tailored property solutions for your specific industry needs.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
