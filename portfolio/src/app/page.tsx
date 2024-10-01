import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import TalksPublicationsSection from './components/TalksPublicationsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 space-y-16">
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <TalksPublicationsSection />
        <ContactSection />
      </main>
      {/* Footer content */}
    </div>
  );
}