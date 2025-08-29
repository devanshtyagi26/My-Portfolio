import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import AboutMe from "@/components/AboutMe";
import CurrentTech from "@/components/CurrentTech";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const ACCENT_COLOR = "#EF4444";
const FONT_FAMILY_FIRA =
  "var(--font-geist-mono), 'Geist Mono', 'Fira Mono', 'Menlo', monospace";

const hrStyle = {
  border: "none",
  borderTop: `2px solid ${ACCENT_COLOR}`,
  opacity: 0.18,
  margin: "1rem 0",
  width: "100%",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-14 mt-20 w-[80%] relative">
      <AboutMe />
      <hr style={hrStyle} />
      <div className="grid grid-cols-1 gap-8 w-[80%]">
        <Experience />
      </div>
      <hr style={hrStyle} />
      <div className="grid grid-cols-1 gap-8 w-[80%]">
        <CurrentTech />
      </div>
      <hr style={hrStyle} />
      <div className="grid grid-cols-1 gap-8 w-[80%]">
        <p
          className="text-xl font-semibold mb-5 font-geist-mono uppercase tracking-widest"
          style={{
            color: ACCENT_COLOR,
            fontFamily: FONT_FAMILY_FIRA,
            letterSpacing: ".18em",
          }}
        >
          MY PROJECTS
        </p>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <hr style={hrStyle} />
      <div className="grid grid-cols-1 gap-8 w-[80%]">
        <Education />
      </div>
    </div>
  );
}
