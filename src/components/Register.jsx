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
    ConfirmPassword: "",
    Type: "0", // Default to User
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

    // Check if passwords match before proceeding
    if (formData.Password !== formData.ConfirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await registerUser(formData);
      alert("Registration successful! Redirecting to login.");
      navigate("/login");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')" }}>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-96 md:w-85">
          <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <form onSubmit={handleRegister} className="space-y-4">
            <input type="text" name="FirstName" placeholder="First Name" required onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded" />
            <input type="text" name="MiddleName" placeholder="Middle Name" onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded" />
            <input type="text" name="LastName" placeholder="Last Name" required onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" name="Email" placeholder="Email" required onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded" />
            <input type="password" name="Password" placeholder="Password" required onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded" />
            <input type="password" name="ConfirmPassword" placeholder="Confirm Password" required onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded" />

            <input type="file" name="image" onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded" />

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded font-semibold">
              Register
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account? <a href="/login"><strong>Login</strong></a>
          </p>
        </div>
      </div>

      <footer className="bg-gray-900 py-4 text-white text-center">
        <p>&copy; 2025 Panda Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Register;
