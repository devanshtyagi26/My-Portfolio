import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-35">
      <ProjectCard />
      <TechStack />
    </div>
  );
}
