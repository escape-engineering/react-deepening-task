import { Navigate, Outlet } from "react-router-dom";
import { useIsLoggedin } from "../zustand/useAuthStore";

const PrivateRoute = () => {
    const isLogin = useIsLoggedin();

    if (isLogin === undefined) {
        return null;
    }
    if (!isLogin) {
        alert("로그인이 필요한 페이지입니다. 로그인 해주세요. 🥺");
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

export default PrivateRoute;
