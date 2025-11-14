import { motion } from "framer-motion";
import heroBackground from "@assets/generated_images/Hero_3D_geometric_background_f33a614a.png";
import particlesBackground from "@assets/generated_images/Floating_particles_background_fa85d1e1.png";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${particlesBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />

      <div
        className="absolute inset-0 z-0 animate-float"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
        }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full glow-blue"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient leading-tight mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="text-hero-headline"
        >
          Empowering Growth Through Integrated Project, Property, and Manpower Management
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-testid="text-hero-subtitle"
        >
          Transforming projects, properties, and workforce solutions with cutting-edge management expertise in Chennai and beyond.
        </motion.p>
      </div>
    </section>
  );
}
