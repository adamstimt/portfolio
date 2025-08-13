import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-6 sm:px-10 py-4 bg-[#11284b] text-white fixed top-0 z-50 shadow-lg">
      {/* Left – Logo */}
      <h1 className="text-2xl sm:text-3xl ml-6 font-bold font-serif">My Portfolio</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-10 lg:space-x-24 text-lg font-medium">
        {links.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="relative text-[18px] lg:text-[22px] cursor-pointer transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Contact Button */}
      <a
        href="#contact"
        className="hidden md:inline bg-gradient-to-r from-purple-400 to-blue-400 text-black px-4 lg:px-5 py-2 rounded-full text-[18px] lg:text-[22px] font-medium transition duration-300"
      >
        Contact Me
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-4xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#11284b] shadow-lg flex flex-col items-center py-6 space-y-4 md:hidden">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl  cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className=" bg-gradient-to-r from-purple-400 to-blue-400 text-black px-5 py-2 rounded-full text-lg font-medium transition duration-300 "
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
