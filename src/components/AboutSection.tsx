import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dna, Sparkles, Globe, Award } from "lucide-react";
import profileAvatar from "@/assets/profile-pic.png";

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Experience", value: "2+", icon: Sparkles },
    { label: "Projects Completed", value: "3", icon: Award },
    { label: "Projects Ongoing", value: "4", icon: Globe },
    { label: "Technologies", value: "8+", icon: Dna },
    
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent font-rajdhani tracking-widest text-sm uppercase mb-6">
            Discovery Chamber
          </span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-glow mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto">
            Step into the control room and meet the architect behind the infrastructure.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Holographic Profile Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="holo-panel p-8 relative">
              {/* DNA Helix decoration */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1"
                    strokeDasharray="5 3"
                  />
                </svg>
              </motion.div>

              {/* Profile Image */}
              <div className="relative mb-8 mx-auto w-48 h-48">
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-glow" />
                <div className="absolute inset-2 rounded-full border border-primary/50" />
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img 
                    src={profileAvatar} 
                    alt="Ujan - Digital Architect" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Holographic overlay */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(180deg, hsl(var(--hologram) / 0.1) 0%, transparent 50%, hsl(var(--hologram) / 0.1) 100%)",
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Info Panels */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-bioluminescent animate-pulse" />
                  <div>
                    <span className="text-muted-foreground text-sm font-rajdhani">Designation</span>
                    <p className="text-foreground font-orbitron">Digital Architect</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <div>
                    <span className="text-muted-foreground text-sm font-rajdhani">Role</span>
                    <p className="text-foreground font-orbitron">Software Developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div>
                    <span className="text-muted-foreground text-sm font-rajdhani">Location</span>
                    <p className="text-foreground font-orbitron">Kolkata, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="font-Space Grotesk text-2xl text-glow mb-4">The Architect</h3>
              <p className="text-foreground/80 font-inter text-lg leading-relaxed mb-4">
                I’m Ujan — I build systems that are simple, intelligent, and designed to solve real problems at scale.
              </p>
              <p className="text-foreground/80 font-rajdhani text-lg leading-relaxed mb-4">
                My work focuses on tech that benefits society — tools for public infrastructure, community resilience, environmental insight, and solutions that governments and organizations can actually use. I’m currently deep into Machine Learning and Blockchain, exploring how these technologies can create cleaner workflows, smarter decision systems, and more transparent digital infrastructure.
                
              </p>
               <p className="text-foreground/80 font-rajdhani text-glow leading-relaxed mb-4">
                I like projects that matter: pragmatic, future-ready, and built with purpose.
              </p>
              <p className="text-foreground/80 font-rajdhani text-bold leading-relaxed">
                I learn fast, iterate faster, and build with one goal — to create tech that genuinely helps people.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="holo-panel p-6 text-center group hover:border-accent/50 transition-colors duration-300"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:text-accent transition-colors" />
                  <div className="font-orbitron text-3xl text-foreground text-glow mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-rajdhani text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mist effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
