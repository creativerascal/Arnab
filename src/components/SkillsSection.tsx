const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 75 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 70 }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Git", level: 95 },
      { name: "Jenkins", level: 75 },
      { name: "Kubernetes", level: 70 }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-12 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-heading text-3xl font-bold text-navy mb-8 text-center">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-card">
              <h3 className="font-heading text-xl font-bold text-slate mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="bg-gradient-professional h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};