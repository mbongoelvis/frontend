import React from 'react'

export const OtherLoginOptions = ({manually}) => {
  return (
      <div className='mt-8 movein w-full h-[1px] bg-gray-300 relative'>
          <p className='px-1 bg-white absolute left-[34%] text-gray-500 -top-3'>{manually}</p>
    </div>
  )
}
