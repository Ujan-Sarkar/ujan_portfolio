import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Terminal, Wifi, Activity, Radio } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Transmission sent successfully!", {
      description: "Your message has been received. Expect a response soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background - Control Room */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        
        {/* Control room monitors effect */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-lg border border-primary/30"
              style={{
                width: `${100 + Math.random() * 100}px`,
                height: `${60 + Math.random() * 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary font-rajdhani tracking-widest text-sm uppercase mb-6">
            <Radio className="w-4 h-4 animate-pulse" />
            Control Room
          </span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-glow mb-4">
            Contact
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg max-w-2xl mx-auto">
            Establish a secure connection and transmit your message
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Status Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="holo-panel p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <Terminal className="w-6 h-6 text-primary" />
                <h3 className="font-orbitron text-xl text-foreground">System Status</h3>
              </div>

              {/* Status indicators */}
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Wifi className="w-5 h-5 text-bioluminescent" />
                    <span className="font-rajdhani text-foreground">Connection</span>
                  </div>
                  <span className="flex items-center gap-2 text-bioluminescent font-orbitron text-sm">
                    <span className="w-2 h-2 rounded-full bg-bioluminescent animate-pulse" />
                    Online
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <span className="font-rajdhani text-foreground">Response Time</span>
                  </div>
                  <span className="text-primary font-orbitron text-sm">{"< 24hrs"}</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Radio className="w-5 h-5 text-accent" />
                    <span className="font-rajdhani text-foreground">Signal Strength</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-${2 + i * 2} rounded-sm ${i < 4 ? "bg-accent" : "bg-muted"}`}
                        style={{ height: `${8 + i * 4}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct contact info */}
              <div className="mt-8 pt-8 border-t border-primary/20">
                <h4 className="font-orbitron text-sm text-muted-foreground mb-4">Direct Channels</h4>
                <div className="space-y-3">
                  <a
                    href="mailto:ujan@expedition.dev"
                    className="block p-3 rounded-lg bg-muted/20 border border-transparent hover:border-primary/30 transition-colors font-rajdhani text-foreground/80 hover:text-foreground"
                  >
                    ujan@expedition.dev
                  </a>
                  <a
                    href="#"
                    className="block p-3 rounded-lg bg-muted/20 border border-transparent hover:border-primary/30 transition-colors font-rajdhani text-foreground/80 hover:text-foreground"
                  >
                    linkedin.com/in/ujan
                  </a>
                  <a
                    href="#"
                    className="block p-3 rounded-lg bg-muted/20 border border-transparent hover:border-primary/30 transition-colors font-rajdhani text-foreground/80 hover:text-foreground"
                  >
                    github.com/ujan
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="flex items-center gap-3 mb-8">
                <Send className="w-6 h-6 text-accent" />
                <h3 className="font-orbitron text-xl text-foreground">Send Transmission</h3>
              </div>

              <div className="space-y-6">
                {/* Name input */}
                <div className="relative group">
                  <label className="block text-muted-foreground font-rajdhani text-sm mb-2">
                    Identification
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/20 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-rajdhani transition-all"
                    placeholder="Enter your designation"
                  />
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent group-focus-within:w-full transition-all duration-500" />
                </div>

                {/* Email input */}
                <div className="relative group">
                  <label className="block text-muted-foreground font-rajdhani text-sm mb-2">
                    Communication Frequency
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/20 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-rajdhani transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message textarea */}
                <div className="relative group">
                  <label className="block text-muted-foreground font-rajdhani text-sm mb-2">
                    Transmission Content
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/20 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-rajdhani transition-all resize-none"
                    placeholder="Enter your message..."
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative w-full py-4 rounded-lg font-orbitron text-sm tracking-wider uppercase
                    bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30
                    border border-primary/50 hover:border-accent/80
                    text-foreground hover:text-glow
                    transition-all duration-300 overflow-hidden
                    disabled:opacity-50 disabled:cursor-not-allowed
                    group
                  `}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Initialize Transmission
                      </>
                    )}
                  </span>

                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 hsl(var(--accent) / 0)",
                        "0 0 0 10px hsl(var(--accent) / 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
