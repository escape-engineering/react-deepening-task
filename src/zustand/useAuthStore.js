import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            userInfo: {
                avatar: "",
                nickname: null,
                userId: null,
            },
            login: (userObj) =>
                set(() => ({
                    userInfo: {
                        avatar: userObj.avatar ? userObj.avatar : "",
                        nickname: userObj.nickname,
                        userId: userObj.userId,
                    },
                })),
            logout: () =>
                set(() => ({
                    userInfo: {
                        avatar: "",
                        nickname: null,
                        userId: null,
                    },
                })),
            updateUserInfo: (userObj) =>
                set((state) => ({
                    ...state,
                    userInfo: {
                        ...state.userInfo,
                        avatar: userObj.avatar ? userObj.avatar : "",
                        nickname: userObj.nickname,
                    },
                })),
        }),
        {
            name: "user-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export const useUserInfo = () => useAuthStore((state) => state.userInfo);
export const useLogin = () => useAuthStore((state) => state.login);
export const useLogout = () => useAuthStore((state) => state.logout);
export const useUpdateUserInfo = () => useAuthStore((state) => state.updateUserInfo);
export const useIsLoggedin = () => {
    const currentUserInfo = useAuthStore((state) => state.userInfo);
    return !!currentUserInfo.userId;
};
