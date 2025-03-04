"use client";
import { ReactNode, useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

const App = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Thời gian hiệu ứng (ms)
      offset: 100, // Khoảng cách kích hoạt (px)
      // once: true, // Chỉ chạy 1 lần khi cuộn tới
    });
  }, []);

  return (
    <>
      <div className="min-h-screen">{children}</div>
    </>
  );
};

export default App;
