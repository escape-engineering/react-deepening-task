import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../apis/authApi";
import { useLogin } from "../zustand/useAuthStore";

const Login = () => {
    const navigate = useNavigate();
    const [userId, handleUserId] = useInput("");
    const [userPassword, handleUserPassword] = useInput("");

    const isReadyToLogin = userId && userPassword;

    const saveUserInfo = useLogin();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await handleLogin({ id: userId, password: userPassword });
            console.log("data :>> ", data);
            if (data.success) {
                alert("로그인 성공!");
                saveUserInfo(data);
                localStorage.setItem("accessToken", data.accessToken);
                navigate("/");
            }
        } catch (error) {
            if (error.status === 401) alert("아이디나 비밀번호가 올바르지 않습니다!");
        }
    };

    return (
        <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleOnSubmit}>
            <input
                className="border-solid border-gray-300 border-2 w-96 h-16 rounded-3xl indent-5"
                type="text"
                placeholder="아이디를 입력해주세요"
                value={userId}
                onChange={handleUserId}
            />
            <input
                className="border-solid border-gray-300 border-2 w-96 h-16 rounded-3xl indent-5"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={userPassword}
                onChange={handleUserPassword}
            />
            <button
                type="form"
                disabled={!isReadyToLogin}
                className={`border-${
                    isReadyToLogin ? "solid" : "dashed"
                } border-gray-400 border-2 rounded-xl w-40 h-7 ${isReadyToLogin ? "hover:bg-gray-300" : ""}`}
            >
                로그인
            </button>
        </form>
    );
};

export default Login;
