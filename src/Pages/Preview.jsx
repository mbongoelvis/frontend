import React, { useEffect, useState } from 'react'
import { ProfilePictureAndEmail } from '../components/ProfilePictureAndEmail';
import { IndividualLink } from '../components/IndividualLink';
import { FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

export const Preview = () => {
  // state to hold the picture
  const [picture, setPicture] = useState("")
  // state for both email and username
  const [info, setInfo] = useState({
    "email": "",
    "name": ""
  });
  // state for links
  const [link, setLink] = useState("");

  const { userId } = useParams()
  // fetching the data related to that particular id
  const fetching = async () => {
    try {
      const data = await fetch(
        `http://localhost:5000/${userId}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const responds = await data.json()
      // displaying the data
      setInfo(responds.users.email, responds.users.username);
      console.log(info);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetching()
  }, [])
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full h-[10rem] bg-blue-500"></div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-[320px] -mt-[4.5rem] bg-white h-[40rem] p-2 border-gray-400 border-[.12rem] rounded-[3rem]">
          <div className="w-full flex items-center flex-col pt-8 px-5 h-full pb-5 border-gray-400 border-[.12rem] rounded-[2.5rem]">
            <ProfilePictureAndEmail
              email={info.email}
              name={"example name"}
            />
            <div className="w-full scroll max-h-full mt-[5rem] md:mt-8 gap-3 flex flex-col overflow-scroll">
              <IndividualLink
                icons={<FaGithub />}
                linkname={"Github"}
                url={"www.google.com"}
              />
              <IndividualLink
                icons={<FaGithub />}
                linkname={"Github"}
                url={"www.google.com"}
              />
              <IndividualLink
                icons={<FaGithub />}
                linkname={"Github"}
                url={"www.google.com"}
              />
              <IndividualLink
                icons={<FaGithub />}
                linkname={"Github"}
                url={"www.google.com"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
