import React from 'react'
import { assets, specialityData } from '../../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div className='w-full m-auto my-20 text-center'>
          <h1 className='text-4xl font-medium my-6'>Find by Speciality</h1>
          <p className=' text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
          <div className="iconsSearch flex flex-wrap justify-center items-center text-xs cursor-pointer my-10 gap-6">
              {specialityData.map((specs) => {
                  return(
                      <Link to={"/doctor/" +specs.speciality}>
                      <div className="card flex flex-col items-center hover:translate-y-[-10px] transition-all duration-500">
                      <img src={specs.image} className='w-16 sm:w-24 mb-2 ' alt="" /> 
                      <p className='text-sm'>{specs.speciality}</p>
                          </div>
                      </Link>
                  )
              })}
              
          </div>
    </div>
  )
}

export default Speciality
