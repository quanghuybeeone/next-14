"use client";
import Loading from "@/components/Loading";
import { ThemeProvider } from "@/context/ThemeProvider";
import { useAuthInit } from "@/hooks/useAuthInit";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";

const App = ({ children }: { children: ReactNode }) => {
  useAuthInit();
  useEffect(() => {
    AOS.init({
      duration: 2000, // Thời gian hiệu ứng (ms)
      offset: 0, // Khoảng cách kích hoạt (px)
      // once: true, // Chỉ chạy 1 lần khi cuộn tới
    });
  }, []);

  return (
    <>
      <ThemeProvider>
        {children}
        <ToastContainer />
        <Loading />
      </ThemeProvider>
    </>
  );
};

export default App;
