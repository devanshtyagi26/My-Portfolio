import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/lib/projects.json";
import AboutMe from "@/components/AboutMe";
import CurrentTech from "@/components/CurrentTech";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-14 mt-35 w-[80%] relative">
      <AboutMe />
      <div className="grid grid-cols-1 gap-8 w-[80%]">
        <Experience />
      </div>
      <div className="grid grid-cols-1 gap-8 w-[60%]">
        <Education />
      </div>
      <div className="grid grid-cols-1 gap-8 w-[80%]">
        <CurrentTech />
      </div>
      <div className="grid grid-cols-1 gap-8 w-[80%]">
        <p className="text-xl flex font-semibold text-[#fafafa99] letter-spacing-[.2em] mb-1 justify-center items-center font-geist-mono">
          MY PROJECTS
        </p>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <TechStack />
    </div>
  );
}
