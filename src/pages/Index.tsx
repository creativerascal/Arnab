import { ResumeHeader } from "@/components/ResumeHeader";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResumeHeader />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
};

export default Index;
