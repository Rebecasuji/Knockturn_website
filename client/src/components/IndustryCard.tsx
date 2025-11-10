import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function IndustryCard({ icon: Icon, title, description, index }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
      data-testid={`card-industry-${index}`}
    >
      <Card className="h-full glassmorphism border-l-4 border-l-primary border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-visible hover-elevate">
        <CardContent className="p-6 flex items-start gap-4">
          <motion.div
            className="w-14 h-14 rounded-md bg-primary/20 border border-primary flex items-center justify-center flex-shrink-0 glow-blue"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            data-testid={`icon-industry-${index}`}
          >
            <Icon className="w-7 h-7 text-primary" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-foreground" data-testid={`text-industry-title-${index}`}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground" data-testid={`text-industry-description-${index}`}>
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
