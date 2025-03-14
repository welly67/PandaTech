import React from "react";
import { Link } from "react-router-dom";

export default function MyStory() {
  return (
    <div className="bg-gray-900 min-h-screen flex text-white">
      {/* Sidebar with Social Links */}
      <div className="fixed left-0 top-1/3 bg-gray-800 p-4 rounded-r-lg shadow-md flex flex-col space-y-4">
        {/* LinkedIn Button */}
        <a 
          href="https://www.linkedin.com/in/welmher-hernandez-822b15330" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition"
        >
          <img src="src/views/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
        </a>

        {/* Resume Download Button */}
        <a 
          href="src/views/CV.pdf" 
          download
          className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition"
        >
          <img src="src/views/CV.jpg" alt="LinkedIn" className="w-10 h-10" />
        </a>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center">
        {/* Profile Image Section */}
        <div className="md:w-1/3 text-center flex flex-col items-center">
          <img 
            src="src/views/profile.jpg" 
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-blue-500 shadow-lg"
            alt="Welmher Hernandez"
          />
          <div>
            <h2 className="text-3xl font-bold mt-4">Welmher Hernandez</h2>
            <p className="text-gray-400 text-sm">Aspiring IT Professional</p>
          </div>
        </div>

        {/* About Section */}
        <div className="md:w-2/3 bg-gray-800 p-8 rounded-lg shadow-md text-center md:text-left mt-6 md:mt-0 md:ml-8">
          <h3 className="text-2xl font-semibold text-blue-400">About Me</h3>
          <p className="text-lg leading-relaxed mt-4">
            Hi, I'm <span className="font-semibold text-blue-400">Welmher Hernandez</span>, an aspiring IT professional passionate about **software development, web technologies, and problem-solving**.  
            My journey began with a deep curiosity for technology, leading me to pursue a degree in  
            <span className="text-blue-400 font-semibold"> Information Technology</span> at Adamson University taking College of Computing and Information Technology.
          </p>

          <p className="mt-4">
            Through **hands-on projects, internships, and freelancing**, I've gained experience in **PHP, Android Studio, Firebase, Laravel, and Java**.  
            My goal is to help businesses and individuals with **custom software solutions, mobile apps, and IT consulting**.
          </p>

          <p className="mt-4">
            When I’m not coding, I enjoy **exploring new frameworks, engaging with tech communities, and learning about emerging technologies**.  
            I believe in **continuous learning and innovation**.
          </p>

          {/* Connect Button */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="bg-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition inline-block"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
