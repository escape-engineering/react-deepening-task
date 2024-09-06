import React, { useEffect } from "react";
import { getUserData } from "../apis/authApi";
import { useLogin, useLogout, useUpdateUserInfo, useUserInfo } from "../zustand/useAuthStore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const setLogout = useLogout();
    const setProfileUpdated = useUpdateUserInfo();
    const userInfo = useUserInfo();

    console.log("userInfo :>> ", userInfo);

    const getProfileData = async () => {
        try {
            const data = await getUserData();
            setProfileUpdated(data);
            console.log("data :>> ", data);
        } catch (error) {
            console.log("error :>> ", error);
            if (error.status == 401) {
                alert("토큰이 만료되어 로그아웃 되었습니다! 다시 로그인해주세요!");
                setLogout();
                localStorage.removeItem("accessToken");
                navigate("/login");
            }
        }
    };

    useEffect(() => {
        getProfileData();
    }, []);
    return <div>Profile</div>;
};

export default Profile;
