import React, { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post("http://localhost:5000/contact", {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });

      setStatus(res.data.message);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus(error.response?.data?.error || "Error sending message");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0a192f] text-white py-16 px-4 sm:px-6 lg:px-10"
    >
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Title */}
        <div className="flex justify-center items-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[poppins] mb-24 text-center relative inline-block drop-shadow-md
            before:content-[''] before:absolute before:w-[70%] before:sm:w-full before:md:w-full before:lg:w-[65vh] before:h-[2px] 
            before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 
            before:right-full before:top-1/2 before:mr-2 md:before:mr-4
            after:content-[''] after:absolute after:w-[70%] after:sm:w-[89%] after:md:w-full after:lg:w-[65vh] after:h-[2px] 
            after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 
            after:left-full after:top-1/2 after:ml-2 md:after:ml-4"
          >
            Get in Touch
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 w-full">
          {/* Contact Info */}
          <div className="p-6 sm:p-8 border-2 border-purple-300 rounded-lg shadow-lg w-full">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              Contact Information
            </h3>
            <p className="text-white mb-8 text-base sm:text-lg">
              Feel free to reach out through any of these channels
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className="bg-gradient-to-r from-purple-400 to-blue-500 text-white text-4xl sm:text-5xl p-3 rounded-full animate-bounce" />
              <span className="text-white text-lg sm:text-xl break-words">
                adamtimtaoucine@gmail.com
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-6">
              <FaPhone className="bg-gradient-to-r from-purple-400 to-blue-500 text-white text-4xl sm:text-5xl p-3 rounded-full animate-bounce" />
              <span className="text-white text-lg sm:text-xl">
                +213697710605
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 mb-8">
              <FaMapMarkerAlt className="bg-gradient-to-r from-purple-400 to-blue-500 text-white text-4xl sm:text-5xl p-3 rounded-full animate-bounce" />
              <span className="text-white text-lg sm:text-xl">
                Tipaza, Algeria
              </span>
            </div>

            {/* Social Profiles */}
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
              Social Profiles
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/adamstimt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
              >
                <FaGithub className="bg-gradient-to-r from-purple-400 to-blue-500 text-white text-4xl sm:text-5xl p-3 rounded-full animate-bounce" />
              </a>
              <a
                href="https://www.linkedin.com/in/adem-timtaoucine-6a6225289/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
              >
                <FaLinkedin className="bg-gradient-to-r from-purple-400 to-blue-500 text-white text-4xl sm:text-5xl p-3 rounded-full animate-bounce" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-8 border-2 border-purple-300 rounded-lg shadow-lg w-full">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              Send Me a Message
            </h3>
            <p className="text-white text-base sm:text-lg mb-8">
              I'll get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-3 border border-purple-300 placeholder:text-white placeholder:text-[19px] rounded-lg bg-transparent text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full p-3 border border-purple-300 placeholder:text-white placeholder:text-[19px] rounded-lg bg-transparent text-white"
                  required
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Message subject"
                className="w-full p-3 border border-purple-300 placeholder:text-white placeholder:text-[19px] rounded-lg bg-transparent text-white"
                required
              />

              {/* Message */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="4"
                minLength={10}
                className="w-full p-3 border border-purple-300 placeholder:text-white placeholder:text-[19px] rounded-lg bg-transparent text-white"
                required
              ></textarea>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>

            {/* Status Message */}
            {status && (
              <p
                className={`mt-4 ${
                  status.toLowerCase().includes("error")
                    ? "text-red-400 text-[18px]"
                    : "text-green-400 text-[18px]"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
