import React from 'react';
import Video from '../assets/mountain-video.mp4';
import SearchIcon from '@mui/icons-material/Search';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-screen top-0 left-0 object-cover absolute' src={Video} autoPlay loop muted></video>
        <div className='w-full h-full bg-black/30 absolute top-0 left-0'></div>
        <div className='absolute text-white flex flex-col w-full h-screen justify-center items-center'>
          <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6'>Wonderland Indonesia</h1>
          <p className='text-xl sm:text-2xl mb-4 sm:mb-6'>Top Mountains in Indonesia</p>
          <div className='flex justify-between bg-gray-200 w-[80%] lg:w-[50%] pl-4 pr-2 py-1 rounded-xl'>
            <input className='w-full bg-transparent text-gray-800 focus:outline-none mr-2' type="text" placeholder='Search Mountain' />
            <div className='bg-sky-500 rounded-xl p-1 cursor-pointer hover:scale-105 duration-300'>
              <SearchIcon />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero