import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import MyStory from "./components/Mystory";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard"; // Ensure this component exists
import EditProfile from "./components/EditProfile"; // Import EditProfile component

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token")); // Load token initially

  // Update authToken when the app starts or when login/logout occurs
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setAuthToken(storedToken);
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    sessionStorage.removeItem("token"); // Clear sessionStorage (if used)
    setAuthToken(null); // Update state to reflect logout
  };

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

            {/* Show Login/Register if not logged in */}
            {!authToken ? (
              <>
                <Link to="/register" className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">Sign Up</Link>
                <Link to="/login" className="border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 transition">Login</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition">Dashboard</Link>
                <button onClick={handleLogout} className="border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 transition">Logout</button>
              </>
            )}
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

        {/* Pass setAuthToken to Login so it can update token after successful login */}
        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route for Dashboard */}
        <Route path="/dashboard" element={authToken ? <Dashboard /> : <Navigate to="/login" replace />} />

        {/* Protected Route for Edit Profile */}
        <Route path="/edit-profile" element={authToken ? <EditProfile /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
