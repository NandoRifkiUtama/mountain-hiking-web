import React from 'react'
import mountain1 from '../assets/mountain1.jpg'
import mountain2 from '../assets/mountain2.jpg'
import mountain3 from '../assets/mountain3.jpg'
import mountain4 from '../assets/mountain4.jpg'
import mountain5 from '../assets/mountain5.jpg'
import Typed from 'react-typed'

const Mountain = () => {
  return (
    <div className='max-w-[1250px] mx-auto px-4 py-12'>
      <h1 className='text-center font-bold text-2xl sm:text-4xl'>The Best Mountain</h1>
      <div className='text-center text-md mt-2 text-gray-500 font-bold'>
        <Typed
        strings={['Immerse in Wonder', 'The Whole Mountains Await', 'Time for an Adventure']} typeSpeed={40}
        backSpeed={50}
        loop />
      </div>
      <div className='w-full grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-4 mx-auto'>
        <img className='w-full h-full object-cover sm:col-span-2 lg:row-span-2 lg:col-span-3 rounded-xl hover:scale-105' src={mountain1} alt="/" />
        <img className='w-full h-full object-cover rounded-xl hover:scale-105' src={mountain2} alt="/" />
        <img className='w-full h-full object-cover rounded-xl hover:scale-105' src={mountain3} alt="/" />
        <img className='w-full h-full object-cover rounded-xl hover:scale-105' src={mountain4} alt="/" />
        <img className='w-full h-full object-cover rounded-xl hover:scale-105' src={mountain5} alt="/" />
      </div>
    </div>
  )
}

export default Mountain