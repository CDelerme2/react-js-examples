import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  login: () =>
    set({
      user: {
        name: "Carlos Delerme",
        email: "c.delerme@outlook.com",
      },
    }),
  logout: () => set({ user: null }),
}));
