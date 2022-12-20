import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

  return (
    <div className='w-full mx-auto p-4 z-[100] absolute'>
        <div className='flex justify-between items-center relative'>
            <div>
                {navbar ? <h1 className='hidden'>Go Mountain</h1>: <h1 className='text-white text-2xl font-bold cursor-pointer'>Go Mountain</h1>}
            </div>
            <div className='hidden md:flex justify-between item-center text-white text-sm'>
                <p className='mr-6 hover:text-sky-500 cursor-pointer'>Home</p>
                <p className='mr-6 hover:text-sky-500 cursor-pointer'>Destinations</p>
                <p className='mr-6 hover:text-sky-500 cursor-pointer'>Travel</p>
                <p className='mr-6 hover:text-sky-500 cursor-pointer'>Views</p>
                <p className='mr-6 hover:text-sky-500 cursor-pointer'>Book</p>
            </div>
            <div className='hidden md:flex justify-between items-center'>
                <div>
                    <SearchIcon className='text-white mr-2 hover:scale-105 duration-300 cursor-pointer' />
                </div>
                <div>
                    <AccountCircleIcon className='text-white hover:scale-105 duration-300 cursor-pointer' />
                </div>
            </div>
            <div className={navbar ? 'hidden' : 'text-white md:hidden'}>
                <MenuIcon className='cursor-pointer hover:scale-105 duration-300' onClick={()=>setNavbar(!navbar)}/>
            </div>

            {/* {side Navbar} */}
            <div className={navbar ? 'fixed bg-gray-100/90 top-0 left-0 text-black w-full h-screen px-4 py-5 duration-300' : 'fixed bg-gray-100/70 top-[-100%] left-0 text-black w-full h-screen px-4 py-5 duration-500'}>
            <div className='absolute top-4 right-4 '>
                <CloseIcon className='cursor-pointer hover:scale-105 duration-500' onClick={()=>setNavbar(!navbar)} />
            </div>
                <div>
                    <h1 className='text-2xl font-bold cursor-pointer'>Go Mountain</h1>
                </div>
                <div className='flex flex-col mt-6 p-2 justify-center'>
                    <p className='mb-6 font-bold text-gray-700 border border-gray-300 px-4 py-3 hover:text-white hover:bg-sky-400 cursor-pointer rounded-full duration-300'>Home</p>
                    <p className='mb-6 font-bold text-gray-700 border border-gray-300 px-4 py-3 hover:text-white hover:bg-sky-400 cursor-pointer rounded-full duration-300'>Destinations</p>
                    <p className='mb-6 font-bold text-gray-700 border border-gray-300 px-4 py-3 hover:text-white hover:bg-sky-400 cursor-pointer rounded-full duration-300'>Travel</p>
                    <p className='mb-6 font-bold text-gray-700 border border-gray-300 px-4 py-3 hover:text-white hover:bg-sky-400 cursor-pointer rounded-full duration-300'>Views</p>
                    <p className='mb-6 font-bold text-gray-700 border border-gray-300 px-4 py-3 hover:text-white hover:bg-sky-400 cursor-pointer rounded-full duration-300'>Book</p>
                </div>
                <div className='mb-6 py-2 flex justify-center items-center hover:scale-105 duration-300'>
                    <button className='bg-sky-500 text-white w-[90%] py-1 rounded-2xl'>Account</button>
                </div>
                <div className='flex justify-between p-4 text-sky-500'>
                    <InstagramIcon className='hover:text-sky-600 cursor-pointer hover:bg-sky-200 rounded-full'/>
                    <YouTubeIcon className='hover:text-sky-600 cursor-pointer hover:bg-sky-200 rounded-full'/>
                    <TwitterIcon className='hover:text-sky-600 cursor-pointer hover:bg-sky-200 rounded-full'/>
                    <EmailIcon className='hover:text-sky-600 cursor-pointer hover:bg-sky-200 rounded-full'/>
                    <PhoneIcon className='hover:text-sky-600 cursor-pointer hover:bg-sky-200 rounded-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar