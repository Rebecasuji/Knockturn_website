import { motion } from "framer-motion";
import ClientStoryCard from "@/components/ClientStoryCard";

export default function ClientStories() {
  const stories = [
    {
      name: "Rajesh Kumar",
      role: "CEO",
      company: "Tech Innovations Pvt Ltd",
      testimonial: "Knockturn transformed our office space with exceptional commercial property solutions. Their attention to detail and professional approach exceeded our expectations. The team's dedication to understanding our unique needs made all the difference.",
    },
    {
      name: "Priya Sharma",
      role: "Director",
      company: "Sharma Enterprises",
      testimonial: "The investment property guidance we received was outstanding. Knockturn's expertise helped us build a profitable real estate portfolio with confidence. Their market insights and strategic advice have been invaluable.",
    },
    {
      name: "Vikram Reddy",
      role: "Managing Partner",
      company: "Reddy Realty Group",
      testimonial: "Working with Knockturn on residential projects has been a game-changer. Their design services team created stunning spaces that our clients absolutely love. The quality of work and timely delivery are commendable.",
    },
    {
      name: "Anita Patel",
      role: "Founder",
      company: "Patel Holdings",
      testimonial: "Knockturn's tenant management services have streamlined our property operations completely. We've seen improved tenant satisfaction and reduced vacancy rates. Their proactive approach to maintenance is impressive.",
    },
    {
      name: "Suresh Iyer",
      role: "CFO",
      company: "Global Tech Solutions",
      testimonial: "The commercial property they helped us acquire was perfect for our expansion plans. Knockturn's understanding of business needs and real estate market dynamics is exceptional. Highly recommended!",
    },
    {
      name: "Meena Krishnan",
      role: "VP Operations",
      company: "Krishnan Industries",
      testimonial: "From property search to final handover, Knockturn made the entire process smooth and transparent. Their professionalism and expertise in property management are truly world-class.",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-20" data-testid="section-client-stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient" data-testid="text-stories-heading">
              Client Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="text-stories-description">
              Hear from our satisfied clients about their experiences working with Knockturn.
              Your success is our greatest achievement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <ClientStoryCard
                key={index}
                {...story}
                index={index}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-16 p-12 glassmorphism rounded-md border border-primary/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="cta-share-story"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Want to Share Your Story?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We'd love to hear about your experience with Knockturn. Your feedback helps us
              improve and inspires others to achieve their property goals.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
