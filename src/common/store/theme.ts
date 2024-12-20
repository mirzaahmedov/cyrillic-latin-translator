"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";
type ThemeStore = {
  theme: Theme;
  toggleTheme(): void;
  setTheme(theme: Theme): void;
};

const useThemeStore = create(
  persist<ThemeStore>(
    (set, get) => {
      return {
        theme:
          typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
        toggleTheme() {
          set({ theme: get().theme === "light" ? "dark" : "light" });
        },
        setTheme(theme) {
          set({ theme });
        },
      };
    },
    {
      name: "theme",
    }
  )
);

export { useThemeStore };
