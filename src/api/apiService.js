import axios from "axios";

const API_BASE_URL = "https://localhost:7056/api";

// 🔹 LOGIN USER: POST /api/Auth/Login (Raw JSON)
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      "https://localhost:7056/api/Auth/Login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("✅ Full API Response:", response);
    console.log("✅ Login Response Data:", response.data);

    let token;

    // Check if response.data is a string instead of an object
    if (typeof response.data === "string") {
      token = response.data; // Use it directly (assuming it's the token)
    } else if (response.data && response.data.token) {
      token = response.data.token; // Extract token normally
    } else {
      throw new Error("Invalid login response format.");
    }

    if (!token) {
      throw new Error("No token received.");
    }

    sessionStorage.setItem("token", token);

    return { token };
  } catch (error) {
    console.error("❌ Login error:", error.message);
    throw new Error("Login failed. Please check your credentials.");
  }
};


// 🔹 FETCH USER DATA: GET /api/Auth (Using Token)
export const fetchUserData = async () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    console.error("❌ No token found. User is not authenticated.");
    throw new Error("No token found. Please log in.");
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/Auth`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("✅ Fetched User Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching user data:", error);

    if (error.response?.status === 401) {
      console.warn("⚠️ Unauthorized: Possible expired or invalid token.");
      sessionStorage.removeItem("token"); // Clear invalid token
    }

    throw error;
  }
};

// 🔹 REGISTER USER: POST /api/User (FormData)
export const registerUser = async (userData) => {
  try {
    const formData = new FormData();
    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key]);
    });

    const response = await axios.post(`${API_BASE_URL}/User`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("✅ Registration successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Registration error:", error);
    throw error.response?.data?.message || "Registration failed";
  }
};

// 🔹 UPDATE USER PROFILE: PUT /api/User (FormData)
export const updateUser = async (userData) => {
  try {
    const token = sessionStorage.getItem("token");
    if (!token) throw new Error("No token found!");

    const formDataPayload = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      formDataPayload.append(key, value);
    });

    const response = await axios.put(`${API_BASE_URL}/User`, formDataPayload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("✅ User updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Update error:", error);
    throw error;
  }
};
