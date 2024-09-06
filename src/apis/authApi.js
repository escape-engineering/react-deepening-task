import axios from "axios";

const authInstance = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
});

export const handleSignup = async (userObj) => {
    const response = await authInstance.post("/register", userObj);
    return response.data;
};

export const handleLogin = async (userObj) => {
    const response = await authInstance.post("/login", userObj);
    return response.data;
};

// const userAccessToken = useUserInfo()

const userInstance = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
    headers: { "Authorization": `Bearer ${localStorage.getItem("accessToken")}` },
});

export const getUserData = async () => {
    const response = await userInstance.get("/user");
    return response.data;
};

const updateUserInstance = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        "Contene-Type": "multipart/form-data",
    },
});
export const updateUserData = async (formData) => {
    const response = await updateUserInstance.patch("/profile", formData);
    return response.data;
};
