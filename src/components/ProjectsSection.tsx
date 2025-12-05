import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, AlertTriangle, Shield } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: "contained" | "active" | "experimental";
  threat: "low" | "medium" | "high";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project Genesis",
    description: "A revolutionary web platform that brings extinct ideas back to life with cutting-edge technology and immersive user experiences.",
    tags: ["React", "Three.js", "Node.js"],
    status: "active",
    threat: "high",
  },
  {
    id: 2,
    title: "Neural Nexus",
    description: "AI-powered application that learns and adapts, creating personalized digital ecosystems for each user.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    status: "experimental",
    threat: "high",
  },
  {
    id: 3,
    title: "Ecosystem Hub",
    description: "A comprehensive dashboard for monitoring and managing complex digital environments in real-time.",
    tags: ["Vue.js", "D3.js", "GraphQL"],
    status: "contained",
    threat: "medium",
  },
  {
    id: 4,
    title: "Amber Archive",
    description: "Digital preservation system that captures and stores moments in time, ensuring nothing is ever truly lost.",
    tags: ["Rust", "PostgreSQL", "AWS"],
    status: "active",
    threat: "low",
  },
  {
    id: 5,
    title: "Raptor Protocol",
    description: "High-speed communication framework built for lightning-fast data transfer across distributed systems.",
    tags: ["Go", "gRPC", "Kubernetes"],
    status: "contained",
    threat: "medium",
  },
  {
    id: 6,
    title: "Isla Interface",
    description: "Immersive mobile experience that transforms everyday interactions into adventures worth remembering.",
    tags: ["React Native", "Firebase", "TypeScript"],
    status: "experimental",
    threat: "low",
  },
];

const statusColors = {
  contained: "border-primary text-primary bg-primary/10",
  active: "border-bioluminescent text-bioluminescent bg-bioluminescent/10",
  experimental: "border-accent text-accent bg-accent/10",
};

const threatColors = {
  low: "bg-primary/20",
  medium: "bg-accent/40",
  high: "bg-ember/60",
};

export const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent font-rajdhani tracking-widest text-sm uppercase mb-6">
            <AlertTriangle className="w-4 h-4" />
            Exhibit Lab
          </span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-glow mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto">
            Enter the containment chambers — each specimen represents a unique expedition into the digital unknown
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              <div className="containment-chamber h-full">
                {/* Chamber Header */}
                <div className="relative p-6 border-b border-primary/20">
                  {/* Status indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-orbitron uppercase ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-muted-foreground" />
                      <div className={`w-3 h-3 rounded-full ${threatColors[project.threat]}`} />
                    </div>
                  </div>

                  {/* Chamber number */}
                  <div className="absolute top-4 right-4 font-orbitron text-4xl text-primary/10">
                    {String(project.id).padStart(2, '0')}
                  </div>

                  <h3 className="font-orbitron text-xl text-foreground group-hover:text-glow transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Chamber Content */}
                <div className="p-6 relative">
                  {/* Fog/mist overlay that clears on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none"
                    animate={{
                      opacity: hoveredId === project.id ? 0 : 0.6,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Scanning line on hover */}
                  {hoveredId === project.id && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <motion.div
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-hologram to-transparent"
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                  )}

                  <p className="text-foreground/70 font-rajdhani mb-6 relative z-10">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary/50 border border-primary/20 text-xs font-rajdhani text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 relative z-10">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 hover:border-primary/60 transition-all duration-300 font-rajdhani text-sm">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300 font-rajdhani text-sm">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>

                {/* Chamber bottom glow */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)`,
                  }}
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0.3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
