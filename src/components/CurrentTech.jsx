import React from "react";
import JavaScriptLogo from "../../public/Logos/JavaScript";

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
      <div className="grid">
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center w-">
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
      </div>
    </div>
  );
}

export default CurrentTech;
