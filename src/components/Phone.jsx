import React, { useEffect, useState } from 'react'
import { ProfilePictureAndEmail } from './ProfilePictureAndEmail';
import { IndividualLink } from './IndividualLink';
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

export const Phone = () => {
  // usestate to hold both the name and email values
  const [email, setEmail] = useState("")
  const [name, setName] = useState("");
  const [userInfo, setUserInfo] = useState("")

  // getting the user id from the session storage to fetch their infomations
  const ID = sessionStorage.getItem("userID");

  // function to fetch the user data
  const fetchUserInfo = async () => {
    await fetch(`http://localhost:5000/user/${ID}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((responds) => {
        return responds.json();
      })
      .then((data) => {
        setEmail(data.user.email);
        setName(data.user.firstName + " " + data.user.lastName);
        console.log(data.user);
      });
  };

  useEffect(() => {
    fetchUserInfo()
  }, [])
  return (
    <div className="w-[80%] md:max-w-[70%] h-[39rem] lg:max-w-[50%] p-2 border-gray-400 border-[.12rem] rounded-[3rem]">
      <div className="w-full flex items-center flex-col pt-8 px-5 h-full pb-5 border-gray-400 border-[.12rem] rounded-[2.5rem] relative">
        <ProfilePictureAndEmail email={email} name={name} />
        <div className="w-full max-h-full mt-[5rem] md:mt-8 gap-3 flex flex-col overflow-scroll">
          <IndividualLink
            icons={<FaGithub />}
            linkname={"Github"}
            url={"www.google.com"}
          />
        </div>
      </div>
    </div>
  );
}
