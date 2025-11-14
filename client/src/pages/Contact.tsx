import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["Medavakkam,Chennai, Tamil Nadu", "India - 600001"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["salesknockturn.in","hiring@knockturn.in"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9176602777"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 10:00 AM - 7:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-20" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-5xl sm:text-6xl font-bold mb-6 text-gradient"
              data-testid="text-contact-heading"
            >
              Get in Touch
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-4xl mx-auto"
              data-testid="text-contact-description"
            >
              Have a question or ready to start your property journey? We're
              here to help. Reach out to our team today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2
                  className="text-3xl font-bold mb-6 text-foreground"
                  data-testid="text-contact-info-heading"
                >
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="glassmorphism border-primary/30 hover:border-primary/60 transition-all overflow-visible hover-elevate"
                      data-testid={`contact-info-${index}`}
                    >
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-4 glow-blue">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>

          <motion.div
            className="rounded-md overflow-hidden border-2 border-primary/30 glow-blue h-96"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="map-container"
          >
            <iframe
              title="Knockturn Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9125971286435!2d80.19195507484034!3d12.91333888739669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d558f67fa8b%3A0xe9af1f349b858cbf!2sKnockturn%20Private%20Limited!5e0!3m2!1sen!2sin!4v1762839538571!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
