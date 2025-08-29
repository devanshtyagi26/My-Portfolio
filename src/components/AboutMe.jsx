import { CalendarClock, Leaf, MapPin, Terminal } from "lucide-react";
import React from "react";
const ACCENT_COLOR = "#EF4444";
const BG_COLOR = "rgba(24, 24, 27,0.7)";
const FONT_FAMILY_FIRA =
  "var(--font-geist-mono), 'Geist Mono', 'Fira Mono', 'Menlo', monospace";

function AboutMe() {
  return (
    <div
      className="font-geist-mono w-[80%]"
      style={{
        background: BG_COLOR,
        borderRadius: "1.5rem",
        padding: "2.5rem",
        color: "#F3F4F6",
        boxShadow: `0 2px 16px 0 ${ACCENT_COLOR}11`,
      }}
    >
      <p
        className="text-xl font-semibold mb-8 font-geist-mono uppercase tracking-widest"
        style={{
          color: ACCENT_COLOR,
          letterSpacing: ".18em",
          fontFamily: FONT_FAMILY_FIRA,
        }}
      >
        ABOUT ME
      </p>
      <div className="flex gap-8 justify-center items-start">
        <div className="flex flex-col justify-center w-1/2 gap-[2rem]">
          <p
            className="text-[3.75rem] font-weight-100 tracking-wide font-geist-mono flex flex-col leading-[1]"
            style={{ color: "#F3F4F6" }}
          >
            Hi, I'm
            <br />
            <span style={{ color: ACCENT_COLOR }}>Devansh Tyagi</span>
          </p>
          <div className="flex flex-col gap-2">
            <p
              className="flex justify-start items-center text-[1.1rem]"
              style={{ color: "#a1a1aa" }}
            >
              <MapPin className="mr-3" style={{ color: ACCENT_COLOR }} />{" "}
              Location
            </p>
            <p
              className="flex justify-start items-center text-[1.1rem]"
              style={{ color: "#a1a1aa" }}
            >
              <Leaf className="mr-3" style={{ color: ACCENT_COLOR }} /> Age
            </p>
            <p
              className="flex justify-start items-center text-[1.1rem]"
              style={{ color: "#a1a1aa" }}
            >
              <Terminal className="mr-3" style={{ color: ACCENT_COLOR }} />{" "}
              Full-Stack
            </p>
            <p
              className="flex justify-start items-center text-[1.1rem]"
              style={{ color: "#a1a1aa" }}
            >
              <CalendarClock className="mr-3" style={{ color: ACCENT_COLOR }} />{" "}
              Experience
            </p>
          </div>
          <p style={{ color: "#d1d5db" }}>
            I'm a passionate developer with a focus on creating dynamic and
            responsive web applications.
          </p>
          <button
            className="mt-4 px-4 py-2 rounded-md font-semibold transition-colors duration-200"
            style={{
              background: ACCENT_COLOR,
              color: "#fff",
              fontFamily: FONT_FAMILY_FIRA,
              boxShadow: `0 2px 8px 0 ${ACCENT_COLOR}22`,
              border: `1.5px solid ${ACCENT_COLOR}`,
            }}
          >
            Contact Me
          </button>
        </div>
        <div className="flex flex-col justify-center gap-7 w-1/2 relative">
          <div
            style={{
              backgroundImage: "url(dp.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
              width: "25rem",
              height: "25rem",
              border: `3px solid ${ACCENT_COLOR}`,
              boxShadow: `0 2px 16px 0 ${ACCENT_COLOR}22`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
