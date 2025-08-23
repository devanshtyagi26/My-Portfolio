"use client";
import React, { useEffect, useRef, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(intervalRef.current);
        setTimeout(() => setHidden(true), 500); // Hide after short delay
        return 100;
      });
    }, 20); // Adjust speed as needed
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="brxe-div preloader fc-w bricks-lazy-hidden var(--font-geist-mono)"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#000",
        display: hidden ? "none" : "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 0.5s",
        fontFamily: "var(--font-geist-mono)",
      }}
    >
      <div
        className="brxe-div lines-wrap loader-left bricks-lazy-hidden"
        style={{
          transform: `translateX(-${progress * 7.5}px)`,
          transition: "transform 0.2s",
        }}
      >
        <p
          className="brxe-text-basic load-leave font-geist-mono"
          style={{
            color: "#fff",
            fontSize: "1.2rem",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          DEVANSH
        </p>
      </div>
      <div className="brxe-div lines-warp bricks-lazy-hidden">
        <p
          className="brxe-text-basic load-leave loader_number"
          style={{
            color: "#fff",
            fontSize: "1.2rem",
            margin: "0 2rem",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          [{progress.toString().padStart(2, "0")}]
        </p>
      </div>
      <div
        className="brxe-div lines-wrap loader-right bricks-lazy-hidden"
        style={{
          transform: `translateX(${progress * 7.5}px)`,
          transition: "transform 0.2s",
        }}
      >
        <p
          className="brxe-text-basic load-leave"
          style={{
            color: "#fff",
            fontSize: "1.2rem",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          TYAGI
        </p>
      </div>
    </div>
  );
}

export default Loader;
