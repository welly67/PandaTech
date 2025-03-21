import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, fetchUserData } from "../api/apiService";

function Login({ setAuthToken }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginUser(formData.email, formData.password);

      if (response.token) {
        console.log("✅ Login successful! Token received:", response.token);

        // Store the token
        localStorage.setItem("token", response.token);

        // Update App.jsx state
        setAuthToken(response.token);

        // Fetch user data after successful login
        await fetchUserData();

        alert("Login successful! Redirecting to Dashboard...");
        navigate("/dashboard"); // Redirect to Dashboard
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')",
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded font-semibold">
              Login
            </button>
          </form>

          <p className="text-center mt-4">
            Don't have an account? <a href="/register"><strong>Register</strong></a>
          </p>
        </div>
      </div>

      <footer className="bg-gray-900 py-4 text-white text-center">
        <p>&copy; 2025 Panda Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
