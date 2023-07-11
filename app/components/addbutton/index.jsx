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
        className="m-2 rounded-md bg-powershop-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-powershop-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add
      </button>
      <button
        onClick={items.removeAllBears}
        className="rounded-md bg-powershop-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-powershop-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Clear
      </button>
    </>
  );
};
