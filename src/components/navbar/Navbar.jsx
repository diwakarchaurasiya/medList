import React, { useState } from 'react'
import {assets} from './../../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div id='navbar'>
      <div className='flex direction-column  items-center justify-between text-sm  border-b border-primary'>
        <div className="logo">
          <Link to='/' className='  flex items-center' ><img src={assets.logo} alt="logo" className='w-16 py-2' /><span className='text-4xl font-bold text-primary'>MedList</span></Link>
        </div>
        <div className="links">
          <ul className='list-none hidden md:flex items-start gap-5 font-medium'>
          <li>
            <Link to='/'>Home</Link>
            <hr/>
            </li>
            <li>
            <Link to='/doctors'>ALL DOCTORS</Link>
            <hr/>
            </li>
          <li>
            <Link to='/about'>About</Link>
            <hr/>
          </li>
            <li>
            <Link to='/contact'>contact</Link>
            <hr/>
            </li>
              </ul>
            
        </div>
        <div className="user">
          {isLogin ?
            <img src={assets.profile_pic} className='w-14 rounded-full cursor-pointer hover:ring-4 hover:ring-primary transition'/>
            :
            <Link to='/sign-up'>
            <button type="button" className="outline-0  bg-primary focus:ring-4 focus:ring-green-300 font-medium rounded-md  px-5 py-2.5 ">Register</button> </Link>

          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
