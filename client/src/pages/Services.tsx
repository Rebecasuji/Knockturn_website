import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Building2,
  Home,
  Factory,
  Leaf,
  Briefcase,
  Key,
  Hammer,
  Paintbrush,
  Users,
  Zap,
  Wind,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const categories = [
    {
      title: "Property Management",
      subcategories: [
        {
          title: "Facility Management",
          icon: Building2,
          description:
            "We deliver professional facility management services designed to enhance operational efficiency, safety, and sustainability. From maintenance scheduling and vendor coordination to asset upkeep and energy optimization, our team ensures every property functions at peak performance.",
          subcategories: [
            { title: "Physical Security", icon: Shield },
            { title: "Maintenance", icon: Hammer },
            { title: "Soft Services", icon: Users },
          ],
        },
        {
          title: "Real Estate",
          description:
            "Offering end-to-end real estate solutions — from property identification and leasing to investment advisory and ongoing management. We simplify every stage of ownership to help clients make smart, profitable real estate decisions.",
          subcategories: [
            { title: "Commercial Properties", icon: Briefcase },
            { title: "Residential Properties", icon: Home },
            { title: "Industrial Properties", icon: Factory },
            { title: "Agricultural Lands & Development", icon: Leaf },
            { title: "Corporate Real Estate", icon: Building2 },
            { title: "Rental & Leasing Services", icon: Key },
          ],
        },
      ],
    },
    {
      title: "Project Management",
      subcategories: [
        {
          title: "Interior Projects",
          icon: Paintbrush,
          description:
            "From conceptual design to on-site execution, our interior project management ensures that every space we create reflects your brand, culture, and functionality. We coordinate designers, vendors, and contractors to deliver inspiring interiors on time and within budget.",
        },
        {
          title: "Civil Projects",
          icon: Hammer,
          description:
            "We manage the complete lifecycle of civil projects — including planning, design coordination, material procurement, supervision, and quality assurance. Our goal is to ensure precision-built structures that stand the test of time.",
        },
        {
          title: "Electrical Works",
          icon: Zap,
          description:
            "Our electrical project services cover layout planning, installation, and maintenance for residential, commercial, and industrial setups. We adhere to all safety and energy efficiency standards, ensuring reliability and long-term performance.",
        },
        {
          title: "HVAC Solutions",
          icon: Wind,
          description:
            "We provide comprehensive HVAC project planning and maintenance — ensuring optimal indoor comfort, air quality, and system performance across projects of all scales.",
        },
        {
          title: "Fire and Safety",
          icon: Shield,
          description:
            "Ensuring full compliance with fire safety standards through strategic design, installation, and maintenance of fire protection systems. We safeguard properties and people with proactive risk management solutions.",
        },
      ],
    },
    {
      title: "Manpower Management",
      icon: Users,
      description:
        "We provide manpower solutions for a variety of companies including IT, BPO, corporate offices, and industrial setups. Our services include recruitment, staffing, training, and on-site supervision — ensuring every project is powered by capable, reliable resources.",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We provide comprehensive, integrated solutions across{" "}
              <span className="font-semibold text-primary">
                Property Management, Project Management, and Manpower Management
              </span>
              . Each service is designed to help clients build, operate, and
              scale efficiently while maintaining the highest standards of
              quality and professionalism.
            </p>
          </motion.div>

          {/* Service Categories */}
          <div className="space-y-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-4xl font-bold mb-8 text-primary text-center">
                  {category.title}
                </h2>

                {/* Subcategories */}
                {category.subcategories ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.subcategories.map((sub, idx) => (
                      <Card
                        key={idx}
                        className="glassmorphism border-primary/30 hover:border-primary/60 transition-all overflow-visible hover-elevate"
                      >
                        <CardContent className="p-6">
                          {sub.icon && (
                            <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-4">
                              <sub.icon className="w-6 h-6 text-primary" />
                            </div>
                          )}
                          <h3 className="font-bold text-lg text-foreground mb-2">
                            {sub.title}
                          </h3>
                          {sub.description && (
                            <p className="text-sm text-muted-foreground mb-3">
                              {sub.description}
                            </p>
                          )}

                          {/* Nested subcategories */}
                          {sub.subcategories && (
                            <div className="mt-4 space-y-2">
                              {sub.subcategories.map((subsub, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={`/properties?type=${encodeURIComponent(
                                    subsub.title
                                  )}`}
                                  className="block group"
                                >
                                  <div className="p-3 rounded-md border border-border hover:bg-primary/10 transition flex items-center space-x-3">
                                    <subsub.icon className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-foreground group-hover:text-primary transition">
                                      {subsub.title}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  // For categories without subcategories (like Manpower Management)
                  <div className="flex justify-center">
                    <Card className="w-full max-w-md glassmorphism border-primary/30 hover:border-primary/60 transition-all hover-elevate">
                      <CardContent className="p-6 text-center">
                        {category.icon && (
                          <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-4 mx-auto">
                            <category.icon className="w-6 h-6 text-primary" />
                          </div>
                        )}
                        <h3 className="font-bold text-lg text-foreground mb-3">
                          {category.title}
                        </h3>
                        {category.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {category.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
