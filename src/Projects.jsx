import { FaGithub } from "react-icons/fa";
import project1 from "../public/projet1.png";
import project2 from "../public/projet2.png";
import project3 from "../public/book.png";
import project4 from "../public/next.png";

const projects = [
  {
    image: project1,
    title: "Management System Master",
    description:
      "Inventory Management System is a full-featured web application designed to help businesses efficiently track and manage their stock levels, orders, suppliers, and products.",
    github: "https://github.com/adamstimt/inventory-management-system-master",
  },
  {
    image: project2,
    title: "BrightSmile Dental Clinic Website",
    description:
      "A modern and responsive dental clinic website built with Next.js, React, featuring service listings, dentist profiles, and an online appointment booking form. Optimized for SEO and performance",
    github: "https://github.com/adamstimt/dental-website",
  },
  {
    image: project4,
    title: "Next Job Platform",
    description:
      "Recruitment platform developed as part of our graduation project. The platform connects companies looking for qualified employees with job seekers searching for opportunities in the IT field. Built with React.js, powered by a Django backend, and PostgreSQL is used for database management.",
    github: "https://github.com/abdellahsaidi/PFE",
  },
  {
    image: project3,
    title: "Book Management System",
    description:
      "Modern book management system designed to streamline catalog organization and inventory tracking. The intuitive interface, built with React.js, powered by a Node.js/Express backend.",
    github: "https://github.com/adamstimt/book-management-system",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a192f] text-white py-16 px-4 sm:px-8"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[poppins] mb-8 text-center relative inline-block mx-auto drop-shadow-md
            before:content-[''] before:absolute  before:lg:w-[65vh] before:h-[2px] 
            before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 
            before:right-full before:top-1/2 before:mr-2 md:before:mr-4
            after:content-[''] after:absolute  after:lg:w-[65vh] after:h-[2px] 
            after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 
            after:left-full after:top-1/2 after:ml-2 md:after:ml-4"
        >
          My Projects
        </h1>
        <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-[25px] mb-12">
          Things I've built so far
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-12 md:gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#11284b] sm:h-[89vh] h-[76vh] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 flex flex-col"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto w-[97%] h-auto max-h-[610vw] sm:max-h-72 md:max-h-[380px] lg:h-[370px] object-cover rounded-xl mt-2 sm:h-[350px]"
            />

            {/* Content */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-3xl sm:text-2xl md:text-3xl font-medium underline mb-3">
                  {project.title}
                </h3>
                <p className="text-2xl mt-6 sm:text-[17px] sm:font-normal  md:text-lg lg:text-[24px] leading-loose">
                  {project.description}
                </p>
              </div>

              {/* GitHub Icon */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 text-3xl sm:text-4xl lg:text-4xl self-end mt-6"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
