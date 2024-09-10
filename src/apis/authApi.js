import axios from "axios";

const USERDATA_SERVER_URL = import.meta.env.VITE_USERDATA_SERVER_URL;

const authInstance = axios.create({
    baseURL: USERDATA_SERVER_URL,
});

export const handleSignup = async (userObj) => {
    const response = await authInstance.post("/register", userObj);
    return response.data;
};

export const handleLogin = async (userObj) => {
    const response = await authInstance.post("/login", userObj);
    return response.data;
};

const userInstance = axios.create({
    baseURL: USERDATA_SERVER_URL,
});
userInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export const getUserData = async () => {
    const response = await userInstance.get("/user");
    return response.data;
};

const updateUserInstance = axios.create({
    baseURL: USERDATA_SERVER_URL,
    headers: {
        "Contene-Type": "multipart/form-data",
    },
});

updateUserInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

export const updateUserData = async (formData) => {
    const response = await updateUserInstance.patch("/profile", formData);
    return response.data;
};
