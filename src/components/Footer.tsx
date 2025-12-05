import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-primary/20">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="font-orbitron text-xl font-bold text-foreground hover:text-glow transition-all">
              UJAN
            </a>
            <p className="text-muted-foreground font-rajdhani text-sm mt-2">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-bioluminescent animate-pulse" />
            <span className="text-muted-foreground font-rajdhani text-sm">
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
