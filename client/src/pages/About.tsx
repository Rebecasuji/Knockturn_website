import { motion } from "framer-motion";
import { Target, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    { icon: Target, title: "Innovation", description: "Driving creative, technology-enabled solutions across projects, properties, and people management." },
    { icon: Award, title: "Excellence", description: "Delivering consistent quality and precision in every phase of project, property, and workforce execution." },
    { icon: Users, title: "Client Success", description: "Building lasting partnerships by aligning our expertise with our clients’ business goals." },
    { icon: TrendingUp, title: "Growth", description: "Fostering sustainable development and continuous improvement across all service domains." },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient" data-testid="text-about-heading">
              About Knockturn
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="text-about-description">
              Knockturn Private Limited is a Chennai-based organization specializing in
              <span className="font-semibold"> Project Management, Property Management, and Manpower Management</span>.
              We are dedicated to transforming the way spaces are built, managed, and maintained — with innovation,
              efficiency, and a people-first approach.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="text-mission-heading">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-mission-content">
                To empower clients with intelligent and integrated management solutions across projects,
                properties, and manpower. We strive to bring together innovation, technical expertise, and
                operational excellence to deliver sustainable value.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to redefine reliability and transparency in every engagement — whether
                it’s executing a complex project, maintaining premium properties, or deploying skilled professionals.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="text-vision-heading">
                Our Vision
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-vision-content">
                To be India’s most trusted name in Project, Property, and Manpower Management —
                known for innovation, integrity, and impact. We aim to create a seamless ecosystem that
                connects people, processes, and performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our vision extends beyond management — to build smarter infrastructures,
                efficient workplaces, and empowered workforces that shape a better tomorrow.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-card/30" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient" data-testid="text-values-heading">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">The guiding principles behind every service we deliver</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                data-testid={`card-value-${index}`}
              >
                <Card className="h-full glassmorphism border-primary/30 hover:border-primary/60 transition-all hover-elevate">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4 glow-blue">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20" data-testid="section-timeline">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient" data-testid="text-timeline-heading">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">Milestones that shaped our three-domain excellence</p>
          </motion.div>

          <div className="space-y-6 text-muted-foreground text-justify">
            {[
              "Founded in 2024, Knockturn Private Limited began with a mission to bring structure, transparency, and accountability to management practices across multiple domains. Our early focus on Project Management laid the foundation for disciplined execution and quality delivery.",
              "As we grew, we recognized the need to support property owners and investors through end-to-end Property Management solutions — ensuring seamless maintenance, tenant coordination, and operational optimization.",
              "Understanding the importance of human capital, we expanded into Manpower Management, supplying skilled professionals to support industries such as construction, facility management, interiors, and corporate services.",
              "Our integrated approach across these three pillars — Project, Property, and People — has allowed us to deliver unmatched efficiency and value for clients in Chennai and beyond.",
              "Today, Knockturn stands as a trusted partner in transforming how organizations manage their assets, spaces, and teams — driven by innovation, adaptability, and a deep commitment to client success."
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
