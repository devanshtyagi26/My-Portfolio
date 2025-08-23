"use client";
import { ArrowRight, CalendarClock, X } from "lucide-react";
import React, { useState } from "react";

function Education() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div
        className="flex items-center w-full min-h-[300px] p-6 font-geist-mono"
        style={{
          background: "rgba(17,25,40,0.55)",
          border: "1px solid hsla(0,0%,100%,.125)",
          borderRadius: "1.5rem",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <div
          className="transition-all duration-300 ease-in-out group w-full bg-none font-geist-mono"
          style={{
            borderRadius: "1.25rem",
          }}
        >
          <div className="grid grid-cols-[auto_1fr] items-center gap-5 p-5 cursor-pointer group-hover:shadow-xl bg-none group-hover:bg-[rgba(128,128,128,0.15)] transition-all duration-300 rounded-[1.25rem]">
            <div className="flex flex-col justify-center items-center h-full py-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="Logos/quiksort.jpg"
                  className="rounded-2xl w-13 h-13 object-cover"
                  alt=""
                />
              </div>
              <div className="group-hover:bg-[rgba(191,191,207,0.46)] group-hover:bg-opacity-100 mt-1 h-full w-[.125rem] flex-1 bg-[hsla(0,0%,100%,0.125)]"></div>
            </div>
            <div
              className="flex flex-col justify-center py-2"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              <p className="text-2xl font-semibold text-gray-100 mb-1">
                B.Sc.(Hons.) Computer Science
              </p>
              <p className="text-lg text-gray-300">Ramanujan College</p>
              <p className="text-lg text-white/70">University of Delhi</p>
              <p className="text-sm text-gray-400 flex items-center">
                <CalendarClock className="h-4 relative right-1" /> 2022 - 2026
              </p>
              <button
                className="text-sm w-fit text-gray-400 flex items-center cursor-pointer hover:text-red-400"
                onClick={() => setShowPopup(true)}
              >
                View More <ArrowRight className="h-4 relative" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "rgba(10,15,25,0.65)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative bg-[rgba(33,33,33,0.58)] rounded-2xl p-8 max-w-md w-full text-gray-100 shadow-2xl border border-gray-700"
            style={{ boxShadow: "0 8px 32px 0 rgba(135,31,31,0.37)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-bold mb-2">College Summary :</h2>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>
                Studying core subjects of CS including DSA, DBMS, Design
                Analysis and Algorithm, Operating systems, and Computer
                architecture.
              </li>
              <li>Scored an aggregate of 8.95 CGPA till now.</li>
              <li>Graphics Head in QuikSort Society of the college.</li>
              <li>Creative Head in TEDx RamanujanCollege.</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Education;
