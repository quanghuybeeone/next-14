import apiClient from "./apiClient";

export const getUserProfile = async () => {
  const { data } = await apiClient.get("/users/me");
  return data;
};
