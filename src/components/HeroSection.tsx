import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isEntering, setIsEntering] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-background/30" />
      </motion.div>

      {/* Animated background layers */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ y }}
      >
        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-20" />
        
        {/* Holographic lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
          <defs>
            <linearGradient id="holoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(175 70% 35%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(175 70% 35%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(175 70% 35%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${i * 15}%`}
              y1="0%"
              x2={`${i * 15 + 20}%`}
              y2="100%"
              stroke="url(#holoGrad)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-6"
        style={{ opacity }}
      >
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary font-rajdhani tracking-widest text-sm uppercase">
            Welcome to the Expedition
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-bold mb-8 relative"
        >
          <span className="text-glow bg-gradient-to-b from-foreground via-primary to-primary/50 bg-clip-text text-transparent drop-shadow-2xl">
            UJAN SARKAR
          </span>
          {/* Decorative elements */}
          <motion.span
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 w-2 h-16 md:h-24 bg-gradient-to-b from-primary via-accent to-transparent rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />
          <motion.span
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 w-2 h-16 md:h-24 bg-gradient-to-b from-primary via-accent to-transparent rounded-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-rajdhani text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto drop-shadow-lg"
        >
          Explorer of Digital Frontiers • Creator of Immersive Worlds
        </motion.p>

        {/* Enter Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={handleEnter}
          className={`
            relative group px-12 py-5 rounded-lg font-orbitron text-lg tracking-wider uppercase
            bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20
            border-2 border-primary/50 hover:border-accent/80
            backdrop-blur-sm
            transition-all duration-500 overflow-hidden
            ${isEntering ? "screen-shake" : ""}
          `}
        >
          {/* Button glow */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Ripple effect container */}
          {isEntering && (
            <motion.span
              className="absolute inset-0 bg-accent/30 rounded-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          )}
          
          <span className="relative z-10 text-foreground group-hover:text-glow transition-all duration-300">
            Enter the World
          </span>

          {/* Animated border */}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-foreground/60 text-sm font-rajdhani tracking-widest uppercase">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/40 z-20" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-primary/40 z-20" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-primary/40 z-20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/40 z-20" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
