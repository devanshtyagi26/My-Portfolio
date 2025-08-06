import React from "react";
import { Button } from "@/components/ui/button"; // Using shadcn/ui Button for potential enhancements
import { GitCommitHorizontal } from "lucide-react";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="z-20 flex lg:flex-row flex-col lg:gap-6 border-red-700/80 bg-gray-900 shadow-red-900/50 shadow-lg p-4 md:p-6 lg:p-8 border rounded-xl w-full min-h-72 relative">
      <div className="flex flex-col gap-3">
        <span className="hover:opacity-85 font-light text-red-400 text-md">
          {project?.type || "Project Type"}
        </span>
        <span className="font-semibold text-2xl text-white hover:text-red-500 transition-colors duration-200 cursor-pointer">
          {project?.name || "Project Name"}
        </span>
        <p className="font-light text-sm text-gray-300">
          {project?.description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus iusto aliquid maxime soluta quod dicta assumenda neque magni debitis. Sit vel ea ab aliquam accusamus quaerat reprehenderit voluptates sed?"}
        </p>
        <ul className="flex flex-col gap-2.5 my-4 font-light text-sm text-gray-300">
          {project?.features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <GitCommitHorizontal className="text-red-500 w-4 h-4" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-2 text-white text-xs sm:text-sm">
          {project?.technologies?.map((tech, index) => (
            <span
              key={index}
              className="gap-4 bg-red-700/80 hover:bg-red-500 px-3 py-2 rounded-full transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-4">
          {project?.liveLink && (
            <Button
              asChild
              variant="outline"
              className="text-sm text-gray-300 hover:text-red-500 border-red-700/80 hover:border-red-500 transition-colors duration-300 rounded-md"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project?.repoLink && (
            <Button
              asChild
              variant="outline"
              className="text-sm text-gray-300 hover:text-red-500 border-red-700/80 hover:border-red-500 transition-colors duration-300 rounded-md"
            >
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
