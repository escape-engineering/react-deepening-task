import React, { useState } from "react";
import useInput from "../hooks/useInput";
import { handleSignup } from "../apis/authApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [userId, handleUserId] = useInput();
    const [userPassword, handleUserPassword] = useInput();
    const [userNickname, handleUserNickname] = useInput();
    const [userPasswordCheck, handleUserPasswordCheck] = useInput();

    const isPasswordsEqual = userPassword === userPasswordCheck;

    const isReadyToRegister = userId && userPassword && userNickname && userPasswordCheck && isPasswordsEqual;

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await handleSignup({ id: userId, password: userPassword, nickname: userNickname });
            if (data.success) {
                alert(data.message);
                navigate("/login");
            }
        } catch (error) {
            console.log("error :>> ", error);
            alert(error.response.data.message);
        }
    };

    return (
        <form className="flex flex-col justify-center" onSubmit={handleOnSubmit}>
            <input
                className="border-solid border-black border-2 w-64"
                type="text"
                placeholder="아이디를 입력해주세요"
                value={userId}
                onChange={handleUserId}
            />
            <p className="border-solid border-black border-2 w-64 h-7"></p>
            <input
                className="border-solid border-black border-2 w-64"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={userPassword}
                onChange={handleUserPassword}
            />
            <p className="border-solid border-black border-2 w-64 h-7"></p>
            <input
                className="border-solid border-black border-2 w-64"
                type="password"
                placeholder="비밀번호를 확인해주세요"
                value={userPasswordCheck}
                onChange={handleUserPasswordCheck}
            />
            <p className="border-solid border-black border-2 w-64 h-7 text-red-600">
                {userPassword && userPasswordCheck
                    ? isPasswordsEqual
                        ? "비밀번호가 일치합니다!"
                        : "비밀번호가 일치하지 않습니다!"
                    : ""}
            </p>
            <input
                className="border-solid border-black border-2 w-64"
                type="text"
                placeholder="닉네임을 입력해주세요"
                value={userNickname}
                onChange={handleUserNickname}
            />
            <p className="border-solid border-black border-2 w-64 h-7"></p>
            <button type="form" disabled={!isReadyToRegister} className="border-solid border-black border-2 w-40 h-7">
                회원가입
            </button>
        </form>
    );
};

export default Signup;
