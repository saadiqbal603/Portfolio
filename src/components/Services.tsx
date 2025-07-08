import { Smartphone, Globe, Settings, Cloud, Code, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Flutter App Development",
      description:
        "Cross-platform applications for Android IOS Desktop and Windows with native performance and beautiful UI.",
      features: [
        "Native performance across platforms",
        "Custom UI/UX design implementation",
        "State management with Provider",
        "Integration with device features",
        "App store deployment assistance",
      ],
      color: "accent",
    },
    {
      icon: Globe,
      title: "Vue.js / React Web Development",
      description:
        "Modern, responsive web applications built with the latest frontend technologies and best practices.",
      features: [
        "Responsive design for all devices",
        "Component-based architecture",
        "State management solutions",
        "API integration & data fetching",
        "Progressive Web App capabilities",
      ],
      color: "secondary",
    },
    {
      icon: Settings,
      title: "CI/CD Pipeline Automation",
      description:
        "Streamlined development workflows with automated testing, building, and deployment processes.",
      features: [
        "Jenkins pipeline configuration",
        "Automated testing integration",
        "Git workflow optimization",
        "Deployment automation",
        "Monitoring and alerts setup",
      ],
      color: "primary",
    },
    {
      icon: Cloud,
      title: "REST API Integration",
      description:
        "Seamless integration of third-party services and custom API development for data exchange.",
      features: [
        "Third-party API integration",
        "Custom API development",
        "Authentication & authorization",
        "Data validation & security",
        "API documentation",
      ],
      color: "muted",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "End-to-end application development from database design to user interface implementation.",
      features: [
        "Database design & optimization",
        "Backend API development",
        "Frontend user interface",
        "Security implementation",
        "Performance optimization",
      ],
      color: "accent",
    },
    {
      icon: Zap,
      title: "Google Play Deployment",
      description:
        "Professional app store deployment with optimization for better visibility and user acquisition.",
      features: [
        "App store optimization",
        "Release management",
        "Beta testing coordination",
        "Performance monitoring",
        "Update management",
      ],
      color: "secondary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "accent":
        return {
          iconBg: "bg-accent/10",
          iconColor: "text-accent",
          border: "hover:border-accent/30",
          glow: "hover:glow-primary",
        };
      case "secondary":
        return {
          iconBg: "bg-secondary/10",
          iconColor: "text-secondary",
          border: "hover:border-secondary/30",
          glow: "hover:glow-secondary",
        };
      case "primary":
        return {
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          border: "hover:border-primary/30",
          glow: "",
        };
      default:
        return {
          iconBg: "bg-muted/10",
          iconColor: "text-muted-foreground",
          border: "hover:border-muted/30",
          glow: "",
        };
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-darker-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Services <span className="gradient-text">Offered</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development services to bring your ideas to
            life with modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);

            return (
              <Card
                key={index}
                className={`glass border-border/50 ${colorClasses.border} ${colorClasses.glow} transition-all duration-300 hover:scale-105 group`}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Icon and Title */}
                    <div className="flex items-center space-x-4">
                      <div
                        className={`${colorClasses.iconBg} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon
                          className={`w-6 h-6 ${colorClasses.iconColor}`}
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="font-medium mb-2 text-sm">
                        What's Included:
                      </h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-xs text-muted-foreground flex items-center"
                          >
                            <span
                              className={`w-1 h-1 ${colorClasses.iconColor.replace(
                                "text-",
                                "bg-"
                              )} rounded-full mr-2`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass border-border/50 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Let's discuss how I can help bring your ideas to life. Whether
                you need a mobile app, web application, or complete full-stack
                solution, I'm here to deliver high-quality results that exceed
                your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 glow-primary"
                >
                  Get Started Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => {
                    const element = document.getElementById("projects");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Portfolio
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-accent">
                    Free consultation
                  </span>{" "}
                  •
                  <span className="font-medium text-secondary ml-2">
                    Quick turnaround
                  </span>{" "}
                  •
                  <span className="font-medium text-primary ml-2">
                    Ongoing support
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
