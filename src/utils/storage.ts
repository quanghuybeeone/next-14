export const getAccessToken = () => {
    return typeof window !== "undefined" ? localStorage.getItem("token") : null;
};

export const setAccessToken = (token: string) => {
    localStorage.setItem("token", token);
};

export const clearSession = () => {
    localStorage.removeItem("token");
};
