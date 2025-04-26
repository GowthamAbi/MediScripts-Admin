import axios from "axios";

// ✅ Create API instance
const api = axios.create({
  baseURL: 'https://mediscrpts-bd.onrender.com',
  headers: {
    'Content-Type': 'application/json', // ⚠️ Case-sensitive
  }
});

// ✅ Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // ✅ Add space after Bearer
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.log("Unauthorized - Please login again.");
        alert("Unauthorized - Please login again.");

        localStorage.removeItem('authToken');
        window.location.href = '/admin/signin'; // Adjust path if needed
      }
    }
    return Promise.reject(error);
  }
);

export default api;
