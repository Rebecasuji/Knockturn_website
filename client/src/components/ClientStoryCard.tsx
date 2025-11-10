import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ClientStoryCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  index: number;
}

export default function ClientStoryCard({ name, role, company, testimonial, index }: ClientStoryCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      data-testid={`card-client-story-${index}`}
    >
      <Card className="h-full glassmorphism border-primary/30 hover:border-primary/60 transition-all duration-300 overflow-visible hover-elevate">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <Avatar className="w-16 h-16 border-2 border-primary glow-blue" data-testid={`avatar-client-${index}`}>
              <AvatarFallback className="bg-primary/20 text-primary text-lg font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="font-bold text-lg text-foreground" data-testid={`text-client-name-${index}`}>
                {name}
              </h4>
              <p className="text-sm text-muted-foreground" data-testid={`text-client-role-${index}`}>
                {role}
              </p>
              <p className="text-sm text-primary" data-testid={`text-client-company-${index}`}>
                {company}
              </p>
            </div>
            <Quote className="w-8 h-8 text-primary/40" />
          </div>
          <p className="text-muted-foreground leading-relaxed" data-testid={`text-client-testimonial-${index}`}>
            {testimonial}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
