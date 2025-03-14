import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import MyStory from "./components/Mystory";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="bg-[#1F2937] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-400">Panda Tech</h1>
          {/* Navigation Links */}
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/my-story" className="hover:text-blue-400 transition">My Story</Link>
            <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
            <Link to="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link to="/register" className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">Sign Up</Link>
            <Link to="/login" className="border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 transition">Login</Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-story" element={<MyStory />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
