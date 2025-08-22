import React from "react";

function Experience() {
  return (
    <div className="font-geist-mono w-[80%]">
      <p className="text-xl font-semibold text-[#fafafa99] letter-spacing-[.2em] mb-8 font-geist-mono">
        EXPERIENCE
      </p>
      <div>
        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
          <div className="flex items-start mb-2">
            <div className="bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden"></div>
            <div className="flex-grow">
              <p className="text-2xl font-semibold text-gray-100">
                Full-Stack Developer
              </p>
              <p className="text-lg text-gray-300">
                Lajpat Nagar, Delhi &#8226; On-Site
              </p>
              <p className="text-gray-400">
                Feb 2025 - Apr 2025 &#8226; 3 months
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-300 mb-4">
            <li className="flex items-start before:content-['•'] before:mr-2">
              Designed high-fidelity Figma prototypes for a modern,
              user-friendly UI.
            </li>
            <li className="flex items-start before:content-['•'] before:mr-2">
              Developed responsive web interfaces using React.js and CSS.
            </li>
            <li className="flex items-start before:content-['•'] before:mr-2">
              Built scalable REST APIs with Node.js and Express.js.
            </li>
            <li className="flex items-start before:content-['•'] before:mr-2">
              Integrated MongoDB for efficient data storage and management.
            </li>
            <li className="flex items-start before:content-['•'] before:mr-2">
              Implemented secure authentication and role-based access control.
            </li>
            <li className="flex items-start before:content-['•'] before:mr-2">
              Optimized performance and ensured seamless cross-device
              experiences.
            </li>
          </ul>
          <div className="flex flex-wrap">
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              NodeJS
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              ReactJS
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              Express
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              MongoDB
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              Asana
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              Slack
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              HTML
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
