import { Navigate, Outlet } from "react-router-dom";
import { useIsLoggedin } from "../zustand/useAuthStore";

const AuthRoute = () => {
    const isLogin = useIsLoggedin();
    if (isLogin) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default AuthRoute;
