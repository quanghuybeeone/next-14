"use client";
import { rolePermissions } from "@/config";
import { setLoading } from "@/redux/slices/loadingSlice";
import { RootState } from "@/redux/store";
import { findPathnameOrigin } from "@/utils";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.auth);
    const pathname = usePathname();
    const { locale } = useParams();
    const router = useRouter();

    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        dispatch(setLoading(true));

        const userRole = user ? (user.role as keyof typeof rolePermissions) : "guest"; // Nếu chưa đăng nhập, role = guest
        const allowedPaths = new Set(rolePermissions[userRole]);
        const path = pathname.replace(`/${locale}`, "");
        const pathNameOrigin = findPathnameOrigin(locale as string, path);
        if(pathNameOrigin){
            const hasPermission = allowedPaths.has(pathNameOrigin) || allowedPaths.has("*") || (allowedPaths.has("/admin") && pathNameOrigin.startsWith("/admin"));
            setIsAuthorized(hasPermission);
        }else{
            setIsAuthorized(false);
        }
        
        dispatch(setLoading(false));
    }, [user, pathname, locale, dispatch]);

    if (!isAuthorized) {
        return (
            <div>
                <p>Bạn không có quyền truy cập vào trang này.</p>
                <button onClick={() => router.push("/")}>Quay về trang chủ</button>
            </div>
        );
    }

    return <>{children}</>;
}
