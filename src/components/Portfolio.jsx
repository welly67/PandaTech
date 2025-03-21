import React from "react";

export default function Portfolio() {
  const projects = [
    {
      title: "TouravelHub",
      description: "A personalized itinerary planner for motorcycle riders with real-time weather integration.",
      image: "src/views/touravel.png", // Ensure the correct path
    },
    {
      title: "CityThat API Integration",
      description: "Implemented authentication, user management, and album management using CityThat API.",
      image: "src/views/ctythat.png", // Ensure the correct path
    },
    {
      title: "Recipe Sharing Platform",
      description: "A web-based platform for users to share and discover recipes with a social feature.",
      image: "src/views/platepals.png", // Ensure the correct path
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 text-center">My Portfolio</h2>
        <p className="text-gray-400 text-center mt-2">Here are some of my recent projects:</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              {/* Updated Image Styling */}
              <div className="w-full h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
