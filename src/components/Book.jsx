import React from 'react'
import mountain from '../gunung.js'
import HikingIcon from '@mui/icons-material/Hiking'
import Diversity3Icon from '@mui/icons-material/Diversity3'

const Book = () => {
  return (
    <div className='max-w-[1250px] mx-auto px-4 py-12 flex flex-cols justify-center item-center'>
    <div className='grid md:grid-cols-2'>
    <div className='flex flex-col text-center md:text-left'>
            <h1 className='text-2xl font-bold text-gray-700 md:text-4xl'>Create Your Own Adventure</h1>
            <p className='text-md mt-2 md:mt-4 '>Hiking is walking in nature as a recreational activity. Especially among those with sedentary occupations, hiking is a natural exercise that promotes physical fitness, is economical and convenient, and requires no special equipment. Because hikers can walk as far as they want, there is no physical strain unless they walk among hills or mountains.</p>
            <div className='flex items-center justify-center md:justify-start mt-4'>
                <div className='flex justify-center item-center mr-8'>
                    <HikingIcon className='p-2 bg-sky-500 text-white rounded-xl cursor-pointer hover:scale-105 duration-300' sx={{fontSize: 50}}/>
                    <p className='p-2 font-bold text-gray-600'>Tips and Trick</p>
                </div>
                <div className='flex justify-center item-center'>
                    <Diversity3Icon className='p-2 bg-sky-500 text-white rounded-xl cursor-pointer hover:scale-105 duration-300' sx={{fontSize: 50}}  />
                    <p className='p-2 font-bold text-gray-600'>Hiking Requirements</p>
                </div>
            </div>
    </div>
        
        <div className='flex flex-col mt-8 justify-center item-center'>
            <div className='text-center p-3 border border-gray-800 rounded-t-xl'>
                <h1 className='font-bold text-lg md:text-xl '>Get An Additional 15% Off</h1>
                <p className='py-2 bg-gray-700 rounded-full text-white mt-4'>Set Your Schedule</p>
            </div>
            <form className='flex flex-col border border-gray-800 rounded-b-xl p-3' action="">
                <div className='flex flex-col font-bold text-gray-800 my-2'>
                    <label htmlFor="">Destination</label>
                    <select className='border border-gray-400 rounded-lg px-2 py-1 cursor-pointer' name="" id="">
                        {mountain.map((item, index)=>(
                            <option>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col font-bold text-gray-800 my-2'>
                    <label htmlFor="">Check In</label>
                    <input className='border border-gray-400 py-1 px-2 rounded-lg cursor-pointer' type="date" />
                </div>
                <div className='flex flex-col font-bold text-gray-800 my-2'>
                    <label htmlFor="">Check Out</label>
                    <input className='border border-gray-400 py-1 px-2 rounded-lg cursor-pointer' type="date" />
                </div>
                <div className='my-2 flex justify-center item-center'>
                    <button className='py-1 px-2 bg-sky-500 text-white rounded-full w-[50%] hover:scale-105'>Book Now</button>
                </div>
            </form>    
        </div>
    </div>
        
    </div>
  )
}

export default Book