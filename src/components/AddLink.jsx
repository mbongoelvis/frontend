import React, { useState } from "react";
import {
  FaEquals,
  FaLink
} from "react-icons/fa";

export const AddLink = ({ delteLink }) => {
  // social selected
  const [social, setSocial] = useState("GitHub");

  console.log(social);
  return (
    <div className="mt-5 w-full p-4 bg-gray-100 rounded-lg">
      <div className="flex justify-between">
        <p className="flex items-center gap-1 opacity-[.6]">
          <FaEquals />
          <span className="text-lg">Link</span>
        </p>
        <button className="text-gray-600" onClick={delteLink}>
          Remove
        </button>
      </div>
      <form className="mt-6">
        <div>
          <labe className="text-sm text-gray-500">Platform</labe>
          <select
            className="w-full text-gray-500 px-4 py-3 cursor-pointer mt-2 bg-transparent border border-gray-300 rounded-lg"
            onChange={(e) => setSocial(e.target.value)}
          >
            <option value="Github" className="flex">
              Github
            </option>
            <option value="youtube">Youtube</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="youtube">Gmail</option>
            <option value="youtube">Tiktok</option>
          </select>
        </div>
        <div className="mt-6 flex flex-col">
          <labe className="text-sm text-gray-500">Platform</labe>
          <div className="mt-2 px-4 rounded-lg py-3 bg-transparent border flex gap-3 items-center border-gray-300">
            <FaLink className="opacity-[.5]" />
            <input
              type="text"
              placeholder="https://example.com/"
              className="h-full w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="w-full mt-12 flex">
          <button className="py-2 px-4 ml-auto hover:opacity-70 bg-blue-500 rounded-md text-white">
            Save Link
          </button>
        </div>
      </form>
    </div>
  );
};
