import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login"); // Redirect to login if no token
          return;
        }

        // Fetch user data from API
        const response = await axios.get("https://localhost:7056/api/Auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data); // Store the user data
      } catch (error) {
        console.error("❌ Error fetching user data:", error);
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!userData) {
    return <div className="text-center text-xl mt-10 text-blue-500 font-semibold">Loading user data...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="bg-[#1F2937] p-8 rounded-lg shadow-lg w-full max-w-md text-center border border-blue-400">
        <h2 className="text-3xl font-semibold text-blue-400 mb-6">Welcome, {userData.firstName}!</h2>

        <div className="text-left space-y-4">
          <p className="border-b border-gray-700 pb-2"><strong>First Name:</strong> {userData.firstName || "N/A"}</p>
          <p className="border-b border-gray-700 pb-2"><strong>Middle Name:</strong> {userData.middleName || "N/A"}</p>
          <p className="border-b border-gray-700 pb-2"><strong>Last Name:</strong> {userData.lastName || "N/A"}</p>
          <p className="border-b border-gray-700 pb-2"><strong>Email:</strong> {userData.email || "N/A"}</p>
          <p className="border-b border-gray-700 pb-2"><strong>Description:</strong> {userData.description || "N/A"}</p>
          <p className="pb-2"><strong>Type:</strong> {userData.type !== undefined ? userData.type : "N/A"}</p>
        </div>

        <button
          onClick={() => navigate("/edit-profile", { state: { userData } })}
          className="mt-6 bg-blue-500 hover:bg-blue-600 transition text-white py-2 px-4 rounded-full shadow-md w-full"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
