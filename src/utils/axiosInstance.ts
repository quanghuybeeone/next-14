import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST, // Thay bằng API của bạn
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor để tự động thêm token vào request
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor để xử lý lỗi response
axiosInstance.interceptors.response.use(
  (response) => {
    // console.log(response)
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
