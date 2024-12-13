import { apiClient } from "./config";

// user signup
export const apiSignup = async (payload) => {
    return await apiClient.post("/auth/signup",payload)
}