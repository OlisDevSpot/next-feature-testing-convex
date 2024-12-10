import { create } from "zustand";

type UserState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  favoriteColor: string;
};

type UserActions = {
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setAge: (age: number) => void;
  setFavoriteColor: (favoriteColor: string) => void;
};

export type UserStore = UserState & UserActions;

export const userStore = create<UserStore>((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  age: 0,
  favoriteColor: "",
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setAge: (age) => set({ age }),
  setFavoriteColor: (favoriteColor) => set({ favoriteColor }),
}));
