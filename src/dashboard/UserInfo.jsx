import React from 'react'
import { FaImage } from 'react-icons/fa';

export const UserInfo = () => { 
  return (
    <div className="bg-white rounded-xl px-8 w-full lg:w-[60%] pt-8">
      <h1 className="font-bold text-3xl opacity-[.8]">Profile Details</h1>
      <p className="mt-2 text-gray-500">
        Add your detail to create a personal touch to your profile
      </p>
      {/* profile picture */}
      <div className="w-full min-h-12 bg-gray-50 py-5 mt-5 rounded-xl px-3 flex items-center justify-between">
        <p className="text-gray-500">Profile picture</p>
        <div className="h-[200px] w-[200px] rounded-xl border-2 bg-gray-300 border-blue-500 border-dotted overflow-hidden flex items-center justify-center relative group">
          <label htmlFor="file">
            <div className="hidden group-hover:flex justify-center flex-col ease-in-out duration-[.5s] bg-opacity-[.6] items-center z-10 w-full h-full absolute cursor-pointer bg-black text-white inset-0">
              <FaImage className="w-[3rem] h-[3rem]" />
              Upload Image
            </div>
          </label>
          <input
            id="file"
            type="file"
            className="hidden"
            onChange={(e) => console.log(console.log(e.target.files[0]))}
          />
          <img
            src=""
            className="object-cover absolute inset-0"
          />
        </div>
        <p className="text-gray-500 hidden md:flex">
          Image must be below 1024x1024. <br /> Use PNG, JPG or BMP format
        </p>
      </div>
      {/* user info */}
      <form className="w-full min-h-12 bg-gray-50 py-5 mt-5 rounded-xl px-3">
        <div className="flex justify-between items-center mb-4">
          <label className="text-gray-500">First Name*</label>
          <input
            required
            className="w-[60%] h-10 rounded-lg pl-3 outline-none border-[2px] border-violet-400"
            type="text"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <label className="text-gray-500">Last Name*</label>
          <input
            required
            className="w-[60%] h-10 rounded-lg pl-3 outline-none border-[2px] border-violet-400"
            type="text"
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-gray-500">Email</label>
          <input
            required
            className="w-[60%] h-10 rounded-lg pl-3 outline-none border-[2px] border-violet-400"
            type="text"
          />
        </div>
        <div className="w-full mt-12 flex">
          <button className="py-2 px-4 ml-auto hover:opacity-70 bg-blue-500 rounded-md text-white">
            Save Info
          </button>
        </div>
      </form>
    </div>
  );
}
