import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <h1 className='text-4xl text-center font-bold my-8'>About Us</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start ">
        {/* Profile Picture */}
        <div className="md:w-1/3 flex justify-center">
          <img
            className="rounded-lg w-48 h-48 md:w-60 md:h-80 object-cover bg-primary"
            src={assets.about_image}
            alt={assets.about_image}
          />
        </div>

        {/* Doctor Information */}
        <div className="md:w-2/3 md:ml-8 text-center md:text-left mt-4 md:mt-0">
            <h1 className="font-bold flex items-center justify-center md:justify-start my-2 ">What We Believe</h1>
            <span className="text-lg text-blue-600 mt-2"><p className='text-sm  text-[gray]'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records. <br />
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
            <h1 className='font-bold flex items-center justify-center md:justify-start my-2 '>Our Vision</h1>
            <p className='text-sm  text-[gray]'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </span>
        </div>
      </div>
      <div className='chooseUsSection my-10'>
      <h1 className='text-lg font-bold my-4 text-center md:text-left'><span className='font-medium text-[gray] '>WHY</span> CHOOSE US</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="border p-6 text-center shadow-lg rounded-md  hover:bg-primary hover:text-white duration-300">
          <h3 className="text-lg font-bold mb-2">EFFICIENCY:</h3>
          <p className=' hover:text-white'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className="border p-6 text-center shadow-lg rounded-md  hover:bg-primary hover:text-white duration-300">
          <h3 className="text-lg font-bold mb-2">CONVENIENCE:</h3>
          <p className=' hover:text-white'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className="border p-6 text-center shadow-lg rounded-md hover:bg-primary  duration-300 hover:text-white">
          <h3 className="text-lg font-bold mb-2">PERSONALIZATION:</h3>
          <p className='hover:text-white'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
      </div>
      </div>
  )
}

export default About
