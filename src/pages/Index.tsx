import { ParticleField } from "@/components/ParticleField";
import { MistOverlay } from "@/components/MistOverlay";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Ambient Effects */}
      <ParticleField />
      <MistOverlay />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <TimelineSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
