import React from 'react'
import { FaTrash } from 'react-icons/fa'

export const IndividualLink = ({icons, linkname, url}) => {
  return (
      <a href={url} className='flex justify-between px-3 py-2 items-center rounded-md bg-black text-white' target='_blank'>
          <div className='flex items-center gap-2'>
              {icons}
              {linkname}
          </div>  
       <FaTrash className='text-[.7rem] cursor-pointer'/>  
    </a>
  )
}
