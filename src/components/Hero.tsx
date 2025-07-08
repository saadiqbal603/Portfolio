import { useState, useEffect } from "react";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import Saad from "@/assets/Saad.png";
import Saad_CV from "@/assets/Muhammad_Saad_CV.pdf";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-teal/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-neon-blue/10 to-neon-teal/10 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div
            className={`flex-1 text-center lg:text-left space-y-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold mt-20 lg:mt-0">
                <span className="block text-foreground">Muhammad</span>
                <span className="block gradient-text">Saad</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Software Engineer | Mobile & Web Developer
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Turning Ideas into Scalable Digital Solutions
            </p>

            <p className="text-base text-muted-foreground max-w-2xl">
              Software Engineer experienced in building scalable mobile
              applications using Flutter and responsive web apps with Vue.js and
              React. Passionate about creating high-performance, secure
              applications and optimizing development workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                onClick={() => scrollToSection("projects")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => {
                  // Create a temporary link to download CV
                  const link = document.createElement("a");
                  link.href = Saad_CV; // Replace with actual CV URL
                  link.download = "Muhammad_Saad_CV.pdf";
                  link.click();
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile image */}
          <div
            className={`flex-shrink-0 ${
              isVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl pulse-glow ">
                <img
                  src={Saad}
                  alt="Muhammad Saad"
                  className="bg-[#F0F8FF] w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-teal rounded-full opacity-80 blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-neon-teal to-neon-blue rounded-full opacity-60 blur-xl animate-pulse delay-500" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${
            isVisible ? "animate-fade-in-up delay-500" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
