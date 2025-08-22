import React from "react";

function monthsSinceOct2024() {
  const startDate = new Date(2024, 9); // October is month index 9 (0-based)
  const today = new Date();

  const yearsDiff = today.getFullYear() - startDate.getFullYear();
  const monthsDiff = today.getMonth() - startDate.getMonth();

  return yearsDiff * 12 + monthsDiff + 1;
}

console.log("Months passed since Oct 2024:", monthsSinceOct2024());

function Experience() {
  return (
    <div className="font-geist-mono w-[100%]">
      <p className="text-xl font-semibold text-[#fafafa99] letter-spacing-[.2em] mb-8 font-geist-mono">
        EXPERIENCE
      </p>
      <div className="flex flex-col gap-15 justify-self-center self-center w-[80%]">
        {/* Louder */}
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
              Maintained and enhanced Louder’s legacy event ticketing website
              built with PHP, ensuring platform stability and resolving
              user-facing issues.
            </li>
            <li className="flex items-start before:content-['•'] before:mr-2">
              Recreated the entire ticketing infrastructure using the MERN stack
              (MongoDB, Express.js, React, Node.js) to modernize and optimize
              the platform.
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

        {/* YUVA */}
        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
          <div className="flex items-start mb-2">
            <div className="bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden"></div>
            <div className="flex-grow">
              <p className="text-2xl font-semibold text-gray-100">
                Core Graphics Designer
              </p>
              <p className="text-lg text-gray-300">Yuva Delhi &#8226; Hybrid</p>
              <p className="text-gray-400">
                Oct 2024 - Present &#8226; {monthsSinceOct2024()} months
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-300 mb-4">
            <li className="flex items-start before:content-['•'] before:mr-2">
              Designed and curated 20+ high-impact graphic assets for
              "Vimarsh’24", resulting in a 30% increase in attendee engagement
              on digital platforms.
            </li>
            <li className="flex items-start before:content-['•'] before:mr-2">
              Collaborated with a multidisciplinary team of 10+ professionals to
              develop creative themes, delivering promotional materials ahead of
              schedule
            </li>
            <li className="flex items-start before:content-['•'] before:mr-2">
              Enhanced brand consistency and visual appeal, contributing to a
              15% growth in event visibility across social media channels
            </li>
            <li className="flex items-start before:content-['•'] before:mr-2">
              Currently supporting YUVA Delhi’s creative initiatives, crafting
              innovative design strategies that align with organizational goals
              and enhance audience outreach.
            </li>
          </ul>
          <div className="flex flex-wrap">
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              Canva
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              Graphics
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              Communication
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              Presentation Skills
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              Graphic Designing
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              Logo Design
            </span>
            <span className="inline-block bg-[rgba(34,197,94,0.3)] bg-opacity-30 px-3 py-1.5 text-xs font-medium text-[rgba(34,197,94,1)] mr-2 mb-2 rounded-full">
              Team Work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
