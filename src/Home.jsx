import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import photo from "../public/photo.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 pt-28 pb-12 bg-[#0a192f] text-white"
    >
      {/* Left – Text */}
      <div className="md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-bold font-[poppins] font-cursive">
          Timtaoucine Adem
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-[35px] font-[poppins] font-semibold">
          And I’m a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            FRONT-END DEVELOPER
          </span>
        </h2>
       <p className="text-sm leading-8 sm:text-[20px] sm:leading-8 lg:text-[20px] lg:leading-8">
  I'm a highly skilled and experienced front-end developer with a strong
  background in computer science. I specialize in designing, building,
  and maintaining modern web applications. Passionate about clean code
  and intuitive interfaces, I leverage the latest technologies to
  deliver fast, scalable, and high-quality user experiences.
</p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-lg lg:text-xl rounded-full font-semibold shadow-lg hover:opacity-90 transition"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="border border-purple-500 text-purple-400 px-6 sm:px-8 lg:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full font-semibold shadow-lg hover:bg-purple-600 hover:text-white transition"
          >
            View Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center ml-6 md:justify-start gap-6 sm:gap-8 text-3xl sm:text-4xl mt-4">
          <a
            href="https://www.linkedin.com/in/adem-timtaoucine-6a6225289/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mt-5 hover:text-blue-500 animate-bounce"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/adamstimt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 mt-5 animate-bounce"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:adamtimtaoucine@gmail.com"
            className="hover:text-red-400 mt-5 animate-bounce"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Right – Image */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={photo}
          alt="developer"
          className="w-40 sm:w-60 md:w-72 lg:w-[400px] rounded-full object-cover aspect-square shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
