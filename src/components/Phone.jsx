import React from 'react'
import { ProfilePictureAndEmail } from './ProfilePictureAndEmail';
import { IndividualLink } from './IndividualLink';
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

export const Phone = () => {
  return (
    <div className="w-[80%] md:max-w-[70%] lg:max-w-[50%] p-2 md:h-[83%] border-gray-400 border-[.12rem] rounded-[3rem]">
      <div className="w-full flex items-center flex-col pt-8 px-5 h-full pb-5 border-gray-400 border-[.12rem] rounded-[2.5rem] relative">
        <ProfilePictureAndEmail />
        <div className="w-full max-h-full mt-[5rem] md:mt-8 gap-3 flex flex-col overflow-scroll">
          <IndividualLink
            icons={<FaGithub />}
            linkname={"Github"}
            url={"www.google.com"}
          />
          <IndividualLink
            icons={<FaGithub />}
            linkname={"Github"}
            url={"www.github.com"}
          />
          <IndividualLink
            icons={<FaYoutube />}
            linkname={"Youtube"}
            url={"www.facebook.com"}
          />
          <IndividualLink
            icons={<FaFacebook />}
            linkname={"Facebook"}
            url={"www.facebook.com"}
          />
        </div>
      </div>
    </div>
  );
}
