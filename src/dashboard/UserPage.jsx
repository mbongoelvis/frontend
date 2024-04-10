import React from 'react'
import { Phone } from "../components/Phone";
import { FaArrowRight} from "react-icons/fa";
import { Header } from './Header'
import { useState } from 'react'
import { Outlet } from 'react-router-dom';

export const UserPage = () => {
  const [isOpen, setIsOpen] = useState("false");
  return (
    <div className="w-full px-2 md:px-0 py-5 min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <Header />
        <div className="container min-h-[80vh] flex gap-5 mt-5 relative ">
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
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
