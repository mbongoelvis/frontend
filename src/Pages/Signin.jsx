import React from 'react'
import { LoginWithGoogle } from '../components/LoginWithGoogle';
import { LoginWithGithub } from '../components/LoginWithGithub';
import { OtherLoginOptions } from '../components/OtherLoginOptions';
import { LoginForm } from '../components/LoginForm';

export const Signin = () => {
  return (
    <div className="w-full flex h-screen justify-center items-center">
      <div className="w-full md:w-[50%] lg:w-[40%] h-[80%] lg:h-full flex items-center justify-center relative lg:overflow-hidden">
        <div className="w-[95%] lg:w-[80%] xl:w-[60%] h-[80%]">
          <div className="logo w-[7.5rem] cursor-pointer">
            <img src="desktop.png" alt="logo" className="object-contain" />
          </div>
          {/* welcome text */}
          <h2 className="text-3xl welcome-text font-bold text-gray-700 mt-10">
            Welcome to <span className="text-blue-600 font-bold">ShareIT</span>
          </h2>
          <p className="text-md info-text mt-3 opacity-[.7] text-[15px] lg:text-md">
            Here you have the ability to share your socials with your <br></br>
            friends in on click
          </p>

          {/* login with google or github */}
          <div className="w-full mt-8">
            <LoginWithGoogle google={"LoginWithGoogle"} />
          </div>

          {/* other login options */}
          <OtherLoginOptions manually={"Or Login Manually"} />

          {/* login form */}
          <LoginForm btn={"Login Now"} linkto={"/signup"} option={"Sign Up"} whatToDo={"login"} />
        </div>

        {/* gradients */}
        <div className="first-gradient w-[400px] h-[400px] rounded-[500px] bg-blue-300 absolute -right-[6rem] -top-11 hidden lg:block"></div>
      </div>
      <div className="w-[60%] hidden lg:block h-full bg-gray-600"></div>
    </div>
  );
}
