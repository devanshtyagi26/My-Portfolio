import {
  CalendarClock,
  ChevronsRight,
  Leaf,
  MapPin,
  Terminal,
} from "lucide-react";
import React from "react";
import { keySkills, services } from "@/lib/aboutMe";

function AboutMe() {
  return (
    <div className="font-geist-mono w-[80%]">
      <p className="text-xl font-semibold text-[#fafafa99] letter-spacing-[.2em] mb-8 font-geist-mono">
        ABOUT ME
      </p>
      <div className="flex gap-8 justify-center items-start">
        <div className="flex flex-col justify-center w-1/2 gap-[2rem]">
          <p className="text-[3.75rem] font-weight-100 text-gray-800 dark:text-gray-200 tracking-wide font-geist-mono flex flex-col leading-[1]">
            Hi, I'm
            <br />
            <span className="text-red-500">Devansh Tyagi</span>
          </p>
          <div className="flex flex-col gap-2">
            <p className="flex justify-start items-center text-[1.1rem] text-[#fafafa99]">
              <MapPin className="mr-3 text-red-400" /> Location
            </p>
            <p className="flex justify-start items-center text-[1.1rem] text-[#fafafa99]">
              <Leaf className="mr-3 text-red-400" /> Age
            </p>
            <p className="flex justify-start items-center text-[1.1rem] text-[#fafafa99]">
              <Terminal className="mr-3 text-red-400" /> Full-Stack
            </p>
            <p className="flex justify-start items-center text-[1.1rem] text-[#fafafa99]">
              <CalendarClock className="mr-3 text-red-400" /> Experience
            </p>
          </div>
          <p>
            I'm a passionate developer with a focus on creating dynamic and
            responsive web applications.
          </p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
            Contact Me
          </button>
        </div>
        <div className="flex flex-col justify-center gap-7">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold text-[#fafafa99] letter-spacing-[.2em] font-geist-mono">
              KEY SKILLS
            </p>
            <ul className="list-none list-inside flex flex-wrap gap-2">
              {keySkills.map((skill) => (
                <li
                  key={skill}
                  className="flex justify-center items-center text-white text-decoration-none px-4 py-2 border-b border-[#fafafa33] border-[1px] rounded-[50px] bg-[#ff4d4d0d] hover:bg-[#ff4d4d1a] transition-all delay-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold text-[#fafafa99] letter-spacing-[.2em] mb-3 font-geist-mono">
              SERVICES
            </p>
            <ul className="list-none list-inside flex flex-col gap-2 ml-5">
              {services.map((service) => (
                <li key={service} className="flex gap-2">
                  <ChevronsRight className="text-red-400" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
