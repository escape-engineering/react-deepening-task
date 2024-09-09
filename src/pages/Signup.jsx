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
    const isStringLengthOverFour = (str) => {
        return str.length >= 4 ? true : false;
    };
    const isReadyToRegister =
        userId &&
        userPassword &&
        userNickname &&
        userPasswordCheck &&
        isPasswordsEqual &&
        isStringLengthOverFour(userId) &&
        isStringLengthOverFour(userPassword);

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
        <form className="flex flex-col justify-center items-center gap-1" onSubmit={handleOnSubmit}>
            <input
                className="border-solid border-gray-300 border-2 w-96 h-16 rounded-3xl indent-5"
                type="text"
                placeholder="아이디를 입력해주세요"
                value={userId}
                onChange={handleUserId}
            />
            <p className="w-80 h-7 text-red-600">
                {userId.length ? (isStringLengthOverFour(userId) ? "" : "아이디는 4글자 이상이어야합니다!") : null}
            </p>
            <input
                className="border-solid border-gray-300 border-2 w-96 h-16 rounded-3xl indent-5"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={userPassword}
                onChange={handleUserPassword}
            />
            <p className="w-80 h-7 text-red-600">
                {userPassword
                    ? isStringLengthOverFour(userPassword)
                        ? ""
                        : "비밀번호는 4글자 이상이어야합니다!"
                    : null}
            </p>
            <input
                className="border-solid border-gray-300 border-2 w-96 h-16 rounded-3xl indent-5"
                type="password"
                placeholder="비밀번호를 확인해주세요"
                value={userPasswordCheck}
                onChange={handleUserPasswordCheck}
            />
            <p className={`w-80 h-7  ${isPasswordsEqual ? "text-green-500" : "text-red-600"}`}>
                {userPassword && userPasswordCheck
                    ? isPasswordsEqual
                        ? "비밀번호가 일치합니다!"
                        : "비밀번호가 일치하지 않습니다!"
                    : ""}
            </p>
            <input
                className="border-solid border-gray-300 border-2 w-96 h-16 rounded-3xl indent-5"
                type="text"
                placeholder="닉네임을 입력해주세요"
                value={userNickname}
                onChange={handleUserNickname}
            />
            <button
                type="form"
                disabled={!isReadyToRegister}
                className={`border-${
                    isReadyToRegister ? "solid" : "dashed"
                } border-gray-400 border-2 rounded-xl w-40 h-7 ${isReadyToRegister ? "hover:bg-gray-300" : ""}`}
            >
                회원가입
            </button>
        </form>
    );
};

export default Signup;
