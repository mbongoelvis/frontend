import React from "react";
import { NavLink, Link} from "react-router-dom";
import { FaLink, FaUser, FaEye } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="w-full bg-white flex items-center justify-between py-3 rounded-xl px-3">
      {/* logo */}
      <Link to={"/userpage"}>
        <img
          src="desktop.png"
          className="hidden lg:block"
          width="130px"
          alt=""
        />
        <img src="mobile.png" className="lg:hidden" width="30px" alt="" />
      </Link>
      {/* links and profile details */}
      <div className="flex gap-8 items-center">
        <NavLink
          to={"linksetup"}
          className="links flex items-center gap-2 px-6 py-3"
        >
          <FaLink />
          <p className="hidden lg:block">Links</p>
        </NavLink>
        <NavLink
          to={"userinfo"}
          className="links flex gap-2 items-center"
        >
          <FaUser />
          <p className="hidden lg:block">Profile Details</p>
        </NavLink>
      </div>
      {/* preview profile */}
      <Link className="px-6 py-3 border-[2px] rounded-lg transition ease-in-out text-blue-600 border-blue-500 hover:bg-blue-500 hover:text-white">
        <FaEye className="block lg:hidden" />
        <p className="hidden lg:block">Preview</p>
      </Link>
    </div>
  );
};
