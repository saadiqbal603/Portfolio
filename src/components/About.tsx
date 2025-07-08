import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      title: "Bachelor's in Computer Science",
      institution: "SZABIST",
      period: "2021 - 2025",
      status: "Completed",
      icon: GraduationCap,
    },
    {
      title: "Intermediate",
      institution: "Bahria College",
      period: "2019 - 2021",
      status: "Completed",
      icon: GraduationCap,
    },
    {
      title: "Matriculation",
      institution: "DA SKBZ College",
      period: "2017 - 2019",
      status: "Completed",
      icon: GraduationCap,
    },
  ];

  const certifications = [
    {
      title: "HTML, CSS, JavaScript",
      provider: "Johns Hopkins University & KG Coding",
      icon: Award,
    },
    {
      title: "Python & AI",
      provider: "Coursera",
      icon: Award,
    },
    {
      title: "React & Redux",
      provider: "KG Coding",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 bg-darker-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a strong foundation in computer science
            and hands-on experience in building scalable applications across
            different platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-accent" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="glass border-border/50 hover:border-accent/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-accent font-medium">
                          {item.institution}
                        </p>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.period} • {item.status}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-secondary" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="glass border-border/50 hover:border-secondary/50 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <cert.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                        <p className="text-secondary font-medium">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Personal Bio */}
            <Card className="glass border-border/50 mt-8">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 gradient-text">
                  Personal Journey
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  As a Computer Science graduate from SZABIST, I've cultivated a
                  strong passion for creating innovative digital solutions. My
                  journey began with mastering the fundamentals of web
                  development and has grown into expertise in full-stack
                  development, mobile applications, and DevOps practices. I'm
                  committed to continuous learning and staying updated with the
                  latest technologies to deliver exceptional results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
