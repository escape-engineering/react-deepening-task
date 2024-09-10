import { Navigate, Outlet } from "react-router-dom";
import { useIsLogin } from "../zustand/useAuthStore";

const AuthRoute = () => {
    const isLogin = useIsLogin();
    if (isLogin) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default AuthRoute;
