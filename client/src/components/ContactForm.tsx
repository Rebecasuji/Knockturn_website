import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      data-testid="contact-form"
    >
      <Card className="glassmorphism border-primary/30">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-foreground" data-testid="text-form-title">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground mb-2 block">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="glow-blue focus:glow-blue-strong transition-all"
                data-testid="input-name"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-foreground mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glow-blue focus:glow-blue-strong transition-all"
                  data-testid="input-email"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="glow-blue focus:glow-blue-strong transition-all"
                  data-testid="input-phone"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground mb-2 block">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="glow-blue focus:glow-blue-strong transition-all"
                data-testid="input-message"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 glow-blue hover:glow-blue-strong transition-all"
              data-testid="button-submit-form"
            >
              Send Message
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
