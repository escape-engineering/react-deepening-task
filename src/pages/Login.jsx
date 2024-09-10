import React from "react";
import useInput from "../hooks/useInput";
import useLoginPage from "../hooks/useLoginPage";

const Login = () => {
    const [userId, handleUserId] = useInput("");
    const [userPassword, handleUserPassword] = useInput("");

    const isReadyToLogin = userId && userPassword;

    const { handleOnSubmit } = useLoginPage();

    return (
        <form
            className="flex flex-col justify-center items-center gap-5"
            onSubmit={(e) => handleOnSubmit(e, userId, userPassword)}
        >
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
