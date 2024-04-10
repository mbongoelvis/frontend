import React from 'react'

export const ProfilePictureAndEmail = ({name, email}) => {
  return (
      <div className='w-full flex flex-col items-center'>
          {/* profile picture */}
      <div className='w-[6rem] flex items-center justify-center h-[6rem] rounded-[500px] overflow-hidden bg-gray-300'>
        <img src="/public/Snapchat-1497849949.jpg" alt='profile' className='w-full h-full object-cover'/>
          </div>
          {/* name */}
      <p className='text-lg py-2 font-semibold text-gray-500'>{ name}</p>
          {/* email */}
      <p className='text-gray-400'>{email}</p>
    </div>
  )
}
