import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    period: "2021 - Present",
    achievements: [
      "Led development of a microservices architecture serving 2M+ users daily",
      "Reduced application load time by 40% through performance optimization",
      "Mentored 5 junior developers and established coding best practices",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    location: "Palo Alto, CA", 
    period: "2019 - 2021",
    achievements: [
      "Built and maintained 15+ React applications with 99.9% uptime",
      "Developed RESTful APIs using Node.js and Express serving 100K+ requests daily",
      "Collaborated with UX team to improve user engagement by 35%",
      "Integrated payment systems processing $2M+ in transactions monthly"
    ]
  },
  {
    title: "Frontend Developer",
    company: "StartupLab",
    location: "Mountain View, CA",
    period: "2017 - 2019", 
    achievements: [
      "Created responsive web applications using React and TypeScript",
      "Improved accessibility compliance to WCAG 2.1 AA standards",
      "Reduced bug reports by 50% through comprehensive testing implementation",
      "Collaborated in agile environment delivering features bi-weekly"
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-heading text-3xl font-bold text-navy mb-8">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-100">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-navy rounded-full"></div>
              
              <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-professional transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-navy">
                      {exp.company}
                    </h4>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-navy rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};