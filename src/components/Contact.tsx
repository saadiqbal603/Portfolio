import { useState } from "react";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saadiqbal603@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=saadiqbal603@gmail.com",
      color: "accent",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 323 2152268",
      href: "tel:+923232152268",
      color: "secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Muhammad Saad",
      href: "https://linkedin.com/in/muhammad-saad-2a74b9255",
      color: "primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: "#",
      color: "muted",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_Serivce_Id; // Replace with your actual ID
    const templateID = import.meta.env.VITE_Template_Id;
    const publicKey = import.meta.env.VITE_Public_Key;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Sending Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "accent":
        return {
          iconBg: "bg-accent/10",
          iconColor: "text-accent",
          hoverBg: "hover:bg-accent/20",
        };
      case "secondary":
        return {
          iconBg: "bg-secondary/10",
          iconColor: "text-secondary",
          hoverBg: "hover:bg-secondary/20",
        };
      case "primary":
        return {
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          hoverBg: "hover:bg-primary/20",
        };
      default:
        return {
          iconBg: "bg-muted/10",
          iconColor: "text-muted-foreground",
          hoverBg: "hover:bg-muted/20",
        };
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can
            work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>

            {contactInfo.map((info, index) => {
              const colorClasses = getColorClasses(info.color);

              return (
                <Card
                  key={index}
                  className={`glass border-border/50 ${colorClasses.hoverBg} transition-all duration-300 hover:scale-105`}
                >
                  <CardContent className="p-4">
                    <a
                      href={info.href}
                      className="flex items-center space-x-4 group"
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div
                        className={`${colorClasses.iconBg} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon
                          className={`w-5 h-5 ${colorClasses.iconColor}`}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="glass border-border/50 mt-8">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 gradient-text">
                  Quick Response
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically respond to all inquiries within 24 hours. For
                  urgent matters, feel free to reach out via phone or LinkedIn
                  for faster communication.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Send me a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-muted/20 border-border/50 focus:border-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-muted/20 border-border/50 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-muted/20 border-border/50 focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      rows={6}
                      className="bg-muted/20 border-border/50 focus:border-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 glow-primary"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <Card className="glass border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-2">
                Prefer a direct approach?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Feel free to reach out directly via email or schedule a call to
                discuss your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saadiqbal603@gmail.com" target="_blank">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Directly
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/muhammad-saad-2a74b9255"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
