import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Test from "../pages/Test";
import TestResult from "../pages/TestResult";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<AuthRoute />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/test/:testid" element={<Test />} />
                        <Route path="/testresult/:testid" element={<TestResult />} />
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
