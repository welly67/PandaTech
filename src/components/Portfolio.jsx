import React from "react";

export default function Portfolio() {
  const projects = [
    {
      title: "TouravelHub",
      description: "A personalized itinerary planner for motorcycle riders with real-time weather integration.",
      image: "/images/touravelhub.png", // Replace with actual image path
    },
    {
      title: "CityThat API Integration",
      description: "Implemented authentication, user management, and album management using CityThat API.",
      image: "/images/citythat.png", // Replace with actual image path
    },
    {
      title: "Recipe Sharing Platform",
      description: "A web-based platform for users to share and discover recipes with a social feature.",
      image: "/images/recipesharing.png", // Replace with actual image path
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-400 text-center">My Portfolio</h2>
        <p className="text-gray-400 text-center mt-2">Here are some of my recent projects:</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
