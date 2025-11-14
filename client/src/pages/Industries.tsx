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
      description:
        "Expanding into next-generation property management — from residential communities to large-scale commercial hubs — with a focus on sustainable growth and smart infrastructure.",
    },
    {
      icon: Cpu,
      title: "Technology",
      description:
        "Designing and managing innovative workspaces for emerging tech companies, supporting the digital transformation of India’s growing innovation ecosystem.",
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description:
        "Developing future-ready retail and commercial spaces with enhanced customer experience, operational efficiency, and scalable leasing opportunities.",
    },
    {
      icon: Construction,
      title: "Infrastructure",
      description:
        "Building the foundation for tomorrow’s smart cities with efficient, environmentally responsible infrastructure and modern construction management practices.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Supporting industrial growth by developing sustainable, well-connected manufacturing hubs equipped with advanced facilities and optimized layouts.",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-20" data-testid="section-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          /*<motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-5xl sm:text-6xl font-bold mb-6 text-gradient"
              data-testid="text-industries-heading"
            >
              Industries We’re Shaping Next
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-4xl mx-auto"
              data-testid="text-industries-description"
            >
              Our vision extends beyond today — we’re preparing to serve the
              industries of tomorrow with adaptive, sustainable, and
              future-focused management solutions.
            </p>
          </motion.div>

          {/* Industry Cards */}
          /*<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          /*<motion.div
            className="text-center p-12 glassmorphism rounded-md border border-primary/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="cta-industry"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Looking Ahead to New Opportunities
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We’re continuously exploring new sectors and partnerships. Reach
              out to discover how we can collaborate and create innovative
              property, project, or manpower solutions tailored for your
              industry’s future.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
