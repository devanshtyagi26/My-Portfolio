"use client";
import React, { useEffect, useRef, useState } from "react";

const ACCENT_COLOR = "#EF4444";
const BG_COLOR = "black";
const TEXT_COLOR = "#F3F4F6";
const FONT_FAMILY_FIRA =
  "var(--font-geist-mono), 'Geist Mono', 'Fira Mono', 'Menlo', monospace";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(intervalRef.current);
        setTimeout(() => setHidden(true), 500);
        return 100;
      });
    }, 20);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="font-geist-mono"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: BG_COLOR,
        display: hidden ? "none" : "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 0.5s",
        fontFamily: FONT_FAMILY_FIRA,
      }}
    >
      <div
        style={{
          transform: `translateX(-${progress * 7.5}px)`,
          transition: "transform 0.2s",
        }}
      >
        <p
          style={{
            color: ACCENT_COLOR,
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            fontFamily: FONT_FAMILY_FIRA,
            margin: 0,
          }}
        >
          DEVANSH
        </p>
      </div>
      <div>
        <p
          style={{
            color: TEXT_COLOR,
            fontSize: "1.5rem",
            margin: "0 2.5rem",
            fontWeight: 600,
            fontFamily: FONT_FAMILY_FIRA,
            letterSpacing: "0.1em",
          }}
        >
          [{progress.toString().padStart(2, "0")}]
        </p>
      </div>
      <div
        style={{
          transform: `translateX(${progress * 7.5}px)`,
          transition: "transform 0.2s",
        }}
      >
        <p
          style={{
            color: ACCENT_COLOR,
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            fontFamily: FONT_FAMILY_FIRA,
            margin: 0,
          }}
        >
          TYAGI
        </p>
      </div>
    </div>
  );
}

export default Loader;
