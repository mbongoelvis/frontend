import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

export const LoginForm = ({ btn, linkto, option, whatToDo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // function to send the data to the backend
  const sendData = async () => {
    let userData = {
      email: email,
      password: password,
    };
    const finalData = JSON.stringify(userData);

    await fetch(`http://localhost:5000/user/${whatToDo}`, {
      method: "POST",
      body: finalData,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((responds) => {
        return responds.json();
      })
      .then((data) => {
        if (data.message == "ok" && whatToDo == "login") {
           window.location.href = "dashboard/linksetup";
           // storing the user ID in the session storage to be reuse
           JSON.stringify(sessionStorage.setItem("userID", data.user._id));
        }
      });
  };

  // form submission
  const submitForm = (e) => {
    e.preventDefault();
    setLoading(!false);
    sendData();
    setLoading(!loading);
  };

  return (
    <div>
      {/* login form */}
      <form onSubmit={submitForm} className="w-full mt-12">
        {/* email */}
        <div className="flex  movein flex-col">
          <label className="opacity-[.7] mb-3">Email</label>
          <input
            type="email"
            placeholder="Enter your Email..."
            className="h-[43px] text-lg outline-none border pl-2 rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* password */}
        <div className="flex movein flex-col mt-5">
          <label className="opacity-[.7] mb-3">Password</label>
          <input
            type="password"
            placeholder="Enter your Password..."
            className="h-[43px] text-lg outline-none border pl-2 rounded"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="w-full btns h-[43px] bg-black flex items-center justify-center mt-12 rounded text-white hover:opacity-[.7] transition ease-in-out">
          {loading ? <BeatLoader color="white" size={10} /> : btn}
        </button>

        {/* dont have an account? */}
        <p className="flex movein mt-4 text-gray-500">
          Don't have an account?{" "}
          <Link className="text-blue-600 ml-1 underline" to={linkto}>
            {option}
          </Link>
        </p>
      </form>
    </div>
  );
};
