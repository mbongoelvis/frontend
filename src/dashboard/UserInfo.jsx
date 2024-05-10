import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { UserSkeleton } from "../../skeletons/UserSkeleton";

export const UserInfo = () => {
  // State to manage the selected image file
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file input change
  const handleImageChange = (event) => {
    const newImage = event.target.files[0];

    // Check if a file is selected and it's an image
    if (newImage && newImage.type.includes("image/")) {
      setSelectedImage(newImage);
    } else {
      alert("Please select an image file.");
    }
  };

  // Function to create a temporary image URL (preview)
  const getImageUrl = () => {
    if (selectedImage) {
      return URL.createObjectURL(selectedImage);
    }
    return null; // Return null for no image
  };

  return (
    <div className="bg-white rounded-xl lg:px-8 w-full lg:w-[60%] pt-8">
      {/* ... other parts of your component ... */}
      {/* Profile picture */}
      <div className="w-full min-h-12 bg-gray-50 py-5 mt-5 rounded-xl px-3 flex items-center justify-between">
        <p className="text-gray-500">Profile picture</p>
        <div className="h-[200px] w-[200px] rounded-xl border-2 border-blue-500 border-dotted overflow-hidden flex items-center justify-center relative group bg-center bg-cover bg-no-repeat">
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
            onChange={handleImageChange}
          />
          {selectedImage ? (
            <img
              src={getImageUrl()}
              className="object-cover w-full h-full z-[1]"
            />
          ) : (
            <UserSkeleton />
          )}
        </div>
        <p className="text-gray-500 hidden md:flex">
          Image must be below 1024x1024. <br /> Use PNG, JPG or BMP format
        </p>
      </div>
      {/* ... form component ... */}
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
};
