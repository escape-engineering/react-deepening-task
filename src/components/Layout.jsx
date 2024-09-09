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
    return (
        <div>
            <header>
                <nav className="mx-10 px-5 flex flex-row justify-between h-16 bg-gray-300 rounded-b-3xl">
                    <Link className="px-2 text-center content-center rounded-2xl hover:bg-slate-400" to="/">
                        홈
                    </Link>
                    <h1 className="text-4xl font-bold text-center content-center">MBTI 테스트</h1>
                    <div className="flex gap-2">
                        {isLogin ? (
                            <>
                                <button
                                    className="px-2 text-center content-center rounded-2xl hover:bg-slate-400"
                                    onClick={handleLogout}
                                >
                                    로그아웃
                                </button>
                                <Link
                                    className="px-2 text-center content-center rounded-2xl hover:bg-slate-400"
                                    to="/profile"
                                >
                                    마이페이지
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    className="px-2 text-center content-center rounded-2xl hover:bg-slate-400"
                                    to="/login"
                                >
                                    로그인
                                </Link>
                                <Link
                                    className="px-2 text-center content-center rounded-2xl hover:bg-slate-400"
                                    to="/signup"
                                >
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
