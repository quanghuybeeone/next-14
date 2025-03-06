import { useGetMeQuery } from "@/redux/services/clientService";
import { logout, setUser } from "@/redux/slices/authSlice";
import type { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useAuthInit = () => {
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.token);

    const { data, error } = useGetMeQuery(undefined, {
        skip: !token, // Chỉ gọi API nếu có token
    });

    useEffect(() => {
        if (data) {
            dispatch(setUser(data.data.user)); // Cập nhật user vào Redux
        }
        if (error) {
            dispatch(logout()); // Token không hợp lệ, logout
        }
    }, [data, error, dispatch]);
};
