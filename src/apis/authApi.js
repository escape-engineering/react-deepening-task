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

const userAccessToken = localStorage.getItem("accessToken");

export const userInstance = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
    headers: { Authorization: `Bearer ${userAccessToken}` },
});

export const getUserData = async () => {
    const response = await userInstance.get("/user");
    return response.data;
};
