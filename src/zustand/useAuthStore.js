import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
    persist(
        (set) => ({
            userInfo: {
                avatar: "",
                nickname: null,
                userId: null,
            },
            isLogin: false,
            login: (userObj) =>
                set(() => ({
                    userInfo: {
                        avatar: userObj.avatar ? userObj.avatar : "",
                        nickname: userObj.nickname,
                        userId: userObj.userId,
                    },
                    isLogin: true,
                })),
            logout: () =>
                set(() => ({
                    userInfo: {
                        avatar: "",
                        nickname: null,
                        userId: null,
                    },
                    isLogin: false,
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

export const useIsLogin = () => useAuthStore((state) => state.isLogin);
export const useUserInfo = () => useAuthStore((state) => state.userInfo);
export const useLogin = () => useAuthStore((state) => state.login);
export const useLogout = () => useAuthStore((state) => state.logout);
export const useUpdateUserInfo = () => useAuthStore((state) => state.updateUserInfo);
