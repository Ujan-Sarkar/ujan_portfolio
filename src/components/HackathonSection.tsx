import { motion } from "framer-motion";
import { Trophy, Flame, Users, Calendar, MapPin, Zap, Award, Target } from "lucide-react";

interface HackathonTale {
  id: number;
  title: string;
  event: string;
  date: string;
  location: string;
  team?: string;
  achievement: string;
  description: string;
  tech: string[];
  highlight?: string;
}

const hackathonTales: HackathonTale[] = [
  {
    id: 1,
    title: "Operation: Code Storm",
    event: "TechCrunch Disrupt Hackathon",
    date: "March 2024",
    location: "San Francisco, CA",
    team: "Team Apex",
    achievement: "🥇 1st Place",
    description: "48 hours of pure adrenaline. Built an AI-powered disaster response system that predicts evacuation routes in real-time.",
    tech: ["React", "TensorFlow", "Node.js", "MapBox"],
    highlight: "Featured in TechCrunch article"
  },
  {
    id: 2,
    title: "The Genesis Protocol",
    event: "ETHGlobal",
    date: "January 2024",
    location: "Virtual",
    achievement: "🏆 Best DeFi Innovation",
    description: "Created a cross-chain liquidity aggregator that reduced swap fees by 40%. The judges called it 'revolutionary'.",
    tech: ["Solidity", "React", "The Graph", "Chainlink"],
    highlight: "$10K Prize Pool Winner"
  },
  {
    id: 3,
    title: "Midnight Cipher",
    event: "NASA Space Apps Challenge",
    date: "October 2023",
    location: "Houston, TX",
    team: "Stellar Coders",
    achievement: "🌟 Global Finalist",
    description: "Developed a satellite imagery analysis tool that detects illegal deforestation patterns using machine learning.",
    tech: ["Python", "TensorFlow", "AWS", "React"],
    highlight: "Presented at NASA HQ"
  },
  {
    id: 4,
    title: "Project Thunderbolt",
    event: "AngelHack Global",
    date: "July 2023",
    location: "New York, NY",
    achievement: "⚡ Best Technical Implementation",
    description: "Speed-coded a real-time collaboration platform with WebRTC. Zero latency, infinite possibilities.",
    tech: ["WebRTC", "Socket.io", "React", "Redis"],
  }
];

export const HackathonSection = () => {
  return (
    <section id="hackathons" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Expedition Map Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1000 800">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--bioluminescent))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <motion.path
            d="M100,400 Q250,200 400,350 T700,300 T900,400"
            stroke="url(#routeGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-accent/30 bg-accent/5 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Flame className="w-5 h-5 text-accent animate-pulse" />
            <span className="font-rajdhani text-accent tracking-wider uppercase text-sm font-semibold">
              Field Reports
            </span>
          </motion.div>

          <h2 className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">HACKATHON</span>
            <br />
            <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary via-bioluminescent to-accent">
              TALES
            </span>
          </h2>

          <p className="font-rajdhani text-xl text-muted-foreground max-w-2xl mx-auto">
            Chronicles from the battlegrounds of innovation. Each story forged in 
            caffeine, code, and the relentless pursuit of the impossible.
          </p>
        </motion.div>

        {/* Hackathon Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {hackathonTales.map((tale, index) => (
            <motion.div
              key={tale.id}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative h-full">
                {/* Card Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/10 to-bioluminescent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Main Card */}
                <div className="relative h-full glass-card p-8 rounded-2xl border-2 border-primary/20 group-hover:border-accent/40 transition-all duration-500">
                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    <motion.div
                      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ top: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{tale.achievement.split(' ')[0]}</span>
                        <span className="font-orbitron text-xs tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/30">
                          {tale.achievement.split(' ').slice(1).join(' ')}
                        </span>
                      </div>
                      <h3 className="font-orbitron text-2xl font-bold text-foreground group-hover:text-glow transition-all duration-300">
                        {tale.title}
                      </h3>
                    </div>
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm font-rajdhani">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="w-4 h-4 text-primary" />
                      <span>{tale.event}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{tale.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{tale.location}</span>
                    </div>
                    {tale.team && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-bioluminescent" />
                        <span>{tale.team}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-rajdhani text-lg text-foreground/80 mb-6 leading-relaxed">
                    {tale.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tale.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-space font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  {tale.highlight && (
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-accent/20 to-ember/20 border border-accent/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="font-rajdhani text-sm font-semibold text-accent">
                        {tale.highlight}
                      </span>
                    </motion.div>
                  )}

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Trophy, value: "15+", label: "Hackathons", color: "text-accent" },
            { icon: Award, value: "8", label: "Wins", color: "text-primary" },
            { icon: Target, value: "100+", label: "Hours Coded", color: "text-bioluminescent" },
            { icon: Users, value: "40+", label: "Teammates", color: "text-ember" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-card/50 border border-primary/20 hover:border-primary/40 transition-colors group"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className={`font-orbitron text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="font-rajdhani text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
