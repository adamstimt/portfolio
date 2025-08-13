import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiFigma, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" /> },
  { icon: <FaCss3Alt className="text-blue-500" /> },
  { icon: <SiJavascript className="text-yellow-300" /> },
  { icon: <FaReact className="text-cyan-400" /> },
  { icon: <SiFigma className="text-pink-500" /> },
  { icon: <FaGitAlt className="text-red-600" /> },
  { icon: <SiTailwindcss className="text-teal-300" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0a192f] text-white py-20 px-6 sm:px-10 lg:px-20 text-center"
    >
      {/* Title */}
     <h1
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[poppins] mb-8 text-center relative inline-block mx-auto drop-shadow-md
  before:content-[''] before:absolute before:w-[50%] before:sm:w-full before:md:w-full before:lg:w-[65vh] before:h-[2px] 
  before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 
  before:right-full before:top-1/2 before:mr-2 md:before:mr-4

  after:content-[''] after:absolute after:w-[48%] after:sm:w-[89%] after:md:w-full after:lg:w-[65vh] after:h-[2px] 
  after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 
  after:left-full after:top-1/2 after:ml-2 md:after:ml-4 "
>
  My Tech Stack
</h1>


      <p className="font-medium text-lg sm:text-xl md:text-2xl mb-12">
        Technologies I've been working with currently
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 place-items-center mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-lg shadow-cyan-500/20 rounded-full p-4 sm:p-6 bg-[#112240] hover:scale-110 transition duration-300"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl drop-shadow-md">
              {skill.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
