import { useNavigate } from "react-router-dom";
import { handleSignup } from "../apis/authApi";

const useSignupPage = () => {
    const navigate = useNavigate();
    const isStringLengthOverFour = (str) => {
        return str.length >= 4;
    };

    const handleOnSubmit = async (e, userId, userPassword, userNickname) => {
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
    return {
        handleOnSubmit,
        isStringLengthOverFour,
    };
};
export default useSignupPage;
