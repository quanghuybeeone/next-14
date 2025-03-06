// components/Loading.tsx
"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Loading() {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (!isLoading) return null; // Không hiển thị nếu không loading

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <p>Loading...</p>
      </div>
    </div>
  );
}
