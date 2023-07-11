import { create } from "zustand";

const store = (set: any) => ({
  bears: 2,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
});

export const useStore = create(store);
