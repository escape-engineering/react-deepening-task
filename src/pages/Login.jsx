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
            console.log("error :>> ", error);
            // alert(error.response.data.message);
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
            <button type="form" disabled={!isReadyToLogin} className="border-solid border-black border-2 w-40 h-7">
                로그인
            </button>
        </form>
    );
};

export default Login;
