import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", level: 92, category: "Core Language", color: "primary" },
  { name: "C", level: 75, category: "Core Language", color: "bioluminescent" },

  
  { name: "Deep Learning", level: 70, category: "AI/ML", color: "primary" },
  
  { name: "TensorFlow", level: 65, category: "AI/ML", color: "accent" },

  { name: "Ethereum Fundamentals", level: 70, category: "Blockchain", color: "primary" },
  { name: "Solidity (Learning)", level: 50, category: "Blockchain", color: "bioluminescent" },
,

  { name: "Docker", level: 75, category: "DevOps", color: "bioluminescent" },
  { name: "Git & GitHub", level: 85, category: "DevOps", color: "accent" },

  

];

const SkillRing = ({ skill, index }: { skill: Skill; index: number }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  const colorMap: Record<string, string> = {
    primary: "hsl(var(--primary))",
    bioluminescent: "hsl(var(--bioluminescent))",
    accent: "hsl(var(--accent))",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative w-32 h-32 mx-auto">
        {/* Background ring */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="45"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
          />
          <motion.circle
            cx="64"
            cy="64"
            r="45"
            fill="none"
            stroke={colorMap[skill.color]}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            style={{
              filter: `drop-shadow(0 0 10px ${colorMap[skill.color]})`,
            }}
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + index * 0.1 }}
            className="font-orbitron text-2xl font-bold text-foreground"
          >
            {skill.level}%
          </motion.span>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${colorMap[skill.color]}20 0%, transparent 70%)`,
          }}
        />

        {/* Spark particles on hover */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                background: colorMap[skill.color],
                left: `${50 + Math.cos((i * 120 * Math.PI) / 180) * 50}%`,
                top: `${50 + Math.sin((i * 120 * Math.PI) / 180) * 50}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Skill name */}
      <div className="text-center mt-4">
        <h4 className="font-orbitron text-foreground text-sm">{skill.name}</h4>
        <span className="text-muted-foreground font-rajdhani text-xs">{skill.category}</span>
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-secondary/10 via-transparent to-transparent" />
      </div>

      {/* Monitoring system overlay */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-bioluminescent/30 bg-bioluminescent/5 text-bioluminescent font-rajdhani tracking-widest text-sm uppercase mb-6">
            Monitoring System
          </span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-glow mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto">
            Real-time analysis of technical capabilities and expertise levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <SkillRing key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            { label: "Primary Systems", color: "bg-primary" },
            { label: "Bio-Luminescent Tech", color: "bg-bioluminescent" },
            { label: "Core Operations", color: "bg-accent" },
          ].map((legend) => (
            <div key={legend.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${legend.color}`} />
              <span className="text-muted-foreground font-rajdhani text-sm">
                {legend.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Additional Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="holo-panel p-8 max-w-3xl mx-auto">
            <h3 className="font-orbitron text-xl text-primary mb-6 text-center">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Linux", "MySQL", "typeScript", "React.js",
                "Tailwind CSS","Linux", "Figma", 
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + index * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-muted/50 border border-primary/20 text-foreground/80 font-rajdhani text-sm hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
