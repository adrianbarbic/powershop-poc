import { create } from "zustand";

const store = (set: any) => ({
  number: 2,
  location: "VIC",
  increment: () => set((state: any) => ({ number: state.number + 1 })),
  reset: () => set({ number: 0 }),
  setLocation: (location: string) => set({ location }),
});

export const useStore = create(store);
