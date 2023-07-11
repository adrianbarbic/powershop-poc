"use client";

import { useStore } from "../../../store";

export const Addbutton = () => {
  const items = useStore((state) => state);
  console.log("items", items);
  return (
    <>
      {items.bears}
      <button
        onClick={items.increasePopulation}
        className="py-2 px-4 rounded bg-red-200"
      >
        Add
      </button>
      <button
        onClick={items.removeAllBears}
        className="py-2 px-4 rounded bg-red-200"
      >
        Clear
      </button>
    </>
  );
};
