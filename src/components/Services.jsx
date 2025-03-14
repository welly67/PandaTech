import React from "react";
import { FaReact, FaPhp, FaJava, FaAndroid, FaLaravel } from "react-icons/fa";  
import { SiFirebase } from "react-icons/si";

export default function Services() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 text-center">My Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Service Cards */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaReact className="text-blue-400 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Freelance Web Development</h3>
              <p className="text-gray-400 text-sm">
                Expert in React, PHP, Firebase, Laravel.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaAndroid className="text-green-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Mobile App Development</h3>
              <p className="text-gray-400 text-sm">
                Building Android apps with Java & Android Studio.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
            <SiFirebase className="text-yellow-400 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">IT Support & Consultation</h3>
              <p className="text-gray-400 text-sm">
                Providing tech support & consulting services.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaLaravel className="text-red-500 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold">Custom Software Solutions</h3>
              <p className="text-gray-400 text-sm">
                Tailored software solutions for businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
