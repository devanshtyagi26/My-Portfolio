"use client";
import { ArrowRight, CalendarClock, X } from "lucide-react";
import React, { useState } from "react";
import colleges from "../data/colleges.json";

const ACCENT_COLOR = "#EF4444";
const BG_COLOR = "rgba(24, 24, 27,0.7)";
const CARD_BG = "none";
const POPUP_BG = "rgba(24,24,27,0.98)";
const BORDER_COLOR = "rgba(239,68,68,0.18)";
const FONT_FAMILY_FIRA =
  "var(--font-geist-mono), 'Geist Mono', 'Fira Mono', 'Menlo', monospace";

function Education() {
  const [selectedCollege, setSelectedCollege] = useState(null);

  return (
    <>
      <p
        className="text-xl font-semibold mb-5 font-geist-mono uppercase tracking-widest"
        style={{
          color: ACCENT_COLOR,
          fontFamily: FONT_FAMILY_FIRA,
          letterSpacing: ".18em",
        }}
      >
        Education
      </p>
      <div
        className="flex flex-col justify-self-center items-center w-[60%] min-h-[300px] p-6 font-geist-mono"
        style={{
          background: BG_COLOR,
          border: `1.5px solid ${BORDER_COLOR}`,
          borderRadius: "1.5rem",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
        }}
      >
        {colleges.map((college, idx) => (
          <div
            key={idx}
            className="transition-all duration-300 ease-in-out group w-full mb-2 last:mb-0"
            style={{
              borderRadius: "1.25rem",
              background: CARD_BG,
            }}
          >
            <div className="grid grid-cols-[auto_1fr] items-center gap-5 p-5 cursor-pointer group-hover:shadow-xl group-hover:bg-[rgba(239,68,68,0.08)] transition-all duration-300 rounded-[1.25rem]">
              <div className="flex flex-col justify-center items-center h-full py-2">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={college.logo}
                    className="rounded-full border border-gray-700 w-14 h-14 object-cover"
                    alt=""
                  />
                </div>
                <div className="group-hover:bg-[rgba(239,68,68,0.18)] group-hover:bg-opacity-100 mt-1 h-full w-[.125rem] flex-1 bg-[hsla(0,0%,100%,0.08)]"></div>
              </div>
              <div className="flex flex-col justify-center py-2">
                <p
                  className="text-2xl font-semibold mb-1"
                  style={{ color: "#F3F4F6" }}
                >
                  {college.degree}
                </p>
                <p className="text-lg" style={{ color: "#d1d5db" }}>
                  {college.college}
                </p>
                <p className="text-lg" style={{ color: "#a1a1aa" }}>
                  {college.university}
                </p>
                <p
                  className="text-sm flex items-center"
                  style={{ color: "#a1a1aa" }}
                >
                  <CalendarClock className="h-4 relative right-1" />{" "}
                  {college.duration}
                </p>
                <button
                  className="text-sm w-fit flex items-center cursor-pointer mt-2 px-3 py-1 rounded bg-transparent border border-transparent hover:border-[rgba(239,68,68,0.5)] hover:bg-[rgba(239,68,68,0.08)] transition-colors duration-200"
                  style={{ color: ACCENT_COLOR, fontWeight: 500 }}
                  onClick={() => setSelectedCollege(college)}
                >
                  View More <ArrowRight className="h-4 relative ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedCollege && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "rgba(10,15,25,0.65)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
          onClick={() => setSelectedCollege(null)}
        >
          <div
            className="relative rounded-2xl p-8 max-w-md w-full shadow-2xl border"
            style={{
              background: POPUP_BG,
              color: "#F3F4F6",
              border: `1.5px solid ${BORDER_COLOR}`,
              boxShadow: `0 8px 32px 0 ${ACCENT_COLOR}33`,
              fontFamily: FONT_FAMILY_FIRA,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 hover:text-red-400"
              style={{ color: "#a1a1aa" }}
              onClick={() => setSelectedCollege(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <h2
              className="text-xl font-bold mb-2"
              style={{ color: ACCENT_COLOR }}
            >
              College Summary :
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-base">
              {selectedCollege.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Education;
