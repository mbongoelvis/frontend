import React from "react";
import { LoginWithGoogle } from "../components/LoginWithGoogle";
import { LoginWithGithub } from "../components/LoginWithGithub";
import { OtherLoginOptions } from "../components/OtherLoginOptions";
import { LoginForm } from "../components/LoginForm";


export const Signup = () => {
  return (
    <div className="w-full overflow-hidden flex h-screen">
      <div className="w-full md:w-[50%] lg:w-[40%] h-[80%] lg:h-full flex items-center justify-center relative lg:overflow-hidden">
        <div className="w-[95%] lg:w-[80%] xl:w-[60%] h-[80%]">
          <div className="logo w-[7.5rem] cursor-pointer">
            <img src="desktop.png" alt="logo" className="object-contain" />
          </div>
          {/* welcome text */}
          <h2 className="text-3xl font-bold text-gray-700 mt-10 welcome-text">
            Welcome to <span className="text-blue-600 font-bold">ShareIT</span>
          </h2>
          <p className="text-md info-text mt-3 opacity-[.7] text-[15px] lg:text-md">
            Here you have the ability share your socials with your <br></br>
            friends in on click
          </p>

          {/* login with google or github */}
          <div className="w-full grid grid-cols-2 mt-8 gap-2 md:gap-8">
            <LoginWithGoogle google={"SignUpWithGoogle"} />
            <LoginWithGithub github={"SignUpWithGithub"} />
          </div>

          {/* other login options */}
          <OtherLoginOptions manually={"Or SignUp Manually"} />

          {/* login form */}
          <LoginForm btn={"SignUp Now"} linkto={"/"} option={"LogIn"} whatToDo={"signup"} />
        </div>

        {/* gradients */}
        <div className="first-gradient w-[400px] h-[400px] rounded-[500px] bg-blue-300 absolute -right-[6rem] -top-11 hidden lg:block"></div>
      </div>
      <div className="w-[60%] hidden lg:block h-full bg-gray-600"></div>
    </div>
  );
};
