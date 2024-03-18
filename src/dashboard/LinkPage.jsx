import React from 'react'
import { FaArrowRight, FaLink } from "react-icons/fa";
import { AddLink } from '../components/AddLink';
import { useState } from 'react';
import { Phone } from '../components/Phone';

export const LinkPage = () => {
    const [isOpen, setIsOpen] = useState("false")
    // add the link adder component when the button is clicked
    const [isclicked, setIsClicked] = useState("true")

  return (
    <div className="w-full min-h-[80vh] flex gap-5 mt-5 relative ">
      {/* phnone side */}
      <div
        className={
          isOpen
            ? "bg-white z-40 absolute lg:static w-[96%] flex items-center justify-center md:w-[70%] duration-700 ease-in-out top-0 -left-[0] md:-left-[0] min-h-[90%] lg:min-h-full lg:w-[40%] rounded-xl"
            : "bg-white z-40 absolute lg:static w-[96%] md:w-[70%] duration-700 ease-in-out top-0 -left-[94%] md:-left-[71%] min-h-[90%] lg:min-h-full lg:w-[40%] flex items-center justify-center rounded-xl"
        }
      >
        {/* toggle menu */}
        <div
          className="w-[35px] absolute flex items-center justify-center lg:hidden h-[35px] cursor-pointer rounded-[500px] bg-blue-500 -right-4 top-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <FaArrowRight className="text-white rotate-0 duration-500 ease-in-out" />
          ) : (
            <FaArrowRight className="text-white rotate-180 duration-500 ease-in-out" />
          )}
        </div>

        {/* phone section */}
        <Phone />
      </div>
      {/* link section */}
      <div className="min-h-12 w-full lg:w-[60%] rounded-xl overflow-hidden">
        <div className="bg-white w-full px-2 md:px-12 py-5 rounded-xl">
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
    </div>
  );
}
