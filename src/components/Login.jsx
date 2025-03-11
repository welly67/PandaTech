import React, { useState } from "react";
import { loginUser } from "../api/apiService";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthToken }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    //console.log("Sending credentials:", credentials); // Debugging log

    try {
      const data = await loginUser(credentials);
      
      if (data.token) {
    //    console.log("Received Token:", data.token); // Debugging log
        localStorage.setItem("token", data.token);
        setAuthToken(data.token);
        alert("Login successful!");
        navigate("/dashboard"); 
      } else {
        setError("Invalid credentials.");
      }
    } catch (err) {
      console.error("Login Error:", err); // Log error details
      setError("Login failed. Please check your email and password.");
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-center h-screen bg-gray-100"
        style={{
          backgroundImage: "url('/src/views/city.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Login
            </button>
          </form>
          <p className="text-center mt-4">
              Don't have an account? <a href="/register"><strong>Register</strong></a>
          </p>
        </div>
      </div>
      <footer style={{ backgroundColor: "darkorange", color: "white", textAlign: "center", padding: "10px" }}>
        Welcome to CityThat<br />
        CityThat is a global workforce network mobile application that serves, (as its target members), white-collar and blue-collar small businesses, self-employed individuals, and freelancers.<br />
        &copy; 2024 CityThat. All rights reserved
      </footer>
    </div>
  );
};

export default Login;
