import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/lib/projects.json";
import AboutMe from "@/components/AboutMe";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-35 w-[80%] relative">
      <AboutMe />
      <div className="grid grid-cols-1 gap-8 w-[80%]">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <TechStack />
    </div>
  );
}
