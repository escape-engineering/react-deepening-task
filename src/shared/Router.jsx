import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Test from "../pages/Test";
import TestResult from "../pages/TestResult";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/testresult" element={<TestResult />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
