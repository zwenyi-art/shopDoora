import React from 'react'
import NewSlider from './NewSlider'
import {IoIosArrowForward} from 'react-icons/io'

const NewRelease = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center text-center'>
        <div className='tracking-wider font-bold text-2xl text-black flex gap-x-2'><h1 className='text-red-600 '>New</h1>Released</div>
        <p className='text-sm text-center max-w-xs '>Try Our Latest Flavors Here</p>
         <div className="w-full h-full p-2">
            <NewSlider></NewSlider>
         </div>
         <div className="pb-4 w-full pt-3 h-full flex items-center justify-center">
        <button className="rounded-full bg-black/10 px-10 py-1 text-center w-fit   font-bold text-black  flex items-center justify-between gap-x-4">
          View More
          <div className="hover:translate-x-1 duration-100 ">
            <IoIosArrowForward></IoIosArrowForward>
          </div>
        </button>
      </div>
    </div>
  )
}

export default NewRelease