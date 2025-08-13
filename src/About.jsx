import React from "react";
import AboutImage from "../public/about.png"; // adjust path if needed

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0a192f] text-white py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold mb-8 text-center lg:text-left lg:ml-10">
  About Me
</h1>

        <div className="space-y-6 text-lg sm:text-2xl lg:text-2xl sm:leading-9 lg:leading-8 text-white leading-loose">
  <p className="leading-10">
    Hi, I'm <span className="font-extrabold ">Adem Timtaoucine</span>,
    an enthusiastic frontend developer from Algeria. I'm currently in
    my final year studying{" "}
    <span className="font-extrabold">Computer Science</span> at Saad
    Dahleb University. Over the past 2 years, I've immersed myself in
    web development, building strong skills in HTML, CSS, JavaScript,
    and React.js.
  </p>
  <p className="leading-10">
    I've worked on various personal and collaborative projects, always
    aiming to create clean, responsive, and user-friendly web
    applications. I'm passionate about modern UI/UX design, continuous
    improvement, and learning new technologies that push my abilities
    further.
  </p>
</div>

        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={AboutImage}
            alt="About Illustration"
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
