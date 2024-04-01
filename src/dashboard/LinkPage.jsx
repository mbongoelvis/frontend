import React from "react";
import { FaLink } from "react-icons/fa";
import { AddLink } from "../components/AddLink";
import { useState } from "react";

export const LinkPage = () => {
     // add the link adder component when the button is clicked
    const [isclicked, setIsClicked] = useState("true");
  return (
    <div className="w-full lg:w-[60%]">
      {/* link section */}
      <div className="bg-white ease-in-out duration-[.5s] rounded-xl w-full px-2 md:px-12 py-5">
        <h1 className="mt-8 text-[6vw] md:text-[2.5rem] font-bold opacity-[.8]">
          Customize your links
        </h1>
        <p className="text-gray-500 mt-2">
          Add/edit/remove links from the mobile phone at the right, then share
          to the world
        </p>

        {/* add a link buton */}
        <button
          className="mt-6 flex items-center justify-center gap-2 w-full h-12 border rounded-lg text-blue-700 hover:bg-blue-500 hover:text-white border-blue-500 duration-200"
          onClick={() => setIsClicked(!isclicked)}
        >
          <FaLink />
          Add a link
        </button>
        {!isclicked ? (
          <AddLink delteLink={() => setIsClicked(!isclicked)} />
        ) : (
          ``
        )}
      </div>
    </div>
  );
};
