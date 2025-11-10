import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Insights() {
  const articles = [
    {
      title: "The Future of Commercial Real Estate in Chennai",
      excerpt: "Exploring emerging trends, technology integration, and investment opportunities shaping Chennai's commercial property landscape in 2025.",
      category: "Market Trends",
      date: "Jan 5, 2025",
      readTime: "5 min read",
      featured: true,
    },
    {
      title: "Sustainable Property Development: A New Standard",
      excerpt: "How green building practices and sustainable development are becoming essential in modern property management.",
      category: "Sustainability",
      date: "Dec 28, 2024",
      readTime: "4 min read",
    },
    {
      title: "Maximizing ROI in Investment Properties",
      excerpt: "Strategic insights and proven techniques for enhancing returns on your property investment portfolio.",
      category: "Investment",
      date: "Dec 20, 2024",
      readTime: "6 min read",
    },
    {
      title: "Digital Transformation in Property Management",
      excerpt: "Leveraging technology to streamline operations, enhance tenant experiences, and drive efficiency.",
      category: "Technology",
      date: "Dec 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Residential Property Market Outlook 2025",
      excerpt: "Comprehensive analysis of residential real estate trends, pricing dynamics, and buyer preferences.",
      category: "Market Analysis",
      date: "Dec 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "Effective Tenant Retention Strategies",
      excerpt: "Best practices for maintaining high occupancy rates and building long-term tenant relationships.",
      category: "Management",
      date: "Dec 5, 2024",
      readTime: "4 min read",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-20" data-testid="section-insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient" data-testid="text-insights-heading">
              Industry Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="text-insights-description">
              Stay informed with the latest trends, analysis, and thought leadership in property
              management and real estate development.
            </p>
          </motion.div>

          {articles.slice(0, 1).map((article, index) => (
            <motion.div
              key={index}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-testid="featured-article"
            >
              <Card className="glassmorphism border-primary/30 hover:border-primary/60 transition-all overflow-visible hover-elevate">
                <CardContent className="p-8 lg:p-12">
                  <Badge className="mb-4 glow-blue">{article.category}</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-6 items-center mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button className="gap-2 glow-blue hover:glow-blue-strong" data-testid="button-read-featured">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                data-testid={`article-${index}`}
              >
                <Card className="h-full glassmorphism border-primary/30 hover:border-primary/60 transition-all overflow-visible hover-elevate">
                  <CardContent className="p-6">
                    <Badge className="mb-4 glow-blue">{article.category}</Badge>
                    <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-4 items-center mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="gap-2 p-0 h-auto hover-elevate" data-testid={`button-read-${index}`}>
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
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
