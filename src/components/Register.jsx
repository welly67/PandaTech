import React, { useState } from "react";
import { registerUser } from "../api/apiService";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Email: "",
    Password: "",
    Type: "1", // Default to Admin
    image: null,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert("Registration successful! Redirecting to login.");
      navigate("/login");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundImage: "url('/src/views/city.jpg')" }}>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md w-96 md:w-85"> {/* Update the width of the form container */}
            <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <form onSubmit={handleRegister} className="space-y-4">
              <input type="text" name="FirstName" placeholder="First Name" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
              <input type="text" name="MiddleName" placeholder="Middle Name" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
              <input type="text" name="LastName" placeholder="Last Name" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
              <input type="email" name="Email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
              <input type="password" name="Password" placeholder="Password" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />

              {/* Dropdown for User Type Selection */}
              <select name="Type" value={formData.Type} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded bg-white">
                <option value="0">User (0)</option>
                <option value="1">Admin (1)</option>
              </select>

              <input type="file" name="image" onChange={handleFileChange} className="w-full p-2 border border-gray-300 rounded" />
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
            </form>
            <p className="text-center mt-4">
              Already have an account? <a href="/login"><strong>Login</strong></a>
            </p>
          </div>
        </div>
      </div>
      <footer style={{ backgroundColor: "darkorange", color: "white", textAlign: "center", padding: "10px" }}>
        Welcome to PandaTech<br />
        PandaTech is a global workforce network mobile application that serves, (as its target members), white-collar and blue-collar small businesses, self-employed individuals, and freelancers.<br />
        &copy; 2025 PandaTech. All rights reserved.
      </footer>
    </div>
  );
}

export default Register;