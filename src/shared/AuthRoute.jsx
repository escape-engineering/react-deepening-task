import { Navigate, Outlet } from "react-router-dom";
import { useIsLogin } from "../zustand/useAuthStore";

const AuthRoute = () => {
    const isLogin = useIsLogin();
    if (isLogin) {
        alert("이미 로그인 되어있습니다. 메인으로 이동합니다. 🥺");
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default AuthRoute;
