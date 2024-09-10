import { useNavigate } from "react-router-dom";
import { getUserData, updateUserData } from "../apis/authApi";
import { useLogout, useUpdateUserInfo, useUserInfo } from "../zustand/useAuthStore";
import { useState } from "react";
import useInput from "./useInput";

const useProfilePage = () => {
    const navigate = useNavigate();
    const setLogout = useLogout();
    const setProfileUpdated = useUpdateUserInfo();
    const { avatar, userId, nickname } = useUserInfo();

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

    const [updatedImgFile, setUpdatedImgFile] = useState(undefined);
    const handleUpdatedImgFile = (e) => {
        setUpdatedImgFile(e.target.files[0]);
    };
    const [updatedNickname, handleupdatedNickname] = useInput(nickname);

    const [isUpdating, setIsUpdating] = useState(false);
    const toggleIsUpdating = (e) => {
        e.preventDefault();
        setIsUpdating(!isUpdating);
    };

    const updateUserInfo = async (e) => {
        e.preventDefault();
        const userFormData = new FormData();
        userFormData.append("avatar", updatedImgFile);
        userFormData.append("nickname", updatedNickname ? updatedNickname : nickname);
        try {
            const data = await updateUserData(userFormData);
            setProfileUpdated(data);
            getProfileData();
            setIsUpdating(!isUpdating);
            alert(data.message);
            console.log("data :>> ", data);
        } catch (error) {
            console.log("error :>> ", error);
        }
    };
    return {
        getProfileData,
        isUpdating,
        avatar,
        nickname,
        userId,
        toggleIsUpdating,
        updatedImgFile,
        handleUpdatedImgFile,
        updateUserInfo,
        updatedNickname,
        handleupdatedNickname,
    };
};

export default useProfilePage;
