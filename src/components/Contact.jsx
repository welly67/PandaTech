import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-4xl font-bold text-blue-400 text-center">Contact Me</h2>
        <p className="text-gray-400 text-center mt-2">Send me a message, and I'll get back to you soon!</p>

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          ></textarea>
          <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-md font-semibold">
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">Or reach me on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/welmher-hernandez-822b15330" target="_blank" rel="noopener noreferrer">
              <img src="src/views/linkedin.png" alt="LinkedIn" className="w-8" />
            </a>
            <a href="https://github.com/welly67" target="_blank" rel="noopener noreferrer">
              <img src="src/views/github.png" alt="GitHub" className="w-8" />
            </a>
            <a href="mailto:welmherhernandez25@gmail.com">
              <img src="src/views/gmail.png" alt="Email" className="w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
