"use client";

import { useStore } from "../../../store";

export const Addbutton = () => {
  const items = useStore((state) => state);
  return (
    <>
      {items.number}
      <button
        onClick={items.increment}
        className="m-2 rounded-md bg-powershop-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-powershop-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add
      </button>
      <button
        onClick={items.reset}
        className="rounded-md bg-powershop-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-powershop-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Clear
      </button>
      <div className="w-40">
        {/* <label
          htmlFor="location"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Location
        </label> */}
        <select
          id="location"
          name="location"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={items.location}
          onChange={(e) => items.setLocation(e.target.value)}
        >
          <option value="VIC">VIC</option>
          <option value="NSW">NSW</option>
          <option value="SA">SA</option>
          <option value="QLD">QLD</option>
        </select>
        You are in: {items.location}
      </div>
    </>
  );
};
