import { Code, Database, Settings, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "accent",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React.js",
        "Vue.js",
        "Flutter",
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "secondary",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "MS SQL Server",
        ".NET MVC",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      color: "primary",
      skills: [
        "Jenkins (CI/CD)",
        "Git",
        "Version Control",
        "Google Play Deployment",
        "REST API Integration",
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "muted",
      skills: [
        "Agile Collaboration",
        "Testing & Debugging",
        "Research",
        "Problem Solving",
        "Team Leadership",
      ],
    },
  ];

  const getColorVariant = (color: string) => {
    switch (color) {
      case "accent":
        return "bg-accent/10 text-accent border-accent/20";
      case "secondary":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "primary":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getIconBg = (color: string) => {
    switch (color) {
      case "accent":
        return "bg-accent/10";
      case "secondary":
        return "bg-secondary/10";
      case "primary":
        return "bg-primary/10";
      default:
        return "bg-muted/10";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "accent":
        return "text-accent";
      case "secondary":
        return "text-secondary";
      case "primary":
        return "text-primary";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning frontend, backend, mobile
            development, and DevOps practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass border-border/50 hover:border-accent/30 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`${getIconBg(
                      category.color
                    )} p-3 rounded-lg mr-4`}
                  >
                    <category.icon
                      className={`w-6 h-6 ${getIconColor(category.color)}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`${getColorVariant(
                        category.color
                      )} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: "HTML CSS", level: 90 },
              { skill: "JavaScipt", level: 75 },
              { skill: "React.js", level: 75 },
              { skill: "Vue.js", level: 80 },
              { skill: "Flutter Android Development", level: 90 },
              { skill: "Flutter IOS Development", level: 90 },
              { skill: "Flutter Desktop Development", level: 85 },
              { skill: "Flutter MacOS Development", level: 85 },
              { skill: "Node.js & Express", level: 80 },
              { skill: "MongDB", level: 85 },
              { skill: "MS SQL Server", level: 75 },
              { skill: "CI/CD & DevOps", level: 75 },
              { skill: "API Integration", level: 80 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">
                    {item.skill}
                  </span>
                  <span className="text-accent">{item.level}%</span>
                </div>
                <div className="w-full bg-muted/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
