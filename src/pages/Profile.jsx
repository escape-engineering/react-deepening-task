import React, { useEffect } from "react";
import { getUserData } from "../apis/authApi";
import { useLogin } from "../zustand/useAuthStore";

const Profile = () => {
    const setUserState = useLogin();

    const getData = async () => {
        const data = await getUserData();
        setUserState(data);
        console.log("data :>> ", data);
    };

    useEffect(() => {
        getData();
    }, []);
    return <div>Profile</div>;
};

export default Profile;
