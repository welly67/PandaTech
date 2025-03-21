import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = location.state || {}; // Get user data from navigation state

  const [formData, setFormData] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Email: "",
    Description: "",
    Type: 0, // Default type
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        FirstName: userData.firstName || "",
        MiddleName: userData.middleName || "",
        LastName: userData.lastName || "",
        Email: userData.email || "",
        Description: userData.description || "",
        Type: userData.type || 0,
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    // Create form-data object
    const form = new FormData();
    form.append("FirstName", formData.FirstName);
    form.append("MiddleName", formData.MiddleName);
    form.append("LastName", formData.LastName);
    form.append("Email", formData.Email);
    form.append("Description", formData.Description);
    form.append("Type", formData.Type);

    try {
      await axios.put("https://localhost:7056/api/User", form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Profile updated successfully!");
      navigate("/dashboard"); // Redirect back to dashboard
    } catch (error) {
      console.error("❌ Error updating profile:", error);
      alert("⚠️ Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="bg-[#1F2937] p-8 rounded-lg shadow-lg w-full max-w-md text-center border border-blue-400">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="First Name" required />

          <input type="text" name="MiddleName" value={formData.MiddleName} onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Middle Name" />

          <input type="text" name="LastName" value={formData.LastName} onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Last Name" required />

          <input type="email" name="Email" value={formData.Email} onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email" required />

          <input type="text" name="Description" value={formData.Description} onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description" />

          <button type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-2 rounded-full shadow-md font-semibold">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
