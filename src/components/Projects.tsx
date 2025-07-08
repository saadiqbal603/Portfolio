import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Uniconnect from "@/assets/uniconnect.png";

const Projects = () => {
  const featuredProject = {
    title: "UniConnect",
    description:
      "A comprehensive full-stack MERN web application designed to streamline university admission processes. Features secure student registration, document upload system, admission tracking, and real-time messaging between students and institutions.",
    longDescription:
      "UniConnect revolutionizes the university admission process by providing a centralized platform for students and institutions. The application includes advanced features like document verification, application status tracking, automated notifications, and secure communication channels.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "SMTP Protocol",
    ],
    features: [
      "Secure Student and Institute registration & authentication",
      "Document upload",
      "Admission status tracking",
      "Student-institution messaging system",
      "Support Ticket System",
      "Admin dashboard",
      "Responsive design for all devices",
    ],
    role: "Full-Stack Developer",
    duration: "Sep 2024 - Jun 2025",
    status: "Completed",
    image: Uniconnect,
  };

  const otherProjects = [
    {
      title: "E-Commerce App",
      description:
        "A fully responsive e-commerce website built using HTML, CSS, and JavaScript with dynamic product listings and cart functionality.",
      technologies: ["HTML", "CSS", "Bootstrap", "JS", "JQuery"],
      status: "Completed",
    },
    {
      title: "Task Management System",
      description:
        "This clone replicates Trello’s core features such as creating boards, lists, and draggable cards for organizing tasks visually.",
      technologies: ["HTML", "CSS", "JS", ".NET MVC", "MS SQL Server"],
      status: "Completed",
    },
    {
      title: "Social Media App",
      description:
        "It replicates core features of Twitter, allowing users to register, log in, post tweets, and interact with a timeline of posts in a social media-like interface.",
      technologies: ["React", "Node JS", "Express", "MongoDB"],
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-darker-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and
            best practices.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <Card className="glass border-border/50 overflow-hidden hover:border-accent/30 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-64 lg:h-full object-contain transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {featuredProject.status}
                </Badge>
              </div>

              {/* Project Details */}
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {featuredProject.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredProject.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      Role: {featuredProject.role}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Duration: {featuredProject.duration}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {featuredProject.features
                        .slice(0, 7)
                        .map((feature, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-accent/20 text-accent"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* <div className="flex gap-4 pt-4">
                    <Button className="bg-primary hover:bg-primary/90 glow-primary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div> */}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="glass border-border/50 hover:border-secondary/30 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <Badge
                        variant="outline"
                        className="border-secondary/20 text-secondary"
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-accent hover:text-accent-foreground hover:bg-accent"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
