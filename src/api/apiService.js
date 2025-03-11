import axios from "axios";

const API_BASE_URL = "https://localhost:7056/api";

// Decode Base64 token if necessary
const decodeBase64 = (encodedString) => {
  try {
    return atob(encodedString);
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};

// REGISTER USER: POST /api/User (FormData)
export const registerUser = async (userData) => {
  try {
    const formData = new FormData();
    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key]);
    });

    const response = await axios.post(`${API_BASE_URL}/User`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
};

// LOGIN USER: POST /api/Auth/Login
export const loginUser = async (credentials) => {
  try {
    //console.log("Sending to API:", JSON.stringify(credentials));

    const response = await axios.post(`${API_BASE_URL}/Auth/Login`, credentials, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain",
      },
    });

    //console.log("Full API Response:", response);
    //console.log("Response Data (Raw):", response.data);

    // Check if response is a Base64-encoded token
    let token = response.data;
    if (typeof token === "string") {
      const decodedToken = decodeBase64(token);
      if (decodedToken) {
    //    console.log("Decoded Token:", decodedToken);
      token = decodedToken;
      }
    }

    if (token) {
   //   console.log("Received Token:", token);
      localStorage.removeItem("token"); // 🛑 Clear old tokens
      localStorage.setItem("token", token);
      return { token };
    } else {
      console.error("Error: No valid token received.");
      throw new Error("Invalid credentials or token not received.");
    }
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// GET AUTH USER DATA: GET /api/Auth
export const getAuth = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const response = await axios.get(`${API_BASE_URL}/Auth`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
};
