import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
    persist(
        (set) => ({
            userInfo: {
                accessToken: null,
                avatar: null,
                nickname: null,
                userId: null,
            },
            isLogin: false,
            login: (userObj) =>
                set(() => ({
                    userInfo: {
                        accessToken: userObj.accessToken,
                        avatar: userObj.avatar,
                        nickname: userObj.nickname,
                        userId: userObj.userId,
                    },
                    isLogin: true,
                })),
            logout: () =>
                set(() => ({
                    userInfo: {
                        accessToken: null,
                        avatar: null,
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
                        avatar: userObj.avatar,
                        nickname: userObj.nickname,
                        userId: userObj.userId,
                    },
                })),
        }),
        {
            name: "user-storage", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);

export const useIsLogin = () => useAuthStore((state) => state.isLogin);
export const useUserInfo = () => useAuthStore((state) => state.userInfo);
export const useLogin = () => useAuthStore((state) => state.login);
export const useLogout = () => useAuthStore((state) => state.logout);
export const useUpdateUserInfo = () => useAuthStore((state) => state.updateUserInfo);
