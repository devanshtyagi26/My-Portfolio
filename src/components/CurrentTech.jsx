"use client";
import React, { useState } from "react";
import JavaScriptLogo from "../../public/Logos/JavaScript";
import NextJSLogo from "../../public/Logos/NextJS";
import FigmaLogo from "../../public/Logos/Figma";
import NodeJSLogo from "../../public/Logos/NodeJS";
import MongoDBLogo from "../../public/Logos/MongoDB";
import TailwindLogo from "../../public/Logos/Tailwind";
import ReactLogo from "../../public/Logos/React";
import TensorflowLogo from "../../public/Logos/Tensorflow";
import PythonLogo from "../../public/Logos/Python";
import JupyterLogo from "../../public/Logos/Jupyter";
import FastAPILogo from "../../public/Logos/FastAPI";

const ACCENT_COLOR = "#EF4444";
const FONT_FAMILY_FIRA =
  "var(--font-geist-mono), 'Geist Mono', 'Fira Mono', 'Menlo', monospace";

function CurrentTech() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div style={{ color: "#F3F4F6" }}>
      <p
        className="text-xl font-semibold mb-5 font-geist-mono uppercase tracking-widest"
        style={{
          fontFamily: FONT_FAMILY_FIRA,
          color: ACCENT_COLOR,
          letterSpacing: ".18em",
        }}
      >
        Current technologies
      </p>
      <p className="text-base" style={{ color: "#a1a1aa" }}>
        I specialize in a diverse set of modern technologies that enable me to
        create powerful, efficient, and scalable solutions. Here are some of the
        core technologies I work with:
      </p>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 transition-all duration-500 ${
          showMore ? "max-h-[2000px]" : "max-h-[700px] overflow-hidden"
        }`}
      >
        {/* ------JavaScript------- */}
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
          <div className="p-3 bg-[rgba(197,204,73,0.2)] rounded-lg w-fit">
            <JavaScriptLogo />
          </div>
          <div>
            <h4 className="text-lg font-medium">JavaScript</h4>
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
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
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
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
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
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
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
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
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
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
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
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
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
              Styling at light speed
            </p>
          </div>
        </div>

        {/* ------Jupyter------- */}
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
          <div className="p-3 bg-[rgba(74,74,74,0.2)] rounded-lg w-fit">
            <JupyterLogo />
          </div>
          <div>
            <h4 className="text-lg font-medium">Jupyter</h4>
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
              Where data speaks
            </p>
          </div>
        </div>

        {/* ------Tensorflow------- */}
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
          <div className="p-3 bg-[rgba(207,123,10,0.2)] rounded-lg w-fit">
            <TensorflowLogo />
          </div>
          <div>
            <h4 className="text-lg font-medium">Tensorflow</h4>
            <p className="text-sm" style={{ color: "#a1a1aa" }}>
              Training never stops
            </p>
          </div>
        </div>

        {/* ------Extra Skills (hidden until expanded)------- */}
        {showMore && (
          <>
            {/* ------FastAPI------- */}
            <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
              <div className="p-3 bg-[rgba(10,132,207,0.2)] rounded-lg w-fit">
                <FastAPILogo />
              </div>
              <div>
                <h4 className="text-lg font-medium">FastAPI</h4>
                <p className="text-sm" style={{ color: "#a1a1aa" }}>
                  Asynchronous, intuitive
                </p>
              </div>
            </div>

            {/* ------Python------- */}
            <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[rgba(26,26,26,1)] dark:border-dark-200 bg-[rgba(26,26,26,1)] dark:bg-dark-200 hover:bg-[rgba(38,38,38,1)] dark:hover:bg-dark-300 hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700 transition-colors duration-200 justify-start items-center">
              <div className="p-3 bg-[rgba(207,181,10,0.2)] rounded-lg w-fit">
                <PythonLogo />
              </div>
              <div>
                <h4 className="text-lg font-medium">Python</h4>
                <p className="text-sm" style={{ color: "#a1a1aa" }}>
                  AI’s favorite toolkit
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
                <p className="text-sm" style={{ color: "#a1a1aa" }}>
                  Styling at light speed
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="px-6 py-2 rounded-md font-semibold shadow transition-colors duration-200 border hover:border-[rgba(77,77,77,1)] dark:hover:border-dark-700"
          style={{
            background: ACCENT_COLOR,
            color: "#fff",
            border: `1.5px solid ${ACCENT_COLOR}`,
            fontFamily: FONT_FAMILY_FIRA,
            boxShadow: `0 2px 8px 0 ${ACCENT_COLOR}22`,
            cursor: "pointer",
          }}
          onClick={() => setShowMore((v) => !v)}
        >
          {showMore ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}

export default CurrentTech;
