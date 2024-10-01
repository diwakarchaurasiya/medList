import React from 'react'
import {assets} from './../../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='flex gap-20 my-10 flex-wrap text-sm justify-between'>
      <div className="col-1 md:w-1/3">
      <div className="logo mb-4">
          <Link to='/' onClick={()=>scrollTo(0,0)} className='  flex items-center' ><img src={assets.logo} alt="logo" className='w-16' /><span className='text-3xl font-bold text-primary'>MedList</span></Link>
        </div>
        <p className='w-full  leading-6 text-[gray]  '>Book appointments with 100+ trusted doctors across various specialties, including General Physicians, Gynecologists, Dermatologists, and more. Browse top doctors, check fees, and schedule appointments hassle-free. Create an account to get started!</p>
      </div>
      <div className="col-2">
        <h2 className='text-xl font-medium mb-4'>COMPANY</h2>
        <ul className='  text-[gray] text-md'>
          <li className='mb-2'>
            <Link to='/' onClick={()=>scrollTo(0,0)}>Home</Link>
          </li>
            <li className='mb-2' ><Link to='/about'   onClick={()=>scrollTo(0,0)}>About</Link></li>
            <li className='mb-2'><Link to='/contact'  onClick={()=>scrollTo(0,0)}>contact</Link></li>
            <li className='mb-2'><Link to='/address'  onClick={()=>scrollTo(0,0)}>Address</Link></li>
          
        </ul>
</div>
      <div className="col-2  text-[gray] ">
        <h2 className='text-xl font-medium mb-4 text-black'>GET IN TOUCH</h2>
        <span className='py-8'><a href="tel:1234567890">1234567890</a></span>
        <br />
       <span> <a href="mailto:diwakarbmj1212@gmail.com">diwakarbmj1212@gmail.com </a></span>
      </div>
      </div>
      <hr className='w-full h-px bg-[#ececec] outline-none border-none' />
      <div className="copyRight text-center my-8">
      made with ❤️ by <a href="https://www.linkedin.com/in/diwakar-chaurasiya/" target='_blank' className='text-primary'>Diwakar Chaurasiya </a>
       - All Rights Reserved.
      </div>
    </>
  )
}

export default Footer
