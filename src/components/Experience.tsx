import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Trainee",
      company: "TechSol360",
      location: "Karachi, Pakistan",
      period: "Feb 2025 - Present",
      status: "Current",
      description:
        "Building scalable mobile and web applications with focus on performance optimization and user experience.",
      achievements: [
        "Developed mobile applications using Flutter for Android/iOS/Windows/MacOs platforms",
        "Built responsive web applications with Vue.js and React",
        "Integrated REST APIs",
        "Implemented CI/CD pipelines using Jenkins for automated deployment",
        "Collaborated with cross-functional teams in Agile environment",
      ],
      technologies: [
        "Flutter",
        "Vue.js",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Jenkins",
        "REST APIs",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "TechSol360",
      location: "Karachi, Pakistan",
      period: "Jul 2024 - Jan 2025",
      status: "Completed",
      description:
        "Gained hands-on experience in software development lifecycle, testing methodologies, and team collaboration.",
      achievements: [
        "Assisted in the development of Flutter-based mobile and Vue.js web applications",
        "Conducted testing and debugging of web and mobile applications",
        "Contributed to performance optimization, debugging, and code refactoring",
        "Researched and implemented new technologies for project enhancement",
        "Assisted in deployment and version control management",
      ],
      technologies: [
        "Flutter",
        "Vue.JS",
        "Testing",
        "Debugging",
        "Git",
        "Github",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey in software development with hands-on
            experience in modern technologies and methodologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-secondary transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute w-4 h-4 bg-accent rounded-full border-4 border-background ${
                    index % 2 === 0
                      ? "left-2 md:left-1/2 md:transform md:-translate-x-1/2"
                      : "left-2 md:left-1/2 md:transform md:-translate-x-1/2"
                  }`}
                />

                <Card
                  className={`glass border-border/50 hover:border-accent/30 transition-all duration-300 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-lg text-accent font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <Badge
                          variant={
                            exp.status === "Current" ? "default" : "outline"
                          }
                          className={
                            exp.status === "Current"
                              ? "bg-accent text-accent-foreground"
                              : ""
                          }
                        >
                          {exp.status}
                        </Badge>
                      </div>

                      {/* Period and Location */}
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Briefcase className="w-4 h-4 mr-2 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="glass border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-3 gradient-text">
                Looking for Opportunities
              </h3>
              <p className="text-muted-foreground mb-4">
                I'm currently seeking full-time software engineering positions
                where I can apply my skills in building innovative solutions and
                continue growing as a developer.
              </p>
              <div className="flex justify-center">
                <Badge className="bg-primary text-primary-foreground">
                  Available for Full-time Roles
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
