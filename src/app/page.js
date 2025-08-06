import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/lib/projects.json";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-35 w-[80%] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <TechStack />
    </div>
  );
}
