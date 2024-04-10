import React from 'react'
import { Phone } from '../components/Phone'
import { PreviewPhone } from '../components/PreviewPhone'

export const Preview = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='w-full h-[10rem] bg-blue-500'></div>
      <div className='flex items-center justify-center w-full h-full'>
        <PreviewPhone />
      </div>
    </div>
  )
}
