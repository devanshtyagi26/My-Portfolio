import React from "react";
import JavaScriptLogo from "../../public/Logos/JavaScript";
import NextJSLogo from "../../public/Logos/NextJS";
import FigmaLogo from "../../public/Logos/Figma";
import NodeJSLogo from "../../public/Logos/NodeJS";
import MongoDBLogo from "../../public/Logos/MongoDB";
import TailwindLogo from "../../public/Logos/Tailwind";
import ReactLogo from "../../public/Logos/React";

function CurrentTech() {
  return (
    <div>
      <p className="text-xl font-semibold text-[#fafafa99] letter-spacing-[.2em] mb-8 font-geist-mono uppercase">
        Current technologies
      </p>
      <p>
        I specialize in a diverse set of modern technologies that enable me to
        create powerful, efficient, and scalable solutions. Here are some of the
        core technologies I work with:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* ------JavaScript------- */}
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
          <div className="p-3 bg-[rgba(197,204,73,0.2)] rounded-lg w-fit">
            <JavaScriptLogo />
          </div>
          <div>
            <h4 className="text-lg font-medium">JavaScript</h4>
            <p className="text-dark-200/70 dark:text-white/70 text-sm">
              Promises kept, sometimes
            </p>
          </div>
        </div>

        {/* ------React------- */}
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
          <div className="p-3 bg-[rgba(60,140,218,0.2)] rounded-lg w-fit">
            <ReactLogo />
          </div>
          <div>
            <h4 className="text-lg font-medium">React</h4>
            <p className="text-dark-200/70 dark:text-white/70 text-sm">
              State of the art
            </p>
          </div>
        </div>

        {/* ------NextJS------- */}
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
          <div className="p-3 bg-[rgba(248,248,248,0.2)] rounded-lg w-fit">
            <NextJSLogo />
          </div>
          <div>
            <h4 className="text-lg font-medium">NextJS</h4>
            <p className="text-dark-200/70 dark:text-white/70 text-sm">
              SSR without stress
            </p>
          </div>
        </div>

        {/* ------Figma------- */}
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
          <div className="p-3 bg-[rgba(10,207,131,0.2)] rounded-lg w-fit">
            <FigmaLogo />
          </div>
          <div>
            <h4 className="text-lg font-medium">Figma</h4>
            <p className="text-dark-200/70 dark:text-white/70 text-sm">
              Shapes into stories
            </p>
          </div>
        </div>

        {/* ------NodeJS------- */}
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
          <div className="p-3 bg-[rgba(10,207,12,0.2)] rounded-lg w-fit">
            <NodeJSLogo />
          </div>
          <div>
            <h4 className="text-lg font-medium">NodeJS</h4>
            <p className="text-dark-200/70 dark:text-white/70 text-sm">
              Async all day
            </p>
          </div>
        </div>

        {/* ------MongoDB------- */}
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
          <div className="p-3 bg-[rgba(102,207,10,0.2)] rounded-lg w-fit">
            <MongoDBLogo />
          </div>
          <div>
            <h4 className="text-lg font-medium">MongoDB</h4>
            <p className="text-dark-200/70 dark:text-white/70 text-sm">
              Where JSON feels home
            </p>
          </div>
        </div>

        {/* ------Tailwind------- */}
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
          <div className="p-3 bg-[rgba(10,111,207,0.2)] rounded-lg w-fit">
            <TailwindLogo />
          </div>
          <div>
            <h4 className="text-lg font-medium">Tailwind</h4>
            <p className="text-dark-200/70 dark:text-white/70 text-sm">
              Styling at light speed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentTech;
