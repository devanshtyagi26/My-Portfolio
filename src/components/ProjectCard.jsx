import React from "react";

function ProjectCard() {
  return (
    <div className="z-20 flex lg:flex-row flex-col lg:gap-3 border-[#2a1454] bg-darkBlue shadow-[#04030b] shadow-2xl p-4 md:p-6 lg:p-8 border rounded-xl w-full min-h-72">
      <div className="flex flex-col gap-2">
        <span className="hover:opacity-85 font-light text-[#8750f7] text-md">
          Project Type
        </span>
        <span className="font-semibold text-2xl text-white hover:text-purple-700 transition-colors duration-200 cursor-pointer">
          Project Name
        </span>
        <p className="font-light text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus
          iusto aliquid maxime soluta quod dicta assumenda neque magni debitis.
          Sit vel ea ab aliquam accusamus quaerat reprehenderit voluptates sed?
        </p>
        <ul className="flex flex-col gap-2.5 my-6 font-light text-sm text-white">
          <li className="gap-4">one</li>
          <li className="gap-4">one</li>
          <li className="gap-4">one</li>
        </ul>
        <ul className="flex flex-wrap items-center gap-3 text-white text-xs sm:text-sm">
          <li className="gap-4 bg-[#2a1454] hover:bg-cyan-500 px-3 py-2 rounded-full transition-all duration-500">
            Blob
          </li>
          <li className="gap-4 bg-[#2a1454] hover:bg-cyan-500 px-3 py-2 rounded-full transition-all duration-500">
            Blob
          </li>
          <li className="gap-4 bg-[#2a1454] hover:bg-cyan-500 px-3 py-2 rounded-full transition-all duration-500">
            Blob
          </li>
        </ul>
        <div className="flex items-center gap-6 my-4 ml-2 lg:ml-1">
          <a
            href="http://"
            className="flex items-center gap-2 text-sm text-white hover:text-cyan-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
          <a
            href="http://"
            className="flex items-center gap-2 text-sm text-white hover:text-cyan-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
