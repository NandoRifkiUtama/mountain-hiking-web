import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-white to-sky-600 text-white flex flex-col justify-center items-center px-4 py-12 '>
        <h1 className='mt-[100px] text-xl md:text-2xl border border-white px-4 py-1 rounded-xl '>Get In Touch With Us</h1>
        <div className='m-6 md:m-8 flex justify-between items-center w-[80%] md:w-[50%] '>
            <InstagramIcon className='hover:text-black hover:scale-105 duration-300 cursor-pointer' />
            <EmailIcon className='hover:text-black hover:scale-105 duration-300 cursor-pointer' />
            <YouTubeIcon className='hover:text-black hover:scale-105 duration-300 cursor-pointer' />
            <TwitterIcon className='hover:text-black hover:scale-105 duration-300 cursor-pointer' />
            <FacebookIcon className='hover:text-black hover:scale-105 duration-300 cursor-pointer' />
        </div>
        <div className='text-sm mt-4 md:text-md'>
            <p>©Copyright by Nando, 2022</p>
        </div>
    </div>
  )
}

export default Footer;
