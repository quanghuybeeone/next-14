import { pathnames } from "@/config";

export const findPathnameOrigin = (locale: string, path: string) => {
    if (path === "") return "/";

    for (const [key, value] of Object.entries(pathnames)) {
        if (typeof value === "string" && value === path) {
            return key; // Trả về pathname gốc
        }

        if (typeof value === "object") {
            const localizedPath = (value as Record<string, string>)[locale];
            if (localizedPath === path) {
                return key; // Trả về pathname gốc
            }

            // 🛠️ Kiểm tra nếu path có dynamic segment
            const regex = new RegExp(`^${localizedPath.replace(/\[.*?\]/g, "([^/]+)")}$`);
            if (regex.test(path)) {
                return key; // Trả về pathname gốc
            }
        }
    }

    return null; // Không tìm thấy
};
