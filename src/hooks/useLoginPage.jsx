import { useNavigate } from "react-router-dom";
import { handleLogin } from "../apis/authApi";
import { useLogin } from "../zustand/useAuthStore";

const useLoginPage = () => {
    const navigate = useNavigate();
    const saveUserInfo = useLogin();
    const handleOnSubmit = async (e, userId, userPassword) => {
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

    return { handleOnSubmit };
};

export default useLoginPage;
