import React from 'react'
import {FaGithub} from "react-icons/fa"

export const LoginWithGithub = ({github}) => {
  return (
    <div className='flex btns items-center gap-2 bg-black text-white justify-center py-2 rounded cursor-pointer hover:bg-transparent hover:text-black border border-black transition ease-in-out'>
      <FaGithub />
          <p>{github}</p>
    </div>
  );
}
