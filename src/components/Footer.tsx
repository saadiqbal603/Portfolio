import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/saadiqbal603",
      label: "GitHub",
      color: "hover:text-accent",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/muhammad-saad-2a74b9255",
      label: "LinkedIn",
      color: "hover:text-secondary",
    },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=saadiqbal603@gmail.com",
      label: "Email",
      color: "hover:text-primary",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-darker-surface border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Copyright */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform mb-2 block"
            >
              Muhammad Saad
            </button>
            <p className="text-sm text-muted-foreground">
              Software Engineer • Mobile & Web Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`text-muted-foreground ${link.color} transition-colors`}
                asChild
              >
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              © {currentYear} Made with{" "}
              <Heart className="w-4 h-4 mx-1 text-accent" /> by Muhammad Saad
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              All rights reserved
            </p>
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
