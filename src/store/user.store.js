import { create } from 'zustand'

export const storeUser = create((set) => ({
  user: {},
  isAuth: false,
  login: (userData) => set(() => ({ user: userData, isAuth: true })),
  logout: () => set(() => ({ user: {}, isAuth: false }))
}))