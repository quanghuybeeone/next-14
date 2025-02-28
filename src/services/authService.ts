import apiClient from "./apiClient";

export const login = async (email: string, password: string) => {
  const { data } = await apiClient.post("/auth/login", { email, password });
  return data;
};

export const logout = async () => {
  await apiClient.post("/auth/logout");
};
