import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center gap-5 flex-col bg-black">
      {/* <p className="text-white font-bold text-[50rem]">404</p> */}
      <p className="text-gray-500">
        Page not found go <Link className='text-white hover:underline' to="/">back to Login</Link>{" "}
      </p>
    </div>
  );
}
