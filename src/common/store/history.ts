import { create } from "zustand";
import { persist } from "zustand/middleware";

type HistoryStore = {
  history: string[];
  addHistory: (item: string) => void;
  removeHistory: (item: string) => void;
  clearHistory: () => void;
};
export const useHistoryStore = create(
  persist<HistoryStore>(
    (set, get) => ({
      history: [],
      addHistory: (item) => {
        if (get().history.includes(item) || !item.trim()) return;
        set({ history: [...get().history, item] });
      },
      removeHistory: (item) => {
        set({ history: get().history.filter((elem) => elem !== item) });
      },
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: "history",
    }
  )
);
