import axios from "axios";
import { getAccessToken, clearSession } from "@/utils/storage";

// Khởi tạo instance Axios
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Đọc từ env
  timeout: 10000, // 10s timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Thêm response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearSession(); // Xóa token khi lỗi 401 (Unauthorized)
      window.location.href = "/login"; // Điều hướng về login
    }
    return Promise.reject(error);
  }
);

export default apiClient;
