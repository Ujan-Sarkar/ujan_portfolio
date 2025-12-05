import { motion } from "framer-motion";

export const MistOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Layer 1 - Dense ground mist */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[40vh]"
        style={{
          background: "linear-gradient(to top, hsl(180 20% 80% / 0.08) 0%, transparent 100%)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          opacity: [0.3, 0.5, 0.4, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Layer 2 - Mid-level haze */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 70%, hsl(175 30% 50% / 0.05) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Layer 3 - Atmospheric particles */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 70% 40%, hsl(175 40% 40% / 0.03) 0%, transparent 40%)",
        }}
        animate={{
          x: [-20, 40, -20],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Thunder flash effect */}
      <motion.div
        className="absolute inset-0 bg-foreground/5"
        animate={{
          opacity: [0, 0, 0, 0.05, 0, 0.03, 0, 0, 0, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 5,
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, hsl(180 15% 4% / 0.8) 100%)",
        }}
      />
    </div>
  );
};
