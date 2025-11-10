import { motion } from "framer-motion";
import { Target, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const milestones = [
    { year: "2015", title: "Company Founded", description: "Established in Chennai with a vision for innovation" },
    { year: "2017", title: "100+ Projects", description: "Crossed the milestone of 100 successful projects" },
    { year: "2020", title: "Industry Recognition", description: "Awarded Best Property Management Company" },
    { year: "2025", title: "Regional Expansion", description: "Expanding services across South India" },
  ];

  const values = [
    { icon: Target, title: "Innovation", description: "Pioneering new approaches to property management" },
    { icon: Award, title: "Excellence", description: "Delivering unmatched quality in every project" },
    { icon: Users, title: "Client Success", description: "Your success is our primary objective" },
    { icon: TrendingUp, title: "Growth", description: "Continuous improvement and sustainable development" },
  ];

  return (
    <div className="min-h-screen pt-32">
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
              A leading product management and property innovation company based in Chennai, India,
              dedicated to transforming the way properties are managed and developed.
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
                To empower businesses and individuals with intelligent property management solutions
                that combine innovation, design excellence, and unwavering commitment to client success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in creating sustainable, forward-thinking property solutions that drive
                value and foster long-term growth for our clients.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="text-vision-heading">
                Our Vision
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-vision-content">
                To be the most trusted and innovative property management company in India,
                setting new standards for excellence and transforming the real estate landscape.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where every property interaction is seamless, efficient,
                and creates lasting value for all stakeholders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
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
            <p className="text-xl text-muted-foreground">Key milestones in our growth story</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                data-testid={`milestone-${index}`}
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-3xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-px h-full bg-primary/30" />
                <Card className="flex-1 glassmorphism border-primary/30 hover:border-primary/60 transition-all hover-elevate">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
