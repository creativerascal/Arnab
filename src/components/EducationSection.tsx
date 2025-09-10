import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    year: "2017",
    details: "Specialization in Software Engineering and Human-Computer Interaction"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "UC Berkeley",
    location: "Berkeley, CA", 
    year: "2015",
    details: "Magna Cum Laude, Dean's List for 6 semesters"
  }
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Developer",
  "Certified Kubernetes Administrator (CKA)",
  "Scrum Master Certified (SMC)"
];

export const EducationSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8" />
              Education
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-card">
                  <h3 className="font-heading text-lg font-bold text-slate mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-navy font-semibold mb-1">{edu.school}</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {edu.location} • {edu.year}
                  </p>
                  <p className="text-foreground text-sm italic">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy mb-8 flex items-center gap-3">
              <Award className="w-8 h-8" />
              Certifications
            </h2>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card rounded-lg p-4 shadow-card flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-professional rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};