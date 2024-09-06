import React, { useEffect, useState } from "react";
import { getUserData, updateUserData } from "../apis/authApi";
import { useLogin, useLogout, useUpdateUserInfo, useUserInfo } from "../zustand/useAuthStore";
import { useNavigate } from "react-router-dom";
import defaultProfile from "../asset/defaultProfile.png";
import useInput from "../hooks/useInput";

const Profile = () => {
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
        userFormData.append("nickname", updatedNickname);
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

    useEffect(() => {
        getProfileData();
    }, []);
    return (
        <>
            {!isUpdating ? (
                <div>
                    <img src={avatar ? avatar : defaultProfile} alt="유저 프로필 이미지" />
                    <p>닉네임: {nickname}</p>
                    <p>ID: {userId}</p>
                    <button onClick={toggleIsUpdating}>수정하기</button>
                </div>
            ) : (
                <form onSubmit={(e) => updateUserInfo(e)}>
                    {/* Todo - 드래그드롭으로 이미지 직접넣기 */}
                    <img src={updatedImgFile ? URL.createObjectURL(updatedImgFile) : avatar} />
                    <label>이미지주소</label>
                    <input type="file" accept="image/jpeg,image/jpg,image/png" onChange={handleUpdatedImgFile} />
                    <label>닉네임</label>
                    <input type="text" placeholder={`이전 닉네임: ${nickname}`} onChange={handleupdatedNickname} />
                    <p>ID: {userId}</p>
                    <div>
                        <button type="button" onClick={(e) => toggleIsUpdating(e)}>
                            취소
                        </button>
                        <button type="form">수정완료</button>
                    </div>
                </form>
            )}
        </>
    );
};

export default Profile;
