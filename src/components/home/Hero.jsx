import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='flex flex-wrap justify-center md:justify-between  items-center m-auto my-10 bg-primary text-white rounded-lg'>
        <div className='left md:w-1/2 md:px-20 p-10 w-full '>
              <h1 className='md:text-4xl text-3xl font-bold text-center md:text-left' >
                  Book Appointment With Trusted Doctors</h1>
              <div className='flex items-center py-4'><span><img src={assets.group_profiles}  className="w-52 px-4"alt="" /></span>
                <p className='text-xs md:text-sm'>Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.</p>
              </div>
        <Link to='/doctors/all'>
        <button className="rounded-md bg-white  p-4 border border-transparent text-center text-sm text-primary transition-all shadow-md hover:shadow-lg  flex items-center m-auto md:m-0" type="button">
                Book Appointment<span className='px-2'><img src={assets.arrow_icon} alt="" /></span>
                </button>
        </Link>
          </div>
          <div className='right p-0 md:w-1/2'>
              <img src={assets.header_img} className=' bottom-0' alt="" />
        </div>
    </div>
  )
}

export default Hero
