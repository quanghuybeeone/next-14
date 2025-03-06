import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isLoading: boolean; // ✅ Thêm trạng thái tải
}

const initialState: AuthState = {
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  user: typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") || "null")
    : null,
  isLoading: true, // ✅ Bắt đầu với isLoading = true
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      state.isLoading = false; // ✅ Cập nhật isLoading khi đã có dữ liệu
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isLoading = false; // ✅ Đánh dấu hoàn tất tải user
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLoading = false;
      localStorage.removeItem("token");
    },
    finishLoading: (state) => {
      state.isLoading = false; // ✅ Thêm action để đánh dấu tải xong
    },
  },
});

export const { setAuth, logout, setUser, finishLoading } = authSlice.actions;
export default authSlice.reducer;
