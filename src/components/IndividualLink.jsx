import React from "react";
import { FaTrash } from "react-icons/fa";

export const IndividualLink = ({ icons, linkname, url }) => {
  const handleLinkClick = (e) => {
    e.preventDefault()
    window.location.href(url)
  };
  return (
    <div className="flex justify-between px-3 py-2 items-center rounded-md bg-black text-white">
      <a
        href={url}
        className="w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center gap-2">
          {icons}
          {linkname}
        </div>
      </a>
      <FaTrash onClick={() => handleLinkClick()} className="text-[.9rem] hover:text-red-500 ease-in-out duration-150 cursor-pointer" />
    </div>
  );
};
