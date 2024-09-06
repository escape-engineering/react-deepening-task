import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useIsLogin, useLogout } from "../zustand/useAuthStore";

const Layout = ({ children }) => {
    const navigate = useNavigate();

    const isLogin = useIsLogin();
    const setLogout = useLogout();

    const handleLogout = () => {
        setLogout();
        localStorage.removeItem("accessToken");
        alert("로그아웃되었습니다! 홈페이지로 이동합니다.");
        navigate("/");
    };
    useEffect(() => {}, []);
    return (
        <div>
            <header className="border-solid border-red-400 border-2">
                <nav className="flex justify-between">
                    <Link className="border-solid border-black border-2" to="/">
                        홈
                    </Link>
                    <div className="flex gap-2">
                        {isLogin ? (
                            <>
                                <button onClick={handleLogout}>로그아웃</button>
                                <Link className="border-solid border-black border-2" to="/profile">
                                    마이페이지
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link className="border-solid border-black border-2" to="/login">
                                    로그인
                                </Link>
                                <Link className="border-solid border-black border-2" to="/signup">
                                    회원가입
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>
            <main className="container mx-auto pt-10 main">{children}</main>
        </div>
    );
};

export default Layout;
