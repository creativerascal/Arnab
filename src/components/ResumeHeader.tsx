import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const ResumeHeader = () => {
  return (
    <header className="bg-gradient-professional text-primary-foreground p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">
              Sarah Johnson
            </h1>
            <h2 className="text-xl md:text-2xl font-light opacity-90 mb-4">
              Senior Full Stack Developer
            </h2>
            <p className="text-base opacity-80 leading-relaxed max-w-2xl">
              Passionate full-stack developer with 7+ years of experience building scalable web applications. 
              Expertise in React, Node.js, and cloud technologies with a focus on creating exceptional user experiences.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-primary-foreground/20">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            <span>sarah.johnson@email.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/sarahjohnson</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Github className="w-4 h-4" />
            <span>github.com/sarahjohnson</span>
          </div>
        </div>
      </div>
    </header>
  );
};