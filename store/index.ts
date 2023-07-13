import { create } from "zustand";

const store = (set: any) => ({
  number: 2,
  location: "VIC",
  random: 0,
  increment: () => set((state: any) => ({ number: state.number + 1 })),
  reset: () => set({ number: 0 }),
  setLocation: (location: string) => set({ location }),
  setRandom: (random: number) => set({ random }),
});

export const useStore = create(store);
