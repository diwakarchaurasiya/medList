import React from 'react'
import Hero from './Hero'
import Speciality from './Speciality'
import TopDocs from './TopDocs'
import { assets } from '../../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Hero />
      <Speciality />
      <TopDocs />
      <div id="banner " className='flex flex-wrap bg-primary justify-center items-center my-16 rounded-xl '>
        <div className="left w-full md:w-1/2 text-center md:text-left p-4">
          <h1 className='text-3xl md:text-4xl font-bold text-white'>Book Appointment With 100+ Trusted Doctors
          </h1>
          <Link to='/signup' onClick={()=>scrollTo(0,0)}> 
          <button className="rounded-md bg-white py-4 px-10  border-none text-center text-md  transition-all shadow-md hover:shadow-lg mt-6 text-primary" type="button">Create Account
              </button>
          </Link>
        </div>
        <img src={assets.appointment_img}  className= "w-1/2 md:w-1/3 m-0 md:-mt-10" alt="" />
      </div>
    </div>
  )
}

export default Home
