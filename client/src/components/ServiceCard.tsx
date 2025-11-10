import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="h-full"
      data-testid={`card-service-${index}`}
    >
      <Card className="h-full glassmorphism border-primary/30 hover:border-primary/60 transition-all duration-300 overflow-visible hover-elevate">
        <CardContent className="p-8 flex flex-col items-center text-center h-full">
          <motion.div
            className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-6 glow-blue"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            data-testid={`icon-service-${index}`}
          >
            <Icon className="w-10 h-10 text-primary" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 text-foreground" data-testid={`text-service-title-${index}`}>
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 flex-grow" data-testid={`text-service-description-${index}`}>
            {description}
          </p>
          <Button variant="outline" className="hover-elevate w-full" data-testid={`button-learn-more-${index}`}>
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
