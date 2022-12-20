import React from 'react'
import mountain from '../gunung'

const Detail = () => {
  return (
    <div className='max-w-[1250px] mx-auto py-12 px-4'>
    <h1 className='mb-6 md:mb-10 font-bold text-center text-2xl md:text-4xl '>About The Mountains</h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-6'>
            {mountain.map((item, index)=>(
                <div className='relative rounded-2xl hover:scale-105 duration-300 cursor-pointer' key={index}>
                        <img className='rounded-2xl object-cover w-full h-full' src={item.image} alt="/" />
                        <div className='absolute top-0 left-0 w-full h-full bg-black/30 rounded-2xl'>
                            <p className='text-white absolute left-4 bottom-4 font-bold'>{item.name}</p>
                        </div>
                </div>
            ))}       
        </div>
    </div>
  )
}

export default Detail;