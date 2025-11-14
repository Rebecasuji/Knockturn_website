"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ClientStoryCard from "@/components/ClientStoryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ClientStories() {
  const [stories, setStories] = useState([
    {
      name: "Mohammed Anas",
      testimonial:
        "Highly impressed with their excellent management services. The team is organized, proactive, and ensures smooth operations with a focus on client satisfaction.",
    },
    {
      name: "Bàrath Músic",
      testimonial:
        "Excellent property management services! The team is responsive, professional, and always ensures my rental property is well-maintained.",
    },
    {
      name: "Porkodi Narayanan",
      testimonial:
        "Excellent service. They work hard to keep things running perfectly for us.",
    },
    {
      name: "DEEPAK TS",
      testimonial:
        "Experienced staffs, well equipped with new technologies.",
    },
    {
      name: "Divakar R",
      testimonial:
        "Highly recommend their services. They are efficient and easy to work with.",
    },
    {
      name: "sarath kumar",
      testimonial:
        "They doing awesome work and best customer service!",
    },
    {
      name: "Sangeetha BK",
      testimonial:
        "Team is friendly and provides a good atmosphere to work with.",
    },
  ]);

  // Form state
  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !testimonial) return alert("Please fill in all fields");

    // Add new review to the list
    const newStory = { name, testimonial };
    setStories([newStory, ...stories]);

    // Reset form
    setName("");
    setTestimonial("");
    setIsFormVisible(false);
  };

  return (
    <div className="min-h-screen pt-32">
      <section className="py-20" data-testid="section-client-stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient">
              Client Success Reviews
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Hear from our satisfied clients about their experiences working with Knockturn.
              Your success is our greatest achievement.
            </p>
          </motion.div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <ClientStoryCard
                key={index}
                name={story.name}
                testimonial={story.testimonial}
                index={index}
              />
            ))}
          </div>

          {/* Share your story CTA */}
          <motion.div
            className="text-center mt-16 p-12 glassmorphism rounded-md border border-primary/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Want to Share Your Story?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We'd love to hear about your experience with Knockturn. Your feedback helps us
              improve and inspires others to achieve their property goals.
            </p>

            {!isFormVisible ? (
              <Button
                onClick={() => setIsFormVisible(true)}
                className="mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90"
              >
                Share Your Story
              </Button>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 max-w-md mx-auto flex flex-col gap-4 text-left"
              >
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Textarea
                  placeholder="Write your experience..."
                  rows={4}
                  value={testimonial}
                  onChange={(e) => setTestimonial(e.target.value)}
                />
                <div className="flex justify-center gap-3">
                  <Button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg"
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsFormVisible(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
