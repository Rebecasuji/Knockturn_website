import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Award, Heart, MapPin, Briefcase, Clock } from "lucide-react";

export default function Careers() {
  const benefits = [
    { icon: TrendingUp, title: "Career Growth", description: "Clear path for professional development" },
    { icon: Award, title: "Recognition", description: "Reward excellence and innovation" },
    { icon: Heart, title: "Work-Life Balance", description: "Flexible work arrangements" },
    { icon: Users, title: "Great Team", description: "Collaborative and supportive culture" },
  ];

  const openings = [
    {
      title: "Senior Property Manager",
      department: "Operations",
      location: "Chennai, India",
      type: "Full-time",
      description: "Lead property management operations and client relationships for our premium portfolio.",
    },
    {
      title: "Real Estate Analyst",
      department: "Investment",
      location: "Chennai, India",
      type: "Full-time",
      description: "Conduct market research and financial analysis for investment opportunities.",
    },
    {
      title: "Design Architect",
      department: "Design",
      location: "Chennai, India",
      type: "Full-time",
      description: "Create innovative architectural solutions for residential and commercial projects.",
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Chennai, India",
      type: "Full-time",
      description: "Drive business growth through client acquisition and relationship management.",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-20" data-testid="section-careers-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient" data-testid="text-careers-heading">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="text-careers-description">
              Build your career with a company that values innovation, excellence, and your
              professional growth. Shape the future of property management with us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card/30" data-testid="section-life-at-knockturn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient" data-testid="text-life-heading">
              Life at Knockturn
            </h2>
            <p className="text-xl text-muted-foreground">Why our team loves working here</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                data-testid={`benefit-${index}`}
              >
                <Card className="h-full glassmorphism border-primary/30 hover:border-primary/60 transition-all overflow-visible hover-elevate">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4 glow-blue">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-openings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient" data-testid="text-openings-heading">
              Current Openings
            </h2>
            <p className="text-xl text-muted-foreground">Find your perfect role</p>
          </motion.div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`job-${index}`}
              >
                <Card className="glassmorphism border-primary/30 hover:border-primary/60 transition-all overflow-visible hover-elevate">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-foreground">{job.title}</h3>
                          <Badge className="glow-blue">{job.department}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>Posted recently</span>
                          </div>
                        </div>
                      </div>
                      <Button size="lg" className="glow-blue hover:glow-blue-strong" data-testid={`button-apply-${index}`}>
                        Apply Now
                      </Button>
                    </div>
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
