import { create } from "zustand";
import { persist } from "zustand/middleware";

type HistoryStore = {
  history: string[];
  addHistory: (history: string) => void;
  clearHistory: () => void;
};
export const useHistoryStore = create(
  persist<HistoryStore>(
    (set) => ({
      history: [],
      addHistory: (history) =>
        set((state) => ({ history: [...state.history, history] })),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: "history",
    }
  )
);
