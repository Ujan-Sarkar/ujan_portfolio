import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Flag } from "lucide-react";

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  type: "discovery" | "expedition" | "achievement";
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2019",
    title: "The First Steps",
    description: "Still in Class 9—early sparks of curiosity that would later shape the journey ahead.",
    type: "discovery",
  },
  {
    id: 2,
    year: "2021",
    title: "Foundation Mastery",
    description: "Cleared Class 10 boards with 98% from DPS Newtown—marking the first major academic milestone.",
    type: "achievement",
  },
  {
    id: 3,
    year: "2023",
    title: "New Horizons",
    description: "Completed Class 12 with 92% from Narayana School, Newtown and stepped into UEM to pursue B.Tech CSE (AI & ML).",
    type: "discovery",
  },
  {
    id: 4,
    year: "2024",
    title: "Rising Momentum",
    description: "Secured Department Rank 2—solidifying a strong academic presence while exploring impactful tech domains.",
    type: "achievement",
  },
  {
    id: 5,
    year: "2025",
    title: "Breakthrough Year",
    description: "Achieved Department Rank 1 and represented in hackathons—expanding skills, confidence, and ambition.",
    type: "discovery",
  },
  {
    id: 6,
    year: "2025-Present",
    title: "Current Mission",
    description: "Building projects focused on societal impact, public systems, ML, and blockchain—pushing into deeper, meaningful tech.",
    type: "expedition",
  },
];

const typeColors = {
  discovery: "border-bioluminescent bg-bioluminescent/10 text-bioluminescent",
  expedition: "border-primary bg-primary/10 text-primary",
  achievement: "border-accent bg-accent/10 text-accent",
};

const typeIcons = {
  discovery: MapPin,
  expedition: Flag,
  achievement: Calendar,
};

export const TimelineSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-10" />
        {/* Map-like background texture */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="mapGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="2" fill="hsl(var(--primary))" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapGrid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary font-rajdhani tracking-widest text-sm uppercase mb-6">
            <MapPin className="w-4 h-4" />
            Expedition Path
          </span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-glow mb-4">
            Journey
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto">
            Follow the expedition trail through discoveries, achievements, and adventures
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central tracking line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent transform -translate-x-1/2" />
          
          {/* Animated tracking dot */}
          <motion.div
            className="absolute left-1/2 w-4 h-4 rounded-full bg-accent transform -translate-x-1/2 z-10"
            style={{ boxShadow: "0 0 20px hsl(var(--accent))" }}
            initial={{ top: "0%" }}
            animate={isInView ? { top: "100%" } : {}}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = typeIcons[event.type];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 group cursor-pointer"
                    >
                      {/* Year badge */}
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-orbitron mb-3 ${typeColors[event.type]}`}>
                        <Icon className="w-3 h-3" />
                        {event.year}
                      </span>

                      <h3 className="font-orbitron text-xl text-foreground group-hover:text-glow transition-all mb-2">
                        {event.title}
                      </h3>

                      <p className="text-muted-foreground font-rajdhani">
                        {event.description}
                      </p>

                      {/* Hover glow line */}
                      <motion.div
                        className={`absolute ${isEven ? "right-0" : "left-0"} top-1/2 h-px bg-gradient-to-r ${isEven ? "from-transparent to-primary" : "from-primary to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity`}
                        style={{ width: "2rem" }}
                      />
                    </motion.div>
                  </div>

                  {/* Center marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className={`w-6 h-6 rounded-full border-2 ${typeColors[event.type].split(' ')[0]} bg-background flex items-center justify-center`}
                    >
                      <div className="w-2 h-2 rounded-full bg-current" />
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12" />
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-accent bg-background flex items-center justify-center">
                <Flag className="w-5 h-5 text-accent" />
              </div>
              <div className="absolute inset-0 rounded-full animate-ping bg-accent/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
